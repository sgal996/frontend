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

class App extends Component {
    render() {
        return (
            <main>
                <Header></Header>
                <Navigation></Navigation>
                <Switch>
                    <Route path="/" component={Muskarci} exact />
                    <Route path="/about" component={About} />
                    <Route path="/zene" component={Zene} />
                    <Route path="/djeca" component={Djeca}></Route>
                    <Route path="/kontakt" component={Contact}></Route>
                    <Route component={NotFound} />
                </Switch>
                <Footer></Footer>
            </main>
        )
    }
}

export default App;