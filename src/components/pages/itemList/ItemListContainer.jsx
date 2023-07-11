import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categorias } = useParams();

  let productosFiltrados = products.filter(
    (elemento) => elemento.category === categorias
  );
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      resolve(categorias ? productosFiltrados : products);
      // reject("salio todo mal")
    });

    tarea
      .then((respuesta) => setItems(respuesta))
      .catch((error) => console.log(error));
  }, [categorias]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
