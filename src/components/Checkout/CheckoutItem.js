import React,{Component} from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Button from "reactstrap/lib/Button";

class   CheckoutItem extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={"underline"}>
                <Row>
                    <Col> <img className={"img-fluid"} src={"/img/" + this.props.img}></img> </Col>
                    <Col className={"margin3px"}><strong>{this.props.name}</strong></Col>
                    <Col className={"margin3px"}><strong>{this.props.size}</strong></Col>
                    <Col>{this.props.quantity} </Col>
                    <Col>{this.props.price * this.props.quantity -( this.props.price * this.props.discount/100 * this.props.quantity ) } HRK</Col>
                    <Col></Col>
                </Row>

            </div>
        )
    }
}

export default CheckoutItem;