import React,{Component} from "react";
import {Row,Container,Col} from "reactstrap"


class About extends Component{

    render() {
        return (
            <Container >
                <Row>
                    <Col sm="6" md="4" lg="2">.col</Col>
                    <Col sm="6" md="4" lg="2">.col</Col>
                    <Col sm="6" md="4" lg="2">.col</Col>
                    <Col sm="6" md="4" lg="2">.col</Col>
                </Row>


            </Container>
        )
    }
}
export default About;