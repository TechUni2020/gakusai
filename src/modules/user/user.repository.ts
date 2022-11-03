import { COLLECTION_PATH } from "@/constants/path";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";

export const userRepository = {
  async init(uid: string): Promise<void> {
    const { USER_PATH } = COLLECTION_PATH;
    const userCol = collection(db, USER_PATH);
    const params = {
      order_list: [],
      sum_of_pay: 0,
      uuid: uid,
    };
    await addDoc(userCol, params);
  },
};
