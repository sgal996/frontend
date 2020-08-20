import React, {Component} from "react";
import Row from "reactstrap/lib/Row";
import {MDBIcon} from "mdbreact";
import {Link, Redirect} from "react-router-dom";


class Header extends Component {


    handleClick = () => {
        return(window.location.href='/cart')
    }

    render() {

        return (
            <div className={"myheader"}>
                <Row> <MDBIcon className={"child"} icon="cart-plus" onClick={this.handleClick}/> </Row>
            </div>
        )
    }
}

export default Header;

