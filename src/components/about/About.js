const About = () => {
  // eslint-disable-next-line no-undef
  const image = process.env.PUBLIC_URL + "./blue.png";

  return (
    <>
      <div className="hero-img-container">
        <div className="hero-content-container">
          <h1>About Us</h1>
          <h4>Quis in ea ex occaecat labore.</h4>
        </div>
      </div>
      <section className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Cupidatat ipsum aliquip officia ea adipisicing nostrud pariatur
            voluptate cupidatat Lorem ad elit et elit. Mollit ipsum esse nisi
            veniam cupidatat Lorem esse non officia. Consectetur proident enim
            fugiat dolore laboris quis excepteur Lorem aute dolor mollit labore
            veniam dolore. Deserunt duis eu cupidatat officia tempor sint.
          </p>
        </div>
        <div className="about-img-container">
          <img src={image} alt="" />
        </div>
      </section>
    </>
  );
};

export default About;
