import "../Cart/CartPage.css";
import { useContext } from "react";
import { appContext } from "../../context/context";
function CartPage() {
  const { cart } = useContext(appContext);

  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.itemPrice * cartItem.quantity;
  }, 0);
  return (
    <div className="cart__wrapper">
      {cart.length > 0 ? (
        cart.map((cartItem) => (
          <div className="cart__item-container">
            <div className="cart__item-number">
              <div className="cart__img-container">
                <img src={cartItem.image} alt={cartItem.title} />
              </div>
              <div className="cart__quantity-container">
                <button>-</button>
                <input type="number" min="1" placeholder={cartItem.quantity} />
                <button>+</button>
              </div>
              <div className="cart__item-total-price">
                <p>
                  $
                  {cartItem &&
                    cartItem.itemPrice * cartItem.quantity.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="cart__item-desc">
              <div className="cart__item-title">
                <h3>{cartItem.title}</h3>
              </div>
              {cartItem.mainFillingChoice &&
                cartItem.mainFillingChoice.length > 0 && (
                  <div>
                    <span>{cartItem.mainFillingChoice}</span>
                  </div>
                )}
              {cartItem.addOns.length > 0 && (
                <div className="cart__item-add-ons">
                  {cartItem.addOns.map((addOn) => {
                    return (
                      <ul key={addOn}>
                        <li>+ {addOn}</li>
                        {/* <li>+ Cheese</li>
                            <li>+ Tomatoe</li>
                            <li>+ Chill Sauce</li> */}
                      </ul>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No Products in Cart</p>
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

{
  /* <div className="cart__item-container">
        <div className="cart__img-container">
          <img
            src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
            width="70px"
            height="70px"
          />
        </div>
        <div className="cart__quantity-container">
          <button>-</button>
          <input type="number" />
          <button>+</button>
        </div>
        <div className="cart__item-total-price">
          <p>$29.95</p>
        </div>
        <div className="cart__item-title">
          <h3>Burritos</h3>
        </div>
        <div className="cart__item-add-ons">
          <ul>
            <li>+ Cheese</li>
            <li>+ Tomatoe</li>
            <li>+ Chill Sauce</li>
          </ul>
        </div>
      </div> */
}
