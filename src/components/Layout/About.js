import React,{Component} from "react";
import {Row,Container,Col} from "reactstrap"


class About extends Component{

    render() {
        return (
            <div className={"container-fluid"} >
                <div style={{marginBottom: "70px"}}></div>
                <img className={"img-fluid"} src={"/img/Clothes_shop.jpg"}/>
                <div className={"container-fluid align-content-center"}>
                    <strong >
                <Row  xs={1}>
                    <Col >
                    Clothes Shop d.o.o.
                    </Col>

                    <Col>
                    Zadarska 1
                    </Col>
                    <Col>
                        23000 Zadar
                    </Col>
                    <Col>
                    OIB: 0323411063788
                    </Col>
                    <Col>
                    SBERBANK d.d. Zagreb

                    </Col>
                    <Col>IBAN: HR792503007113000154363449</Col>
                    <Col>

                    Radno vrijeme:

                    00:00-24:00
                    </Col>
                    <Col>
                    Kontakt

                    Mob: +385 (0) 99 32480 9723
                    </Col>
                    <Col>
                    e-mail:  prodaja@clothes-shop.hr
                    </Col>
                    </Row>
                    </strong>
                </div>
            </div>
        )
    }
}
export default About;