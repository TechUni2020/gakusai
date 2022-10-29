import { Menu } from "@/type/Menu";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  cart: Menu[];
  numberInCart: number;
  sumOfPrice: number;
}

export const initialState: CartState = {
  cart: [],
  numberInCart: 0,
  sumOfPrice: 0,
};

const cartOperation = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemInCart = state.cart.find((item) => item.id === payload.id);
      if (itemInCart) {
        (itemInCart.quantity as number)++;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
      state.numberInCart++;
      state.sumOfPrice += payload.price;
    },
    incrementItem: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload.id);
      item && (item.quantity as number)++;
      state.numberInCart++;
      state.sumOfPrice += payload.price;
    },
    decrementItem: (state, { payload }) => {
      const item = state.cart.find((item) => item.id === payload.id);
      if (item?.quantity === 1) {
        item.quantity = 1;
      } else {
        item && (item.quantity as number)--;
        state.numberInCart--;
        state.sumOfPrice -= payload.price;
      }
    },
    removeFromCart: (state, { payload }) => {
      const remainder = state.cart.filter((item) => item.id !== payload.id);
      state.cart = remainder;
      state.numberInCart -= payload.quantity;
      state.sumOfPrice -= payload.price * payload.quantity;
    },
    reset: () => initialState,
  },
});

export const { addToCart, incrementItem, decrementItem, removeFromCart, reset } = cartOperation.actions;

export const cartReducer = cartOperation.reducer;
