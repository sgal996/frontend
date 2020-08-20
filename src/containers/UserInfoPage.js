import React, {Component} from "react";
import {getUserInfo} from "../redux/services/auth.service";
import {connect} from "react-redux";
import Row from "reactstrap/es/Row";
import Input from "reactstrap/es/Input";
import Form from "reactstrap/lib/Form";
import FormGroup from "reactstrap/lib/FormGroup";
import Label from "reactstrap/lib/Label";
import {Button} from "reactstrap";
import {changeInfo} from "../redux/services/auth.service";
import UserInfo from "../components/User/UserInfo";
import {Redirect} from "react-router-dom";

class UserInfoPage extends Component {
    constructor(props) {
        super(props);



    }




    render() {

        if(!this.props.authenticated){
            return (
                <Redirect to={"/login"}/>
            )
        }

        const {user} = this.props;
        const {changeInfo, getUserInfo} = this.props;


            return (
                <div>
                    <UserInfo  user={user} changeInfo={changeInfo} getUserInfo={getUserInfo}/>
                </div>
            )


    }
}


const mapStateToProps = state => {
    return {
        user: state.auth.userInfo,
        authenticated: state.auth.authenticated
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUserInfo: () => dispatch(getUserInfo()),
        changeInfo: (state) => dispatch(changeInfo(state))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserInfoPage)