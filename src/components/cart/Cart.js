import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { showConfirmation } from "../../helper-functions/helper-functions";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// eslint-disable-next-line react/prop-types
const Cart = ({ isCartOpen, setIsCartOpen }) => {
  // shared state -> see CartContext.js
  const { cart, setCart } = useContext(CartContext);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handleCloseCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleDeleteCartItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    showConfirmation(setIsConfirmationOpen);
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
      <div className="cart-header">
        {/* # of items in cart */}
        <h3>({cart.length}) Items</h3>
        {/* Close cart */}
        <span className="close-cart" onClick={handleCloseCart}>
          x
        </span>
      </div>
      {/* Checkout button */}
      <div className="proceed-to-checkout">
        <button>Checkout</button>
      </div>
      {/* Item successfully removed from cart confirmation message */}
      {isConfirmationOpen && (
        <div className="remove-from-cart">Item Removed</div>
      )}
      <div className="cart-items-container">
        <div className="cart-total">
          <div>
            <h6>Total</h6>
            <span>+ taxes and shipping</span>
          </div>
          <h6>${cartTotal}</h6>
        </div>
        {/* Cart Items */}
        {cart.map((item, index) => {
          return (
            <div className="cart-item" key={`${item.id}-${index}`}>
              <div className="cart-item-left-wrapper">
                <span
                  className="delete-cart-item"
                  onClick={() => handleDeleteCartItem(index)}
                >
                  <DeleteOutlinedIcon fontSize="5rem" />
                </span>
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
