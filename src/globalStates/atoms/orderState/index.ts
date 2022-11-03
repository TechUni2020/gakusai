import {useEffect, useState} from "react";
import {atom, RecoilState, useRecoilState} from "recoil";
import {recoilPersist} from "recoil-persist";
import {Order} from "@/type/Order";
import {TOKEN_LABEL} from "@/constants/token_label";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {db} from "@/lib/firebase";

const {ORDER_STATE} = TOKEN_LABEL;

const {persistAtom} = recoilPersist({
    key: ORDER_STATE,
});

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

    // Todo 対象のOrderのみをSubscribeする
    // console.log(orderState.orderId)
    // const orderId = orderState.orderId
    // const q = query(collection(db, "order"))
    // const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     querySnapshot.forEach((doc) => {
    //         console.log(doc.data())
    //     });
    // })

    // 初期レンダリング時にflagをfalseにする
    useEffect(() => {
        setIsInitial(false);
        // unsubscribe()
    }, []);

    return {
        order: isInitial ? null : orderState,
        setOrder: setOrderState,
    };
};
