import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isCartOpen, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const hanldeOpenCart = () => {
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
        <span onClick={handleToggleMenu} className="hamburger">
          &#9776;
        </span>
        {/* Nav links */}
        <div
          className={
            isMenuOpen ? "show-links links-wrapper" : "hide-links links-wrapper"
          }
          onClick={handleToggleMenu}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/shop">
            <li>Shop</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          {/* <Link to="/cart"> */}
          <li onClick={hanldeOpenCart}>Cart</li>
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
