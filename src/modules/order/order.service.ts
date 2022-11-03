import { TOKEN_LABEL } from "@/constants/token_label";

export const orderService = {
  hasOrderState() {
    const { ORDER_STATE } = TOKEN_LABEL;
    if (typeof window !== "undefined") {
      const orderState = localStorage.getItem(ORDER_STATE);
      return !!orderState;
    }
    return false;
  },
};
