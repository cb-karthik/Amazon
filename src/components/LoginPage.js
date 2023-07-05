import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,   
  } from "firebase/auth";
function LoginPage() {

const  navigate = useNavigate();
const [email,setEmail]= useState('');
const [password,setPassword]= useState('');

const signIn = e =>{
  e.preventDefault();
   //firebase login submit
   signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        if (auth){
            
            navigate('/')
           }
      
   })
   .catch(error => alert(error.message));
}

const register = e => {
    e.preventDefault();
    //firebase register
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => { 
      console.log(auth);
      if (auth){
        
       navigate('/')
      }
}).catch(error => alert(error.message));
      }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In </h1>
        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="text" value={password} onChange={e=>setPassword(e.target.value)} />


          <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
        </form>
        <p>
          By continuing, you agree to fake  Amazon's clone Conditions of Use and Privacy
          Notice.
        </p>

        <button onClick={register} className="login__registerButton">Create your Amazon account</button>
      </div>
    </div>
  );
}

export default LoginPage;
