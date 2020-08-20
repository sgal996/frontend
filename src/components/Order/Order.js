import React,{Component} from "react";
import Product from "../Product/Product";
import {Button} from "reactstrap";
import OrderItem from "./OrderItem";

class Order extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {confirmed} = this.props.confirmed;
        if (confirmed){
        return(
            <div> {this.props.price} {this.props.products.map((product) => <OrderItem order={this.props.order} name={product.name} description={product.description} newProduct={product.newProduct} price={product.price} category={product.category} img={product.img} key={product.id}></OrderItem>)}</div>
        )}
        else
            return (
                <div>{this.props.key} {this.props.price} {this.props.products.map((product) => <OrderItem name={product.name} description={product.description} newProduct={product.newProduct} price={product.price} category={product.category} img={product.img} key={product.id}></OrderItem>)}
                <Button className={'btn-lg btn-dark btn-block'} onClick={this.handleOrders}>
                    Potvrdi narudžbu
                </Button></div>
            )

    }
}

export default Order;