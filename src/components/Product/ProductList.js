import React, {Component} from "react";

class ProductList extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.items}
            </div>
        )
    }
}

export default ProductList;