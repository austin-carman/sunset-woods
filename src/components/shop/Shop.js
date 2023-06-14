import { Link } from "react-router-dom";
import CategoryFilter from "./CategoryFilters";
import { shopFilters, shopItems } from "../../data/data";
import { useState } from "react";
import ShopItems from "./ShopItems";

const Shop = () => {
  const [selected, setSelected] = useState("All Products");

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
        {shopItems.map((item) => {
          return <ShopItems key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default Shop;
