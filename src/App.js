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
import ItemDetails from "./components/details/ItemDetails";

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="App">
      <Navbar isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        n<Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-orders" element={<CustomOrders />} />
        <Route path="/item-details/:id" element={<ItemDetails />} />
      </Routes>
      {isCartOpen && (
        <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
      )}
      <Footer />
    </div>
  );
}

export default App;
