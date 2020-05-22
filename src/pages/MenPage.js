import React, {Component} from "react";

import {currentUser} from "../redux/services/dashboard.service";
import {connect} from "react-redux";
import ProductList from "../components/ProductList";


class MenPage extends Component {
    componentDidMount() {
        const {currentUser} = this.props
        currentUser();
        console.log({currentUser})
    }

    render() {


        return (
            <div><ProductList></ProductList> </div>
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

