import ItemListContainer from "../components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import Dashboard from "../components/pages/dashboard/Dashboard";
import CheckoutContainer from "../components/pages/checkout/CheckoutContainer";
export const routes = [
  {
    id: "home",
    path: "/",
    Element: ItemListContainer,
  },
  {
    id: "category",
    path: "/category/:categorias",
    Element: ItemListContainer,
  },
  {
    id: "detalle",
    path: "/detalle/:id",
    Element: ItemDetailContainer,
  },
  {
    id: "carrito",
    path: "/cart",
    Element: CartContainer,
  },
  {
    id: "checkout",
    path: "/checkout",
    Element: CheckoutContainer,
  },

  {
    id: "dashboard",
    path: "/dashboard",
    Element: Dashboard,
  },
];
