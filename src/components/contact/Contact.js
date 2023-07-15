import HeroContent from "../hero/HeroContent";
import { useState } from "react";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { showConfirmation } from "../../helper-functions/helper-functions";

const Contact = () => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const [contactForm, setContactForm] = useState(initialState);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactForm({ ...contactForm, [name]: value });
  };

  const getErrorMessage = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 1500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://64af0767c85640541d4e0eb8.mockapi.io/api/v1/messages",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactForm),
        }
      );
      if (!response.ok) {
        getErrorMessage();
      } else {
        setContactForm(initialState);
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
        title="Contact"
        subtitle="Nostrud labore minim consequat excepteur"
        link="/custom-orders"
        callToActionText="Custom Orders"
      />
      <div className="contact-container">
        <div className="info-container">
          <h3>Contact Info</h3>
          <h6>
            Call: <a href="tel:+44-785-7895">012-345-6789</a>
          </h6>
          <h6>
            Email: <a href="mailto:abcarman12@gmail.com">email@email.com</a>
          </h6>
          <h6>
            Instagram:{" "}
            <a href="https://www.instagram.com/sunsettrailwoods/">
              @sunsettrailwoods
            </a>
          </h6>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send us a message</h3>
          <input
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={contactForm.name}
          ></input>
          <input
            type="tel"
            placeholder="Phone"
            onChange={handleChange}
            name="phone"
            value={contactForm.phone}
          ></input>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={contactForm.email}
          ></input>
          <textarea
            placeholder="Message"
            rows="10"
            onChange={handleChange}
            name="message"
            value={contactForm.message}
          ></textarea>
          <div className="contact-button-container">
            <button onClick={handleSubmit}>Send Message</button>
            {isConfirmationOpen && (
              <span className="contact-confirmation">
                {<CheckCircleOutlinedIcon sx={{ color: "green" }} />} Message
                Sent
              </span>
            )}
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

export default Contact;
