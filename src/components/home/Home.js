import HeroContent from "../hero/HeroContent";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-undef
  const tableImage = process.env.PUBLIC_URL + "/images/table2.png";
  // eslint-disable-next-line no-undef
  const signImage = process.env.PUBLIC_URL + "/images/sign.png";
  // eslint-disable-next-line prettier/prettier, no-undef
  const engravingImage = process.env.PUBLIC_URL + "/images/custom-engraving.png";
  // eslint-disable-next-line no-undef
  const familyImage = process.env.PUBLIC_URL + "/images/about-us.png";

  const handleClickCategory = (category) => {
    navigate("/shop", { state: category });
  };

  return (
    <>
      {/* Hero image and Call to Action */}
      <HeroContent
        title="Quality. Custom. Handcrafted."
        subtitle=""
        link="/custom-orders"
        callToActionText="Custom Quote"
      />
      {/* Shop Category Links */}
      <section className="home-gallery">
        <div
          className="gallery-item"
          onClick={() => handleClickCategory("tables")}
        >
          <img src={tableImage} alt="Dinning room table" />
          <h4>Tables</h4>
        </div>
        <div
          className="gallery-item"
          onClick={() => handleClickCategory("signs")}
        >
          <img src={signImage} alt="Wood A-frame sign" />
          <h4>Signs</h4>
        </div>
        <div
          className="gallery-item"
          onClick={() => handleClickCategory("other")}
        >
          <img src={engravingImage} alt="Wood engraved plaque" />
          <h4>Engravings</h4>
        </div>
      </section>
      {/* Company Intro */}
      <section className="home-intro">
        <div className="intro-content">
          <h2>Quality. Custom. Handcrafted.</h2>
          <p>
            Nisi non consectetur occaecat est aliqua. Quis id incididunt in
            nostrud quis. Cillum aute nisi ea laboris Lorem culpa minim proident
            ad veniam exercitation minim mollit veniam. Anim dolore sit nostrud
            et pariatur ullamco laborum sint aute eiusmod aute tempor cillum
            adipisicing. Consectetur eiusmod labore dolor fugiat cillum mollit
            aliqua duis. Ad do ipsum aute sit deserunt.
          </p>
          <a href="/about">
            <span id="about-us-link">Read About us</span>
          </a>
        </div>
        <img src={familyImage} alt="Family photo" />
      </section>
    </>
  );
};

export default Home;
