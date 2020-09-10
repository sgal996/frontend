import React, {Component} from "react";
import Header from "../components/Layout/Header";
import {Redirect} from "react-router-dom";

class ThePage extends Component{
    render() {
        return(
            <Redirect to={"/dashboard"}> </Redirect>
        )
    }
}

export default ThePage;

