import React, {Component} from "react";
import {getProducts} from "../redux/services/shop.service";
import {addToCart} from "../redux/services/auth.service";
import {connect} from "react-redux";
import Product from "../components/Product";
import Row from "reactstrap/lib/Row";

class KidsPage extends Component {
    componentDidMount() {

        const {getProducts, addToCart} = this.props;

        getProducts();


    }

    render() {

        const {products, addToCart} = this.props;
        return (
            <div>kids Page

                {products.filter((product) => (product.description === 'mobitel')).map((product) => (<Product name={product.name} description={product.description} newProduct={product.newProduct} price={product.price} category={product.category} img={product.img} key={product.id} product={product} addToCart={addToCart}> </Product>))}


            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.shop.products,


    };
};


const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(getProducts()),
        addToCart: (product) => dispatch(addToCart(product))

    }
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(KidsPage)
