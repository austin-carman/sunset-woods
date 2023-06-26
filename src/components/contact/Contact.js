import HeroContent from "../hero/HeroContent";
import { useState } from "react";

const Contact = () => {
  const initialState = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
  const [messageForm, setMessageForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessageForm({ ...messageForm, [name]: value });
  };

  console.log("message: ", messageForm);

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
        <div className="contact-form">
          <h3>Send us a message</h3>
          <input
            placeholder="Name"
            onChange={handleChange}
            name="name"
            value={messageForm.name}
          ></input>
          <input
            type="tel"
            placeholder="Phone"
            onChange={handleChange}
            name="phone"
            value={messageForm.phone}
          ></input>
          <input
            type="email"
            placeholder="Email"
            onChange={handleChange}
            name="email"
            value={messageForm.email}
          ></input>
          <textarea
            placeholder="Message"
            rows="10"
            onChange={handleChange}
            name="message"
            value={messageForm.message}
          ></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
