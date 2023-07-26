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
  // HeroContent props
  const heroTitle = "Shop";
  const callToActionLink = "/custom-orders";
  const callToActionText = "Custom Order";

  const errorMessage = "Could not find shop items.";
  // If user clicked shop category on Home Page make that category selected
  // Otherwise, default category is "All Products"
  const [selectedCategory, setSelectedCategory] = useState(
    location.state ? location.state : shopCategories[0]
  );
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // This API request is using mockAPI endpoint to demonstrate example of
    // API request if backend existed
    const fetchShopItems = async () => {
      // Mock API endpoint -> eventually need to replace with real endpoint
      const url = "https://64af0767c85640541d4e0eb8.mockapi.io/api/v1/messages";
      try {
        const response = await fetch(url);
        if (!response.ok) {
          setError(errorMessage);
        } else {
          // using dummy data (shopItems) until real RESTAPI endpoint and data is created.
          setItems(shopItems);
        }
      } catch (error) {
        setError(!error);
      }
    };

    fetchShopItems();
  }, []);

  // Get shop items that match the selected Category
  const filterShopItems = () => {
    return items.filter((item) => {
      return item.category.toLowerCase() === selectedCategory.toLowerCase();
    });
  };

  // Determine which shop items will be displayed
  // -> All or items that match selected category
  const filteredShopItems =
    selectedCategory === shopCategories[0] ? items : filterShopItems();

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
        title={heroTitle}
        link={callToActionLink}
        callToActionText={callToActionText}
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
      {error && <h3>{error}</h3>}
    </>
  );
};

export default Shop;
