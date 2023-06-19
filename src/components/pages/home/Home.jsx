import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [contador, setContador] = useState(0);
  const sumar = () => {
    setContador(contador + 1);
  };

  return (
    <div className="home">
      <h1 className="home_h1">
        <u>LianShop</u>
      </h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Home;
