import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Resources/CSS/HeaderNav.scss";
import {NavLink} from "react-router-dom";

class HeaderNav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    //Rendering methods
    //Emergency button
    emReqBtn = () => {
        return(
            <button className="em-req-btn">EMERGENCY REQUEST</button>
        );
    };

    //Sign-in button
    signinBtn = () => {
            return(
                <NavLink to='/signin'><button className="login-btn">Sign in</button></NavLink>
            );
    };

    render() {
        return(
            <div>
                {console.log(this.props.location)}
                {/* Large screens */}
                <div className="d-flex flex-row align-items-center justify-content-between headerNav-lg">
                    <div className="logo-area">
                        <div className="logo-text">
                            KURUTHI
                        </div>
                    </div>
                    <div className="btn-area">
                        { this.emReqBtn() }
                        { this.signinBtn() }
                    </div>
                </div>

            </div>
        );

    };
}

export default HeaderNav;
