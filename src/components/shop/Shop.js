import { Link } from "react-router-dom";
import CategoryFilter from "./CategoryFilters";
import { shopFilters } from "../../data/data";
import { useState } from "react";

const Shop = () => {
  const [selected, setSelected] = useState("All Products");

  // eslint-disable-next-line no-undef
  const image = process.env.PUBLIC_URL + "./blue.png";

  const handleFilter = (category) => {
    setSelected(category);
  };

  return (
    <>
      <div className="hero-img-container">
        <div className="hero-content-container">
          <h1>Shop</h1>
          <h4>
            Nostrud labore minim consequat excepteur cillum minim nisi minim
            dolor.
          </h4>
          <Link>
            <button className="shop-custom-order-button">Custom Order</button>
          </Link>
        </div>
      </div>
      <div className="shop-categories">
        {shopFilters.map((category) => {
          return (
            <CategoryFilter
              key={category}
              category={category}
              selected={selected}
              handleFilter={handleFilter}
            />
          );
        })}
      </div>
      <section className="shop-gallery">
        <div className="shop-gallery-item">
          <img src={image} alt="" />
          <h3>Title</h3>
          <p>Cupidatat magna voluptate duis ex.</p>
          <p>$XXX</p>
        </div>
        <div className="shop-gallery-item">
          <img src={image} alt="" />
          <h3>Title</h3>
          <p>Cupidatat magna voluptate duis ex.</p>
          <p>$XXX</p>
        </div>
        <div className="shop-gallery-item">
          <img src={image} alt="" />
          <h3>Title</h3>
          <p>Cupidatat magna voluptate duis ex.</p>
          <p>$XXX</p>
        </div>
      </section>
    </>
  );
};

export default Shop;
