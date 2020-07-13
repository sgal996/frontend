import React, {Component} from "react";
import {
    MDBIcon,

} from "mdbreact";
import {Alert, Badge, Col, Row, Tooltip} from "reactstrap";
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from "reactstrap"
import {connect} from "react-redux";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state={
            isAdded: false,
        }
    }

    handleClick = () =>{
        const {addToCart, product} = this.props;
        addToCart(product);
        this.onShowAlert();


    }
    onShowAlert = ()=>{
        this.setState({isAdded:true},()=>{
            window.setTimeout(()=>{
                this.setState({isAdded:false})
            },2000)
        });
    }


    render() {
        const {name, description, newProduct, price, img, category}=this.props;

        return (

            <Card>
                <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{name}</CardTitle>
                    <CardSubtitle>{price} HRK</CardSubtitle>
                    <CardText>{description}</CardText>{
                    newProduct &&
                    <Badge color="secondary">New</Badge>}
                    <br/>
                    <Badge color="secondary">
                    <div style={{cursor:'pointer'}}>

                        <MDBIcon icon="cart-plus" style={{cursor: 'pointer'}} onClick={this.handleClick}/>

                    </div>
                        { this.state.isAdded &&
                        <Alert color="success">
                            Proizvod je uspješno dodan u košaricu!!
                        </Alert>}
                    </Badge>
                </CardBody>
            </Card>

        )
    }
}

const mapStateToProps = state =>{
    return{
        cart: state.auth.cart
    }
}


export default connect(
    mapStateToProps,
    null
) (Product);