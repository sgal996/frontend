import React, {Component} from "react";

import {currentUser} from "../redux/services/dashboard.service";
import {connect} from "react-redux";
import ProductList from "../components/ProductList";
import {getMenProducts} from "../redux/services/shop.service";
import PropTypes, {object} from "prop-types";
import Registration from "../components/Registration";
import {Button} from "reactstrap";
import Product from "../components/Product";


class MenPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products:[],
            got: false
        }

    }

    componentDidMount() {
        const obj = {id:4}
        const {getMenProducts} = this.props;


        this.setState({got: true},  () => getMenProducts());

    }


    render() {
        const {got} = this.state;
        const {products} = this.props;


        if (got) {
            return (<div>auuth check {products.filter((product) => (product.description === 'mobitel')).map((product) => (<Product name={product.name} description={product.description} newProduct={product.newProduct} price={product.price} category={product.category} img={product.img} key={product.id}> </Product>))}
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
        getMenProducts: () => {
            return dispatch(getMenProducts({id:4}));
        }
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenPage)

MenPage.propTypes = {
    getMenProducts: PropTypes.func
};

