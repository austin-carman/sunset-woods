import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="links-container">
        <div className="footer-section-container">
          <img src="#" alt="company logo" />
        </div>
        <div className="footer-section-container">
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
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/custom-orders">Custom Orders</Link>
            </li>
          </ul>
        </div>
        <div className="footer-section-container">
          <ul className="quick-links">
            <li>
              <span className="links-label">Contact</span>
            </li>
            <li>Call or Text:</li> {/* use phone icon instead */}
            <li>
              <a href="tel:+44-785-7895">+44-785-7895</a>
            </li>
            <li id="footer-email">
              <a href="mailto:1234@example.com">Email</a>
            </li>
            <li>
              <Link to="/custom-orders">
                <button id="footer-custom-orders-btn">Custom Quote</button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-section-container">
          <ul className="social-links-container">
            <li>
              <span className="links-label">Follow Us</span>
            </li>
            <li>
              <Link to="https://www.instagram.com/sunsettrailwoods/">
                Instagram
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2023 Sunset Woods, LLC</p>
      </div>
    </footer>
  );
};

export default Footer;
