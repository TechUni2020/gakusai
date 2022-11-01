import { addDoc, collection } from "firebase/firestore";
import { COLLECTION_PATH } from "@/constants/path";
import { TOKEN_LABEL } from "@/constants/token_label";
import { db } from "@/lib/firebase";
import { Cart } from "@/type/Cart";
import { calcReceivingTime } from "@/lib/util/date-utils";
import { ReceivingTimeKey } from "@/type/Order";

const { USER_ID } = TOKEN_LABEL;
const { ORDER } = COLLECTION_PATH;

export const orderRepository = {
  async create(
    cart: Cart,
    totalQuantity: number,
    totalPrice: number,
    receivingTimeKey: ReceivingTimeKey
  ): Promise<void> {
    const uid = localStorage.getItem(USER_ID) as string;

    const currentTime = new Date();
    const receivingPredictionTime = calcReceivingTime(receivingTimeKey, currentTime);

    await addDoc(collection(db, ORDER), {
      user_uid: uid,
      detail: cart,
      sum_quantity: totalQuantity,
      sum_price: totalPrice,
      is_received: false,
      receiving_prediction_time: receivingPredictionTime,
      ordered_at: currentTime,
    });
  },
};
