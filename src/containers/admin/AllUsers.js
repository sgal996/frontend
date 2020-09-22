import React, {Component} from "react";
import {confirmOrder, deactivateUser, getAllUsers} from "../../redux/services/auth.service";
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import User from "../../components/Admin/User";
import Row from "reactstrap/lib/Row";
import Table from "reactstrap/lib/Table";

class AllUsers extends Component {


    render() {
        const {allUsers, orders, deactivateUser, role, confirmOrder} = this.props;
        if(!!role && role.length < 2){
            return (
                <Redirect to={"/login"}></Redirect>
            )
        }
        return (
            <div>
                <Table responsive hover>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Ime i prezime</th>
                        <th>Email</th>
                        <th>Mjesto</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {
                        allUsers.map(user => <User allUsers={allUsers} role={role} user={user} deactivateUser={deactivateUser} orders={orders} confirmOrder={confirmOrder}></User>
                        )
                    }

                    </tbody>

                </Table>


            </div>
        )
    }
}


const mapStateToProps = state => {
    return {

        allUsers: state.auth.allUsers,
        orders: state.shop.orders,
        role: state.auth.user.roles
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllUser: () => dispatch(getAllUsers()),
        deactivateUser: (data) => dispatch(deactivateUser(data)),
        confirmOrder: (id) => dispatch(confirmOrder(id))

    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllUsers);