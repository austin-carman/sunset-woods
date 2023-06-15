// eslint-disable-next-line react/prop-types
const CategoryFilter = ({ category, selected, handleFilter }) => {
  // eslint-disable-next-line no-undef
  const image = process.env.PUBLIC_URL + "./blue.png";

  return (
    <div
      className={
        selected === category
          ? "shop-categories-item selected"
          : "shop-categories-item"
      }
      onClick={() => handleFilter(category)}
    >
      <img src={image} alt="" />
      <h4>{category}</h4>
    </div>
  );
};

export default CategoryFilter;
