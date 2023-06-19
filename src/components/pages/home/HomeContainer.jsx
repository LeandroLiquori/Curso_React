import Home from "./Home";
import "./Home.css";
import { useState } from "react";

const HomeContainer = () => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };
  return <Home contador={contador} sumar={sumar} restar={restar} />;
};

export default HomeContainer;
