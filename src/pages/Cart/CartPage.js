import "../Cart/CartPage.css";
function CartPage() {
  return (
    <div className="cart__wrapper">
      <div className="cart__item-container">
        <div className="cart__item-number">
          <div className="cart__img-container">
            <img
              src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
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
        </div>
        <div className="cart__item-desc">
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
        </div>
      </div>
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
