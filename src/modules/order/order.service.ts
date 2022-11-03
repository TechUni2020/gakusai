import { TOKEN_LABEL } from "@/constants/token_label";

export const orderService = {
  hasOrderState(): boolean | undefined {
    const { ORDER_STATE } = TOKEN_LABEL;
    if (localStorage.getItem(ORDER_STATE)?.includes("null")) return true;
    return localStorage.getItem(ORDER_STATE) == null;
  },
};
