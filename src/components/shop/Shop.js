import CategoryFilter from "./CategoryFilters";
import { shopFilters, shopItems } from "../../data/data";
import { useState } from "react";
import ShopItems from "./ShopItems";
import HeroContent from "../hero/HeroContent";

const Shop = () => {
  const [selected, setSelected] = useState("All Products");

  const handleFilter = (category) => {
    setSelected(category);
  };

  return (
    <>
      {/* Hero image and Call to Action */}
      <HeroContent
        title="Shop"
        subtitle="Nostrud labore minim consequat excepteur"
        link="/custom-orders"
        callToActionText="Custom Orders"
      />
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
