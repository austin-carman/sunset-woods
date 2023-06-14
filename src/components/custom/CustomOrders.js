const CustomOrders = () => {
  return (
    <>
      <div className="hero-img-container">
        <div className="hero-content-container">
          <h1>Custom Orders</h1>
        </div>
      </div>
      <div className="custom-form-container">
        <h3>Get a Quote for a custom build</h3>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Phone"></input>
        <input placeholder="What do you want built"></input>
        <input placeholder="L x W x H Dimensions (if known)"></input>
        <input type="select" placeholder="Wood"></input>
        <input placeholder="Details"></input>
        <input type="file"></input>
        <button className="submit-quote-button">Get Quote</button>
      </div>
    </>
  );
};

export default CustomOrders;
