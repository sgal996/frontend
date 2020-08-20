import React, {Component} from "react";
import Button from "reactstrap/lib/Button";
import {Redirect} from "react-router-dom";

class PaymentConfirmation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productDtos: this.props.items,
            price: this.props.price
        }
    }


    handleOrder = () => {
        const {order} = this.props;
        order(this.state);


    }

    render() {

        return (
            <div><Button disabled={this.props.buttonDisabled === true ? true : false} className={"myButton"} onClick={this.handleOrder}>Naruči</Button> </div>
        )
    }
}

export default PaymentConfirmation;