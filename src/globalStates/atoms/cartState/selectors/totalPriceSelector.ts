import { selector } from "recoil";
import { CartState } from "..";

export const totalPriceSelector = selector({
  key: "totalPriceSelector",
  get: ({ get }) => {
    const cart = get(CartState);
    const totalPrice = cart.reduce((sum, cartItem) => {
      return sum + cartItem.price * cartItem.quantity;
    }, 0);
    return totalPrice;
  },
});
