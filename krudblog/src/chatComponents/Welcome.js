import React from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import "./ChatStyle.css"
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../firebase/firebase";

const Welcome = ({ onSignIn }) => {
    const googleSignIn = async() => {
      const provider = new GoogleAuthProvider();
      
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        onSignIn(user);
        } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <main className="welcome">
        <h2>Welcome to Kr/u\dblog.</h2>
        
        <p>A chat for the Kr/u\dblog.</p>
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      </main>
    );
  };
  
  export default Welcome;