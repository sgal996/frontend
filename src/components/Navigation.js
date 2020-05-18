import React, {Component} from "react";
import Naslovna from "./Naslovna";
import { BrowserRouter, Route, Link } from "react-router-dom";
class Navigation extends Component{
    render() {
        return(


                    <div>
                        <Link to="/">Home </Link>
                        <Link to="/about">About Us </Link>
                        <Link to="/zene">Zene </Link>
                        <Link to="/djeca">Djeca</Link>
                        <Link to="/kontakt">Kontakt</Link>
                        <Link to="/login">Login</Link>
                    </div>
                );
            };

    }

export default Navigation;