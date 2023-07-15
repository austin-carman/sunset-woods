/* eslint-disable react/prop-types */
const CategoryFilter = ({ category, selected, handleFilter }) => {
  return (
    <div
      className={
        selected.toLowerCase() === category.toLowerCase()
          ? "shop-categories-item selected"
          : "shop-categories-item"
      }
      onClick={() => handleFilter(category)}
    >
      <h4>{category}</h4>
    </div>
  );
};

export default CategoryFilter;
