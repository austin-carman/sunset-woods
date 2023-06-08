import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdown = () => {
    console.log("hello");
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
          <li>
            <Link
              to="/about"
              onMouseOver={handleDropdown}
              onMouseOut={handleDropdown}
            >
              About
            </Link>
            {isDropdownOpen && (
              <div>
                <Link to="">About Us</Link>
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
