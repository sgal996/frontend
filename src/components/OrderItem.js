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
    render() {
        const {order}=this.props;
        const {isOpen}=this.state;

        return(
            <div>
            <div color="primary" onClick={this.toggle} style={{ margin: '1rem', display: 'block', cursor: 'pointer'}} >
                <Row style={{padding: '10px'}}>
                    <Col xs={2}>{order.orderId}</Col>
                    <Col xs={3}>{moment(order.createdAt).format('DD.MM.YYYY, HH:mm:ss')}</Col>
                    <Col xs={4}>{order.username}</Col>
                    <Col xs={3} className={'text-right'}>{order.price} HRK</Col>
                </Row>
            </div>{ !order.confirmed && !isOpen &&
                <Button className={'btn-lg btn-dark btn-block'} >
                    Potvrdi narudžbu
                </Button>}
            <Collapse isOpen={isOpen}>
                <Card>{ !order.confirmed && isOpen &&
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
                        <Button className={'btn-lg btn-dark btn-block'} >
                            Potvrdi narudžbu
                        </Button>
                    </CardBody>

                }</Card>
            </Collapse>
            </div>
        )
    }
}

export default OrderItem;