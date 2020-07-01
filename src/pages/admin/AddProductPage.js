import React, {Component} from 'react';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

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
        const {categories} = this.props;
        return (
            <div>
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
                            {categories.map((c, idx) =>
                                <option key={idx} value={c.id}>{c.name}</option>
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

            </div>
        );
    }
}



export default AddProductPage;