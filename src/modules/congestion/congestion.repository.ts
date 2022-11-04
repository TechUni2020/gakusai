import { collection, doc, getDoc } from "firebase/firestore";
import { COLLECTION_PATH } from "@/constants/path";
import { db } from "@/lib/firebase";
import { Congestion } from "./congestion.entity";

type Args = {
  congestions: Congestion[];
};

export const congestionRepository = {
  async findOne(): Promise<Congestion> {
    const congestionCol = collection(db, COLLECTION_PATH.CONGESTION_PATH);
    const DOCUMENT_ID = "63NtIre4RaxO4YuvOHF3";
    const congestionDoc = await getDoc(doc(congestionCol, DOCUMENT_ID));
    const res = congestionDoc.data() as Args;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return res.congestions.find((congestions) => congestions.is_show)!;
  },
};
