import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import {getOrders} from "../../redux/services/shop.service";

class AdminDashboardPage extends Component {

    render() {
        return (
            <div>
                <Link to={'/dodaj'}> <Button className={"myButton"}>Dodaj proizvod</Button> </Link>
                <Link to={'/narudzbe'}> <Button className={"myButton"} >Pregledaj narudžbe</Button> </Link>
            </div>
        )
    }
}


// const mapDispatchToProps = dispatch =>{
//     return {
//         getOrders: () => dispatch(getOrders())
//     }
// }


export default AdminDashboardPage;