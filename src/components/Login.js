import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import PropTypes from 'prop-types';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLogin = () => {
        const {onLogin} = this.props;
        onLogin(this.state);
    };

    handleEmailChange = (e) => {
        this.setState({username: e.target.value});
    };

    handlePasswordChange = (e) => {
        this.setState({password: e.target.value});
    };

    render() {
        return (
            <div>
                <Form className={'login-form'}>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type={'email'} placeholder={'Email'} onChange={this.handleEmailChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Lozinka</Label>
                        <Input type={'password'} placeholder={'Lozinka'} onChange={this.handlePasswordChange}/>
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