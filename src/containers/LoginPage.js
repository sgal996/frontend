import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo, login} from '../redux/services/auth.service';

import Login from "../components/Login/Login";
import {Redirect, Link} from 'react-router-dom';
import {currentUser} from "../redux/services/dashboard.service";
import {getOrders} from "../redux/services/shop.service";

class LoginPage extends Component {

    render() {
        const {onLogin, authenticated, error, getUserInfo, currentUser, getOrders} = this.props;

        if (authenticated) {
            return <Redirect
                to={{
                    pathname: "/",
                    state: { from: this.props.location }
                }} authenticated={authenticated}/>;
        }

        return (
            <div className={'container login-page'}>
                <h2 className={'text-center'} style={{'padding': '20px'}}>
                    <span className={'font-weight-bold'}>Clothes Shop</span>.com
                </h2>
                <h3>Dobro došao, nazad!</h3>
                {error && error.message &&
                <div className="alert alert-danger">
                    <strong>Error!</strong> {error.message}
                </div>
                }
                <Login onLogin={onLogin} getUserInfo={getUserInfo} currentUser={currentUser} getOrders={getOrders} />
                <Link  to={'/register'}>Registracija</Link>
            </div>
        )
    }
}



function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        error: state.auth.error
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onLogin: (request) => dispatch(login(request)),
        getUserInfo: () => dispatch(getUserInfo()),
        currentUser: () => dispatch(currentUser()),
        getOrders: () => dispatch(getOrders())
    };

}

export default connect(//konekta se na store, s konekt se sabskrajbam
    mapStateToProps,//kad se field promini, auto se rendera
    mapDispatchToProps//
)(LoginPage);

//container je page, wrapper oko svega