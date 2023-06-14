const CustomOrders = () => {
  return (
    <>
      <div className="custom-hero-container">
        <h2>Custom Orders</h2>
      </div>
      <div>
        <h3>Get a Quote for a custom build</h3>
      </div>
      <div className="custom-form-container">
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Phone"></input>
        <input placeholder="Phone"></input>
        <input placeholder="What do you want built"></input>
        <input placeholder="Dimensions (if known)"></input>
        <input type="select" placeholder="Wood"></input>
        <input placeholder="Details"></input>
        <button className="upload-button">Upload Example</button>
        <button className="submit-quote-button">Get Quote</button>
      </div>
    </>
  );
};

export default CustomOrders;
