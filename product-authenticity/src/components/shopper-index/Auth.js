import React, { Component } from 'react';
import firebase from './firebase';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default class App extends Component {
  
  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({
      [name] : value
    })
  }
  
  //captcha configuration
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback' :(response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSigninSubmit();
        console.log('Recaptcha Verified')
      },
      defaultCountry: "IN"
    })
  };

  onSigninSubmit = (e) => {
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber = "+91" + this.state.mobile
    console.log(phoneNumber)
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;

      console.log('OTP sent successfully')
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      // ...
    });
  };

  onSubmitOTP = (e) =>{
    e.preventDefault()
    const code = this.state.otp
    console.log(code)
    window.confirmationResult.confirm(code).then((result) => {
    // User signed in successfully.
    const user = result.user;
    console.log(JSON.stringify(user))
    alert("User is verified")
    // ...
    }).catch((error) => {
    // User couldn't sign in ()
    // ...
    alert('bad verification code?')
    });
  }

 

  render() {
    return (
      <div>
         <h2>Enter Mobile Number for OTP Verification</h2>
         <form onSubmit={this.onSigninSubmit}>
         <div id="sign-in-button"></div>
           <input type='number' name='mobile' placeholder='mobile number' required onChange={this.handleChange} />
           <button type='submit'>Submit</button>
         </form>
         <br/>
         <h2>Enter OTP</h2>
         <form onSubmit={this.onSubmitOTP}>
            <input type="number" name="otp" placeholder="OTP Number" required onChange={this.handleChange}/>
            <button type="submit" >Submit</button>
         </form>
      </div>
    )
  }
}
