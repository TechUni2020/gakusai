import { useEffect, useState } from "react";
import { atom, RecoilState, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { Order } from "@/type/Order";

const { persistAtom } = recoilPersist();

export const initialState = {};

export const OrderState: RecoilState<Order> = atom({
  key: "Order",
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});

/*
 * INFO
 * 再履リロードをかけた時にReact Hydration Errorになる, 原因は以下の通り
 * https://stackoverflow.com/questions/68110629/nextjs-react-recoil-persist-values-in-local-storage-initial-page-load-in-wrong/73536131?noredirect=1#comment129857349_73536131
 * 対処の仕方は色々あるがここはNext JSで推奨されている方法に準拠する
 * https://nextjs.org/docs/messages/react-hydration-error
 */

export const useOrderState = () => {
  const [isInitial, setIsInitial] = useState(true);
  const [orderState, setOrderState] = useRecoilState(OrderState);

  // 初期レンダリング時にflagをfalseにする
  useEffect(() => {
    setIsInitial(false);
  }, []);

  return {
    order: isInitial ? null : orderState,
    setOrder: setOrderState,
  };
};
