import "../Header/Header.css";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header>
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <h2>MEX-ITES</h2>
          </Link>
        </div>
        <div className="header__button-container">
          <div className="header__list">
            <Link to="/menu">
              <FaListUl />
            </Link>
          </div>
          <div className="header__location">
            <MdLocationOn />
          </div>

          <div className="header__cart">
            <Link to="/cart">
              <FaShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
