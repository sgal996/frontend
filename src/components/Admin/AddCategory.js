import React, {Component} from "react";
import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";
import InputGroup from "reactstrap/lib/InputGroup";
import InputGroupAddon from "reactstrap/lib/InputGroupAddon";
import InputGroupText from "reactstrap/lib/InputGroupText";
import Input from "reactstrap/lib/Input";
import Button from "reactstrap/lib/Button";
import Alert from "reactstrap/lib/Alert";

class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            name: '',
            added: false
        }
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    handleInput = (e) => {
        this.setState({name: e.target.value})
    }

    handleSubmit = () => {
        const {addCategory} = this.props;
        addCategory({name: this.state.name})
        this.setState({added: true}, () => {
            window.setTimeout(() => {
                this.setState({added: false})
            }, 2000)
        });
        this.toggle();


    }

    render() {
        return (
            <div className={"container-fluid"}>


                <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
                    <DropdownToggle color={"black"} caret>
                        Dodaj podkategoriju
                    </DropdownToggle>
                    <DropdownMenu>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Ime: </InputGroupText>
                            </InputGroupAddon>
                            <Input size={"lg"}  onChange={this.handleInput}> </Input>
                            <Button color={"green"} className={"btn btn-success btn-sm"} onClick={this.handleSubmit}>Dodaj</Button>
                        </InputGroup>
                    </DropdownMenu>
                </ButtonDropdown>
                {
                    this.state.added &&
                    <Alert className={"d-flex justify-content-center"}
                           color="primary">
                        Kategorija je <br/>
                        uspješno dodana!
                    </Alert>
                }
            </div>
        )
    }
}

export default AddCategory;