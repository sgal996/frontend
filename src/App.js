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
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import Navigation from "./containers/Navigation";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import {PersistGate} from 'redux-persist/integration/react'
import {persistorr} from "./redux/store"
import MenPage from "./containers/MenPage";
import WomenPage from "./containers/WomenPage";
import KidsPage from "./containers/KidsPage";
import ContactPage from "./containers/ContactPage";
import AboutPage from "./containers/AboutPage";
import LoginPage from "./containers/LoginPage";
import AdminDashboardPage from "./containers/admin/AdminDashboardPage";
import AddProductPage from "./containers/admin/AddProductPage";
import RegistrationPage from "./containers/RegistrationPage";
import OrdersPage from "./containers/OrdersPage";
import UserInfoPage from "./containers/UserInfoPage";
import CartPage from "./containers/CartPage";
import CheckoutPage from "./containers/CheckoutPage";
import DashboardPage from "./containers/DashboardPage";
import {MDBIcon} from "mdbreact";
import Terms from "./components/Layout/Terms";
import ThePage from "./containers/ThePage";
import AdminProducts from "./containers/admin/AdminProducts";
import AllUsers from "./containers/admin/AllUsers";


const Routes = () =>
    <div className={"container-fluid"} >


            <Navigation></Navigation>

            <div className={"container-fluid"} style={{marginTop: "20px", marginBottom: "50px"}} >
                <Switch>
                <Route path="/muskarci">
                    <MenPage/>
                </Route>
                <Route path="/zene">
                    <WomenPage/>
                </Route>
                <Route path="/djeca">
                    <KidsPage/>
                </Route>
                <Route path="/contact">
                    <ContactPage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>

                <Route path="/login">
                    <LoginPage/>
                </Route>
                <Route path="/terms">
                    <Terms></Terms>
                </Route>

                <Route path="/admin">
                    <AdminDashboardPage/>
                </Route>
                <Route path="/adminproducts">
                    <AdminProducts/>
                </Route>
                <Route path="/dodaj">
                    <AddProductPage></AddProductPage>
                </Route>

                <Route path={"/allusers"}>
                    <AllUsers/>
                </Route>

                <Route path="/register">
                    <RegistrationPage></RegistrationPage>
                </Route>
                <Route path="/narudzbe">
                    <OrdersPage></OrdersPage>
                </Route>
                <Route path="/myinfo">
                    <UserInfoPage></UserInfoPage>
                </Route>
                <Route path="/cart">
                    <CartPage></CartPage>
                </Route>
                <Route path="/checkout">
                    <CheckoutPage></CheckoutPage>
                </Route>
                <Route path="/dashboard">
                    <DashboardPage></DashboardPage>
                </Route>
                <Route path={"/"}>
                    <ThePage/>
                </Route>



        </Switch>
            </div>

        <Footer></Footer>

    </div>


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistorr}>
            <BrowserRouter>
                <Routes></Routes>
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
