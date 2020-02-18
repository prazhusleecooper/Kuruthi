import React, {Component} from "react";
import '../Resources/CSS/Signup.scss'

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state ={}
    }

    render() {
        return(
            <div>
                {/* Large screens */}
                <div className="sign-up-lg">
                    <div className="d-flex flex-column align-items-center justify-content-center primary-area-section">
                        <div className="d-flex flex-column align-items-start justify-content-center primary-area">
                            <div className="heading-section">
                                Sign up
                                <hr className="primary-area-hr"/>
                            </div>
                            <label className="text-input-label">Email</label>
                            <input type="text" className="emailInput" placeholder="Eg. you@yourmail.com" required={true}/>
                            <label className="text-input-label">Password</label>
                            <input type="text" className="passwordInput" placeholder="Password" required={true}/>
                            <label className="text-input-label">Re-type Password</label>
                            <input type="text" className="passConfirmInput" placeholder="Re-type Password" required={true}/>
                        </div>
                        <div className="tc-text-section">
                            <span className="tc-text">
                                By signing up you agree to our Terms & conditions
                            </span>
                        </div>
                        <div className="submit-btn-section">
                            <button className="submit-btn">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Signup;
