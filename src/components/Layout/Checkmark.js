import React, {Component} from "react";

class Checkmark extends Component {

    render() {
        return(
            <span className="checkmark">
                        <div className="checkmark_circle"></div>
                         <div className="checkmark_stem"></div>
                         <div className="checkmark_kick"></div>
                        </span>
        )
    }


}

export default Checkmark;