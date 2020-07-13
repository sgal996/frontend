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
import UserInfo from "../components/UserInfo";

class UserInfoPage extends Component {
    constructor(props) {
        super(props);


    }

    componentDidMount() {
        const {getUserInfo} = this.props;
        getUserInfo();
    }


    render() {

        const {user} = this.props;
        const {changeInfo} = this.props;

        if (user !== undefined) {
            return (
                <div>
                    <UserInfo  user={user} changeInfo={changeInfo}/>
                </div>
            )
        }
        return (
            <div>Loading...</div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.auth.userInfo
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