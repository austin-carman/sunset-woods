import { Link } from "react-router-dom";

const Shop = () => {
  // eslint-disable-next-line no-undef
  // const image = process.env.PUBLIC_URL + "./blue.png";

  return (
    <>
      <div style={{ height: "20vh" }}></div>
      <div className="shop-title-container">
        <h2>Shop</h2>
        <h4>
          Nostrud labore minim consequat excepteur cillum minim nisi minim
          dolor.
        </h4>
        <Link>
          <button className="shop-custom-order-button">Custom Order</button>
        </Link>
      </div>
      <section></section>
    </>
  );
};

export default Shop;
