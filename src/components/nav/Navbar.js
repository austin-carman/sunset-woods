import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/custom-orders">Custom Orders</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
