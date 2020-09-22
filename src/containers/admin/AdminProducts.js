import React, {Component} from "react"
import {connect} from "react-redux";
import {authActions} from "../../redux/modules/auth";
import {Col, Row} from "reactstrap";
import Product from "../../components/Product/Product";
import ClothesSizes from "../../ClothesSizes";
import {deleteProduct} from "../../redux/services/shop.service";
import AdminProduct from "../../components/Admin/AdminProduct";
import {Redirect} from "react-router-dom";



class AdminProducts extends Component {

    render() {



        const {items, onDelete, user} = this.props;

            if(!!user && user.roles.length < 2 ){
                return(
                    <Redirect to={"/login"}></Redirect>

                )
        }

        return (
            <div>

                <Row xs="1" sm="1" md="3" lg={"4"}>

                    {!!items && items.length > 0 &&
                    items.map((product) => (
                        <Col><AdminProduct name={product.name} description={product.description}
                                            newProduct={product.newProduct} price={product.price}
                                            category={product.category} img={product.img}
                                            key={product.id} product={product}
                                            sizes={!!product.size ? product.size.split(' ') : []}
                                            onDelete={onDelete}>
                        </AdminProduct></Col>))}

                </Row>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        items: state.shop.products,
        user: state.auth.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: (product) => dispatch(deleteProduct(product))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminProducts)