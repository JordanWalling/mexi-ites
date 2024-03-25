import "../pages/ItemDetailsPage.css";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ItemDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState({});

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
  }

  useEffect(() => {
    fetchItem();
  }, []);
  return (
    <div className="item__details-wrapper">
      <div className="item__details-main-content">
        <div className="item__details-img">
          <img
            // src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=800"
            src={item.image}
            alt={item.description}
          />
        </div>
        <div className="item__details-quantity-wrapper">
          <div className="item__details-quantity-container">
            <span className="minus">
              <FaMinus />
            </span>
            <span className="number">1</span>
            <span className="plus">
              <FaPlus />
            </span>
          </div>
        </div>
        <div className="item__details-item-desc">
          {/* <h2>BURRITOS</h2> */}
          <h2>{item.title}</h2>
          <p>From $13.70</p>
        </div>

        <div className="cart__addons-container">
          <div className="main-fillings">
            <h3>CHOOSE YOUR MAIN FILLING</h3>
            <div className="main-filling-container">
              <div className="main-filling-img">
                <img
                  src="https://images.pexels.com/photos/6896080/pexels-photo-6896080.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="main-filling-title">
                <p>Grilled Chicken</p>
              </div>
              <div className="main-filling-radio">
                <input type="radio" />
              </div>
            </div>
            <div className="main-filling-container">
              <div className="main-filling-img">
                <img
                  src="https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="main-filling-title">
                <p>Grilled Beef</p>
              </div>
              <div className="main-filling-radio">
                <input type="radio" />
              </div>
            </div>
          </div>
          <div className="spice-level-container">
            <h3>CHOOSE SPICE LEVEL</h3>
            <div className="spice-level-mild">
              <p>Mild</p>
              <input type="radio" />
            </div>
            <div className="spice-level-spicy">
              <p>Spicy</p>
              <input type="radio" />
            </div>
          </div>
          <div className="extras__wrapper">
            <h3>CHOOSE ANY EXTRAS</h3>
            <div className="extras__container">
              <div className="extras__img">
                <img
                  src="https://images.pexels.com/photos/6103071/pexels-photo-6103071.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="extras__title">
                <p>Brown Rice</p>
              </div>
              <div className="extras__checkbox">
                <input type="checkbox" />
              </div>
            </div>
            <div className="extras__container">
              <div className="extras__img">
                <img
                  src="https://images.pexels.com/photos/4109946/pexels-photo-4109946.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="extras__title">
                <p>Cheese</p>
              </div>
              <div className="extras__checkbox">
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div className="item__add-to-cart-container">
            <button>Add To Order - $29.95</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ItemDetailsPage;
