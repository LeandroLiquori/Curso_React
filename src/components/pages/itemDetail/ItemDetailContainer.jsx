import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { database } from "../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();

  const { addToCart, cantidadSegunId } = useContext(CartContext);

  let cantidadEnCarrito = cantidadSegunId(id);

  useEffect(() => {
    let refColection = collection(database, "products");
    let refDoc = doc(refColection, id);
    getDoc(refDoc).then((res) => setProduct({ ...res.data(), id: res.id }));
  }, [id]);

  const agregarAlCarrito = (cantidad) => {
    let data = {
      ...product,
      quantity: cantidad,
    };
    addToCart(data);

    toast.success("El producto fue agregado correctamente!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      <ItemDetail
        product={product}
        agregarAlCarrito={agregarAlCarrito}
        cantidadEnCarrito={cantidadEnCarrito}
      />
      <ToastContainer />
    </>
  );
};

export default ItemDetailContainer;
