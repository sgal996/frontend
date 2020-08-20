import React, {Component} from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Product from "../components/Product/Product";
import {connect} from "react-redux";
import CartItem from "../components/Cart/CartItem";
import {Button} from "reactstrap";
import {authActions} from "../redux/modules/auth";
import {Link} from "react-router-dom";
import CheckoutItem from "../components/Checkout/CheckoutItem";

class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalPrice: 0
        }
        //this.calculateTotalPrice = this.calculateTotalPrice.bind(this);

    }

    componentDidMount() {
        const {items} = this.props;

        this.setState({totalPrice: items.reduce((total, item) => total + (item.price-(item.price*item.discount/100)) * item.quantity, 0)})
    }


    calculateTotalPrice = () => {
        const {items} = this.props;
        const totalPrice = items.reduce((total, item) => total + (item.price - (item.price * item.discount / 100)) * item.quantity, 0);
        this.setState({totalPrice: totalPrice})
    }

    emptyCart = () => {
        const {emptyCart} = this.props;
        emptyCart();
        this.setState({totalPrice: 0})

    }


    render() {

        const {items, emptyCart, qtyUp, qtyDown, removeFromCart} = this.props;
        const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);


        if (items !== undefined) {
            return (
                <div className={"container-fluid"}>
                    <Row  sm={6} md={12} lg={12}>
                        <Col></Col>
                        <Col>Veličina</Col>
                        <Col >Količina</Col>
                        <Col>Cijena</Col>
                        <Col>Ukupno</Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col sm={6} md={12} lg={12}>
                            {items.map((item) => <CartItem key={item.id} name={item.name} price={item.price}
                                                           discount={item.discount} img={item.img}
                                                           quantity={item.quantity} id={item.id} qtyUp={qtyUp} qtyDown={qtyDown}
                                                           remove={removeFromCart} size={item.size}
                                                           click={this.calculateTotalPrice}></CartItem>)}

                        </Col>
                    </Row>



                    <Row>
                        <Col xs={12}></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col>Ukupna cijena: {this.state.totalPrice} HRK</Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            {
                                items.length > 0 &&
                                < Button className={'d-flex justify-content-center btn-secondary2'} onClick={this.emptyCart}>
                                    Isprazni košaricu
                                </Button>
                            }
                        </Col>
                        <Col sm={12}>{
                            items.length > 0 &&
                            <Link to={"/checkout"}><Button className={"d-flex justify-content-center btn-secondary2"} > Plaćanje</Button></Link>


                        }
                        </Col>
                    </Row>
                </div>

            )
        }
        return (
            <div>košarica je prazna</div>
        )
    }

}

const mapStateToProps = state => {
    return {
        items: state.auth.cart,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        emptyCart: () => dispatch(authActions.emptyCart()),
        qtyUp: (id) => dispatch(authActions.qtyUp(id)),
        qtyDown: (id) => dispatch(authActions.qtyDown(id)),
        removeFromCart: (id) => dispatch(authActions.removeFromCart(id))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage)