import React, {Component} from "react";
import Naslovna from "./Naslovna";
import {BrowserRouter as Router, Route, Link, Switch, BrowserRouter} from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import MenPage from "../pages/MenPage";
import AboutPage from "../pages/AboutPage";
import WomenPage from "../pages/WomenPage";
import KidsPage from "../pages/KidsPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import NotFound from "./NotFound";
import AdminDashboardPage from "../pages/admin/AdminDashboardPage";

import {connect} from "react-redux";
import {logout} from "../redux/services/auth.service";
import OrdersPage from "../pages/OrdersPage";
import UserInfoPage from "../pages/UserInfoPage";
import AddProductPage from "../pages/admin/AddProductPage";

import CartPage from "../pages/CartPage";



class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isAdmin: false
        };

    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleLogout = () => {
        const {logout} = this.props;
        logout();

    }


    render() {


        const {user} = this.props;


        if (user === undefined) {
            return (
                <div>


                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Clothes Shop</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/muskarci" className="hoverable">Muskarci</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/zene" className="hoverable">Zene</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/djeca" className="hoverable">Djeca</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact" className="hoverable">Kontakt</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/login" className="hoverable">Login</NavLink>
                                </NavItem>


                                <NavItem>
                                    <NavLink href="/muskarci" className="hoverable"
                                             onClick={this.handleLogout}>Logout</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText style={{cursor: 'pointer'}}><Link to='/cart'>Cart</Link></NavbarText>
                        </Collapse>
                    </Navbar>


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

                        <Route path="/admin">
                            <AdminDashboardPage/>
                        </Route>
                        <Route path="/dodaj">
                            <AddProductPage></AddProductPage>
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
                    </Switch>


                </div>
            )
        } else {
            return (

                <div>


                    <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Clothes Shop</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}/>
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink href="/muskarci" className="hoverable">Muskarci</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/zene" className="hoverable">Zene</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/djeca" className="hoverable">Djeca</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/contact" className="hoverable">Kontakt</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/login" className="hoverable">Login</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/dodaj" className="hoverable">Dodaj proizvod</NavLink>
                                </NavItem>

                                    <NavItem>
                                        <NavLink href="/admin" className="hoverable">Admin Dashboard</NavLink>
                                    </NavItem>



                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="hoverable">
                                    Postavke
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/narudzbe" className="hoverable">Moje narudžbe</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/myinfo" className="hoverable">Moji podaci</NavLink>
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                                <NavItem>
                                    <NavLink href="/login" className="hoverable"
                                             onClick={this.handleLogout}> Logout</NavLink>
                                </NavItem>
                            </Nav>
                            <NavbarText><Link to='/cart'>Cart</Link></NavbarText>
                        </Collapse>
                    </Navbar>


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

                        <Route path="/admin">
                            <AdminDashboardPage/>
                        </Route>
                        <Route path="/dodaj">
                            <AddProductPage></AddProductPage>
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
                    </Switch>


                </div>
            );
        }
    };

}

const mapDispatchToProps = dispatch => {

    return {logout: () => dispatch(logout())}
}
const mapStateToProps = state => {
    return {
        user: state.auth.user,
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navigation);



