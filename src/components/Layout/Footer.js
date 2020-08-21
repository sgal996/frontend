import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";


class Footer extends Component {
    render() {
        return (

                <MDBFooter color="black" className="container-fluid footer">
                    <MDBContainer fluid className="text-center text-md-left">
                        <MDBRow>
                            <MDBCol md="6">
                                <h5 className="title">Društvene mreže</h5>
                                <p>
                                    <Row sm={1} md={6}>
                                        <Col>
                                            <img className={"img-fluid logo"} src={"/img/download.png"} height={"30px"}/>


                                        </Col>
                                        <Col><img className={"img-fluid logo"} src={"/img/insta-photo.png"}/></Col>
                                        <Col>
                                            <img className={"img-fluid logo"} src={"/img/twitter-photo.png"}/>
                                        </Col>
                                    </Row>
                                </p>
                            </MDBCol>
                            <MDBCol md="6">
                                <h5 className="title">Links</h5>
                                <ul>
                                    <li className="list-unstyled">
                                        <a href="#!">O nama</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#!">Kontakt</a>
                                    </li>
                                    <li className="list-unstyled">
                                        <a href="#!">Uvjeti prodaje</a>
                                    </li>

                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </MDBFooter>

        );
    }
}

export default Footer;