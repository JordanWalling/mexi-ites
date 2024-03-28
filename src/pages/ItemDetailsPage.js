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
  const [selectedSpice, setSelectedSpice] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

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

  function handleAddOnChange(addOn) {
    setSelectedAddOns((prevSelected) => {
      if (prevSelected.includes(addOn)) {
        return prevSelected.filter((item) => item !== addOn);
      } else {
        return [...prevSelected, addOn];
      }
    });
  }

  function addToCart() {
    const newItem = {
      itemPrice: item.price,
      quantity: quantity,
      title: item.title,
      image: item.image,
      mainFillingChoice: mainChoice,
      addOns: selectedAddOns,
      spice: selectedSpice,
    };

    const existingItem = cart.find((cartItem) => {
      return (
        cartItem.title === newItem.title &&
        cartItem.spice === newItem.selectedSpice &&
        cartItem.mainFillingChoice === mainChoice &&
        JSON.stringify(cartItem.addOns) === JSON.stringify(newItem.addOns)
      );
    });

    if (existingItem) {
      const updatedCart = cart.map((cartItem) => {
        if (
          cartItem.title === existingItem.title &&
          cartItem.spice === existingItem.spice &&
          cartItem.mainFillingChoice === existingItem.mainFillingChoice &&
          JSON.stringify(cartItem.addOns) ===
            JSON.stringify(existingItem.addOns)
        ) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + quantity,
          };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {
      setCart((prev) => [...prev, newItem]);
    }
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
                    <div className="main-filling-container" key={i}>
                      <div className="main-filling-img">
                        <img
                          src="https://images.pexels.com/photos/6896080/pexels-photo-6896080.jpeg?auto=compress&cs=tinysrgb&w=600"
                          alt=""
                        />
                      </div>
                      <div className="main-filling-title">
                        <p>{i}</p>
                      </div>
                      <div className="main-filling-radio">
                        <input
                          type="radio"
                          name="mainFilling"
                          value={i}
                          checked={mainChoice === i}
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
                    <input
                      type="radio"
                      name="spiceChoice"
                      value={spice}
                      checked={selectedSpice === spice}
                      onChange={(e) => setSelectedSpice(e.target.value)}
                    />
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
                      <input
                        type="checkbox"
                        value={selectedAddOns}
                        onChange={() => handleAddOnChange(addOn)}
                      />
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
