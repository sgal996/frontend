import React, {Component} from "react";
import Collapse from "reactstrap/lib/Collapse";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Table from "reactstrap/lib/Table";
import OrderItem from "../Order/OrderItem";
import UserOrderItem from "./UserOrderItem";
import Button from "reactstrap/lib/Button";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    deactivate = () => {
        const {user, deactivateUser} = this.props;
        deactivateUser(user);

    }

    render() {
        const {user, orders, role, allUsers, confirmOrder} = this.props;
        return (

            <tr>


                <td onClick={this.toggle} style={{cursor: "pointer"}}>{user.id} </td>
                <td onClick={this.toggle} style={{cursor: "pointer"}}>{user.name} </td>
                <td onClick={this.toggle} style={{cursor: "pointer"}}>{user.email} </td>
                <td onClick={this.toggle} style={{cursor: "pointer"}}>{user.city} </td>
                {user.active &&
                <td><Button onClick={this.deactivate} color={"red"} className={"btn-sm"}> Deaktiviraj </Button></td>
                }
                {!user.active &&
                <td><Button onClick={this.deactivate} color={"green"} className={"btn-sm"}> Aktiviraj </Button></td>
                }

                {
                    this.state.isOpen &&


                    orders.filter(order => order.username === user.email).map(order =><tr> <OrderItem allUsers={allUsers}
                                                                                                  role={role}
                                                                                                  user={user}
                                                                                                      order={order} confirmOrder={confirmOrder}></OrderItem></tr>)


                }


            </tr>


        )
    }
}

export default User;