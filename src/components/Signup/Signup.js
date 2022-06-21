import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-container">
      <div>
        <h1 className="form-title">Signup</h1>
        <form>
          <div className="input-group">
            <label htmlFor="Email">Name:</label>
            <input type="text" name="name" id="" placeholder=" Name" />
          </div>
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
          <input className="form-submit" type="submit" value="Sign up" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to="/Login">
            Please login
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

export default Signup;
