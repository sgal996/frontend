import React,{Component} from 'react';
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


class Filter extends Component{

    constructor(props) {
        super(props);

        this.state={
            option:'',
            dropdownOpen: false
        }
    }

    handleChoice = (e) =>{
        const {applyFilter} = this.props;

        applyFilter(e.target.id);
        this.setState({option: e.target.id})

    }

    toggle = () =>{
        this.setState({dropdownOpen: !this.state.dropdownOpen})
    }
    render() {
        return(
            <ButtonDropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle color={"black"}  caret>
                    Filter
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={this.handleChoice} id={""}>Svi proizvodi
                        {
                            this.state.option === '' && <span className="checkmark">
                        <div className="checkmark_circle"></div>
                         <div className="checkmark_stem"></div>
                         <div className="checkmark_kick"></div>
                        </span>
                        }


                    </DropdownItem>
                    <DropdownItem onClick={this.handleChoice} id={"Majice"}>Majice

                        {
                            this.state.option === 'Majice' &&
                            <span className="checkmark">
                        <div className="checkmark_circle"></div>
                         <div className="checkmark_stem"></div>
                         <div className="checkmark_kick"></div>
                        </span>
                        }


                    </DropdownItem>
                    <DropdownItem onClick={this.handleChoice} id={"Hlače"} >Hlače

                        {
                            this.state.option === 'Hlače' && <span className="checkmark">
                        <div className="checkmark_circle"></div>
                         <div className="checkmark_stem"></div>
                         <div className="checkmark_kick"></div>
                        </span>
                        }


                    </DropdownItem>

                    {
                        this.state.option === 'Obuća' && <span className="checkmark">
                        <div className="checkmark_circle"></div>
                         <div className="checkmark_stem"></div>
                         <div className="checkmark_kick"></div>
                        </span>
                    }



                    <DropdownItem onClick={this.handleChoice} id={"Obuća"}>Obuća</DropdownItem>

                </DropdownMenu>
            </ButtonDropdown>
        )
    }


}

export default Filter;