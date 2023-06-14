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
        <input placeholder="LxWxH Dimensions (if known)"></input>
        <select id="wood-types" name="wood">
          <option value="pine" selected>
            Wood Type
          </option>
          <option value="pine">Pine</option>
          <option value="cherry">Cherry</option>
          <option value="walnut">Walnut</option>
          <option value="white pine">White pine</option>
        </select>
        <textarea placeholder="Details" rows="5"></textarea>
        <input type="file"></input>
        <button className="submit-quote-button">Get Quote</button>
      </div>
    </>
  );
};

export default CustomOrders;
