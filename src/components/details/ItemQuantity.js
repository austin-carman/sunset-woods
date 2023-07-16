/* eslint-disable react/prop-types */
const ItemQuantity = ({ quantity, setQuantity }) => {
  // Change quantity
  const handleClickQuantity = (value) => {
    // Don't allow quantity to go below 1
    if (quantity === 1 && value === -1) {
      return;
    }
    setQuantity(quantity + value);
  };

  // Change quantity to value typed by user
  const handleChangeQuantity = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  return (
    <div>
      <h3>Quantity</h3>
      <div className="quantity-container">
        {/* Decrease quantity */}
        <div
          className="quantity-increments"
          onClick={() => handleClickQuantity(-1)}
        >
          -
        </div>
        {/* Type in quantity */}
        <input
          name="quantity"
          value={quantity}
          onChange={handleChangeQuantity}
        ></input>
        {/* Increase quantity */}
        <div
          className="quantity-increments"
          onClick={() => handleClickQuantity(1)}
        >
          +
        </div>
      </div>
    </div>
  );
};

export default ItemQuantity;
