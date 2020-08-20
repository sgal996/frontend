import React, {Component} from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Button from "reactstrap/lib/Button";
import {qtyUp} from "../../redux/services/auth.service";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: this.props.quantity,

        }


    }

    handleQtyUp = (id) => {
        const {qtyUp, calculateTotalPrice} = this.props

        qtyUp(id);
        this.setState({quantity: this.state.quantity + 1});
        this.props.click();


    }

    handleQtyDown = (id) => {
        const {qtyDown} = this.props;
        const {quantity} = this.state;
        if (quantity > 1) {
            qtyDown(id);
            this.setState({quantity: this.state.quantity - 1})
            this.props.click();
        }
    }

    handleRemove = (id) => {
        const{remove} = this.props;
        remove(id);
        this.props.click();
    }


    render() {

        return (
            <div className={"underline"}>
                <Row xs={2} sm={1} md={6}>
                    <Col xs={3}>
                        <img className={"img-fluid"} src={"/img/" + this.props.img}></img>
                    </Col >

                    <Col xs={1}>{this.props.size}</Col>
                    <Col xs={3}>
                        <div className={"container-fluid d-flex justify-content-center"}>
                            <Button className={"d-flex justify-content-center btn-secondary2"} onClick={() => this.handleQtyDown(this.props.id)}>-</Button>
                            {this.state.quantity}
                            <Button className={"d-flex justify-content-center btn-secondary2"} onClick={() => this.handleQtyUp(this.props.id)}>+</Button>
                        </div>
                    </Col>
                    <Col xs={2}>
                        {this.props.price - (this.props.price * this.props.discount / 100)}
                    </Col>
                    <Col xs={2}>
                        {this.props.price * this.state.quantity - (this.props.price * this.props.discount / 100 * this.state.quantity)} HRK
                    </Col>
                    <Col xs={1}>
                        {this.props.name}
                    </Col>
                    <Col xs={1}>
                        <Button className={"d-flex justify-content-center btn-secondary2"} onClick={() => this.handleRemove(this.props.id)}>Ukloni</Button>
                    </Col>
                </Row>

            </div>
        )
    }
}

export default CartItem;