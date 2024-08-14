/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useReducer, useContext } from "react";
import { sumProducts } from "../helpers/helper";

const CartContext = createContext();

const initialState = {
  selectedItems: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        const state2 = {
          ...initialState,
          selectedItems: state.selectedItems.push({
            ...action.payload,
            quantity: 1,
          }),
        };
        return state2;
      }
      return {
        selectedItems: [...state.selectedItems],
        checkout: false,
        ...sumProducts(state.selectedItems),
      };
    case "REMOVE_ITEM":
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        selectedItems: [...newSelectedItems],
        ...sumProducts(newSelectedItems),
      };
    case "INCREASE":
      const increaseIndex = state.selectedItems.findIndex(
        item => item.id === action.payload.id
      );
      state.selectedItems[increaseIndex].quantity +=1/2;

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[decreaseIndex].quantity-= 1/2;

      return {
        ...state,
        ...sumProducts(state.selectedItems),
      };
    case "CHECKOUT":
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      throw new Error("Invalid Action");
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const res = useContext(CartContext);
  return res;
};
