import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Signup.css";
import { userContext } from "../../context/AuthContext";

const Register = () => {
  const { user, createUser, signInWithGoogle } = useContext(userContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  if (user) {
    navigate("/shop");
    console.log(user);
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    setError("");
    if (password !== confirmPassword) {
      setError("Sorry your password did not match");
      return;
    } else if (password.length < 8) {
      setError("your password must grater then 8 character");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
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
    <div className="signup-container">
      <div>
        <h1 className="form-title">Please Register</h1>
        <form onSubmit={handleRegister}>
          <div className="input-group">
            <label htmlFor="Email">Name:</label>
            <input type="text" name="name" id="name" placeholder=" Name" />
          </div>
          <div className="input-group">
            <label htmlFor="Email">Email:</label>
            <input type="email" name="email" id="email" placeholder=" Email" />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder=" Password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
              placeholder="Confirm password"
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input className="form-submit" type="submit" value="Register" />
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
        <button onClick={handleSignInWithGoogle} className="google-btn">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Register;
