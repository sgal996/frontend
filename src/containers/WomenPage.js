import React, {Component} from "react";
import {getProducts} from "../redux/services/shop.service";
import {addToCart} from "../redux/services/auth.service";
import {connect} from "react-redux";
import Product from "../components/Product/Product";
import Row from "reactstrap/lib/Row";
import {Col} from "reactstrap";
import {Products} from "../ProductsArray";
import Filter from "../components/Product/Filter";

class WomenPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            option: ''
        }
    }
    componentDidMount() {
        const obj = {id: 4}
        const {getProducts, addToCart} = this.props;

        getProducts();


    }
    applyFilter = (value) => {
        this.setState({option: value})
    }

    render() {

        const {products, addToCart} = this.props;
        const items = Products.filter(product => (product.category === "Muskarci" && (!!this.state.option ? (product.subCategory === this.state.option) : true)));
        return (
            <div className={"container-fluid"} >
                <img className={"rounded mx-auto d-block img-fluid"} src={"/img/women_fashionjpg.jpg"}/>
                <Row><Filter applyFilter={this.applyFilter}/></Row>
                <Row>

                    <Row xs="1" sm="1" md="3" lg={"4"}>

                        {items && items.length > 0 &&
                        items.map((product) => (
                            <Col><Product name={product.name} description={product.description}
                                          newProduct={product.newProduct}
                                          price={product.price} category={product.category} img={product.img}
                                          key={product.id}
                                          product={product} addToCart={addToCart}> </Product></Col>))}

                    </Row>


                </Row>
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
)(WomenPage)
