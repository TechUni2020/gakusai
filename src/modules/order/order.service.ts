export const orderService = {
  getOrderNum(): string | null {
    if (typeof window !== "undefined") {
      const orderId = localStorage.getItem("order_id");
      if (orderId == null) return null;
      return orderId;
    }
    return null;
  },
};
