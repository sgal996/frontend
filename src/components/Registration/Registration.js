import React, {Component} from "react";
import {Form, FormGroup, Label, Button} from "reactstrap"

import PropTypes from "prop-types"
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col"
import {Link, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import Alert from "reactstrap/lib/Alert";
import Input from "reactstrap/lib/Input";

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
    checkEmail = (e) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(e);
    }

    checkPassword = (e) => {
        var re = new RegExp("(?=.{8,})");
        return re.test(e)
    }

    // checkBothPasswords = () =>{
    //     if()
    //         return true;
    //     return false;
    // }

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

    handleChangeAdministrator = () => {
        this.setState({administrator: !this.state.administrator});
    };

    handleEnter = (e) => {

        if(e.key ===  "Enter")
            this.handleSubmit();
    }


    render() {
        const {registered} = this.props;
        if(registered){
            return(
            <Redirect to={"/login"}/>)
        }
        return (
            <div className={"container-fluid"}>
                <Row>
                    <Col xs={12} sm="12" md="4" lg="4" xl="4">
                    </Col>
                    <Col xs={12} sm="12" md="4" lg="4" xl="4">
                        <Form >
                            <FormGroup>
                                <Label for="firstname">Ime <span className={"required"} >*</span></Label>
                                <Input type={"text"} placeholder="Ime i Prezime"
                                       onChange={this.handleChangeName}></Input>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email <span className={"required"} >*</span></Label>
                                <Input onKeyDown={this.handleEnter} type={"email"} placeholder="Email"
                                       onChange={this.handleChangeEmail}></Input>
                                {
                                     !!this.state.email && !this.checkEmail(this.state.email) && <Alert color={"danger"}> Email nije važeći!!</Alert>
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Lozinka  <span className={"required"} >*</span></Label>
                                <Input type={"password"} placeholder="Lozinka"
                                       onChange={this.handleChangePassword}></Input>
                                {
                                    !!this.state.password && !this.checkPassword(this.state.password) && <Alert color={"danger"}> Lozinka mora sadržavati barem 8 znakova!!</Alert>
                                }
                            </FormGroup>
                            <FormGroup>
                                <Label for="repassword">Potvrdi lozinku <span className={"required"} >*</span></Label>
                                <Input type={"password"} placeholder="Ponovi lozinku"
                                       onChange={this.handleChangeRePassword}></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="adress">Adresa</Label>
                                <Input type={"text"} placeholder="Vaša adresa"
                                       onChange={this.handleChangeAdress}></Input>

                            </FormGroup>
                            <FormGroup>
                                <Label for="city">Mjesto</Label>
                                <Input type={"text"} placeholder="Mjesto"
                                       onChange={this.handleChangeAdress}></Input>

                            </FormGroup>
                            <FormGroup>
                                <Label for="Poštanski broj">Poštanski broj</Label>
                                <Input onKeyDown={this.handleEnter} type={"text"} placeholder="Poštanski broj"
                                       onChange={this.handleChangeAdress} ></Input>

                            </FormGroup>

                            {/*<FormGroup check>*/}
                            {/*    <Label check>*/}
                            {/*        <Input  type="checkbox" onChange={this.handleChangeAdministrator}/> Administrator*/}
                            {/*    </Label>*/}
                            {/*</FormGroup>*/}
                            <Button disabled={(!!this.state.password && (this.state.password === this.state.rePassword) ) ? false: true} className={'btn-lg btn-dark btn-block'} onClick={this.handleSubmit}>
                                Registracija
                            </Button>

                        </Form >
                    </Col>
                </Row>
                <Col sm="4" md="4" lg="4" xl="4"></Col>
                <Col sm="4" md="4" lg="4" xl="4">

                </Col>

            </div>
        )
    }
}


export default Registration;