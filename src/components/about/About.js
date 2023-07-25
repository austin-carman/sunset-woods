import HeroContent from "../hero/HeroContent";

const About = () => {
  // eslint-disable-next-line no-undef
  const familyImage = process.env.PUBLIC_URL + "/images/about-us.png";
  // HeroContent props
  const heroTitle = "About us";
  const callToActionLink = "/shop";
  const callToActionText = "Shop";

  return (
    <>
      {/* Hero image and Call to Action */}
      <HeroContent
        title={heroTitle}
        link={callToActionLink}
        callToActionText={callToActionText}
      />
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
          <img src={familyImage} alt="Family photo" />
        </div>
      </section>
    </>
  );
};

export default About;
