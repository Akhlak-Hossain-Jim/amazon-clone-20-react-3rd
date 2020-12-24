import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import "./Signin.css";

function Signin() {

    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const Login = e => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
            history.push("/")
        })

        .catch(error => alert(error.message))
        //some fancy firebase stuf
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // console.log(auth);
            if (auth) {
                history.push('/')
            }
        })

        .catch(error => alert(error.message))
        // do some firebase stuf
    }

  return (
    <div className="signin">
      <Link to="/">
        <img
          className="signin__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="signin__container">
        <h1>Sign In</h1>

        <form>
          <h5>Email or mobile phone number</h5>
          <input type="email" value={email} onChange= {e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange= {e => setPassword(e.target.value)} />
          {/* <br /> */}
          <button onClick={Login} type="submit" className="signin__signInButton">Sign in</button>
        </form>

        <p>
          By continuing, you agree to Amazon's this AMAZON Clone
          &nbsp;<a href="/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&amp;nodeId=508088">
            Conditions of Use
          </a>
          &nbsp;and&nbsp;
          <a href="/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&amp;nodeId=468496">
            Privacy Notice
          </a>
        </p>
      </div>
      <section>

        <h5 className="signin__new">New to Amazon?</h5>
        <div className="line" />
        <button onClick={register} type="" className="signin__registerButton">
          Create Your Amazon Account
        </button>
      </section>
    </div>
  );
}

export default Signin;
