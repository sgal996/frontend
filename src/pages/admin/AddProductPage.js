import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import {shopActions} from "../../redux/modules/shop";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addProduct} from "../../redux/services/shop.service";

class AddProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            img: '',
            category: '',
            price: '',
            discount: '0'
        };
    }

    handleNameChange = (e) => {
        this.setState({name: e.target.value});
    };
    handleDescriptionChange = (e) => {
        this.setState({description: e.target.value});
    };
    handlePriceChange = (e) => {
        this.setState({price: e.target.value});
    };
    handleDiscountChange = (e) => {
        this.setState({discount: e.target.value});
    };
    handleCategoryChange = (e) => {
        this.setState({category: e.target.value});
    };
    handleImageChange = (e) => {
        const imgPath = e.target.value;
        this.setState({img: imgPath.substring(imgPath.lastIndexOf('\\') + 1)});
    };

    handleAddProduct = () => {
        const {onAddProduct} = this.props;
        onAddProduct(this.state);
    };

    render() {
        const categories = [{c:'Muskarci',idx: 1}, {c:'Zene', idx:2}, {c:'Djeca', idx:3}];
        return (
            <div>
                <Row>
                <Col xl ="3"lg="3" md="3" sm="3"></Col>
                <Col lg="6" md="6" sm="6" >
                <Form className={'add-product-form'}>
                    <FormGroup>
                        <Label>Naziv</Label>
                        <Input placeholder={'Naziv'} onChange={this.handleNameChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Opis</Label>
                        <Input placeholder={'Opis'} onChange={this.handleDescriptionChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={'category'}>Kategorija</Label>
                        <Input type={'select'} name={'category'} id={'category'} onChange={this.handleCategoryChange}>
                            {categories.map((c) =>
                                <option key={c.idx} value={c.idx}>{c.c}</option>
                            )}

                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label>Cijena</Label>
                        <Input placeholder={'Cijena'} onChange={this.handlePriceChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Popust</Label>
                        <Input placeholder={'Popust'} onChange={this.handleDiscountChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for={'img'}>Photo</Label>
                        <Input type={'file'} name={'img'} id={'img'} onChange={this.handleImageChange}/>
                    </FormGroup>
                    <Button className={'btn-lg btn-dark btn-block'} onClick={this.handleAddProduct}>
                        Dodaj
                    </Button>
                </Form>
                </Col>
                </Row>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAddProduct: (product) => dispatch(addProduct(product))
    }
}
AddProductPage.propTypes = {
    onAddProduct: PropTypes.func
};


export default connect(
    null,
    mapDispatchToProps
)(AddProductPage);