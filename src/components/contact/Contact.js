const Contact = () => {
  return (
    <>
      {/* <div className="contact-hero-container"> */}
      <div className="contact-hero-container">
        <div className="contact-hero-content">
          <h2>Contact</h2>
          <h4>
            Minim aliqua est non ipsum est veniam ullamco non tempor anim.
          </h4>
        </div>
      </div>
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
      {/* </div > */}
    </>
  );
};

export default Contact;
