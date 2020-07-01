import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'

class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            administrator: false
        }
    }

    handleChangeName = (e) => {
        this.setState({name: e.target.value});
    };
    handleChangeEmail = (e) => {
        this.setState({email: e.target.value});
    };
    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    };
    handleChangeRePassword = (e) => {
        this.setState({rePassword: e.target.value});
    };
    handleChangeAdministrator = () => {
        this.setState({administrator: !this.state.administrator});
    };

    handleSignup = () => {
        const {onSignup} = this.props;
        onSignup(this.state);
    };

    render() {

        return (
            <div>
                <Form className={'login-form'}>
                    <FormGroup>
                        <Label>Ime</Label>
                        <Input type={'text'} placeholder={'Ime'} onChange={this.handleChangeName}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type={'email'} placeholder={'Email'} onChange={this.handleChangeEmail}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Lozinka</Label>
                        <Input type={'password'} placeholder={'Lozinka'} onChange={this.handleChangePassword}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Ponovno Lozinka</Label>
                        <Input type={'password'} placeholder={'Ponovno Lozinka'} onChange={this.handleChangeRePassword}/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                            {/*    <Input type="checkbox" onChange={this.handleChangeAdministrator}/> Administrator*/}
                        </Label>
                    </FormGroup>
                    <Button className={'btn-lg btn-dark btn-block'} onClick={this.handleSignup}>
                        Registracija
                    </Button>
                </Form>
            </div>
        );
    }
}

Signup.propTypes = {
    onSignup: PropTypes.func
};

export default Signup;