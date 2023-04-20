import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";

import "./Login.css";
import auth from "../../Firebase.init";
import Loading from "../Loading/Loading";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const from = location.state?.from?.pathname || "/";

  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  if (loading || googleLoading) {
    return <Loading />;
  }
  let errorMessage;
  if (error || googleError) {
    errorMessage = (
      <p style={{ color: "red" }}>
        {error.message} || {googleError.message}
      </p>
    );
  }

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
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
              type="password"
              placeholder=" Password"
              required
            />
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
        <button onClick={() => signInWithGoogle()} className="google-btn">
          Continue with google
        </button>
      </div>
    </div>
  );
};

export default Login;
