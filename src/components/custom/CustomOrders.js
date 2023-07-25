import HeroContent from "../hero/HeroContent";
import { useState } from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import ImageSlides from "../details/ImageSlides";
import { showConfirmation } from "../../helper-functions/helper-functions";

const CustomOrders = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    whatToBuild: "",
    dimensions: "",
    woodType: "Wood Type",
    details: "",
    file: "",
  };
  const [customOrderForm, setCustomOrderForm] = useState(initialState);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [error, setError] = useState(null);

  // Images for slides
  const customItemImages = [
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/images/1.png",
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/images/2.png",
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/images/3.png",
    // eslint-disable-next-line no-undef
    process.env.PUBLIC_URL + "/images/4.png",
  ];

  // HeroContent props
  const heroTitle = "Custom Orders";
  const callToActionLink = "/shop";
  const callToActionText = "Shop";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomOrderForm({ ...customOrderForm, [name]: value });
  };

  // Using mockAPI endpoint to demonstrate example of
  // API call if Backend existed
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://64af0767c85640541d4e0eb8.mockapi.io/api/v1/custom-order",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(customOrderForm),
        }
      );
      if (!response.ok) {
        showConfirmation(setError);
      } else {
        setCustomOrderForm(initialState);
        showConfirmation(setIsConfirmationOpen);
      }
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      {/* Hero image and Call to Action */}
      <HeroContent
        title={heroTitle}
        link={callToActionLink}
        callToActionText={callToActionText}
      />
      <div className="custom-orders-content-container">
        <div className="custom-orders-image-container">
          <ImageSlides item={{ images: customItemImages }} />
        </div>
        {/* Custom Order Form */}
        <form className="custom-form-container" onSubmit={handleSubmit}>
          <h3>Get a Quote for a custom build</h3>
          <input
            name="name"
            onChange={handleChange}
            value={customOrderForm.name}
            placeholder="Name"
          ></input>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            value={customOrderForm.email}
            placeholder="Email"
          ></input>
          <input
            name="phone"
            onChange={handleChange}
            type="tel"
            value={customOrderForm.phone}
            placeholder="Phone"
          ></input>
          <input
            name="whatToBuild"
            onChange={handleChange}
            value={customOrderForm.whatToBuild}
            placeholder="What do you want built"
          ></input>
          <input
            name="dimensions"
            onChange={handleChange}
            value={customOrderForm.dimensions}
            placeholder="LxWxH Dimensions (if known)"
          ></input>
          <select
            id="wood-types"
            name="woodType"
            onChange={handleChange}
            value={customOrderForm.woodType}
          >
            <option>Wood Type</option>
            <option value="pine">Pine</option>
            <option value="cherry">Cherry</option>
            <option value="walnut">Walnut</option>
            <option value="white pine">White pine</option>
          </select>
          <textarea
            placeholder="Details"
            rows="5"
            name="details"
            value={customOrderForm.details}
            onChange={handleChange}
          ></textarea>
          <div className="contact-button-container">
            <button onClick={handleSubmit}>Send Message</button>
            {/* Order form sent successfully confirmation */}
            {isConfirmationOpen && (
              <span className="contact-confirmation">
                {<CheckCircleOutlinedIcon sx={{ color: "green" }} />} Message
                Sent
              </span>
            )}
            {/* Error message */}
            {error && (
              <span className="contact-confirmation">
                {<ErrorOutlineOutlinedIcon sx={{ color: "red" }} />} Error
                sending message.
              </span>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default CustomOrders;
