import {
  CLEAR_CART,
  DECREMENT_ITEM_COUNT,
  DISPLAY_ITEMS,
  INCREMENT_ITEM_COUNT,
  LOADING,
  REMOVE_ITEM,
  TOGGLE_AMOUNT,
} from "./actions";

const reducer = (state, action) => {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  } else if (action.type === REMOVE_ITEM) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  } else if (action.type === DECREMENT_ITEM_COUNT) {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          return {
            ...cartItem,
            amount: cartItem - 1,
          };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  } else if (action.type === "GET_TOTALS") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;

        cartTotal.total += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));
    return { ...state, total, amount };
  } else if (action.type === TOGGLE_AMOUNT) {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, amount: cartItem.amount + 1 };
          } else if (action.payload.type === "dec") {
            return { ...cartItem, amount: cartItem.amount - 1 };
          } else {
            throw new Error("no matching operation on cart item");
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: tempCart };
  } else {
    throw new Error("no matching action type");
  }
};

export default reducer;
