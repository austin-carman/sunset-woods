import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="info-container">
        <div className="img-links-container">
          <div className="img-quick-links-container">
            <img src="#" alt="company logo" />
            <div className="links-container">
              <ul className="quick-links">
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
              <ul className="quick-links">
                <li>Contact</li>
                <li>Call or Text:</li>
                <li>
                  <a href="tel:+44-785-7895">+44-785-7895</a>
                </li>
                <li>
                  <a href="mailto:1234@example.com">Email Us</a>
                </li>
                <li>
                  <Link to="/custom-orders">
                    <button>Custom Quote</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-links-container">
            <Link to="https://www.instagram.com/sunsettrailwoods/">
              Instagram
            </Link>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright 2023 Sunset Woods, LLC</p>
      </div>
    </footer>
  );
};

export default Footer;
