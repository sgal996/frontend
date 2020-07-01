import React, {Component} from 'react';
import {connect} from 'react-redux';
import {signup} from '../../redux/services/auth.services';
import {Link, Redirect} from "react-router-dom";
import Signup from "../components/Signup";


class SignupPage extends Component {
    render() {
        const {onSignup, error, registered} = this.props;

        if (registered) {
            return <Redirect
                to={{
                    pathname: "/login",
                    state: { from: this.props.location }
                }}/>;
        }
        return (
            <div className={'container login-page'}>
                <h2 className={'text-center'} style={{'padding': '20px'}}>
                    <span className={'font-weight-bold'}>Webshop</span>.com
                </h2>
                <h3>Dobro došao, novi korisniče!</h3>

                {error && error.message &&
                <div className="alert alert-danger">
                    <strong>Error!</strong> {error.message}
                </div>
                }
                <Signup onSignup={onSignup}/>
                <Link to={'/login'}>Prijava</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        registered: state.auth.registered
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (request) => dispatch(signup(request))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupPage);