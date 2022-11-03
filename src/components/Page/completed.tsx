import {FC, useEffect, useState} from "react";
import {Text, Box, Button, Card, createStyles, Modal} from "@mantine/core";
import {useRouter} from "next/router";
import {useSetRecoilState} from "recoil";
import {CartState} from "@/globalStates/atoms/cartState";
import {useOrderState} from "@/globalStates/atoms/orderState";
import {OrderDetailList} from "@/components/OrderDetailList";
import {collection, query, where, onSnapshot} from "firebase/firestore";
import {db} from "@/lib/firebase";

export const Completed: FC = () => {
    const {classes} = useStyles();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    // const router = useRouter();
    // const setCart = useSetRecoilState(CartState);
    const {order} = useOrderState();

    if (!order) {

        return null;
    }
    const {orderId, orderedAt, detail, sumPrice} = order;

    // const onClickCheckButton = () => {
    //   setIsOpen(true);
    //   localStorage.removeItem(ORDER_ID);
    //   router.push(pagesPath.$url());
    //   setCart([]);
    // };

    return (
        <Card className={classes.card}>
            <Box>ご注文ありがとうございます。</Box>
            <Box className={classes.orderColumnWrapper}>
                <Box>お客様番号</Box>
                <Box className={classes.orderNumber}>{`『${orderId}』`}</Box>
            </Box>
            <Box className={classes.orderColumnWrapper}>
                <Box>注文時間</Box>
                <Text>{String(orderedAt)}</Text>
            </Box>
            <OrderDetailList list={detail}/>
            <Box className={classes.orderColumnWrapper}>
                <Box>合計金額</Box>
                <Text size="xl">{sumPrice}円</Text>
            </Box>

            <Box>この画面をスクショしてスタッフに見せてください！</Box>

            {/* Todo このボタンを自動化したい */}
            {/*<Button onClick={() => setIsOpen(true)}>商品を受け取りました</Button>*/}
            {/*<Modal opened={isOpen} onClose={() => setIsOpen(false)}>*/}
            {/*  <Text size="sm">この注文画面には戻れません</Text>*/}
            {/*  <Text size="sm">よろしいですか?</Text>*/}
            {/*  <Button >確認</Button>*/}
            {/*</Modal>*/}
        </Card>
    );
};

const useStyles = createStyles({
    card: {
        color: "white",
        fontWeight: "bold",
        backgroundColor: "orange",
        borderRadius: "16px",
        margin: 16,
        height: "100%",
    },
    orderColumnWrapper: {
        display: "flex",
        alignItems: "center",
        gap: 5,
        marginTop: "10px",
    },
    orderNumber: {
        fontSize: "30px",
    },
});
