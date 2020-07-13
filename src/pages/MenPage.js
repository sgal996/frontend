import React, {Component} from "react";

import {currentUser} from "../redux/services/dashboard.service";
import {connect} from "react-redux";
import ProductList from "../components/ProductList";
import {getProducts} from "../redux/services/shop.service";
import {addToCart} from "../redux/services/auth.service";
import PropTypes, {object} from "prop-types";
import Registration from "../components/Registration";
import {Button} from "reactstrap";
import Product from "../components/Product";
import AddToHomeScreen from "@ideasio/add-to-homescreen-react";
import Row from "reactstrap/lib/Row";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from "reactstrap"


class MenPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            got: false
        }

    }

    componentDidMount() {
        const obj = {id: 4}
        const {getProducts} = this.props;


        this.setState({got: true}, () => getProducts());

    }


    render() {
        const {got} = this.state;
        const {products, addToCart} = this.props;


        if (got) {
            return (
                <div>

                    {products.filter((product) => (product.description === 'opis')).map((product) => (
                        <Product name={product.name} description={product.description} newProduct={product.newProduct}
                                 price={product.price} category={product.category} img={product.img} key={product.id}
                                 product={product} addToCart={addToCart}> </Product>))}


                </div>)


        }
        return (
            <div>
                nezz..
            </div>


        );
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
)(MenPage)

MenPage.propTypes = {
    getMenProducts: PropTypes.func
};

