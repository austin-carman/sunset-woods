import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer>
      <div className="company-logo-container">
        <a href="/" className="company-logo">
          Sunset Woods
        </a>
        <div className="socials-link">
          <span>Follow Us: </span>
          <Link to="https://www.instagram.com/sunsettrailwoods/">
            <InstagramIcon sx={{ fontSize: "3rem" }} />
          </Link>
        </div>
      </div>
      <div className="links-container">
        <div className="links-section-container">
          <ul className="quick-links">
            <li>
              <span className="links-label">Links</span>
            </li>
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
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </div>
        <div className="links-section-container">
          <ul className="quick-links">
            <li>
              <span className="links-label">Contact</span>
            </li>
            <li>
              <a href="tel:+44-785-7895">+44-785-7895</a>
            </li>
            <li id="footer-email">
              <a href="mailto:1234@example.com">Email</a>
            </li>
            <li>
              <Link to="/custom-orders">
                <button>Custom Orders</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
