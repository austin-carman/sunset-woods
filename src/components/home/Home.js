import HeroContent from "../hero/HeroContent";

const Home = () => {
  // eslint-disable-next-line no-undef
  const image = process.env.PUBLIC_URL + "/blue.png";

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
        <div className="gallery-item">
          <a href="/shop">
            <img src={image} alt="" />
            <h4>Furniture</h4>
          </a>
        </div>
        <div className="gallery-item">
          <a href="/shop">
            <img src={image} alt="" />
            <h4>Signs</h4>
          </a>
        </div>
        <div className="gallery-item">
          <a href="/shop">
            <img src={image} alt="" />
            <h4>Engravings</h4>
          </a>
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
