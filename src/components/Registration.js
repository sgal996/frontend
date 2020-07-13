import React, {Component} from "react";
import {Form, FormGroup, Input, Label, Button} from "reactstrap"
import PropTypes from "prop-types"
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col"

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: '',
            adress: '',
            administrator: false

        }
    }

    handleChangeName = e => {
        this.setState({name: e.target.value})
    };
    handleChangeEmail = e => {
        this.setState({email: e.target.value})
    };
    handleChangePassword = e => {
        this.setState({password: e.target.value})
    };
    handleChangeRePassword = e => {
        this.setState({rePassword: e.target.value})

    };
    handleChangeAdress = e => {
        this.setState({adress: e.target.value})
    }
    handleSubmit = () => {
        const {onRegister} = this.props;
        onRegister(this.state);

    };


    render() {
        return (
            <div>
                <Row>
                    <Col sm="4" md="4" lg="4" xl="4">
                    </Col>
                    <Col sm="4" md="4" lg="4" xl="4">
                        <Form>
                            <FormGroup>
                                <Label for="firstname">Ime</Label>
                                <Input type={"text"} placeholder="Ime i Prezime"
                                       onChange={this.handleChangeName}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type={"email"} placeholder="Email"
                                       onChange={this.handleChangeEmail}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Lozinka</Label>
                                <Input type={"password"} placeholder="Lozinka"
                                       onChange={this.handleChangePassword}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="repassword">Lozinka</Label>
                                <Input type={"password"} placeholder="Ponovi lozinku"
                                       onChange={this.handleChangeRePassword}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="adress">Lozinka</Label>
                                <Input type={"text"} placeholder="Vaša adresa"
                                       onChange={this.handleChangeAdress}></Input>

                            </FormGroup>


                        </Form>
                    </Col>
                </Row>
                <Col sm="4" md="4" lg="4" xl="4"></Col>
                <Col sm="4" md="4" lg="4" xl="4">

                </Col>

            </div>
        )
    }
}

Registration.propTypes = {
    onRegister: PropTypes.func
};

export default Registration;