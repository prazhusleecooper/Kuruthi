import React, {Component} from 'react';
import "../Resources/CSS/Signin.scss"

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
                    <div className="d-flex flex-column align-items-center justify-content-center primary-area">
                        <div className="heading-section">
                            Sign in
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Signin;
