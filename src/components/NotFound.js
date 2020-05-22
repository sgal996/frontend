import React,{Component} from "react";
import {Link} from "react-router-dom";

class NotFound extends Component{
    render() {
        return (
            <div>
                <div><Link to="/home">Click here to go back to home page</Link></div>
                //FIXME beautify
            </div>
        )
    }
}
export default NotFound;