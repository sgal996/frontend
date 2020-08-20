import React,{Component} from "react";
import Collapse from "reactstrap/lib/Collapse";
import Card from "reactstrap/lib/Card";
import CardBody from "reactstrap/lib/CardBody";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import moment from "moment";
import {Button} from "reactstrap";


class OrderItem extends Component{
    constructor(props) {
        super(props);
        this.state={isOpen: false}
    }
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    handleConfirmOrder = () => {

        const {confirmOrder, order, getOrders} = this.props;
        confirmOrder({orderId: order.orderId});





    }
    render() {
        const {order}=this.props;
        const {isOpen}=this.state;

        return(
            <div className={"container-fluid"}>
            <div color="primary" onClick={this.toggle} style={{ margin: '1rem', display: 'block', cursor: 'pointer'}} >
                <Row xs={2} sm={2} md={4} lg={6} className={order.confirmed ? "none" : "orderitem round" }>
                    <Col className={"d-flex"} >{order.orderId}</Col>
                    <Col className={"d-flex justify-items-center"} >{moment(order.createdAt).format('DD.MM.YYYY, HH:mm:ss')}</Col>
                    <Col className={"d-flex justify-items-center"} >{order.username}</Col>
                    <Col xs={6} className={'d-flex justify-content-center '}>{order.price} HRK</Col>
                    {!order.confirmed &&
                        <Col className={"d-flex"} >
                        <Button className={'myButton'} onClick={this.handleConfirmOrder} >
                            Potvrdi
                        </Button>

                    </Col>
                    }
                    {
                        order.confirmed &&
                            <Col>
                        <span className="checkmark">
                        <div className="checkmark_circle"></div>
                         <div className="checkmark_stem"></div>
                         <div className="checkmark_kick"></div>
                        </span>
                            </Col>
                    }
                </Row>
            {/*</div>{ !order.confirmed && !isOpen &&*/}
            {/*    <Button className={'btn-lg btn-dark btn-block'} >*/}
            {/*        Potvrdi narudžbu*/}
            {/*    </Button>}*/}
            <Collapse isOpen={isOpen}>
                <Card >{  isOpen &&
                    <CardBody>
                        {order.productDtos.map((p, idx) =>
                            <Row key={idx} style={{padding: '10px'}}>
                                <Col xs={8}>{p.name}</Col>
                                <Col xs={4} className={'text-right text-muted'}>
                                    {!!p.discount &&
                                    <div>
                                        {p.price - (p.price * p.discount / 100)} HRK
                                    </div>
                                    }
                                    {!p.discount &&
                                    <div>{p.price} HRK</div>
                                    }
                                </Col>
                            </Row>
                        )}
                        {!!order.coupon &&
                        <Row style={{padding: '10px'}}>
                            <Col xs={12}>{order.coupon}</Col>
                        </Row>
                        }
                    </CardBody>

                }</Card>
            </Collapse>
            </div>

            </div>
        )
    }
}

export default OrderItem;