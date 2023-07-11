import CartWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="container">
        <Link to="/">
          <img
            className="container_logo"
            src="https://res.cloudinary.com/dzvfjjhb6/image/upload/v1687132305/clothing-shop-logo-design-apparel-store-sign-vector_t8ajwv.jpg"
            alt="Logo"
          />
        </Link>
        <ul className="container_list">
          <Link to="/" className="links">
            Inicio
          </Link>

          <Link to="/category/Hombre" className="links">
            Hombre
          </Link>

          <Link to="/category/Mujer" className="links">
            Mujer
          </Link>
        </ul>
        <CartWidget />
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
