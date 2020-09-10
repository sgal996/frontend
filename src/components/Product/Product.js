import React, {Component} from "react";
import {
    MDBIcon,

} from "mdbreact";
import {Button, ButtonGroup, ButtonToolbar} from "reactstrap"
import {Alert, Badge, Col, Row, Tooltip,} from "reactstrap/lib";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from "reactstrap/lib"
import {connect} from "react-redux";
import Collapse from "reactstrap/lib/Collapse";
import SizeSelect from "./SizeSelect";
import ClothesSizes from "../../ClothesSizes";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdded: false,
            isOpen: false,
            size: ''
        }

    }

    onSizeSelect = (e) => {
        this.setState({size: e.target.value})

    }

    handleClick = () => {
        const {addToCart, product} = this.props;
        product.size = this.state.size;
        addToCart(product);
        this.onShowAlert();


    }
    onShowAlert = () => {
        this.setState({isAdded: true}, () => {
            window.setTimeout(() => {
                this.setState({isAdded: false})
            }, 2000)
        });
    }
    toggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }


    render() {
        const {name, description, newProduct, price, img, category, product, sizes} = this.props;
        const size = !!product.size ? product.size.split(' ') : [];
        const location = "/img/"


        return (

            <Card className={"container-fluid"}>
                <CardImg className={"img-fluid"} src={location + img}
                         alt="Card image cap"/>

                <CardBody
                    className={"container-fluid justify-content-center"}>
                    <CardTitle className={"d-flex justify-content-center"}>
                        <strong>{name}</strong>
                    </CardTitle>
                    <CardSubtitle
                        className={!!product.discount === true ?
                            "crossed d-flex justify-content-center" :
                            "none d-flex justify-content-center"}>
                        {price} HRK
                    </CardSubtitle>
                    {!!product.discount &&
                    <div className={" d-flex justify-content-center "}>
                        <Badge className={"margin3px"}>{product.discount} %</Badge></div>}
                    {!!product.discount && <CardSubtitle
                        className={"d-flex justify-content-center"} >
                        {parseFloat(product.price - (product.price * product.discount / 100)).toFixed(2)}
                        HRK </CardSubtitle>}
                    <div>
                        <CardText className={"container-fluid"}>

                            <div className={"container-fluid d-flex"}>
                                {
                                    <form className={"container-fluid d-flex"}>
                                        {
                                            !!sizes && sizes.map((char) => char!=='Z' ? !!char &&
                                                <div className={"container-fluid"}>
                                                    <label>
                                                        <input
                                                            className={"form-check-input"}
                                                            type="radio"
                                                            name="react-tips"
                                                            value={char}
                                                            onClick={this.onSizeSelect}

                                                        />
                                                        {char}
                                                    </label>
                                                </div> : !!char &&
                                                <div className={"container-fluid"}>
                                                    <label>
                                                        <input
                                                            className={"form-check-input"}
                                                            type="radio"
                                                            name="react-tips"
                                                            value={'XL'}
                                                            onClick={this.onSizeSelect}

                                                        />
                                                        {'XL'}
                                                    </label>
                                                </div>)}

                                    </form>
                                }


                            </div>

                            <div className={"d-flex justify-content-center"}>

                                <Badge>


                                    <MDBIcon  icon="cart-plus"
                                             style={{cursor: 'pointer'}} onClick={this.handleClick}>Dodaj u košaricu</MDBIcon>
                                    {
                                        newProduct &&
                                        <Badge
                                            className={"d-flex justify-content-center badge"}>
                                            New
                                        </Badge>}
                                </Badge>
                            </div>

                            <Button
                                className={"d-flex justify-content" +
                                "-center btn-secondary2"}
                                onClick={this.toggle}>
                                Opis
                            </Button>
                            <div className={"container-fluid justify-content-center"}>
                                <Collapse
                                    className={"container-fluid justify-content-center"}
                                    isOpen={this.state.isOpen}>
                                    {description}
                                </Collapse>
                            </div>
                        </CardText>
                    </div>


                </CardBody>
                {
                    this.state.isAdded &&
                    <Alert className={"d-flex justify-content-center"}
                           color="primary">
                        Proizvod je uspješno <br/>
                        dodan u košaricu!!
                    </Alert>
                }
            </Card>

        )
    }
}

export default Product;