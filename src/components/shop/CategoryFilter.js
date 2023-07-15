/* eslint-disable react/prop-types */
const CategoryFilter = ({ category, selected, handleFilter }) => {
  return (
    <div
      // eslint-disable-next-line prettier/prettier
      className={`shop-categories-item ${selected.toLowerCase() === category.toLowerCase() && "selected"}`}
      onClick={() => handleFilter(category)}
    >
      <h4>{category}</h4>
    </div>
  );
};

export default CategoryFilter;
