import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap/lib';
import PropTypes from 'prop-types';
import {Redirect} from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = () => {
        const {onLogin, getUserInfo, currentUser, getOrders} = this.props;
        onLogin(this.state);



    };

    handleEmailChange = (e) => {
        this.setState({username: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    checkEnter = (e) => {
        if (e.key === "Enter"){
            this.handleLogin();
        }
    }

    render() {
        const {error} = this.props;
        const {username, password} = this.state;
        return (
            <div>
                {!!username && (!!password && password.length > 7)  && error && error.message && error.message === "Request failed with status code 500" &&
                <div className="alert alert-danger">
                    <strong>Error!</strong> Vaš račun je deaktiviran! Javite se na clothesshop@gmail.com kako bi otklonili problem!
                </div>
                }
                {!!username && (!!password && password.length > 7) && error && error.message  && error.message === "Request failed with status code 401" &&
                <div className="alert alert-danger">
                    <strong>Error!</strong> Niste unijeli točne podatke. Pokušajte ponovno
                </div>
                }
                <Form className={'login-form'}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type={'email'} placeholder={'Email'} onChange={this.handleEmailChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Lozinka</Label>
                        <Input onKeyDown={this.checkEnter} type={'password'} placeholder={'Lozinka'} onChange={this.handlePasswordChange}/>
                    </FormGroup>

                    <Button className={'btn-lg btn-dark btn-block'} onClick={this.handleLogin}>
                        Prijava
                    </Button>
                </Form>

            </div>);
    }

}

Login.propTypes = {
    onLogin: PropTypes.func
};

export default Login;