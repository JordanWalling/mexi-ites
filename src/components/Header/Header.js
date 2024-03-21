import "../Header/Header.css";

import { MdLocationOn } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <h2>MEX-ITES</h2>
        </div>
        <div className="header__button-container">
          <div className="header__list">
            <FaListUl />
          </div>
          <div className="header__location">
            <MdLocationOn />
          </div>

          <div className="header__cart">
            <FaShoppingCart />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
