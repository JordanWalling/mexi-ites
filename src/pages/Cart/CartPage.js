import "../Cart/CartPage.css";
import { useContext } from "react";
import { appContext } from "../../context/context";
import { ImCross } from "react-icons/im";
import { toast } from "react-toastify";

function CartPage() {
  const { cart, setCart } = useContext(appContext);

  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.itemPrice * cartItem.quantity;
  }, 0);

  function handleIncrement(index) {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity === 10) {
      return;
    }
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
  }
  function handleDecrement(index) {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity === 1) {
      handleRemoveItem(index);
    }
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCart(updatedCart);
    }
  }

  function handleRemoveItem(index) {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    toast.success("Item removed from Cart");
  }
  return (
    <div className="cart__wrapper">
      {cart.length > 0 ? (
        cart.map((cartItem, index) => (
          <div className="cart__item-container" key={index}>
            <div className="cart__item-number">
              <div className="cart__img-container">
                <img src={cartItem.image} alt={cartItem.title} />
              </div>
              <div className="cart__quantity-container">
                <button onClick={() => handleDecrement(index)}>-</button>
                <input
                  type="number"
                  min="1"
                  max="10"
                  readOnly
                  placeholder={cartItem.quantity}
                />
                <button onClick={() => handleIncrement(index)}>+</button>
              </div>
              <div className="cart__item-total-price">
                <p>
                  $
                  {(cartItem && cartItem.itemPrice * cartItem.quantity).toFixed(
                    2
                  )}
                </p>
              </div>
              <span className="cart__item-remove-item">
                <button onClick={() => handleRemoveItem(index)}>
                  <ImCross />
                </button>
              </span>
            </div>
            <div className="cart__item-desc">
              <div className="cart__item-title">
                <h3>{cartItem.title}</h3>
              </div>
              {cartItem.mainFillingChoice &&
                cartItem.mainFillingChoice.length > 0 && (
                  <div className="cart__main-filling">
                    <span>{cartItem.mainFillingChoice}</span>
                  </div>
                )}
              {cartItem.spice && cartItem.spice.length > 0 && (
                <div className="cart__spice">
                  <span>{cartItem.spice}</span>
                </div>
              )}
              {cartItem.addOns.length > 0 && (
                <div className="cart__item-add-ons">
                  {cartItem.addOns.map((addOn) => {
                    return (
                      <ul key={addOn}>
                        <li>+ {addOn}</li>
                      </ul>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <div className="cart__no-products">
          <p>No Products in Cart</p>
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart__all-items-price">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}
export default CartPage;
