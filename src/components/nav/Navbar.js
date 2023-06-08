import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav>
      <Link to="/">
        <img src="#" alt="Company Logo" />
        Company Name
      </Link>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
            <Link to="/about">About</Link>
            {isDropdownOpen && (
              <div>
                <Link to="/about">About Us</Link>
                <Link to="/FAQ">FAQ</Link>
              </div>
            )}
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
            <Link to="/custom-orders">Custom Order</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
