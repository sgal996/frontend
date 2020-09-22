import React, {Component} from "react";
import Collapse from "reactstrap/lib/Collapse";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Button from "reactstrap/lib/Button";
import SubcategoryItem from "./SubcategoryItem";

class SubcategoryDelete extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        }
    }

    toggle = () =>{
        this.setState({isOpen: !this.state.isOpen})
    }

    onDelete = (subcategory) =>{
        const {deleteSubcategory} = this.props;
        deleteSubcategory({name: subcategory});

    }

    render() {
        const {isOpen} = this.state;
        const {subcategories, deleteSubcategory} = this.props;
        return(
            <div  className={"container-fluid"}>

                <Button onClick={this.toggle} className={"btn-sm"} color={"primary"}>Pregledaj podkategorije</Button>

                <Collapse isOpen={isOpen}>
                    {
                        subcategories.map(subcategory => <SubcategoryItem subcategory={subcategory} deleteSubcategory={deleteSubcategory}/>)
                    }


                </Collapse>

            </div>
        )
    }


}

export default SubcategoryDelete;