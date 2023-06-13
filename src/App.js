import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Cart from "./components/cart/Cart";
import Contact from "./components/contact/Contact";
import CustomOrders from "./components/custom/CustomOrders";
import Footer from "./components/footer/Footer";
import Shop from "./components/shop/Shop";
import { useState } from "react";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(true);
  return (
    <div className="App">
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/custom-orders" element={<CustomOrders />} />
      </Routes>
      {isCartOpen && (
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
      <Footer />
    </div>
  );
}

export default App;
