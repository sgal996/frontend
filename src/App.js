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

import {BrowserRouter as Router, Switch, Routes, Route, Link, Outlet} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenPage from "./pages/MenPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage";
import KidsPage from  "./pages/KidsPage";

import WomenPage from "./pages/WomenPage";
import LoginPage from "./pages/LoginPage";
import {Provider} from "react-redux";
import store from "./redux/store";
import RegistrationPage from "./pages/RegistrationPage";

class App extends Component {
    render() {
        return (

            <main>
                <Header></Header>
                <Navigation></Navigation>
                <Switch>
                    <Route path="/" component={MenPage} exact/>
                    <Route path="/about" component={AboutPage}/>
                    <Route path="/zene" component={WomenPage}/>
                    <Route path="/djeca" component={KidsPage}></Route>
                    <Route path="/kontakt" component={ContactPage}></Route>
                    <Route path="/login" component={LoginPage}></Route>
                    <Route path="/register" component={RegistrationPage}></Route>

                    <Route component={NotFound}/>
                </Switch>
                <Footer></Footer>
            </main>

        )
    }
}

export default App;