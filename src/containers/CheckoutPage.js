import React, {Component} from "react";
import {connect} from "react-redux";

import {order} from "../redux/services/auth.service"
import {Col, FormGroup, Input, Label, Row, Tooltip} from "reactstrap/lib";
import CartItem from "../components/Cart/CartItem";
import CheckoutItem from "../components/Checkout/CheckoutItem";
import Button from "reactstrap/lib/Button";
import PaymentConfirmation from "../components/Checkout/PaymentConfirmation";
import {Link} from "react-router-dom";
import Redirect from "react-router-dom/es/Redirect";
import {withRouter} from "react-router-dom"

class CheckoutPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hovered: false,
            hovered2: false,
            postarina: 35,
            adressConfirmed: false,
            checked: false,
            buttonDisabled: true

        }
    }

    handleAdressConfirmed = () =>{
        this.setState({adressConfirmed: true});
        this.setState({buttonDisabled: false})
    }

    handleOrder = (data) =>{
        const {onOrder, history} = this.props;
        onOrder(data);
        history.push("/dashboard");
    }

    toggle = () => {

        this.onShowAlert();


    }
    toggle2 = () =>{
        this.setState({hovered2: true}, () => {
            window.setTimeout(() => {
                this.setState({hovered2: false})
            }, 3000)
        });

    }
    onShowAlert = () => {
        this.setState({hovered: true}, () => {
            window.setTimeout(() => {
                this.setState({hovered: false})
            }, 3000)
        });
    }

    render() {
        const {items,userInfo} = this.props;
        const totalPrice = items.reduce((total, item) => total + item.price * item.quantity -(item.price * item.discount/100* item.quantity) , 0)
        return (
            <div className={"container-fluid"}>
                <Row sm={12} md={12} lg={12}>
                    <Col></Col>
                    <Col className={"margin3px"}><strong>Naziv</strong></Col>
                    <Col className={"margin3px"}><strong>Veličina</strong></Col>
                    <Col className={"margin3px"}><strong>Količina</strong></Col>
                    <Col className={"margin3px"}><strong>Cijena</strong></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>
                        {
                            items.map((item) => <CheckoutItem key={item.id} size={item.size} name={item.name} price={item.price}
                                                              discount={item.discount} img={item.img}
                                                              quantity={item.quantity} id={item.id}></CheckoutItem>)
                        }

                    </Col>
                </Row>
                <Row>
                    <Col  sm={8} md={8} lg={8} xl={8} xs={8}></Col>


                    <Col sm={2} md={3} lg={3} xl={3}
                         xs={2} className={"underline"}> <strong>Poštarina: {(totalPrice > 300) ? 0 : this.state.postarina.toFixed(2)} HRK</strong></Col>
                    <Col/>

                </Row>
                <Row>
                    <Col sm={8} md={8} lg={8} xl={8} xs={8}></Col>


                    <Col  sm={2} md={3} lg={3} xl={3}
                         xs={2}><strong><span>UKUPNO:</span>  {(totalPrice > 300) ? totalPrice.toFixed(2) : (this.state.postarina + totalPrice).toFixed(2)} HRK </strong>
                    </Col>
                    <Col/>

                </Row>
                <Row>
                    <Col sm={12} md={12} lg={12}>


                            <form>

                                <div className="form-check">
                                    <label>
                                        <input
                                            type="radio"
                                            name="react-tips"
                                            value="Pouzećem"
                                            checked={true}
                                            className="form-check-input"

                                        />
                                        Plaćanje pouzećem
                                    </label>
                                </div>

                                <div className="form-check">
                                    <div>
                                        <p> <span  href="#" id="TooltipExample">Kreditna kartica</span>.</p>
                                        <Tooltip placement="right" isOpen={this.state.hovered} target="TooltipExample" toggle={this.toggle}>

                                    <label>
                                        <input
                                            disabled={true}
                                            type="radio"
                                            name="react-tips"
                                            value="Kreditna kartica"
                                            className="form-check-input"
                                        />
                                        Trenutno nije omogućeno plaćanje karticama
                                    </label>

                                        </Tooltip>
                                    </div>
                                </div>

                                <div className="form-check">
                                    <div>
                                        <p> <span  href="#" id="TooltipExample2">Paypal</span>.</p>
                                        <Tooltip placement="right" isOpen={this.state.hovered2} target="TooltipExample2" toggle={this.toggle2}>

                                            <label>
                                                <input
                                                    disabled={true}
                                                    type="radio"
                                                    name="react-tips"
                                                    value="Paypal"
                                                    className="form-check-input"
                                                />
                                                Trenutno nije moguće koristit Paypa
                                            </label>

                                        </Tooltip>
                                    </div>
                                </div>



                            </form>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <strong>{!!userInfo ? userInfo.name : "Gost"}, želite li da Vam narudžba bude poslana na sljedeću adresu:
                        </strong><br/>
                    </Col>

                </Row>
                <Row>
                    <Col><h3>{!!userInfo ? userInfo.adress : ""}</h3></Col>
                </Row>

                <Row>
                    <Col><h3>{!!userInfo ? userInfo.postalCode : ""} {!!userInfo ? userInfo.city : ""} </h3></Col>
                    { !this.state.adressConfirmed &&
                    <Col>
                    <div>
                    <Button onClick={this.handleAdressConfirmed} disabled={!(!!userInfo)} className={"myButton"} >Da</Button>
                    <Link to={"/myinfo"}><Button className={"myButton"} >Ne</Button></Link>
                    </div>
                    </Col>
                        }
                    {
                        this.state.adressConfirmed &&
                        <span className="checkmark">
                        <div className="checkmark_circle"></div>
                         <div className="checkmark_stem"></div>
                         <div className="checkmark_kick"></div>
                        </span>

                    }
                </Row>
                <Row>
                    <PaymentConfirmation buttonDisabled={this.state.buttonDisabled} items={items} order={this.handleOrder} price={totalPrice}></PaymentConfirmation>
                </Row>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        items: state.auth.cart,
        userInfo: state.auth.userInfo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrder: (data) => dispatch(order(data))

    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CheckoutPage))