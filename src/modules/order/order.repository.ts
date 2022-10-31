import { COLLECTION_PATH } from "@/constants/path";
import { TOKEN_LABEL } from "@/constants/token_label";
import { db } from "@/lib/firebase";
import { Cart } from "@/type/Cart";
import { addDoc, collection } from "firebase/firestore";

export const orderRepository = {
  async create(cart: Cart, totalQuantity: number, totalPrice: number): Promise<void> {
    const { USER_ID } = TOKEN_LABEL;
    const { ORDER } = COLLECTION_PATH;
    const uid = localStorage.getItem(USER_ID) as string;
    await addDoc(collection(db, ORDER), {
      user_uid: uid,
      detail: cart,
      sum_quantity: totalQuantity,
      sum_price: totalPrice,
      is_received: false,
      receiving_prediction_time: null,
    });
  },
};
