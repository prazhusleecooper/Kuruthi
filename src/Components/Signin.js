import React, {Component} from 'react';
import '../Resources/CSS/Signin.scss';

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return(
            <div>
                {/* Large screens */}
                <div className="sign-in-lg">
                    <div className="d-flex flex-column align-items-center justify-content-center primary-area-section">
                        <div className="d-flex flex-column align-items-start justify-content-center primary-area">
                            <div className="heading-section">
                                Sign in
                                <hr className="primary-area-hr"/>
                            </div>
                            <label className="text-input-label">Email</label>
                            <input type="text" className="emailInput" placeholder="Eg. you@yourmail.com" required={true}/>
                            <label className="text-input-label">Password</label>
                            <input type="text" className="passwordInput" placeholder="Password" required={true}/>
                        </div>
                        <div className="submit-btn-section">
                            <button className="submit-btn">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Signin;
