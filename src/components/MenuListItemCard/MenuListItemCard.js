import { IoIosArrowForward } from "react-icons/io";
import "../MenuListItemCard/MenuListItemCard.css";
function MenuListItemCard({ item }) {
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
            {item.ingredients ? <h3>Ingredients</h3> : ""}
            <ul>
              {item?.ingredients?.map((ingredient) => {
                return (
                  <li key={ingredient}>
                    <span>
                      <IoIosArrowForward />
                    </span>{" "}
                    {ingredient}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
export default MenuListItemCard;
