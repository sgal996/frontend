import React, {Component} from "react";
import Collapse from "reactstrap/lib/Collapse";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import moment from "moment";
import {Button} from "reactstrap";
import Spinner from "reactstrap/lib/Spinner";


class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,


        }
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    handleConfirmOrder = () => {

        const {confirmOrder, order, getOrders} = this.props;
        confirmOrder({orderId: order.orderId});


    }

    handleOrderDeliver = () => {
        const {order, orderDelivered} = this.props;
        orderDelivered(order);
    }

    handleOrderCanceled = () => {

        const {order, orderCanceled} = this.props;
        orderCanceled(order);
    }

    render() {
        const {order, role, user, orderDelivered, allUsers} = this.props;
        const {isOpen} = this.state;



        return (
            <div className={"container-fluid underline"}>
                <div color="primary" onClick={this.toggle}
                     style={{margin: '1rem', display: 'block', cursor: 'pointer'}}>
                    <Row className={order.confirmed ? "none" : "orderitem round"}>
                        <Col xs={1} className={"d-flex"}>{order.orderId}</Col>
                        <Col xs={3}
                             className={"marginbig d-flex justify-items-center"}>{moment(order.createdAt).format('DD.MM.YYYY, HH:mm:ss')}
                        </Col>
                        <Col xs={4}
                             className={"margin3px d-flex justify-items-center"}><strong>{order.username}</strong>
                        </Col>
                        { order.price > 300 ?

                        <Col xs={2}
                             className={'d-flex justify-content-center '}><strong>{order.price.toFixed(2)} HRK</strong>
                        </Col> : <Col xs={2}
                                      className={'d-flex justify-content-center '}><strong>{(order.price+35).toFixed(2)} HRK</strong>
                            </Col>

                        }

                        {
                            order.cancelled &&
                            <Col xs={2}>
                                <strong>Narudžba je stornirana</strong>
                            </Col>
                        }

                        {
                            // user i admin
                            order.confirmed && order.delivered &&
                            <Col xs={2}>
                            <span className="checkmark">
                                <div className="checkmark_circle"></div>
                                <div className="checkmark_stem"></div>
                                <div className="checkmark_kick"></div>
                            </span>
                            </Col>
                        }
                        {
                            // admin i user
                            order.confirmed && !order.delivered &&
                            <Col xs={2}>
                                <div> <Spinner color="success"/> <strong>U dostavi</strong></div>
                            </Col>


                        }

                    </Row>

                    {
                        //user
                        role.length < 2 && !order.confirmed && !order.cancelled &&
                        <div>
                            <div><Spinner color="dark"/>Narudžba je obradi </div>

                        </div>

                    }


                    <Collapse isOpen={isOpen}>
                        <Card>{
                            isOpen &&
                            <CardBody>
                                <Row>
                                    <Col><strong>
                                        Adresa: <br/>
                                        {order.name} <br/>
                                        {order.adress}<br/>
                                        {order.postalCode + ' ' + order.city}
                                    </strong>
                                    </Col>
                                </Row>
                                <br/>
                                <strong>Proizvodi: </strong>
                                {order.productDtos.map((p, idx) =>
                                    <Row key={idx} style={{padding: '10px'}}>
                                        <Col xs={6}>{p.name}</Col>

                                        <Col xs={6} className={'text-right text-muted'}>
                                            {!!p.discount &&
                                            <div>
                                                {(p.price - (p.price * p.discount / 100)).toFixed(2)} HRK
                                            </div>
                                            }
                                            {
                                                !p.discount &&
                                                <div>{p.price.toFixed(2)} HRK</div>
                                            }
                                        </Col>

                                    </Row>


                                )}
                                {
                                    order.price < 300 ? <Row>
                                        <Col><strong>Poštarina: 35 HRK</strong></Col>
                                    </Row> : <Row>
                                        <Col><strong>Poštarina: 0 HRK</strong></Col>
                                    </Row>
                                }
                                {
                                    order.price > 300 ?
                                    <Row>
                                <Col><strong>Ukupna cijena: {order.price.toFixed(2)} HRK</strong></Col>
                                </Row> : <Row>
                                            <Col><strong>Ukupna cijena: {(order.price + 35).toFixed(2)} HRK</strong></Col>
                                        </Row>

                                }
                                {/*{!!order.coupon &&*/}
                                {/*<Row style={{padding: '10px'}}>*/}
                                {/*    <Col xs={12}>{order.coupon}</Col>*/}
                                {/*</Row>*/}
                                {/*}*/}

                            </CardBody>


                        }

                            {
                                !order.confirmed && !order.cancelled &&
                                <Col xs={1} className={"d-flex"}>
                                    {
                                        !!role && role.length > 1 &&
                                        <Button className={'myButton'} onClick={this.handleConfirmOrder}>
                                            Potvrdi
                                        </Button>
                                    }


                                </Col>
                            }

                        </Card>
                    </Collapse>

                </div>
                {
                    role.length < 2 && order.confirmed && !order.delivered &&
                    <Button onClick={this.handleOrderDeliver} color={"success"}
                            className={"btn-sm"}>Dostavljena</Button>

                }
                {
                    role.length < 2 && !order.confirmed && !order.delivered && !order.cancelled &&
                    <Button onClick={this.handleOrderCanceled} color={"danger"} className={"btn-sm"}>Storniraj</Button>

                }

            </div>
        )
    }
}

export default OrderItem;