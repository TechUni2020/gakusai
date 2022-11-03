import { TOKEN_LABEL } from "@/constants/token_label";

export const orderService = {
  hasOrderState(): boolean | undefined {
    const { ORDER_STATE } = TOKEN_LABEL;
    return localStorage.getItem(ORDER_STATE)?.includes("null");
  },
};
