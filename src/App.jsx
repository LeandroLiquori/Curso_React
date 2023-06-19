import Navbar from "./components/layout/navbar/Navbar";
import HomeContainer from "./components/pages/home/HomeContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";

function App() {
  const saludar = "Hola como estas? Bienvenido a LianShop";
  return (
    <div>
      <Navbar />
      <HomeContainer />
      <ItemListContainer saludar={saludar} />
    </div>
  );
}

export default App;
