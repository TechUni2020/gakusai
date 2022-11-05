import { Timestamp } from "@firebase/firestore";
import { Cart } from "./Cart";

export type ReceivingTimeKey = "now" | "5min" | "10min" | "15min" | "20min" | "30min" | "60min";

/* userUidはセキュリティ上保持しない */
export type Order = {
  orderId: string;
  detail: Cart;
  isReceived: false;
  orderedAt: Timestamp;
  receivingPredictionTime: Timestamp;
  sumPrice: number;
  sumQuantity: number;
};
