import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'animate.css'
import './SignIn.css';
import './index.css'
import firebase from 'firebase/app';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
function SignIn()
{           
    ReactDOM.render
    (
        <React.StrictMode>
            <div class = "SignInBox">
                <form class = "EmailPassword">
                <input type = "email" class = "text" id = "Email" placeholder = " &#xE001; email@provider.com"></input>
                <input type = "password" class = "text" id = "Password" placeholder=" &#xE002; Password"></input>
                <input type = "submit" class = "Submit" value = "Login"/>
                </form>
                
                <div class = "Other Methods"> <p>Or login with</p> 
                    <button class = "LoginW" id = "Google">&#xE003;</button>
                    <button class = "LoginW" id = "Github">&#xE004;</button>
                    <button class = "LoginW" id = "Facebook">&#xE005;</button>
                </div>
               
            </div>
        </React.StrictMode>,
        document.getElementById('root')
    );
    return null;
}

      
export default SignIn; 