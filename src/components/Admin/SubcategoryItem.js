import React, {Component} from "react";
import Row from "reactstrap/lib/Row";
import Col from "reactstrap/lib/Col";
import Button from "reactstrap/lib/Button";
import Tooltip from "reactstrap/lib/Tooltip";

class SubcategoryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hover: false
        }
    }

    delete = () => {
        const {deleteSubcategory, subcategory} = this.props;
        deleteSubcategory({name: subcategory}.name)
    }

    onMouse = () =>{
        this.setState({hover: !this.state.hover})

    }

    render() {
        const {subcategory, deleteSubcategory} = this.props;
        return (
            <div  className={"container-fluid"}>

                <Row><Col>{subcategory.name}</Col> <Col><div onMouseEnter={this.onMouse} onMouseLeave={this.onMouse}> <Button
                    disabled={subcategory.name === "Majice" || subcategory.name === "Hlače" || subcategory.name === "Obuća"
                    || subcategory.name === "Čarape" || subcategory.name === "Donje rublje"} onFocus={"Ovo je zadana podkategorija"}
                    color={"danger"}
                    onClick={this.delete}
                    className={"btn-sm"}>Ukloni</Button>
                    {
                        this.state.hover && (subcategory.name === "Majice" || subcategory.name === "Hlače" || subcategory.name === "Obuća"
                            || subcategory.name === "Čarape" || subcategory.name === "Donje rublje") &&
                        <div><strong>Zadana podkategorija se ne može brisati!</strong></div>
                    }
                </div></Col></Row>

            </div>
        )
    }

}

export default SubcategoryItem;