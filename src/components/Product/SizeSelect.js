import React,{Component} from "react";
import Tooltip from "reactstrap/lib/Tooltip";

class SizeSelect extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <form>

                    <div className="form-check">
                        <label>
                            <input
                                type="radio"
                                name="react-tips"
                                value="Pouzećem"
                                checked={true}
                                className="form-check-input"

                            />
                            Plaćanje pouzećem
                        </label>
                    </div>

                    <div className="form-check">
                        <div>
                            <p> <span  href="#" id="TooltipExample">Kreditna kartica</span>.</p>
                            <Tooltip placement="right" >

                                <label>
                                    <input
                                        disabled={true}
                                        type="radio"
                                        name="react-tips"
                                        value="Kreditna kartica"
                                        className="form-check-input"
                                    />
                                    Trenutno nije omogućeno plaćanje karticama
                                </label>

                            </Tooltip>
                        </div>
                    </div>

                    <div className="form-check">
                        <div>
                            <p> <span  href="#" id="TooltipExample2">Paypal</span>.</p>
                            <Tooltip placement="right" >

                                <label>
                                    <input
                                        disabled={true}
                                        type="radio"
                                        name="react-tips"
                                        value="Paypal"
                                        className="form-check-input"
                                    />
                                    Trenutno nije moguće koristit Paypal
                                </label>

                            </Tooltip>
                        </div>
                    </div>



                </form>
            </div>
        )
    }
}

export default SizeSelect;