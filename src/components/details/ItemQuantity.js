/* eslint-disable react/prop-types */
const ItemQuantity = ({ quantity, setQuantity }) => {
  const handleClickQuantity = (value) => {
    if (quantity === 1 && value === -1) {
      return;
    }
    setQuantity(quantity + value);
  };

  const handleChangeQuantity = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  return (
    <div>
      <h3>Quantity</h3>
      <div className="quantity-container">
        <div
          className="quantity-increments"
          onClick={() => handleClickQuantity(-1)}
        >
          -
        </div>
        <input
          name="quantity"
          value={quantity}
          onChange={handleChangeQuantity}
        ></input>
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
