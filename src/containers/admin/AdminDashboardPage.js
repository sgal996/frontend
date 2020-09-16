import React, {Component} from "react";
import {Link, Redirect, withRouter} from "react-router-dom";
import {Button, Row} from "reactstrap";
import {getOrders} from "../../redux/services/shop.service";
import {connect} from "react-redux";
import {authActions} from "../../redux/modules/auth";
import {getAllUsers} from "../../redux/services/auth.service";
import moment from "moment";
import Col from "reactstrap/lib/Col";

class AdminDashboardPage extends Component {

    componentDidMount() {
        const {getAllUsers} = this.props
        getAllUsers();
    }

    render() {
        const {user, products} = this.props;

        if (user.roles.length < 2) {
            return (
                <Redirect to={"/login"}/>
            )
        }
        return (
            <div className={"container justify-content-center"}>
                <Link to={'/dodaj'}> <Button className={"myButton"}>Dodaj proizvod</Button> </Link>
                <Link to={'/narudzbe'}> <Button className={"myButton"}>Pregledaj narudžbe</Button> </Link>
                <Link to={'/adminproducts'}> <Button className={"myButton"}>Pregledaj proizvode</Button> </Link>
                <Link to={'/allusers'}> <Button className={"myButton"}>Pregledaj korisnike</Button> </Link>

                <Row>
                    <Col></Col>
                    {(moment() - moment(products[products.length - 1].createdAt)) < 3000 &&
                    <Col>
                        <div>
                            Proizvod <strong>{products[products.length - 1].name}</strong> je uspješno dodan
                            <img className={"img-fluid"} src={"/img/" + products[products.length - 1].img}></img>
                            <div className="success-animation">
                                <svg className="checkmark2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                                </svg>
                            </div>

                        </div>
                    </Col>
                    }
                    <Col></Col>
                </Row>

            </div>
        )
    }
}


// const mapDispatchToProps = dispatch =>{
//     return {
//         getOrders: () => dispatch(getOrders())
//     }
// }
const mapStateToProps = state => {
    return {
        user: state.auth.user,
        allUsers: state.auth.allUsers,
        products: state.shop.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(getAllUsers())
    }

}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminDashboardPage));