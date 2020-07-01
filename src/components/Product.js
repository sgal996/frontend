import React, {Component} from "react";

class Product extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                Product: {this.props.name}
                Description: {this.props.description}
                Cijena: {this.props.price}


            </div>
        )
    }
}

export default Product;