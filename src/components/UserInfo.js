import React, {Component} from "react";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/es/Input";
import {Button} from "reactstrap";

class UserInfo extends Component{
    constructor(props) {
        super(props);
        this.state =
            {
                name: 'ado',
                mail: 'admin@admin.com',
                adress: 'this.props.adress'

            }
    }

    componentDidMount() {


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
    handleSubmit = () => {
        const {changeInfo} = this.props;
        changeInfo(this.state);
    }
    render() {

        return (
            <div>
                <div>
                    <Form>
                        <FormGroup>
                            <Label> <span>Ime</span> </Label>
                            <Input type={'text'} placeholder={this.props.user.name} onChange={this.handleName}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label> <span>Email</span> </Label>
                            <Input type={'text'} placeholder={this.props.user.mail} onChange={this.handleMail}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label> <span>Adresa</span> </Label>
                            <Input type={'text'} placeholder={this.props.user.adress} onChange={this.handleAdress}></Input>
                        </FormGroup>
                        <Button color="primary" onClick={this.handleSubmit}>Promijeni podatke</Button>
                    </Form>
                </div>
        </div>
        )
    }
}

export default UserInfo;