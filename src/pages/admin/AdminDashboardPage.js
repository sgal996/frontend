import React,{Component} from "react";
import {Link} from "react-router-dom";

class AdminDashboardPage extends Component{

    render() {
        return(
            <div> <Link to={'/dodaj'}>sth </Link>Admin Dashboard page</div>
        )
    }
}

export default AdminDashboardPage;