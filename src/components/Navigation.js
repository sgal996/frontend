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


        let {user} = this.props;
        if (user === undefined) {
            user = {};
            user.roles = "nikoinista"

        }


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
                            {

                                user.roles.includes("ROLE_ADMIN") &&
                                <NavItem>
                                    <NavLink href="/admin" className="hoverable">Admin Dashboard</NavLink>
                                </NavItem>

                            }
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret className="hoverable">
                                    Postavke
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider/>
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink href="/muskarci" className="hoverable"
                                         onClick={this.handleLogout}>Logout</NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText>Clothes Shop</NavbarText>
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

                    <Route path="/register">
                        <RegistrationPage></RegistrationPage>
                    </Route>
                </Switch>


            </div>
        );
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



