import React, {Component} from "react";
import {getOrders} from "../redux/services/shop.service";
import {connect} from "react-redux";
import {Button} from "reactstrap";
import Order from "../components/Order/Order";
import OrderItem from "../components/Order/OrderItem";
import {confirmOrder, orderCanceled, orderDelivered} from "../redux/services/auth.service";
import {Redirect} from "react-router-dom";


class OrdersPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            got: false
        }

    }

    handleOrders = () => {
        const {getOrders} = this.props;
        getOrders();


    }

    render() {
        const isAuth = localStorage.getItem('auth');
        const {orders, confirmOrder, getOrders, role, user, orderDelivered, orderCanceled, allUsers} = this.props;

        if (!(!!isAuth)) {
            return (
                <Redirect to={"/login"}/>
            )
        }


        if (!!orders && orders.length > 0) {
            return (

                <div>
                    <Button className={"myButton"} onClick={this.handleOrders}>Dohvati narudžbe</Button>

                    {orders.map((order) => <OrderItem orderCanceled={orderCanceled} orderDelivered={orderDelivered}
                                                      user={user} getOrders={getOrders} allUsers={allUsers}
                                                      order={order} key={order.id} confirmOrder={confirmOrder}
                                                      role={role}/>)}


                </div>
            )
        } else return (
            <Button className={"myButton"} onClick={this.handleOrders}>Dohvati narudžbe</Button>
        )
    }


}

const mapStateToProps = state => {
    return {
        orders: state.shop.orders,
        role: state.auth.user.roles,
        user: state.auth.user,
        allUsers: state.auth.allUsers
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders()),
        confirmOrder: (id) => dispatch(confirmOrder(id)),
        orderDelivered: (data) => dispatch(orderDelivered(data)),
        orderCanceled: (data) => dispatch(orderCanceled(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersPage)

