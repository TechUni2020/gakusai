import { Cart } from "@/type/Cart";
import { atom, RecoilState } from "recoil";

export const initialState: Cart = [];

export const CartState: RecoilState<Cart> = atom({
  key: "CartState",
  default: initialState,
});
