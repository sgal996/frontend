import React, {Component} from "react";

class Registration extends Component{
    render() {
        return(
        <div>
            <form>
                <label>Username:</label> <input type={<textarea name="username" id="username" cols="30" rows="10"></textarea>}>
            </input><br/>
                <label>Password:</label> <input type={<textarea name="password" id="password" cols="30" rows="10"></textarea>}>
            </input><br/>
                <label>Repeat Password:</label> <input type={<textarea name="password" id="password" cols="30" rows="10"></textarea>}>
            </input><br/>
                <input type="submit" value="Login" />
            </form>
        </div>
        )
    }
}