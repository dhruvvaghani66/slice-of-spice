import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from "./Components/Navbar/Navbar";
// import Footer from "./Components/Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import Home from "./Components/Home/Home";
import Menu from "./Components/Menu/Menu";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import AddToCart from "./Components/Menu/Cart/AddToCart";
import Shopping_Cart from "./Components/Menu/Cart/ShoppingCart/Shopping_Cart";
import Checkout from "./Components/Menu/Cart/Checkout/Checkout";
// import './index.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* <Navbar /> */}
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          {/* <Route path="/add-to-cart" element={<AddToCart />} /> */}
          <Route
            path="/add-to-cart"
            element={
              <>
                <Menu />
                <AddToCart />
              </>
            }
          />
          {/* <Route path="/shopping-cart" element={<><Menu /> <Shopping_Cart /> </>} /> */}
          <Route path="/shopping-cart" element={<Shopping_Cart />} />
          {/* <Route path="/checkout" element={<><Menu /> <Checkout /> </>} /> */}
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </>
  );
};
export default App;
