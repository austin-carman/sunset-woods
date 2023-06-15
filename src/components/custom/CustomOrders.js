import HeroContent from "../hero/HeroContent";

const CustomOrders = () => {
  return (
    <>
      {/* Hero image and Call to Action */}
      <HeroContent
        title="Custom Orders"
        subtitle="Nostrud labore minim consequat excepteur"
      />
      <div className="custom-form-container">
        <h3>Get a Quote for a custom build</h3>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Phone"></input>
        <input placeholder="What do you want built"></input>
        <input placeholder="LxWxH Dimensions (if known)"></input>
        <select id="wood-types" name="wood" defaultValue="wood-type">
          <option>Wood Type</option>
          <option value="pine">Pine</option>
          <option value="cherry">Cherry</option>
          <option value="walnut">Walnut</option>
          <option value="white pine">White pine</option>
        </select>
        <textarea placeholder="Details" rows="5"></textarea>
        <label>Examples</label>
        <input type="file"></input>
        <button className="submit-quote-button">Get Quote</button>
      </div>
    </>
  );
};

export default CustomOrders;
