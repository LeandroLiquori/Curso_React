import "./CartContainer.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartContainer = () => {
  const { cart, clearCart, deleteById, precioTotal } = useContext(CartContext);

  let limpiar = () => {
    Swal.fire({
      title: "Quieres eliminar los productos del carrito ?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Si, eliminar",
      denyButtonText: `No, no eliminar`,
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Carrito eliminado con exito", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Los productos continuan en el carro", "", "info");
      }
    });
  };

  let total = precioTotal();
  return (
    <div>
      <h1>Estoy en el carrito</h1>

      {cart.map((elemento) => {
        return (
          <div
            className="borderCart"
            style={{ border: "2px solid black" }}
            key={elemento.id}
          >
            <h3>{elemento.title}</h3>
            <h3>{elemento.price}</h3>
            <h4>Cantidad: {elemento.quantity}</h4>
            <button onClick={() => deleteById(elemento.id)}>Eliminar</button>
          </div>
        );
      })}

      <Button
        style={{
          border: "2px solid red",
          color: "black",
          backgroundColor: "red",
        }}
        variant="outlined"
        onClick={limpiar}
      >
        Limpiar Carrito
      </Button>
      <Link to="/checkout">
        <Button
          style={{
            backgroundColor: "green",
            color: "black",
            border: "2px solid green",
          }}
          variant="outlined"
          className="buttoncart"
        >
          Finalizar compra
        </Button>
      </Link>
      <h2>El total de la compra es : ${total} </h2>
    </div>
  );
};

export default CartContainer;
