import { useEffect, useState } from "react";
import { atom, RecoilState, useRecoilState, useSetRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { Order } from "@/type/Order";
import { TOKEN_LABEL } from "@/constants/token_label";
import { db } from "@/lib/firebase";
import { pagesPath } from "@/lib/$path";
import { CartState } from "../cartState";

const { ORDER_STATE } = TOKEN_LABEL;

const { persistAtom } = recoilPersist({
  key: ORDER_STATE,
});

export const initialState = {};

export const OrderState: RecoilState<Order | null> = atom({
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
  const router = useRouter();
  const [isInitial, setIsInitial] = useState(true);
  const [orderState, setOrderState] = useRecoilState(OrderState);
  const setCart = useSetRecoilState(CartState);

  const fetchOrder = () => {
    const orderId = orderState?.orderId;
    const orderCol = collection(db, "order");
    const orderWhere = where("order_id", "==", orderId);
    const q = query(orderCol, orderWhere);
    onSnapshot(q, (querySnapshot) => {
      const res = querySnapshot.docs.map((e) => e.data())[0];
      const order = {
        detail: res.detail,
        isReceived: res.is_received,
        orderId: res.order_id,
        orderedAt: res.ordered_at,
        receivingPredictionTime: res.receiving_prediction_time,
        sumPrice: res.sum_price,
        sumQuantity: res.sum_quantity,
      };
      if (order.isReceived) {
        setOrderState(null);
        setCart([]);
        router.push(pagesPath.$url());
      } else {
        setOrderState(order);
      }
    });
  };

  // 初期レンダリング時にflagをfalseにする
  useEffect(() => {
    setIsInitial(false);
    fetchOrder();
  }, [isInitial]);

  return {
    order: isInitial ? null : orderState,
    setOrder: setOrderState,
  };
};
