import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import books from "../../images/newBooks.png";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  const { name, img, seller, price, ratings } = product;

  return (
    <div className="product ">
      <div>
        <img
          onError={(e) => {
            e.target.src = books;
          }}
          src={img}
          alt=""
        ></img>
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>Price: ${price}</p>
          <p>
            <small>Seller: {seller}</small>
          </p>
          <p>
            <small>Ratings: {ratings} stars</small>
          </p>
        </div>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
