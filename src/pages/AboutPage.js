import React,{Component} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import Container from "reactstrap/es/Container";

class AboutPage extends Component{
    render() {
        return(
            <Container><About></About></Container>
        )
    }
}

export default AboutPage;