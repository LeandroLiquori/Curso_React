import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { database } from "../../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";
import { Button } from "@mui/material";

const CheckoutContainer = () => {
  const { cart, cantidadTotal } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (evento) => {
    evento.preventDefault();

    let order = {
      buyer: userData,
      items: cart,
      total: cantidadTotal(),
      date: serverTimestamp(),
    };

    let ordersCollection = collection(database, "orders");
    addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

    cart.forEach((elemento) => {
      updateDoc(doc(database, "products", elemento.id), {
        stock: elemento.stock - elemento.quantity,
      });
    });
  };

  const handleChange = (evento) => {
    setUserData({ ...userData, [evento.target.name]: evento.target.value });
  };
  return (
    <div>
      <h1>Checkout</h1>
      {!orderId ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="ingrese su nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="ingrese su telefono"
            name="phone"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <Button variant="contained" type="submit">
            Comprar
          </Button>
        </form>
      ) : (
        <h3>Su numero de compra: {orderId} </h3>
      )}
    </div>
  );
};
export default CheckoutContainer;
