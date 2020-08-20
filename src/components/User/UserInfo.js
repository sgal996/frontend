import React, {Component} from "react";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import {Button} from "reactstrap";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                name: '',
                mail: '',
                adress: '',
                city: '',
                postalCode: ''

            }
    }

    handleEnter = e => {
        const {getUserInfo} = this.props;
        if (e.key === "Enter") {
            this.handleSubmit();
            getUserInfo();

        }
    }

    componentDidMount() {
        if(!!this.props.user){
        this.setState({name: this.props.user.name});
        this.setState({mail: this.props.user.mail});
        this.setState({adress: this.props.user.adress});
        this.setState({city: this.props.user.city});
        this.setState({postalCode: this.props.user.postalCode});}



    }

    handleName = e => {
        this.setState({name: e.target.value})

    }
    handleMail = e => {
        this.setState({mail: e.target.value})
    }

    handleAdress = e => {
        this.setState({adress: e.target.value})
    }

    handleCity = e => {
        this.setState({city: e.target.value})
    }
    handlePostalCode = e => {
        this.setState({postalCode: e.target.value})
    }
    handleSubmit = () => {
        const {changeInfo} = this.props;
        changeInfo(this.state);
    }

    render() {

        return (
            <div>
                <div>
                    <Row>
                        <Col lg={4} xl={4} md={4} sm={12} xs={12}></Col>
                        <Col lg={4} xl={4} md={4} sm={12} xs={12}>
                            <Form>

                                <FormGroup>
                                    <Label> <span>Ime</span> </Label>
                                    <Input onKeyDown={this.handleEnter} type={'text'} placeholder={!!this.props.user ? this.props.user.name : ""}
                                           onChange={this.handleName}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label> <span>Email</span> </Label>
                                    <Input onKeyDown={this.handleEnter} type={'text'} placeholder={!!this.props.user ? this.props.user.mail : "" }
                                           onChange={this.handleMail}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label> <span>Adresa</span> </Label>
                                    <Input onKeyDown={this.handleEnter} type={'text'}
                                           placeholder={!!this.props.user ? this.props.user.adress : ""} onChange={this.handleAdress}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label> <span>Mjesto</span> </Label>
                                    <Input onKeyDown={this.handleEnter} type={'text'} placeholder={!!this.props.user ? this.props.user.city : ""}
                                           onChange={this.handleCity}></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label> <span>Poštanski broj</span> </Label>
                                    <Input onKeyDown={this.handleEnter} type={'text'}
                                           placeholder={!!this.props.user ? this.props.user.postalCode : ""}
                                           onChange={this.handlePostalCode}></Input>
                                </FormGroup>
                                <Button color="primary" onClick={this.handleSubmit}>Promijeni podatke</Button>
                            </Form>
                        </Col>
                        <Col lg={4} xl={4} md={4} sm={12} xs={12}></Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default UserInfo;