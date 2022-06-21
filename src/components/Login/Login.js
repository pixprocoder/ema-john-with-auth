import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form>
          <div className="input-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" name="email" id="" placeholder=" Email" />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="Password"
              id=""
              placeholder=" Password"
            />
          </div>
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
        <button className="google-btn">Continue with google</button>
      </div>
    </div>
  );
};

export default Login;
