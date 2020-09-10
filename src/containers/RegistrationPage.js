import React, {Component} from "react";

import {register} from "../redux/services/auth.service";
import {connect} from "react-redux";
import Registration from "../components/Registration/Registration";

class RegistrationPage extends Component {
    render() {
        const {onRegister, registered} = this.props;
        return (
            <div className={"container-fluid"}>
                <Registration onRegister={onRegister} registered={registered} />
            </div>

        )


    }

}

const mapStateToProps = state => {
    return {
        error: state.auth.error,
        registered: state.auth.registered
    }

}
const mapDispatchToProps = dispatch => {
    return {
        onRegister: (request) => dispatch(register(request))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationPage);
