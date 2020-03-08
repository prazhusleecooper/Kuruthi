import React, {Component} from "react";
import '../Resources/CSS/Signup.scss';
import { ToastContainer, toast } from "react-toastify";


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state ={
            inputEmail: '',
            inputUsername: '',
            inputPassword: '',
            inputConfirmPassword: '',
            inputAge: '',
            inputBloodGroup: '',
            inputPhoneNumber: '',
        };

    }

    //Non-rendering methods
    //Handling the email input
    handleEmailInput = (event) => {
        this.setState({
            inputEmail: event.target.value,
        })
    };

    //Handling the username input
    handleUsernameInput = (event) => {
        this.setState({
            inputUsername: event.target.value,
        })
    };

    //Handling the password input
    handlePasswordInput = (event) => {
        this.setState({
            inputPassword: event.target.value,
        })
    };

    //Handling the confirm password input
    handleConfirmPasswordInput = (event) => {
        this.setState({
            inputConfirmPassword: event.target.value,
        })
    };

    //Handling the age input
    handleAgeInput = (event) => {
        this.setState({
            inputAge: event.target.value,
        })
    };

    //Handling the BloodGroup input
    handleBloodGroupInput = (event) => {
        this.setState({
            inputBloodGroup: event.target.value,
        })
    };

    //Handling the Phone number input
    handlePhoneNumberInput = (event) => {
        this.setState({
            inputPhoneNumber: event.target.value,
        })
    };

    //Handling the user Sign-up
    handleSignup = () => {
        let emailRegEx = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        let phoneNumberRegEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        let bloodGroups = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
        if(this.state.inputEmail === '' || this.state.inputUsername === '' || this.state.inputPassword === '' || this.state.inputConfirmPassword === '' || this.state.inputAge === '' || this.state.inputBloodGroup === '' || this.state.inputPhoneNumber === '') {
            toast.error('Please fill all the details', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else if(!emailRegEx.test(this.state.inputEmail)) {
            toast.error('Invalid Email, please enter a valid email', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else if(this.state.passwordInputValue.length < 8 || this.state.inputConfirmPassword.length < 8) {
            toast.error('Password must contain atleast 8 characters', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else if(this.state.inputPassword !== this.state.inputConfirmPassword) {
            toast.error('The entered passwords donot match', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else if(!bloodGroups.includes(this.state.inputBloodGroup)) {
            toast.error('Please enter a valid blood group', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else if(!phoneNumberRegEx.test(this.state.inputPhoneNumber)) {
            toast.error('Please enter a valid Phone Number', {
                position: 'top-right',
                autoClose: '4000',
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                pauseOnFocusLoss: true,
                draggable: true,
            });
        } else {
            let requestBody = {
                email: this.state.inputEmail,
                password: this.state.inputPassword,
                userName: this.state.inputUsername,
                age: parseInt(this.state.inputAge),
                bloodGroup: this.state.inputBloodGroup,
                phoneNumber: this.state.inputPhoneNumber,
            };
            fetch('http://localhost:1338/signup', {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log('SIGNUP RESULT:::', result);
                    },
                    (error) => {
                        console.log('ERROR SIGNIN-UP:::', error);
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
                <div className="sign-up-lg">
                    <div className="d-flex flex-column align-items-center justify-content-center primary-area-section">
                        <ToastContainer />
                        <div className="d-flex flex-column align-items-start justify-content-center primary-area">
                            <div className="heading-section">
                                Sign up
                                <hr className="primary-area-hr"/>
                            </div>

                            <label className="text-input-label">Email</label>
                            <input type="text" className="text-input" placeholder="Eg. you@yourmail.com" required={true} onChange={(event) => this.handleEmailInput(event)}/>

                            <label className="text-input-label">Username</label>
                            <input type="text" className="text-input" placeholder="Username" required={true} onChange={(event) => this.handleUsernameInput(event)}/>

                            <label className="text-input-label">Password</label>
                            <input type="password" className="text-input" placeholder="Password" required={true} onChange={(event) => this.handlePasswordInput(event)} />

                            <label className="text-input-label">Re-type Password</label>
                            <input type="password" className="text-input" placeholder="Re-type Password" required={true} onChange={(event) => this.handleConfirmPasswordInput(event)}/>

                            <label className="text-input-label">Age</label>
                            <input type="number" className="text-input" placeholder="Eg. 18" required={true} onChange={(event) => this.handleAgeInput(event)} />

                            <label className="text-input-label">Blood Group</label>
                            <input type="text" className="text-input" placeholder="Eg. AB+ (or) AB- " required={true} onChange={(event) => this.handleBloodGroupInput(event)} />

                            <label className="text-input-label">Phone Number</label>
                            <input type="text" className="text-input" placeholder="Phone Number" required={true} onChange={(event) => this.handlePhoneNumberInput(event)} />
                        </div>
                        <div className="tc-text-section">
                            <span className="tc-text">
                                By signing up you agree to our Terms & conditions
                            </span>
                        </div>
                        <div className="submit-btn-section">
                            <button className="submit-btn" onClick={() => this.handleSignup()}>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default Signup;
