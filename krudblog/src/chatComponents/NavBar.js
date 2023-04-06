import React, {useState} from "react";
import GoogleSignin from "../img/btn_google_signin_dark_pressed_web.png";
import { auth } from "../firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "./ChatStyle.css"


const NavBar = () => {
    const [user] = useAuthState(auth);
    
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
      };
      
    const signOut = () => {
        auth.signOut();
      };

    return (
        <nav className="nav-bar">
            <h1>Kr/u\dblog</h1>
            {user ? (
                <button onClick={signOut} className="sign-out" type="button">
                Sign Out
                </button>
            ) : (
                <button className="sign-in">
                    <img
                        onClick={googleSignIn}
                        src={GoogleSignin}
                        alt="Google Sign In"
                        typre="button"
                    />
                </button>
            )}
        </nav>   
    )
};

export default NavBar;