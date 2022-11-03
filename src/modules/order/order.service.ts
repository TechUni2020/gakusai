import { TOKEN_LABEL } from "@/constants/token_label";

export const orderService = {
  hasOrderState(): boolean {
    const { ORDER_STATE } = TOKEN_LABEL;
    if (typeof window !== "undefined") {
      return localStorage.getItem(ORDER_STATE) != null;
    }
    return false;
  },
};
