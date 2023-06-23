import HeroContent from "../hero/HeroContent";

const Contact = () => {
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
            Call: <a href="tel:+44-785-7895">+44-785-7895</a>
          </h6>
          <h6>
            Email:{" "}
            <a href="mailto:abcarman12@gmail.com">abcarman12@gmail.com</a>
          </h6>
          <h6>
            Instagram:{" "}
            <a href="https://www.instagram.com/sunsettrailwoods/">
              @sunsettrailwoods
            </a>
          </h6>
          {/* <img src={image} alt="" /> */}
        </div>
        <div className="contact-form">
          <h3>Send us a message</h3>
          <input placeholder="Name"></input>
          <input placeholder="Phone"></input>
          <input placeholder="Email"></input>
          <textarea placeholder="Message" rows="10"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
