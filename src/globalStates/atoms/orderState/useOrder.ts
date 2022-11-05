import { useSetRecoilState } from "recoil";
import { OrderState, initialState } from "@/globalStates/atoms/orderState/index";
import { Order } from "@/type/Order";

export const useOrder = () => {
  const setOrder = useSetRecoilState(OrderState);

  const createOrderState = (newOrder: Order) => {
    setOrder({ ...newOrder });
  };
  const reset = () => initialState;

  return { createOrderState, reset };
};
