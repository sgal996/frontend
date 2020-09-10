import React, {Component} from 'react';
import Row from "reactstrap/lib/Row";
import Label from "reactstrap/lib/Label";
import Input from "reactstrap/lib/Input";
import Col from "reactstrap/lib/Col";
import InputGroup from "reactstrap/lib/InputGroup";
import Button from "reactstrap/lib/Button";
import ButtonGroup from "reactstrap/lib/ButtonGroup";
import ButtonDropdown from "reactstrap/lib/ButtonDropdown";
import DropdownToggle from "reactstrap/lib/DropdownToggle";
import DropdownMenu from "reactstrap/lib/DropdownMenu";
import DropdownItem from "reactstrap/lib/DropdownItem";
import Checkmark from "../Layout/Checkmark";


class Filter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            option: '',
            dropdownOpen: false
        }
    }

    handleChoice = (e) => {
        const {applyFilter} = this.props;

        applyFilter(e.target.value);
        this.setState({option: e.target.value})

    }

    toggle = () => {
        this.setState({dropdownOpen: !this.state.dropdownOpen})
    }

    render() {
        const {subcategories} = this.props;
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle color={"black"} caret>
                    Filter
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={this.handleChoice} value={''}>Svi proizvodi {this.state.option === '' && <Checkmark/>}</DropdownItem>
                    {
                    subcategories.map((c) =>
                        <DropdownItem onClick={this.handleChoice} key={c.id}
                                      value={c.name}>{c.name} {c.name === this.state.option && <Checkmark/>}</DropdownItem>
                    )}

                </DropdownMenu>
            </ButtonDropdown>
        )
    }


}

export default Filter;