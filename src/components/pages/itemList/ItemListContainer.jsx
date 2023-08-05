import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { database } from "../../../firebaseConfig";

import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categorias } = useParams();

  useEffect(() => {
    let consulta;
    let ref = collection(database, "products");

    if (!categorias) {
      consulta = ref;
    } else {
      consulta = query(ref, where("category", "==", categorias));
    }

    getDocs(consulta).then((res) => {
      console.log(res.docs);
      let arrayProductos = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(arrayProductos);
    });
  }, [categorias]);

  return (
    <>
      <ItemList items={items} />;
    </>
  );
};

export default ItemListContainer;
