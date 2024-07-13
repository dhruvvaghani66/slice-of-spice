import React from "react";
import "./Menu.css";
import veggi_img from "../../assets/veggi_burger_img.png";
import wild_img from "../../assets/wild_burger_img.png";
import bean_img from "../../assets/bean_burger_img.png";

import nea_img from "../../assets/nea_pizza_img.png";
import chi_img from "../../assets/chi_pizza_img.png";
import det_img from "../../assets/det_pizza_img.png";

import sand_img1 from "../../assets/sand_img1.png";
import sand_img2 from "../../assets/sand_img2.png";
import sand_img3 from "../../assets/sand_img3.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Menu = () => {
  return (
    <>
      <Navbar />
      <div className="menu1">
        <div className="menu"></div>
        <div className="menu-head"></div>
        <div className="menu-content">
          <div className="box">
            <h1>OUR MENU</h1>
            <h2>BURGERS</h2>
            <div className="card-container">
              <div className="card">
                <img src={veggi_img} alt="Veggie Burger" />
                <h2>Veggie Burger</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit.
                </p>
                <Link to="/add-to-cart">
                  <p className="cart-price no-underline">$70.00</p>
                </Link>
              </div>

              <div className="card">
                <img src={wild_img} alt="Wild Burger" className="wildimg" />
                <h2>Wild Burger</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit.
                </p>
                <p className="cart-price">$70.00</p>
              </div>
              <div className="card">
                <img src={bean_img} alt="Bean Burger" />
                <h2>Bean Burger</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                  eu turpis molestie, dictum est a, mattis tellus. Sed
                  dignissim, metus nec fringilla accumsan, risus sem
                  sollicitudin lacus, ut interdum tellus elit sed risus.
                  Maecenas eget condimentum velit.
                </p>
                <p className="cart-price">$70.00</p>
              </div>
            </div>
            <div className="burger-btn">
              <button>View More</button>
            </div>
            <div className="pizzas">
              <h2>PIZZAS</h2>
              <div className="card-container">
                <div className="card1">
                  <img src={nea_img} alt="Veggie Burger" />
                  <h2>Neapolitan Pizza</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit.
                  </p>
                  <p className="cart-price">$70.00</p>
                </div>
                <div className="card1">
                  <img src={chi_img} alt="Veggie Burger" />
                  <h2>Chivago Pizza</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit.
                  </p>
                  <p className="cart-price">$70.00</p>
                </div>
                <div className="card1">
                  <img src={det_img} alt="Veggie Burger" />
                  <h2>Detroit Pizza</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit.
                  </p>
                  <p className="cart-price">$70.00</p>
                </div>
              </div>
              <div className="pizza-btn">
                <button>View More</button>
              </div>
            </div>
            <div className="pizzas">
              <h2>SANDWICHES</h2>
              <div className="card-container">
                <div className="card1">
                  <img src={sand_img1} alt="Veggie Burger" />
                  <h2>Neapolitan Pizza</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit.
                  </p>
                  <p className="cart-price">$70.00</p>
                </div>
                <div className="card1">
                  <img src={sand_img2} alt="Veggie Burger" />
                  <h2>Chivago Pizza</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit.
                  </p>
                  <p className="cart-price">$70.00</p>
                </div>
                <div className="card1">
                  <img src={sand_img3} alt="Veggie Burger" />
                  <h2>Detroit Pizza</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus. Sed
                    dignissim, metus nec fringilla accumsan, risus sem
                    sollicitudin lacus, ut interdum tellus elit sed risus.
                    Maecenas eget condimentum velit.
                  </p>
                  <p className="cart-price">$70.00</p>
                </div>
              </div>
              <div className="pizza-btn">
                <button>View More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-footer">
          <Footer />
        </div>
        {/* </div> */}
      </div>
    </>



  );
};

export default Menu;




// m
// lc
// adhar zerox
// 2 photo 




// import React from "react";
// import "./Menu.css";
// import veggi_img from '../../assets/veggi_burger_img.png'
// import wild_img from '../../assets/wild_burger_img.png'
// import bean_img from '../../assets/bean_burger_img.png'

// const Menu = () => {
//   return (
//     <div className="menu">
//       <div className="menu-content">
//         {/* <d className="conatiner"> */}
//         <div className="box">
//           <h2>OUR MENU</h2>
//           BURGERS
//         </div>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// };

// export default Menu;
