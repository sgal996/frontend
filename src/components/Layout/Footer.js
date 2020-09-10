import React, {Component} from "react";
import {MDBCol, MDBContainer, MDBRow, MDBFooter} from "mdbreact";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import {Link} from "react-router-dom";


class Footer extends Component {
    render() {
        return (
                <div style={{ width: "100%", marginTop: "100px"}}  >
                <MDBFooter color="black" className={"container-fluid"}  >

                        <MDBRow className={"container-fluid"}>
                            <MDBCol  md="6">
                                <h5 className="title">Društvene mreže</h5>

                                    <Row sm={1} md={6}>
                                        <Col>
                                            <a href={"https://instagram.com"}><img className={"img-fluid logo"} src={"/img/download.png"} height={"30px"}/></a>


                                        </Col>
                                        <Col><a href={"https://instagram.com"}> <img  className={"img-fluid logo"} src={"/img/insta-photo.png"}></img></a></Col>
                                        <Col>
                                            <a href={"https://instagram.com"}> <img className={"img-fluid logo"} src={"/img/twitter-photo.png"}/></a>
                                        </Col>
                                    </Row>

                            </MDBCol>
                            <MDBCol md="6">
                                <h5 className="title">Links</h5>
                                <ul>
                                    <li className="list-unstyled">
                                        <a href="/about">O nama</a>
                                    </li>

                                    <li className="list-unstyled">
                                        <a href="/terms">Uvjeti prodaje</a>
                                    </li>

                                </ul>
                            </MDBCol>
                        </MDBRow>
                    <MDBRow className={"mycont"}>
                        <MDBCol></MDBCol>
                    </MDBRow>


                </MDBFooter>
                </div>
        );
    }
}

export default Footer;