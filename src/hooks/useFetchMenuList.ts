import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Menu } from "@/type/Menu";
import { COLLECTION_PATH } from "@/constants/path";

const { MENU_PATH } = COLLECTION_PATH;
/**
 * FireStore から商品一覧に必要なListを持ってくる
 */
export const useFetchMenuList = () => {
  const [menuList, setMenuList] = useState<Array<Menu>>([]);

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(collection(db, MENU_PATH));

      const list = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        /*
         * Fix Me https://zenn.dev/arark/articles/9ef42ee801050e0f9b88
         * FirestoreDataConverterを使った方がいい
         */
        const { name, price, categoryId, isSoldOut, image, description } = doc.data() as Omit<Menu, "id">;

        return {
          id,
          name,
          price,
          categoryId,
          isSoldOut,
          image,
          description,
        };
      });

      setMenuList(list);
    })();
  }, []);

  return { menuList };
};
