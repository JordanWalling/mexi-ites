import "../pages/ItemDetailsPage.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { appContext } from "../context/context";

function ItemDetailsPage() {
  const { cart, setCart } = useContext(appContext);
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [mainChoice, setMainChoice] = useState(null);

  async function fetchItem() {
    const resp = await fetch("http://localhost:4000/items/" + id, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await resp.json();
    setItem(data);
    console.log(data);
  }

  useEffect(() => {
    fetchItem();
  }, []);

  function handlePlusButtonClick() {
    if (quantity < 10) {
      setQuantity((prev) => prev + 1);
    }
  }
  function handleMinusButtonClick() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  let totalItemPrice = quantity * item.price;

  function addToCart() {
    setCart((prev) => {
      return [
        ...prev,
        {
          itemPrice: item.price,
          quantity: quantity,
          title: item.title,
          image: item.image,
          mainFillingChoice: mainChoice,
        },
      ];
    });
  }
  console.log(cart);
  console.log(mainChoice);
  return (
    <div className="item__details-wrapper">
      <div className="item__details-main-content">
        <div className="item__details-img">
          <img src={item.image} alt={item.description} />
        </div>
        <div className="item__details-quantity-wrapper">
          <div className="item__details-quantity-container">
            <span className="minus">
              <button onClick={handleMinusButtonClick}>
                <FaMinus />
              </button>
            </span>
            <span className="number">{quantity}</span>

            <span className="plus">
              <button onClick={handlePlusButtonClick}>
                <FaPlus />
              </button>
            </span>
          </div>
        </div>
        <div className="item__details-item-desc">
          {/* <h2>BURRITOS</h2> */}
          <h2>{item.title}</h2>
          {item.price && <p>From ${item.price.toFixed(2)}</p>}
        </div>

        <div className="cart__addons-container">
          <div className="main-fillings">
            {item.mainFilling && <h3>CHOOSE YOUR MAIN FILLING</h3>}
            {item.mainFilling &&
              item.mainFilling.map((i) => {
                return (
                  <>
                    <div className="main-filling-container">
                      <div className="main-filling-img">
                        <img
                          src="https://images.pexels.com/photos/6896080/pexels-photo-6896080.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                        />
                      </div>
                      <div className="main-filling-title">
                        {/* <p>Grilled Chicken</p> */}
                        <p>{i}</p>
                      </div>
                      <div className="main-filling-radio">
                        <input
                          type="radio"
                          name="mainFilling"
                          value={i}
                          onChange={(e) => setMainChoice(e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
          </div>

          <div className="spice-level-container">
            {item.spiceLevel && <h3>CHOOSE SPICE LEVEL</h3>}
            {item.spiceLevel &&
              item.spiceLevel.map((spice) => {
                return (
                  <div className="spice-level-mild">
                    <p>{spice}</p>
                    <input type="radio" />
                  </div>
                );
              })}
          </div>
          <div className="extras__wrapper">
            {item.addOns && <h3>CHOOSE ANY EXTRAS</h3>}
            {item.addOns &&
              item.addOns.map((addOn) => {
                return (
                  <div className="extras__container">
                    <div className="extras__img">
                      <img
                        src="https://images.pexels.com/photos/6103071/pexels-photo-6103071.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                      />
                    </div>
                    <div className="extras__title">
                      <p>{addOn}</p>
                    </div>
                    <div className="extras__checkbox">
                      <input type="checkbox" />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="item__add-to-cart-container">
            <button onClick={addToCart}>
              Add To Order - ${totalItemPrice.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailsPage;
