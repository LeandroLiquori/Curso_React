import Home from "./components/pages/home/Home";
import Navbar from "./components/layout/navbar/Navbar";
import ItemListCotainer from "./components/pages/itemList/ItemListCotainer";
function App() {
  const saludar = "Hola, ¿Como estas?";
  return (
    <div>
      <Navbar />
      <Home />
      <ItemListCotainer saludar={saludar} />
    </div>
  );
}

export default App;
