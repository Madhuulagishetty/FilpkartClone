import React, { createContext, useCallback, useState } from "react";

export const ContextData = createContext();

export const ContextApi = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [search, setSearch] = useState("");

  const [isAuthentication, setisAuthentication] = useState(false);
  const [user, setUser] = useState(null);

  const loginUser = (username) => {
    console.log(isAuthentication,'before');
    
    setisAuthentication(true);
    console.log(isAuthentication,'after');
    
    setUser(username);
  }

  const updateSearchInput = (searchTerm) => {
    setSearch(searchTerm);
  };

  const AddtoCart = (items) => {
    const existingItems = cartData.some((i) => i.id === items.id);
    if (existingItems) {
      setCartData(
        cartData.map((product) => {
          return product.id === items.id
            ? { ...product, quantity: product.quantity + 1 } 
            : product;
        })
      );
    } else {
      setCartData([...cartData, { ...items, quantity: 1 }]);
    }
  };

  const Increment = (id) => {
    setCartData(
      cartData.map((product) => {
        return product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product;
      })
    );
  };

  const Decrement = (id) => {
    setCartData(
      cartData.map((product) => {
        return product.id === id
          ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
          : product;
      })
    );
  };

  const RemoveFromCart = (id) => {
    setCartData(
      cartData.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const CartLength = cartData.length;

  return (
    <ContextData.Provider
      value={{
        cartData,
        AddtoCart,
        RemoveFromCart,
        Increment,
        Decrement,
        setCartData,
        CartLength,
        search,
        updateSearchInput,
        isAuthentication,
        
        loginUser,
        
        setisAuthentication
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
