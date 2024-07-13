import React, { useState } from "react";
import "./Shopping_Cart.css";
import veggi_img from "../../../../assets/sburger.png";
import veggi_img1 from "../../../../assets/sburger1.png";
import { Link } from "react-router-dom";
import Footer from "../../../Footer/Footer";
import Navbar from "../../../Navbar/Navbar";

const Shopping_Cart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="sc">
      <Navbar />
      <div className="bg">
        <div className="shopping-head"></div>

        <div className="shopping-cart-item">
          <div className="box1">
            <h1>SHOPPING CART</h1>
            <div className="shopping-content">
              <div className="shopping-card-container">
                <img src={veggi_img} alt="" />
                <div className="main1">
                  <div className="burger-text1">
                    Veggie Burger
                    <div className="quantity-box1">
                      <div className="quantity1">
                        <button onClick={handleDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="er">
                    <div className="edit">Edit</div>
                    <div className="remove">Remove</div>
                  </div>
                  <div className="price">$70.00</div>
                </div>
              </div>
            </div>
            <div className="shopping-content">
              <div className="shopping-card-container">
                <img src={veggi_img1} alt="" />
                <div className="main1">
                  <div className="burger-text1">
                    Wild Salmon Burger
                    <div className="quantity-box2">
                      <div className="quantity2">
                        <button onClick={handleDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="er">
                    <div className="edit">Edit</div>
                    <div className="remove">Remove</div>
                  </div>
                  <div className="price1">$210.00</div>
                </div>
              </div>
            </div>
            <div className="shopping-content">
              <div className="shopping-card-container">
                <img src={veggi_img} alt="" />
                <div className="main1">
                  <div className="burger-text1">
                    Bean Burger
                    <div className="quantity-box3">
                      <div className="quantity3">
                        <button onClick={handleDecrease}>-</button>
                        <span>{quantity}</span>
                        <button onClick={handleIncrease}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="er">
                    <div className="edit">Edit</div>
                    <div className="remove">Remove</div>
                  </div>
                  <div className="price2">$70.00</div>
                </div>
              </div>
            </div>
            <div className="shopping-content">
              <div className="total-text">
                <p>Sub Total</p>
                <span>$350.00</span>
              </div>
            </div>
          </div>
          <div className="shopping-btn">
            <Link to="/checkout">
              <button>Continue To Checkout</button>
            </Link>
          </div>
          <div className="shopping-footer">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopping_Cart;
