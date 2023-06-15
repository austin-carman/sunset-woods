// eslint-disable-next-line react/prop-types
const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const handleCloseCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div className={isCartOpen ? "cart" : "hide-cart"}>
      <div className="cart-header">
        <h3>Cart</h3>
        <h4 id="close-cart" onClick={handleCloseCart}>
          x
        </h4>
      </div>
      <div className="proceed-to-checkout">
        <button>Checkout</button>
      </div>
      <div className="cart-items-container">
        <div className="cart-item">
          <div className="cart-item-left-wrapper">
            <h6 className="delete-cart-item">x</h6>
            <div>
              <h5>Item</h5>
              <img src="" alt="cart item" />
            </div>
          </div>
          <h6>$8888</h6>
        </div>
        <div className="cart-item">
          <div className="cart-item-left-wrapper">
            <h6 className="delete-cart-item">x</h6>
            <div>
              <h5>Item</h5>
              <img src="" alt="cart item" />
            </div>
          </div>
          <h6>$8888</h6>
        </div>
        <div className="cart-total">
          <div>
            <h6>Total</h6>
            <span>+ taxes and shipping</span>
          </div>
          <h6>$$$</h6>
        </div>
      </div>
    </div>
  );
};

export default Cart;
