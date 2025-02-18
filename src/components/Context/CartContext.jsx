import { useReducer, createContext, useContext} from "react";
import React from "react"
export const cardActionType = {
  ADD_TO_CART: "addToCart",
  UPDATE_CARDS: "updateCards",
  SET_TOTAL_PRICE: "setTotalPrice",
};

// initial state
const initialState = {
  cards: [],
  totalPrice: 0,
};

const CartContext = createContext();

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case cardActionType.ADD_TO_CART:
      return {
        ...state,
        cards: [...state.cards, action.payload],
      };

    case cardActionType.UPDATE_CARDS:
      return {
        ...state,
        cards: action.payload,
      };

    case cardActionType.SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.payload,
      };

    default:
      return state;
  }
}

// context provider
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  const state = useContext(CartContext);
  if (state === undefined) {
    throw new Error("useCartContext must be used in CartProvider");
  }
  return state;
};

export { CartContext, CartProvider, useCartContext };
