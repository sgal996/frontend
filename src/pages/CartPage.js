import React, {Component} from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Product from "../components/Product";
import {connect} from "react-redux";
import CartItem from "../components/CartItem";
import {Button} from "reactstrap";
import {authActions} from "../redux/modules/auth";

class CartPage extends Component {

    render() {
        const {items, emptyCart} = this.props;
        if (items !== undefined) {
            return (
                <div>
                    <Row>
                        <Col>img</Col>
                        <Col>Naziv</Col>
                        <Col>Količina</Col>
                        <Col>Cijena</Col>
                    </Row>
                    {items.map((item) => <CartItem key={item.id} name={item.name} price={item.price}
                                                   discount={item.discount} img={item.img}></CartItem>)}

                    {
                        items.length > 1 &&
                        < Button className={'btn-lg btn-dark btn-block'} onClick={() => emptyCart()}>
                            Isprazni košaricu
                        </Button>
                    }
                </div>
                /*<Row>
                <Col xl="4" lg="4">

                </Col>
                <Col xl="4" lg="4" sm="12">
                {this.props.items.map(item=> item.name)}
                </Col>
                <Col xl="4" lg="4" >

                </Col>
                </Row>*/
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
        emptyCart: () => dispatch(authActions.emptyCart())
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartPage)