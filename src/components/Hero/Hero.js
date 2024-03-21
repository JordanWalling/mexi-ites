import "../Hero/Hero.css";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="hero__section">
      <h1>MEX-ITES</h1>
      <h2>Let us bring the joy to you!</h2>
      <Link to="/menu">
        <button>Browse Our Menu</button>
      </Link>
    </section>
  );
}
export default Hero;
