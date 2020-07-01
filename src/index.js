import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from "./redux/store";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {BrowserRouter} from "react-router-dom";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PersistGate } from 'redux-persist/integration/react'
import {persistorr} from "./redux/store"

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistorr}>
            <BrowserRouter>
                <Header></Header>
                <Navigation/>
                <Footer></Footer>
            </BrowserRouter>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
