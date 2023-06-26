import HeroContent from "../hero/HeroContent";
import { useState } from "react";

const CustomOrders = () => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    whatToBuild: "",
    dimensions: "",
    woodType: "Wood Type",
    details: "",
    file: "",
  };
  const [customOrderForm, setCustomOrderForm] = useState(initialState);
  // eslint-disable-next-line no-undef
  const image = process.env.PUBLIC_URL + "/blue.png";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomOrderForm({ ...customOrderForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send contact form
    console.log("custom order: ", customOrderForm);
  };

  return (
    <>
      {/* Hero image and Call to Action */}
      <HeroContent
        title="Custom Orders"
        subtitle="Nostrud labore minim consequat excepteur"
        link="/shop"
        callToActionText="Visit Shop"
      />
      <div className="custom-orders-content-container">
        <div className="custom-orders-image-container">
          <img src={image} alt="" />
        </div>
        <form className="custom-form-container" onSubmit={handleSubmit}>
          <h3>Get a Quote for a custom build</h3>
          <input
            name="name"
            onChange={handleChange}
            value={customOrderForm.name}
            placeholder="Name"
          ></input>
          <input
            name="email"
            onChange={handleChange}
            type="email"
            value={customOrderForm.email}
            placeholder="Email"
          ></input>
          <input
            name="phone"
            onChange={handleChange}
            type="tel"
            value={customOrderForm.phone}
            placeholder="Phone"
          ></input>
          <input
            name="whatToBuild"
            onChange={handleChange}
            value={customOrderForm.whatToBuild}
            placeholder="What do you want built"
          ></input>
          <input
            name="dimensions"
            onChange={handleChange}
            value={customOrderForm.dimensions}
            placeholder="LxWxH Dimensions (if known)"
          ></input>
          <select
            id="wood-types"
            name="woodType"
            onChange={handleChange}
            value={customOrderForm.woodType}
          >
            <option>Wood Type</option>
            <option value="pine">Pine</option>
            <option value="cherry">Cherry</option>
            <option value="walnut">Walnut</option>
            <option value="white pine">White pine</option>
          </select>
          <textarea
            placeholder="Details"
            rows="5"
            name="details"
            value={customOrderForm.details}
            onChange={handleChange}
          ></textarea>
          <label>Examples</label>
          <input
            name="file"
            value={customOrderForm.file}
            type="file"
            onChange={handleChange}
          ></input>
          <button className="submit-quote-button" onClick={handleSubmit}>
            Get Quote
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomOrders;
