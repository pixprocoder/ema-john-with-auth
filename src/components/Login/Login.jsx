import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";
import { userContext } from "../../context/AuthContext";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(userContext);
  const [show, setShow] = useState(false);

  let errorMessage;

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        e.target.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input name="email" type="email" placeholder=" Email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type={show ? "text" : "password"}
              placeholder=" Password"
              required
            />

            <small className="block btn btn-xs" onClick={() => setShow(!show)}>
              {show ? <span>Hide</span> : <span>Show</span>}
            </small>
          </div>
          {errorMessage}
          <input className="form-submit" type="submit" value="Login" />
        </form>
        <p>
          New to Ema-john?{" "}
          <Link className="form-link" to="/signup">
            Create an account
          </Link>
        </p>
        <div className="or-container">
          <div className="or-line"></div>
          <p className="or">OR</p>
          <div className="or-line"></div>
        </div>
        <button onClick={handleSignInWithGoogle} className="google-btn">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
