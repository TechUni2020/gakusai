import {useEffect, useState} from 'react'
import {collection, getDocs} from "firebase/firestore";
import {db} from "@/lib/firebase";


export type Menu = {
    id: string
    name: string;
    price: string;
    categoryId: 'food' | 'drink'
    isSoldOut: boolean
    image: string
    description: string
};

/**
 * FireStore から商品一覧に必要なListを持ってくる
 */
export const useFetchMenuList = () => {
    const [menuList, setMenuList] = useState<Array<Menu>>([])


    useEffect(()=>{
        (async ()=>{

            const querySnapshot = await getDocs(collection(db, "menu"));

            const menuList: Array<Menu> = []
            querySnapshot.forEach((doc) => {
                const id = doc.id
                const {
                    name,
                    price,
                    categoryId,
                    isSoldOut,
                    image,
                    description
                } = doc.data()

                menuList.push({
                    id,
                    name,
                    price,
                    categoryId,
                    isSoldOut,
                    image,
                    description
                })
            });

            setMenuList(menuList)
        })()
    }, [])

    return {menuList}
}