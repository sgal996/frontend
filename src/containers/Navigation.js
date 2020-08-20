import React, {Component} from "react";
import {currentUser} from "../redux/services/dashboard.service";
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


import {connect} from "react-redux";
import {logout} from "../redux/services/auth.service";
import ContactPage from "./ContactPage";


class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            isAuthenticated: false
        };


    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    handleLogout = () => {
        const {logout} = this.props;
        logout();

    }

    componentDidMount() {


    }


    render() {
        const {user} = this.props;
        const {isOpen} = this.state;

        const userLogged = user && user.roles && user.roles.length > 0;
        const adminLogged = userLogged && user.roles.includes('ROLE_ADMIN');

        return (
            <Navbar color="dark" expand="md">
                <NavbarBrand href="/">Clothes Shop</NavbarBrand>
                <NavbarToggler className={"white"} onClick={this.toggle}> Menu </NavbarToggler>
                <Collapse isOpen={isOpen} navbar>
                    <Nav>
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
                        {
                            userLogged &&
                                <NavItem>
                            <UncontrolledDropdown  nav inNavbar>
                                <DropdownToggle nav caret className="hoverable">
                                    Postavke
                                </DropdownToggle>
                                <DropdownMenu  right>
                                    <DropdownItem >
                                        <NavLink href="/narudzbe" >Moje narudžbe</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink href="/myinfo" >Moji podaci</NavLink>
                                    </DropdownItem>

                                </DropdownMenu>
                            </UncontrolledDropdown>
                                </NavItem>
                        }
                        {adminLogged &&
                        <NavItem>
                            <NavLink href="/dodaj" className="hoverable">Dodaj proizvod</NavLink>
                        </NavItem>
                        }
                        {adminLogged &&
                        <NavItem>
                            <NavLink href="/admin" className="hoverable">Admin Dashboard</NavLink>
                        </NavItem>
                        }
                        {userLogged &&
                        <NavItem>
                            <NavLink href="/" className="hoverable"
                                     onClick={this.handleLogout}>Logout</NavLink>
                        </NavItem>
                        }
                        {!userLogged &&
                        <NavItem>
                            <NavLink href="/login" className="hoverable">Login</NavLink>
                        </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        );

        // if (!('roles' in user)) {
        //     return (<div>
        //
        //
        //             <Navbar color="light" light expand="md">
        //                 <NavbarBrand href="/">Clothes Shop</NavbarBrand>
        //                 <NavbarToggler onClick={this.toggle}/>
        //                 <Collapse isOpen={this.state.isOpen} navbar>
        //                     <Nav className="mr-auto" navbar>
        //                         <NavItem>
        //                             <NavLink href="/muskarci" className="hoverable">Muskarci</NavLink>
        //                         </NavItem>
        //                         <NavItem>
        //                             <NavLink href="/zene" className="hoverable">Zene</NavLink>
        //                         </NavItem>
        //                         <NavItem>
        //                             <NavLink href="/djeca" className="hoverable">Djeca</NavLink>
        //                         </NavItem>
        //                         <NavItem>
        //                             <NavLink href="/contact" className="hoverable">Kontakt</NavLink>
        //                         </NavItem>
        //                         <NavItem>
        //                             <NavLink href="/login" className="hoverable">Login</NavLink>
        //                         </NavItem>
        //                         <NavItem>
        //                             <NavLink href="/" className="hoverable"
        //                                      onClick={this.handleLogout}>Logout</NavLink>
        //                         </NavItem>
        //                     </Nav>
        //                 </Collapse>
        //             </Navbar>
        //         </div>
        //
        //     )
        // } else return (
        //     <div>
        //
        //
        //         <Navbar color="light" light expand="md">
        //             <NavbarBrand href="/">Clothes Shop</NavbarBrand>
        //             <NavbarToggler onClick={this.toggle}/>
        //             <Collapse isOpen={this.state.isOpen} navbar>
        //                 <Nav className="mr-auto" navbar>
        //                     <NavItem>
        //                         <NavLink href="/muskarci" className="hoverable">Muskarci</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/zene" className="hoverable">Zene</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/djeca" className="hoverable">Djeca</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/contact" className="hoverable">Kontakt</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/login" className="hoverable">Login</NavLink>
        //                     </NavItem>
        //
        //
        //                     <NavItem>
        //                         <NavLink href="/" className="hoverable"
        //                                  onClick={this.handleLogout}>Logout</NavLink>
        //                     </NavItem>
        //
        //                     {user.roles.includes('ROLE_ADMIN') &&
        //                     <NavItem>
        //                         <NavLink href="/dodaj" className="hoverable">Dodaj proizvod</NavLink>
        //                     </NavItem>
        //                     }
        //                     {user.roles.includes('ROLE_ADMIN') &&
        //                     <NavItem>
        //                         <NavLink href="/admin" className="hoverable">Admin Dashboard</NavLink>
        //                     </NavItem>
        //                     }
        //                 </Nav>
        //                 <NavbarText style={{cursor: 'pointer'}}><Link to='/cart'>Cart</Link></NavbarText>
        //             </Collapse>
        //         </Navbar>
        //
        //
        //     </div>
        // )
        //
        // return (
        //
        //     <div>
        //
        //
        //         <Navbar  color="light" light expand="md">
        //             <NavbarBrand href="/">Clothes Shop</NavbarBrand>
        //             <NavbarToggler onClick={this.toggle}/>
        //             <Collapse isOpen={this.state.isOpen} navbar>
        //                 <Nav className="mr-auto" navbar>
        //                     <NavItem>
        //                         <NavLink href="/muskarci" className="hoverable">Muskarci</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/zene" className="hoverable">Zene</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/djeca" className="hoverable">Djeca</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/contact" className="hoverable">Kontakt</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/login" className="hoverable">Login</NavLink>
        //                     </NavItem>
        //                     <NavItem>
        //                         <NavLink href="/dodaj" className="hoverable">Dodaj proizvod</NavLink>
        //                     </NavItem>
        //
        //                         <NavItem>
        //                             <NavLink href="/admin" className="hoverable">Admin Dashboard</NavLink>
        //                         </NavItem>
        //
        //
        //
        //                 <UncontrolledDropdown nav inNavbar>
        //                     <DropdownToggle nav caret className="hoverable">
        //                         Postavke
        //                     </DropdownToggle>
        //                     <DropdownMenu right>
        //                         <DropdownItem>
        //                             <NavLink href="/narudzbe" className="hoverable">Moje narudžbe</NavLink>
        //                         </DropdownItem>
        //                         <DropdownItem>
        //                             <NavLink href="/myinfo" className="hoverable">Moji podaci</NavLink>
        //                         </DropdownItem>
        //
        //                     </DropdownMenu>
        //                 </UncontrolledDropdown>
        //                     <NavItem>
        //                         <NavLink href="/login" className="hoverable"
        //                                  onClick={this.handleLogout}> Logout</NavLink>
        //                     </NavItem>
        //                 </Nav>
        //                 <NavbarText></NavbarText>
        //             </Collapse>
        //         </Navbar>
        //
        //
        //
        //
        //     </div>
        // );
    }
};


const mapDispatchToProps = dispatch => {

    return {
        logout: () => dispatch(logout()),
        getCurrentUser: () => dispatch(currentUser())
    }
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



