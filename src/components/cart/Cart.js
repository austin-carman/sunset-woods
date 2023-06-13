const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-header">
        <h3>Cart</h3>
        <h4>x</h4>
      </div>
      <div className="cart-items-container">
        <div className="cart-item">
          <div>
            <h5>Item</h5>
            <img src="" alt="cart item" />
          </div>
          <h6>$$$</h6>
        </div>
        <div className="cart-item">
          <div>
            <h5>Item</h5>
            <img src="" alt="cart item" />
          </div>
          <h6>$$$</h6>
        </div>
        <div className="cart-item">
          <div>
            <h5>Item</h5>
            <img src="" alt="cart item" />
          </div>
          <h6>$$$</h6>
        </div>
      </div>
    </div>
  );
};

export default Cart;
