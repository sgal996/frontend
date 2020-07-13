import React, {Component} from "react";
import {getOrders} from "../redux/services/shop.service";
import {connect} from "react-redux";
import {Button} from "reactstrap";
import Order from "../components/Order";
import OrderItem from "../components/OrderItem";



class OrdersPage extends Component{
    constructor(props) {
        super(props);
        this.state = {

            got:false
        }

    }
    handleOrders = () => {
        const {getOrders} = this.props;
        getOrders();
        this.setState({got: true})


    }
    render() {
        const isAuth = localStorage.getItem('auth');
        const {orders} = this.props;
        const {got} = this.state;

        if (orders!==undefined && isAuth!==null){
        return(

            <div>

                {orders.map((order) => <OrderItem order={order} key={order.id}/>)}


                <Button className={'btn-lg btn-dark btn-block'} onClick={this.handleOrders}>
                    Dohvati narudžbe
                </Button>
            </div>
        )}
        return (

            <Button className={'btn-lg btn-dark btn-block'} onClick={this.handleOrders}>
                Dohvati narudžbe
            </Button>
        )
    }
}

const mapStateToProps = state =>{
    return{
        orders: state.shop.orders
    }

}

const mapDispatchToProps = dispatch => {
    return {
        getOrders: () => dispatch(getOrders())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrdersPage)

