import CategoryFilter from "./CategoryFilters";
import { shopFilters, shopItems } from "../../data/data";
import { useState } from "react";
import ShopItem from "./ShopItem";
import HeroContent from "../hero/HeroContent";

const Shop = () => {
  const initialSelected = "All Products";
  const [selected, setSelected] = useState(initialSelected);

  const filterShopItems = () => {
    return shopItems.filter((item) => {
      return item.category === selected;
    });
  };

  const filteredShopItems =
    selected === initialSelected ? shopItems : filterShopItems();

  const handleFilter = (category) => {
    setSelected(category);
    filterShopItems();
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
        {filteredShopItems.map((item) => {
          return <ShopItem key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default Shop;
