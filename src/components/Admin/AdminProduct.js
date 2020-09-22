import React, {Component} from "react";
import {MDBIcon} from "mdbreact";
import {Button} from "reactstrap";
import Collapse from "reactstrap/lib/Collapse";
import Alert from "reactstrap/lib/Alert";
import Card from "reactstrap/lib/Card";
import CardImg from "reactstrap/lib/CardImg";
import CardBody from "reactstrap/lib/CardBody";
import CardTitle from "reactstrap/lib/CardTitle";
import CardSubtitle from "reactstrap/lib/CardSubtitle";
import CardText from "reactstrap/lib/CardText";
import Badge from "reactstrap/lib/Badge";

class AdminProduct extends Component{
    constructor(props) {
        super(props);
        this.state={
            isOpen:false
        }
    }

    toggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }

    handleDelete = () =>{
        const {product, onDelete} = this.props;
        onDelete(product);
    }

    render() {
        const location = "/img/"
        const {img, sizes, price, product, onDelete, newProduct, description, name} = this.props
        return(
            <div>

                <Card className={"container-fluid"}>
                    <CardImg className={"img-fluid"} src={location + img}/>

                    <CardBody
                        className={"container-fluid justify-content-center"}>
                        <CardTitle className={"d-flex justify-content-center"}>
                            {name}
                        </CardTitle>
                        <CardSubtitle
                            className={!!product.discount === true ?
                                "crossed d-flex justify-content-center" :
                                "none d-flex justify-content-center"}>
                            {price.toFixed(2)} HRK
                        </CardSubtitle>
                        {!!product.discount &&
                        <div className={" d-flex justify-content-center "}>
                            <Badge>{product.discount} %</Badge></div>}
                        {!!product.discount && <CardSubtitle
                            className={"d-flex justify-content-center"}>
                            {(product.price - (product.price * product.discount / 100)).toFixed(2)}
                            HRK </CardSubtitle>}
                        <div>
                            <CardText className={"container-fluid"}>





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
                                    <div className={"float-right"}>
                                        { !product.hidden &&
                                            <Button color={"red"} className={"btn-sm"}
                                                    onClick={this.handleDelete}>Makni iz dućana</Button>
                                        }
                                        { product.hidden &&
                                        <Button color={"green"} className={"btn-sm"}
                                                onClick={this.handleDelete}>Vrati u dućan</Button>
                                        }
                                    </div>
                                </div>
                            </CardText>
                        </div>


                    </CardBody>

                </Card>

            </div>
        )
    }
}

export default AdminProduct;