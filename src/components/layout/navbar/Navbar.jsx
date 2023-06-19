import CartWidget from "../../common/cartW/cartWidget";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <img
        className="container_logo"
        src="https://res.cloudinary.com/dzvfjjhb6/image/upload/v1687132305/clothing-shop-logo-design-apparel-store-sign-vector_t8ajwv.jpg"
        alt="Logo"
      />
      <ul className="container_list">
        <li>Inicio</li>
        <li>Hombre</li>
        <li>Mujer</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default Navbar;
