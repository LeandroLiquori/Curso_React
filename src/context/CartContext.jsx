import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextComponent = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const addToCart = (product) => {
    let existe = cart.some((elemento) => elemento.id === product.id);
    if (existe) {
      let newArr = cart.map((elemento) => {
        if (product.id === elemento.id) {
          return {
            ...elemento,
            quantity: product.quantity,
          };
        } else {
          return elemento;
        }
      });
      localStorage.setItem("cart", JSON.stringify(newArr));
      setCart(newArr);
    } else {
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      setCart([...cart, product]);
    }
  };

  const clearCart = () => {
    localStorage.removeItem("cart");

    setCart([]);
  };

  const deleteById = (id) => {
    let newArr = cart.filter((elemento) => elemento.id !== id);
    localStorage.setItem("cart", JSON.stringify(newArr));
    setCart(newArr);
  };

  const cantidadTotal = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.quantity;
    }, 0);

    return total;
  };

  const precioTotal = () => {
    let total = cart.reduce((acumulador, elemento) => {
      return acumulador + elemento.price * elemento.quantity;
    }, 0);
    return total;
  };

  const cantidadSegunId = (id) => {
    let productos = cart.find((elemento) => elemento.id === +id);
    return productos?.quantity;
  };

  let data = {
    cart,
    addToCart,
    clearCart,
    deleteById,
    cantidadTotal,
    precioTotal,
    cantidadSegunId,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextComponent;
