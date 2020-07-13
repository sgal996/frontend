import React, {Component} from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

class CartItem extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <Row>
                    <Col> <img src={this.props.img}></img> </Col>
                    <Col>{this.props.name}</Col>
                    <Col>{this.props.price} HRK</Col>
                </Row>

            </div>
        )
    }
}

export default CartItem;