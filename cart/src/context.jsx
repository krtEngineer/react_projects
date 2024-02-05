import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import {
  CLEAR_CART,
  DECREMENT_ITEM_COUNT,
  GET_TOTALS,
  INCREMENT_ITEM_COUNT,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
} from "./actions";
import { data } from "./data";

const AppContext = createContext();

const initialState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const incrementItemCount = (id) => {
    dispatch({ type: INCREMENT_ITEM_COUNT, payload: id });
  };

  const decrementItemCount = (id) => {
    dispatch({ type: DECREMENT_ITEM_COUNT, payload: id });
  };

  const toggleAmount = (id, type) => {
    dispatch({ type: TOGGLE_AMOUNT, payload: { id, type } });
  };

  useEffect(() => {
    dispatch({ type: GET_TOTALS });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        incrementItemCount,
        decrementItemCount,
        toggleAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
