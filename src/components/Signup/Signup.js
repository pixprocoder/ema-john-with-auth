import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../Firebase.init";
import "./Signup.css";
import Loading from "../Loading/Loading";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [updateProfile, updating] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, user, loading] =
    useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate("/shop");
    console.log(user);
  }
  if (loading || updating) {
    return <Loading />;
  }
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordBlur = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Sorry your password did not match");
      return;
    } else if (password.length < 8) {
      setError("your password must grater then 8 character");
      return;
    }
    await createUserWithEmailAndPassword(email, password);

    await updateProfile({ displayName: name });
  };
  return (
    <div className="signup-container">
      <div>
        <h1 className="form-title">Signup</h1>
        <form onSubmit={handleSignUp}>
          <div className="input-group">
            <label htmlFor="Email">Name:</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id="name"
              placeholder=" Name"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Email">Email:</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id="email"
              placeholder=" Email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="Password"
              id="password"
              placeholder=" Password"
            />
          </div>
          <div className="input-group">
            <label htmlFor="Password">Confirm Password</label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              name="password"
              id="confirmPassword"
              required
              placeholder="Confirm password"
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
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
