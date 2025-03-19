import React, { useState } from "react";
import DataContext from "./DataContext";
import { items } from "./Data";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure toast styles are imported

const DataState = (props) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(items);

  // Function to add item to cart
  const addToCart = (id, title, price, imgSrc) => {
    const existingItem = cart.find((item) => item.id === id);
    
    if (existingItem) {
      toast.info("Item already in the cart!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else {
      const newItem = { id, title, price, imgSrc };
      setCart([...cart, newItem]);

      toast.success("Item Added Into The Cart", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  // Function to clear cart
  const clearCart = () => {
    setCart([]);

    toast.success("Cart has been cleared!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  return (
    <DataContext.Provider value={{ cart, setCart, products, setProducts, addToCart, clearCart }}>
      {props.children}
      <ToastContainer /> {/* Ensure toast messages show up */}
    </DataContext.Provider>
  );
};

export default DataState;
