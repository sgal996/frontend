import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Naslovna from "./components/Naslovna";
import Login from "./components/Login";
import Navigation from "./components/Navigation"

import Muskarci from "./components/Muskarci";
import Zene from "./components/Zene";
import Djeca from "./components/Djeca";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import {currentUser} from "./redux/services/dashboard.service"
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenPage from "./pages/MenPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage";
import KidsPage from "./pages/KidsPage";

import WomenPage from "./pages/WomenPage";
import LoginPage from "./pages/LoginPage";
import {Provider} from "react-redux";
import store from "./redux/store";
import RegistrationPage from "./pages/RegistrationPage";
import {BrowserRouter as Router, BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            auth: null,
            some:null
        }
    }
    componentDidMount() {
        const {currentUser} = this.props;
        this.setState({some:true}, () => currentUser())

    }

    render() {
        const {user,auth} = this.props;
        console.log(this.state);
        return (

            <main>
                <Header></Header>



                <Navigation  />


                <Footer></Footer>
            </main>

        )
    }
}
/*const mapStateToProps = state => {
    return {
        user: state.dashboard.user,
        auth: state.auth
    };
};
const mapDispatchToProps = dispatch =>{
    return {
        currentUser: () => {
            return dispatch(currentUser());
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)*/

App.propTypes = {
    currentUser: PropTypes.func
};
