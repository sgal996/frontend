import React, {Component} from "react";
import {Link, Redirect, withRouter} from "react-router-dom";
import {Button} from "reactstrap";
import {getOrders} from "../../redux/services/shop.service";
import {connect} from "react-redux";
import {authActions} from "../../redux/modules/auth";
import {getAllUsers} from "../../redux/services/auth.service";

class AdminDashboardPage extends Component {

    componentDidMount() {
        const {getAllUsers} = this.props
        getAllUsers();
    }

    render() {
        const {user} = this.props;

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
        allUsers: state.auth.allUsers
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