import { Link } from "react-router-dom";
import { useState } from "react";

const Shop = () => {
  // eslint-disable-next-line no-unused-vars
  const [selected, setSelected] = useState("");
  // eslint-disable-next-line no-undef
  const image = process.env.PUBLIC_URL + "./blue.png";

  const handleClickCategory = (category) => {
    setSelected(category);
  };

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
      <section className="shop-categories">
        <div
          className={
            selected === "all"
              ? "shop-categories-item selected"
              : "shop-categories-item"
          }
          onClick={() => handleClickCategory("all")}
        >
          <img src={image} alt="" />
          <h4>All Products</h4>
        </div>
        <div
          className={
            selected === "furniture"
              ? "shop-categories-item selected"
              : "shop-categories-item"
          }
          onClick={() => handleClickCategory("furniture")}
        >
          <img src={image} alt="" />
          <h4>Furniture</h4>
        </div>
        <div
          className={
            selected === "signs"
              ? "shop-categories-item selected"
              : "shop-categories-item"
          }
          onClick={() => handleClickCategory("signs")}
        >
          <img src={image} alt="" />
          <h4>Signs</h4>
        </div>
        <div
          className={
            selected === "boards"
              ? "shop-categories-item selected"
              : "shop-categories-item"
          }
          onClick={() => handleClickCategory("boards")}
        >
          <img src={image} alt="" />
          <h4>Cutting Boards</h4>
        </div>
        <div
          className={
            selected === "coasters"
              ? "shop-categories-item selected"
              : "shop-categories-item"
          }
          onClick={() => handleClickCategory("coasters")}
        >
          <img src={image} alt="" />
          <h4>Coasters</h4>
        </div>
        <div
          className={
            selected === "other"
              ? "shop-categories-item selected"
              : "shop-categories-item"
          }
          onClick={() => handleClickCategory("other")}
        >
          <img src={image} alt="" />
          <h4>Other</h4>
        </div>
      </section>
    </>
  );
};

export default Shop;
