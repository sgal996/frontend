import React, {Component} from "react";
import {Products} from "../ProductsArray"

import {connect} from "react-redux";

import {getProducts} from "../redux/services/shop.service";
import {addToCart} from "../redux/services/auth.service";
import PropTypes, {object} from "prop-types";

import Product from "../components/Product/Product";
import {Col, Row} from "reactstrap";
import ProductList from "../components/Product/ProductList";
import Filter from "../components/Product/Filter";
import ClothesSizes from "../ClothesSizes"


class MenPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: [],
            got: false,
            option: ''
        }

        //this.applyFilter = this.applyFilter.bind(this);

    }

    componentDidMount() {
        const {getProducts} = this.props;
        this.setState({got: true}, () => getProducts());

    }

    applyFilter = (value) => {
        this.setState({option: value})
    }

    render() {
        const {got, filter} = this.state;
        const {products, addToCart, subcategories} = this.props;
        const items = products.filter(product => (product.category === "Muskarci" && (!!this.state.option ? (product.subCategory === this.state.option) : true)));

        return (
            <div className={"container-fluid"} >
                <div className={"text-center"} >
                <img className={"img-fluid"} src={"/img/Men_fashion.jpg"}/>
                </div>
                <Row><Filter subcategories={subcategories} applyFilter={this.applyFilter}/></Row>


                        <Row xs="1" sm="1" md="3" lg={"4"}>

                            {items && items.length > 0 &&
                            items.map((product) => ( !(!!product.hidden) &&
                                <Col><Product name={product.name} description={product.description}
                                              newProduct={product.newProduct}
                                              price={product.price} category={product.category} img={product.img}
                                              key={product.id} clothesSizes={ClothesSizes}
                                              product={product} addToCart={addToCart} sizes={!!product.size ? product.size.split(' ') : []} > </Product></Col>))}

                        </Row>





            </div>
        );



    }
}


const mapStateToProps = state => {
    return {
        products: state.shop.products,
        subcategories: state.auth.subcategories


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

