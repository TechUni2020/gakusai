import { selector } from "recoil";
import { CartState } from "..";

export const totalPriceSelector = selector({
  key: "totalPriceSelector",
  get: ({ get }) => {
    const cart = get(CartState);
    const totalPrice = cart.reduce((sum, cartItem) => {
      if (cartItem.category === "food" && cartItem.quantity !== 1) {
        const discountQuantity = Math.floor(cartItem.quantity / 2);
        const notDiscountQuantity = cartItem.quantity - discountQuantity;

        return sum + (100 * discountQuantity + cartItem.price * notDiscountQuantity);
      } else {
        return sum + cartItem.price * cartItem.quantity;
      }
    }, 0);
    return totalPrice;
  },
});
