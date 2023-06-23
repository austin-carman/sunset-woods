import HeroContent from "../hero/HeroContent";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // eslint-disable-next-line no-undef
  const image = process.env.PUBLIC_URL + "/blue.png";

  const handleClick = (category) => {
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
      {/* Gallery */}
      <section className="home-gallery">
        <div className="gallery-item" onClick={() => handleClick("tables")}>
          <img src={image} alt="" />
          <h4>Tables</h4>
        </div>
        <div className="gallery-item" onClick={() => handleClick("signs")}>
          <img src={image} alt="" />
          <h4>Signs</h4>
        </div>
        <div className="gallery-item" onClick={() => handleClick("other")}>
          <img src={image} alt="" />
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
        <img src={image} alt="" />
      </section>
    </>
  );
};

export default Home;
