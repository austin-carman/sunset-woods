import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

// eslint-disable-next-line react/prop-types
const Cart = ({ isCartOpen, setIsCartOpen }) => {
  const { cart, setCart } = useContext(CartContext);

  const handleCloseCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleDeleteCartItem = (id) => {
    const updatedCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(updatedCart);
  };

  const calculateCartTotal = () => {
    let total = 0;
    cart.map((item) => {
      total += item.totalPrice;
    });
    return total;
  };

  const cartTotal = calculateCartTotal();

  return (
    <div className={`cart ${isCartOpen ? "slide-in" : "slide-out"}`}>
      {/* <div className={isCartOpen ? "cart slide-in" : "slide-out"}> */}
      {/* <div className={isCartOpen ? "cart slide-in" : "hide-cart slide-out"}> */}
      <div className="cart-header">
        <h3>({cart.length}) Items</h3>
        <span className="close-cart" onClick={handleCloseCart}>
          x
        </span>
      </div>
      <div className="proceed-to-checkout">
        <button>Checkout</button>
      </div>
      <div className="cart-items-container">
        <div className="cart-total">
          <div>
            <h6>Total</h6>
            <span>+ taxes and shipping</span>
          </div>
          <h6>${cartTotal}</h6>
        </div>
        {cart.map((item, index) => {
          return (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <div className="cart-item-left-wrapper">
                <div
                  className="delete-cart-item"
                  onClick={() => handleDeleteCartItem(item.id)}
                >
                  X
                </div>
                <div>
                  <img src={item.image} alt="" />
                  <div>
                    <h5>{item.name}</h5>
                    <h6>
                      ${item.unitPrice} x {item.quantity}
                    </h6>
                  </div>
                </div>
              </div>
              <div>${item.totalPrice}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
