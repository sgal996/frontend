import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap/lib';
import Col from "reactstrap/es/Col";
import Row from "reactstrap/es/Row";
import {shopActions} from "../../redux/modules/shop";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {addProduct} from "../../redux/services/shop.service";
import {Redirect} from "react-router-dom";
import {KidsNumbers, MenNumbers, WomenNumbers} from "../../FootwearSizes";
import ClothesSizes from "../../ClothesSizes";


class AddProductPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            img: '',
            category: 'Muskarci',
            subCategory: 'Majice',
            size:'',
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
    handleSubCategoryChange = (e) => {
        this.setState({subCategory: e.target.value});
    };
    handleImageChange = (e) => {
        const imgPath = e.target.value;
        this.setState({img: imgPath.substring(imgPath.lastIndexOf('\\') + 1)});
    };

    handleAddProduct = () => {
        const {onAddProduct} = this.props;
        onAddProduct(this.state);
    };

    handleSize = (e) => {
        if(this.state.size === ""){
            this.setState({size:e.target.value})
        }
        if(this.state.size.includes(e.target.value)){
            this.setState({size: this.state.size.replace(e.target.value,'')})
        }else {
            this.setState({size: this.state.size +' ' + e.target.value})
        }
    }

    render() {
        const categories = [{c: 'Muskarci', idx: 'Muskarci'}, {c: 'Zene', idx: 'Zene'}, {c: 'Djeca', idx: 'Djeca'}];
        const subCategories = [{c: 'Majice', idx: 'Majice'}, {c: 'Hlače', idx: 'Hlače'}, {c: 'Obuća', idx: 'Obuća'}];
        const discounts = [{c: 'Bez popusta', idx: 0}, {c: '5%', idx: 5}, {c: '10%', idx: 10}, {c: '15%', idx: 15},
            {c: '20%', idx: 20}, {c: '25%', idx: 25}, {c: '30%', idx: 30}, {c: '35%', idx: 35}, {c: '40%', idx: 40},
            {c: '45%', idx: 45}, {c: '50%', idx: 50}]
        const {user} = this.props;

        if (user === undefined || user === null) {
            return (
                <Redirect to={"/login"}/>
            )
        }

        return (
            <div>
                <Row>
                    <Col xl="3" lg="3" md="3" sm="3"></Col>
                    <Col lg="6" md="6" sm="6">
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
                                <Input type={'select'} name={'category'} id={'category'}
                                       onChange={this.handleCategoryChange}>
                                    {categories.map((c) =>
                                        <option key={c.idx} value={c.idx}>{c.c}</option>
                                    )}

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for={'subcategory'}>Podkategorija</Label>
                                <Input type={'select'} name={'subcategory'} id={'subcategory'}
                                       onChange={this.handleSubCategoryChange}>
                                    {subCategories.map((c) =>
                                        <option key={c.idx} value={c.idx}>{c.c}</option>
                                    )}

                                </Input>
                            </FormGroup>
                            <FormGroup className={"container-fluid"}  >
                                <Label for={'size'}>Odaberi veličine</Label>
                                <br/>{ (this.state.subCategory === "Majice" || this.state.subCategory === "Hlače")
                                    &&
                            ClothesSizes.map((size) =>  <div className={"d-flex"}><Label for={size}> {size} </Label> <Input onChange={this.handleSize} type="checkbox" placeholder={size} name={size} value={size}/> </div>  )
                            }
                                {
                                    (this.state.subCategory === "Obuća" && this.state.category === "Muskarci")
                                    &&
                                    MenNumbers.map((size) =>  <div className={"d-flex"}><Label for={size}> {size} </Label> <Input onChange={this.handleSize} type="checkbox" placeholder={size} name={size} value={size}/> </div>  )

                                }

                                {
                                    (this.state.subCategory === "Obuća" && this.state.category === "Zene")
                                    &&
                                    WomenNumbers.map((size) =>  <div className={"d-flex"}><Label for={size}> {size} </Label> <Input onChange={this.handleSize} type="checkbox" placeholder={size} name={size} value={size}/> </div>  )

                                }
                                {
                                    (this.state.subCategory === "Obuća" && this.state.category === "Djeca")
                                    &&
                                    KidsNumbers.map((size) =>  <div className={"d-flex"}><Label for={size}> {size} </Label> <Input onChange={this.handleSize} type="checkbox" placeholder={size} name={size} value={size}/> </div>  )

                                }

                            </FormGroup>
                            <FormGroup>
                                <br/>
                                <Label>Cijena</Label>
                                <Input placeholder={'Cijena'} onChange={this.handlePriceChange}/>
                            </FormGroup>
                            <FormGroup>
                                <Label>Popust</Label>
                                <Input type={'select'} name={'discount'} id={'discount'}
                                       onChange={this.handleDiscountChange}>
                                    {discounts.map((c) =>
                                        <option key={c.idx} value={c.idx}>{c.c}</option>
                                    )}

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for={'img'}>Photo</Label>


                                <Input  type={'file'} name={'img'} id={'img'} onChange={this.handleImageChange}/>

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

const mapDispatchToProps = dispatch => {
    return {
        onAddProduct: (product) => dispatch(addProduct(product))
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
AddProductPage.propTypes = {
    onAddProduct: PropTypes.func
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductPage);