import React, {Component} from "react";

import {addToCart, getUserInfo} from "../redux/services/auth.service";
import {connect} from "react-redux";
import {getOrders} from "../redux/services/shop.service";
import {Products} from "../ProductsArray"
import {Col, Row} from "reactstrap";
import Product from "../components/Product/Product";

class DashboardPage extends Component {

    componentDidMount() {

        const {auth, getUserInfo, getOrders} = this.props;
        if(auth){
            getUserInfo();
            getOrders();
        }




    }

    render() {
        const {products,addToCart} = this.props;
        const items = products.filter(product => (product.newProduct === true || product.discount>0));
        return (

                <div  className={"container-fluid"}>
                    <img className={"rounded mx-auto d-block img-fluid"} src={"/img/Sale-banner.jpg"}/>
                <Row xs="1" sm="1" md="3" lg={"4"}>

                    {items && items.length > 0 &&
                    items.map((product) => ( !(!!product.hidden) &&
                        <Col><Product name={product.name} description={product.description}
                                      newProduct={product.newProduct}
                                      price={product.price} category={product.category} img={product.img}
                                      key={product.id}
                                      product={product} addToCart={addToCart} sizes={!!product.size ? product.size.split(' ') : []}> </Product></Col>))}

                </Row>
                </div>



        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user,
        auth: state.auth.authenticated,
        products: state.shop.products
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => (dispatch(getUserInfo())),
        getOrders: () => (dispatch(getOrders())),
        addToCart: (product) => dispatch(addToCart(product))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DashboardPage);
