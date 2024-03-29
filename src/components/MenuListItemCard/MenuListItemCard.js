import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import "../MenuListItemCard/MenuListItemCard.css";
import { Link } from "react-router-dom";
function MenuListItemCard({ item }) {
  const [showIngredients, setShowIngredients] = useState(false);
  const windowWidth = window.innerWidth;

  function toggleIngredients() {
    setShowIngredients((prev) => !prev);
  }
  return (
    <li key={item.id} className="menulist__card">
      <div className="card__image">
        <img src={item.image} alt="" />
      </div>
      <div className="card__content">
        <h3 className="card__title">{item.title}</h3>
        <p className="card__description">{item.description}</p>
        <div className="card__ingredients">
          <div className="card__ingredients-title">
            {item.ingredients ? (
              <div className="card__ingredients-heading">
                <h3>Ingredients</h3>
                {windowWidth < 768 ? (
                  <span>
                    <button onClick={toggleIngredients}>
                      <IoIosArrowDown />
                    </button>
                  </span>
                ) : null}
              </div>
            ) : (
              ""
            )}

            <ul
              style={
                showIngredients || windowWidth >= 768
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {item?.ingredients?.map((ingredient) => {
                return (
                  <li key={ingredient}>
                    <span>
                      <IoIosArrowForward />
                    </span>
                    <span>{ingredient} </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Link to={`/menu/${item.id}`}>
        <button className="menu__list-item-btn">Order {item.title}</button>
      </Link>
    </li>
  );
}
export default MenuListItemCard;
