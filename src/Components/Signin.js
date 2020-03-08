import React, { Component } from 'react';
import { Link, NavLink, useLocation } from "react-router-dom";
import '../Resources/CSS/Signin.scss';
import { ToastContainer, toast } from "react-toastify";

class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailInputValue: '',
            passwordInputValue: '',
        };

    }

    //Non-rendering methods
    handleEmailInput = (event) => {
      this.setState({
          emailInputValue: event.target.value
      })
    };

    handlePasswordInput = (event) => {
      this.setState({
          passwordInputValue: event.target.value
      })
    };

    signInSubmit = () => {
        let regularExpression = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        if(this.email.emailInputValue.length === 0 || this.email.emailInputValue === '') {
            toast.error('The Email cannot be empty', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else if(this.state.passwordInputValue.length === 0 || this.state.passwordInputValue === '') {
            toast.error('The Password cannot be Empty', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else if(!regularExpression.test(this.state.emailInputValue)) {
            toast.error('The entered Email is invalid', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else if(this.state.passwordInputValue.length < 8) {
            toast.error('The Password must be longer than 8 characters', {
               position: 'top-right',
               autoClose: '4000',
               hideProgressBar: true,
               closeOnClick: true,
               pauseOnHover: true,
               pauseOnFocusLoss: true,
               draggable: true,
            });
        } else if(regularExpression.test(this.state.emailInputValue) && this.state.passwordInputValue.length > 0) {
            let requestBody = {
                email: this.state.emailInputValue,
                password: this.state.passwordInputValue,
            };
            fetch('http://localhost:1338/login', {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(requestBody),
                header: {'Content-Type': 'application/json'},
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('THE REQUEST REULT IS:::', result);
                    },
                    (error) => {
                        console.log('Error logging in::', error);
                    }
                );
        }
    };

    //Rendering methods
    //Component life-cycle methods

    render() {
        return(
            <div>
                {/* Large screens */}
                <div className="sign-in-lg">
                    <ToastContainer />
                    <div className="d-flex flex-column align-items-center justify-content-center primary-area-section">
                        <div className="d-flex flex-column align-items-start justify-content-center primary-area">
                            <div className="heading-section">
                                Sign in
                                <hr className="primary-area-hr"/>
                            </div>
                            <label className="text-input-label">Email</label>
                            <input type="email" className="emailInput" placeholder="Eg. you@yourmail.com" required={true} onChange={(event) => this.handleEmailInput(event)} />
                            <label className="text-input-label">Password</label>
                            <input type="password" className="passwordInput" placeholder="Password" required={true} onChange={(event) => this.handlePasswordInput(event)} />
                        </div>
                        <div className="submit-btn-section">
                            <button className="submit-btn" onClick={() => this.signInSubmit()}>Sign in</button>
                        </div>
                        <div className="sign-up-info">
                            Don't have an Account? Click here to <NavLink to="/signup" className="sign-up-navlink">Sign up</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Signin;
