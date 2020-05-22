import React, {Component} from "react";
import Naslovna from "./Naslovna";
import {BrowserRouter, Route, Link} from "react-router-dom";

class Navigation extends Component {
    render() {
        const {user, auth} = this.props;
        console.log({auth});
        return (


            <div>
                <Link to="/">Home </Link>
                <Link to="/about">About Us </Link>
                <Link to="/zene">Zene </Link>
                <Link to="/djeca">Djeca</Link>
                <Link to="/kontakt">Kontakt</Link>
                <Link to="/login">Login</Link>

                //TODO think we are good here but still..
            </div>
        );
    };

}

export default Navigation;