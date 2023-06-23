import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext } from "../../context/CartContext";

// eslint-disable-next-line react/prop-types
const Navbar = ({ isCartOpen, setIsCartOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const { cart } = useContext(CartContext);

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
        {/* Cart & Hamburger Menu */}
        <div className="cart-hamburger-container">
          <ShoppingCartIcon
            className="cart-icon"
            fontSize="2.8rem"
            onClick={handleOpenCart}
          />
          <span className="hamburger" onClick={handleToggleMenu}>
            &#9776;
          </span>
        </div>
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
          <li id="expanded-nav-cart" onClick={handleOpenCart}>
            <ShoppingCartIcon className="cart-icon" fontSize="large" />
          </li>
          {/* </Link> */}
          <Link to="/custom-orders">
            <li id="nav-custom-orders">
              <button
                className="nav-custom-orders-button"
                onClick={handleToggleMenu}
              >
                Custom Orders
              </button>
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
