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
        <h2>Welcome to React Chat.</h2>
        <img src="/logo512.png" alt="ReactJs logo" width={50} height={50} />
        <p>Sign in with Google to chat with with your fellow React Developers.</p>
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