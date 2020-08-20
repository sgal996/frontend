import React,{Component} from "react";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import About from "../components/Layout/About";
import Container from "reactstrap/es/Container";

class AboutPage extends Component{
    render() {
        return(
            <Container><About></About></Container>
        )
    }
}

export default AboutPage;