import { selector } from "recoil";
import { CartState } from "..";

export const totalQuantitySelector = selector({
  key: "totalQuantitySelector",
  get: ({ get }) => {
    const cart = get(CartState);
    const totalQuantity = cart.reduce((sum, cartItem) => {
      return sum + cartItem.quantity;
    }, 0);
    return totalQuantity;
  },
});
