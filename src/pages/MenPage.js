import React, {Component} from "react";

import {currentUser} from "../redux/services/dashboard.service";
import {connect} from "react-redux";



class MenPage extends Component {
    componentDidMount() {
        const {currentUser} = this.props
        currentUser();
        console.log({currentUser})
    }

    render() {


        return (
            <div>Men Page sth </div>
        );
    }
}

    const mapStateToProps = state => {
        return {
            user: state.dashboard.user

        };
    };
    const mapDispatchToProps = dispatch => {
        return {
            currentUser: () => dispatch(currentUser())
        };
    };


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MenPage)

