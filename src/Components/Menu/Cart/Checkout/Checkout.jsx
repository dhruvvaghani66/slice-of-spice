// import React from "react";
// import "./Checkout.css";
// import Footer from "../../../Footer/Footer";
// import Navbar from "../../../Navbar/Navbar";

// const Checkout = () => {
//   return (
//     <div className="cc">
//       <Navbar />
//       <div className="main11">
//         <div className="bg1">
//           <div className="checkout-head"></div>
//           <div className="checkout-container">
//             <div className="checkout-header">CHECKOUT</div>
//             <div className="top1">
//               <div className="login-box">
//                 <div className="login-text">
//                   Already have an account? <span>Log in </span>for faster
//                   checkout.
//                 </div>
//               </div>
//               <button className="back-to-menu-button">Back to Menu</button>
//             </div>
//             <div className="checkout-form">
//               <p>Pickup from</p>
//               <p>500 Terry Francois Street San Francisco, CA 94158</p>
//               <div className="show-on-map-button-container">
//                 <button className="show-on-map-button">Show on Map</button>
//               </div>
//               <p>Pickup Time</p>
//               <p>ASAP (in 15 minutes)</p>
//               <div className="checkout-form-btn">
//                 <button>Continue</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="checkout-time">
//         <div className="left-section">
//           <div className="form-container">
//             <div className="formrow">
//               <div className="formcolumn">
//                 First Name
//                 <input type="text" />
//               </div>
//               <div className="formcolumn">
//                 Last Name
//                 <input type="text" />
//               </div>
//             </div>
//             <div className="formrow">
//               <div className="formcolumn">
//                 Phone
//                 <input type="text" />
//               </div>
//               <div className="formcolumn">
//                 Email
//                 <input type="text" />
//               </div>
//             </div>
//           </div>

//           <button className="continue-button">Continue</button>
//           <div className="please">
//             Please review the details above and place the order.
//           </div>
//           <button className="submit-order-button">Submit Order</button>
//         </div>

//         <div className="right-section">
//           <div className="order-summary-text">My Order(3)</div>
//           <div className="order-summary">
//             1x Veggie Burger
//             <div className="order-summary-price">$70.00</div>
//           </div>
//           <div className="divider"></div>
//           <div className="order-summary">
//             3x Wild salmon Burger
//             <div className="order-summary-price">$210.00</div>
//           </div>
//           <div className="divider"></div>
//           <div className="order-summary">
//             3x Bean Burger
//             <div className="order-summary-price">$70.00</div>
//           </div>
//           <div className="divider"></div>
//           <div className="order-summary">
//             Subtotal
//             <div className="total-price1">$350.00</div>
//           </div>
//           <div className="order-summary1">
//             Subtotal
//             <div className="total-price1">$350.00</div>
//           </div>
//         </div>
//       </div>
//       <div className="checkout-footer">
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Checkout;
import React from "react";
import "./Checkout.css";
import Footer from "../../../Footer/Footer";
import Navbar from "../../../Navbar/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const handleSubmit = () => {
    console.log("Submit button clicked"); // Debugging log
    toast.success("Order successfully submitted!", {
      position: "top-right",
      autoClose: 3000, // The toast will auto close after 3 seconds
    });
  };

  return (
    <div className="cc">
      <Navbar />
      <div className="main11">
        <div className="bg1">
          <div className="checkout-head"></div>
          <div className="checkout-container">
            <div className="checkout-header">CHECKOUT</div>
            <div className="top1">
              <div className="login-box">
                <div className="login-text">
                  Already have an account? <span>Log in </span>for faster
                  checkout.
                </div>
              </div>
              <button className="back-to-menu-button">Back to Menu</button>
            </div>
            <div className="checkout-form">
              <p>Pickup from</p>
              <p>500 Terry Francois Street San Francisco, CA 94158</p>
              <div className="show-on-map-button-container">
                <button className="show-on-map-button">Show on Map</button>
              </div>
              <p>Pickup Time</p>
              <p>ASAP (in 15 minutes)</p>
              <div className="checkout-form-btn">
                <button>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-time">
        <div className="left-section">
          <div className="form-container">
            <div className="formrow">
              <div className="formcolumn">
                First Name
                <input type="text" />
              </div>
              <div className="formcolumn">
                Last Name
                <input type="text" />
              </div>
            </div>
            <div className="formrow">
              <div className="formcolumn">
                Phone
                <input type="text" />
              </div>
              <div className="formcolumn">
                Email
                <input type="text" />
              </div>
            </div>
          </div>

          <button className="continue-button">Continue</button>
          <div className="please">
            Please review the details above and place the order.
          </div>
          <button className="submit-order-button" onClick={handleSubmit}>
            Submit Order
          </button>
        </div>

        <div className="right-section">
          <div className="order-summary-text">My Order(3)</div>
          <div className="order-summary">
            1x Veggie Burger
            <div className="order-summary-price">$70.00</div>
          </div>
          <div className="divider"></div>
          <div className="order-summary">
            3x Wild salmon Burger
            <div className="order-summary-price">$210.00</div>
          </div>
          <div className="divider"></div>
          <div className="order-summary">
            3x Bean Burger
            <div className="order-summary-price">$70.00</div>
          </div>
          <div className="divider"></div>
          <div className="order-summary">
            Subtotal
            <div className="total-price1">$350.00</div>
          </div>
          <div className="order-summary1">
            Subtotal
            <div className="total-price1">$350.00</div>
          </div>
        </div>
      </div>
      <div className="checkout-footer">
        <Footer />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
