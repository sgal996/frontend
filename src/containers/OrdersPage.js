import React, {Component} from "react";
import {getOrders} from "../redux/services/shop.service";
import {connect} from "react-redux";
import {Button} from "reactstrap";
import Order from "../components/Order/Order";
import OrderItem from "../components/Order/OrderItem";
import {confirmOrder} from "../redux/services/auth.service";


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
        const {orders, confirmOrder, getOrders} = this.props;


            if(!!orders && orders.length>0){
            return (

                <div>
                    <Button className={"myButton"} onClick={this.handleOrders}>Dohvati narudžbe</Button>
                    
                    {orders.map((order) => <OrderItem getOrders={getOrders} order={order} key={order.id} confirmOrder={confirmOrder}/>)}



                </div>
            )}
            else return (
                <Button className={"myButton"} onClick={this.handleOrders}>Dohvati narudžbe</Button>
            )
        }


}

const mapStateToProps = state => {
    return {
        orders: state.shop.orders
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders()),
        confirmOrder: (id) => dispatch(confirmOrder(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersPage)

