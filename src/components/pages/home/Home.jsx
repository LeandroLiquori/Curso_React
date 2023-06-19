const Home = ({ contador, sumar, restar }) => {
  return (
    <div className="home">
      <h1 className="home_h1">
        <u>LianShop</u>
      </h1>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
    </div>
  );
};

export default Home;
