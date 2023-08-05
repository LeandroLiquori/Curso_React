import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CartContext);

  let cantTotal = cantidadTotal();

  return (
    <Link to="/cart" style={{ color: "white" }}>
      <Badge badgeContent={cantTotal} color="primary" showZero>
        <ShoppingCartIcon color="main" sx={{ fontSize: 40 }} />
      </Badge>
    </Link>
  );
};

export default CartWidget;
