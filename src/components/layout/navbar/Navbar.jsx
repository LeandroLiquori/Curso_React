//import CartWidget from "../../common/cartWidget/CartWidget";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
        <li>
          <a className="links" href="">
            Inicio
          </a>
        </li>
        <li>
          <a className="links" href="">
            Hombre
          </a>
        </li>
        <li>
          <a className="links" href="">
            Mujer
          </a>
        </li>
      </ul>
      <Badge badgeContent={4} color="primary">
        <ShoppingCartIcon fontSize="large" className="carrito" />
      </Badge>
    </div>
  );
};

export default Navbar;
