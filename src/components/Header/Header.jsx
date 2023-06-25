import { signOut } from "firebase/auth";
import React,  from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../Firebase.init";
import logo from "../../images/Logo.svg";
import "./Header.css";


const Header = () => {
  const [user] = useAuthState(auth);


  return (
    <header className=" bg-gray-900 mb-4">
      <nav className="flex justify-between max-w-screen-xl mx-auto items-center py-4 ">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div className="flex space-x-4 text-lg mr-4 justify-center items-center text-white ">
          <Link className="hover:text-orange-500" to="/shop">
            Shop
          </Link>
          <Link className="hover:text-orange-500" to="/orders">
            Orders
          </Link>
          <Link className="hover:text-orange-500" to="/inventory">
            Inventory
          </Link>
          <Link className="hover:text-orange-500" to="/about">
            About
          </Link>
          {user ? (
            <span
              className="px-4 py-1 border rounded-lg hover:border-orange-500 cursor-pointer"
              onClick={() => signOut(auth)}
            >
              Logout
            </span>
          ) : (
            <Link className="hover:text-orange-500" to="./login">
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
