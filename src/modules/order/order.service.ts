import { TOKEN_LABEL } from "@/constants/token_label";

export const orderService = {
  getOrderNum(): string | null {
    const { ORDER_ID } = TOKEN_LABEL;
    if (typeof window !== "undefined") {
      const orderId = localStorage.getItem(ORDER_ID);
      if (orderId == null) return null;
      return orderId;
    }
    return null;
  },

  setOrderId(id: string) {
    const { ORDER_ID } = TOKEN_LABEL;
    localStorage.setItem(ORDER_ID, id);
  },
};
