import CategoryFilter from "./CategoryFilter";
import { shopItems } from "../../data/data";
import { useState, useEffect } from "react";
import ShopItem from "./ShopItem";
import HeroContent from "../hero/HeroContent";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const location = useLocation();
  // Shop Categories & Filters
  const shopCategories = [
    "All Products",
    "Tables",
    "Signs",
    "Cutting Boards",
    "Coasters",
    "Other",
  ];
  // If user clicked shop category on Home Page make that category selected
  // Otherwise, default category is "All Products"
  const [selectedCategory, setSelectedCategory] = useState(
    location.state ? location.state : shopCategories[0]
  );

  // Get shop items that match the selected Category
  const filterShopItems = () => {
    return shopItems.filter((item) => {
      return item.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  };

  // Determine which shop items will be displayed
  // -> All or items that match selected category
  const filteredShopItems =
    selectedCategory === shopCategories[0] ? shopItems : filterShopItems();

  const handleFilter = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Hero image and Call to Action */}
      <HeroContent
        title="Shop"
        subtitle="Nostrud labore minim consequat excepteur"
        link="/custom-orders"
        callToActionText="Custom Orders"
      />
      {/* Shop Category Filter options */}
      <div className="shop-categories">
        {shopCategories.map((category) => {
          return (
            <CategoryFilter
              key={category}
              category={category}
              selected={selectedCategory}
              handleFilter={handleFilter}
            />
          );
        })}
      </div>
      {/* Shop items that match category filter */}
      <section className="shop-gallery">
        {filteredShopItems.map((item) => {
          return <ShopItem key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default Shop;
