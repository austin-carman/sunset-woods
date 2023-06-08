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
      <a href="/">
        <img src="#" alt="Company Logo" />
        Company Name
      </a>
      <div>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="" onMouseOver={handleDropdown} onMouseOut={handleDropdown}>
              Shop
            </a>
            {isDropdownOpen && (
              <div>
                <a href="">About Us</a>
                <a href="">FAQ</a>
              </div>
            )}
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <a href="">Custom Order</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
