import "../pages/ContactPage.css";
import { FaHouse } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { FaFacebook } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="contact__page-wrapper">
      <div className="contact__container">
        <div className="contact__img-container">
          <h1>Come Say Hi...</h1>
        </div>
        <div className="contact__info-container">
          <div className="contact__group">
            <div className="contact__group-container">
              <div className="contact__item">
                <div className="contact__item-icon">
                  <FaHouse />
                </div>
                <div className="contact__item-value">
                  <p>123 Fake St, Not Real, Earth, 5678</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon">
                  <MdEmail />
                </div>
                <div className="contact__item-value">
                  <p>thisisnotanemail@gmail.com</p>
                </div>
              </div>
              <div className="contact__item">
                <div className="contact__item-icon">
                  <FaFacebook />
                </div>
                <div className="contact__item-value">
                  <p>@mexi-bites</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
