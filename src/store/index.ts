import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./modules/cartOperation";

export default configureStore({
  reducer: cartReducer,
});
