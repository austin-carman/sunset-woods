import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isCartOpen, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOpenCart = () => {
    setIsMenuOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  return (
    <nav className="navbar">
      {/* Company logo and/or name */}
      <Link to="/" className="logo">
        Sunset Woods
      </Link>
      {/* Navigation menu */}
      <ul className="nav-menu">
        {/* Hamburger Menu */}
        <span className="cart-icon" onClick={handleOpenCart}>
          <ShoppingCartIcon />
        </span>
        <span className="hamburger" onClick={handleToggleMenu}>
          &#9776;
        </span>
        {/* Nav links */}
        <div
          // eslint-disable-next-line prettier/prettier
          className={`links-wrapper ${isMenuOpen ? "show-links slide-in" : "slide-out"}`}
        >
          <li onClick={handleToggleMenu} id="close-menu">
            X
          </li>
          <Link to="/">
            <li onClick={handleToggleMenu}>Home</li>
          </Link>
          <Link to="/about">
            <li onClick={handleToggleMenu}>About</li>
          </Link>
          <Link to="/shop">
            <li onClick={handleToggleMenu}>Shop</li>
          </Link>
          <Link to="/contact">
            <li onClick={handleToggleMenu}>Contact</li>
          </Link>
          {/* <Link to="/cart"> */}
          <li onClick={handleOpenCart}>Cart</li>
          {/* </Link> */}
          <Link to="/custom-orders">
            <li>Custom Orders</li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
