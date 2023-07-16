import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const HeroContent = ({ title, subtitle, link, callToActionText }) => {
  return (
    <div className="hero-img-container">
      <div className="hero-content-container">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        {/* If text for a Call To Action button is provided, render a CTA button */}
        {callToActionText && (
          <Link to={link}>
            <button className="call-to-action-button">
              {callToActionText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroContent;
