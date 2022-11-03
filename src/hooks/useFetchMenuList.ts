import { COLLECTION_PATH } from "@/constants/path";
import { db } from "@/lib/firebase";
import { CategoryCollection } from "@/type/Category";
import { Menu, MenuCollection } from "@/type/Menu";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const { MENU_PATH, CATEGORY_PATH } = COLLECTION_PATH;
/**
 * FireStoreからcategoryとmenuを持ってくる。
 * return Array<Menu>
 */
export const useFetchMenuList = () => {
  const [menuList, setMenuList] = useState<Array<Menu>>([]);

  useEffect(() => {
    (async () => {
      const categorySnapshot = await getDocs(collection(db, CATEGORY_PATH));
      const categories = categorySnapshot.docs.map((doc) => {
        const categoryId = doc.id;
        const { name } = doc.data() as CategoryCollection;

        return {
          categoryId,
          name,
        };
      });

      const menuSnapshot = await getDocs(collection(db, MENU_PATH));

      const list = menuSnapshot.docs.map((doc) => {
        const id = doc.id;
        /*
         * Fix Me https://zenn.dev/arark/articles/9ef42ee801050e0f9b88
         * FirestoreDataConverterを使った方がいい
         */
        const { name, price, category_id, is_sold_out, image, description } = doc.data() as MenuCollection;

        // categoryIdと一致するものをcategoryNameとして入れる
        // 万が一,一致しないものが出てきたらunknownとして扱う
        const category = categories.find((category) => category.categoryId === category_id);
        const categoryName = category ? category.name : "unknown";

        return {
          id,
          name,
          price,
          category_name: categoryName as "food" | "drink" | "unknown",
          is_sold_out,
          image,
          description,
        };
      });

      setMenuList(list);
    })();
  }, []);

  return { menuList };
};
