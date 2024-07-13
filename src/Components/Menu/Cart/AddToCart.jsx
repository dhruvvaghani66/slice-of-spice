import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // use useNavigate instead of useHistory
import "./AddToCart.css";
import cart1_img from "../../../assets/cart1.png";
import close_img from "../../../assets/close1.png";
import { Link } from "react-router-dom";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate(); // use useNavigate hook

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} items to cart`);
  };

  const handleCloseModal = () => {
    navigate("/menu"); // navigate back to menu
  };

  return (
    <div className="add-to-cart-modal">
      <div className="add-to-cart-content">
        <div className="product-container">
          <img src={cart1_img} alt="Product" className="product-image" />
          <button className="close-btn1" onClick={handleCloseModal}>
            <img src={close_img} alt="Close" />
          </button>
        </div>
        <h2>Veggie Burger</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit.
        </p>
        <div className="row">
          <div className="quantity-box">
            <div className="quantity">
              <button onClick={handleDecrease}>-</button>
              <span>{quantity}</span>
              <button onClick={handleIncrease}>+</button>
            </div>
          </div>
          <div className="cart-btn">
            <Link to="/shopping-cart">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
