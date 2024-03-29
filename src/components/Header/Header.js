import "../Header/Header.css";
import { appContext } from "../../context/context";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaListUl } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { cart, setCart } = useContext(appContext);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    let quantity = 0;
    cart.forEach((item) => {
      quantity += item.quantity;
    });
    setTotalQuantity(quantity);
  }, [cart]);
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
            <Link to="/contact">
              <MdLocationOn />
            </Link>
          </div>

          <div className="header__cart">
            <Link to="/cart">
              <FaShoppingCart />
              {totalQuantity > 0 && (
                <span key={totalQuantity.index} className="added-icon">
                  {totalQuantity}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
