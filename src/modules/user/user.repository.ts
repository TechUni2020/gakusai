import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { COLLECTION_PATH } from "@/constants/path";

export const userRepository = {
  async init(uid: string): Promise<void> {
    const { USER_PATH } = COLLECTION_PATH;
    const userCol = collection(db, USER_PATH);
    const params = {
      orderList: [],
      sumOfPay: 0,
      uuid: uid,
    };
    await addDoc(userCol, params);
  },
};
