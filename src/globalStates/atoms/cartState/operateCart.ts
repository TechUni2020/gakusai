import { ItemInCart } from "@/type/Cart";
import { Menu } from "@/type/Menu";
import { useRecoilState } from "recoil";
import { CartState, initialState } from ".";

export const OperateCart = () => {
  const [cart, setCart] = useRecoilState(CartState);

  const addToCart = (item: Menu): void => {
    const existedItem = cart.find((cartItem) => cartItem.menu_id === item.id);
    if (existedItem) {
      incrementItem(existedItem);
    } else {
      const newItem = {
        menu_id: item.id,
        name: item.name,
        quantity: 1,
        price: item.price,
      };
      setCart([...cart, newItem]);
    }
  };

  const incrementItem = (item: ItemInCart): void => {
    setCart(
      cart.map((cartItem) =>
        cartItem.menu_id === item.menu_id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decrementItem = (item: ItemInCart): void => {
    const applicableItem = cart.find((cartItem) => cartItem.menu_id === item.menu_id) as ItemInCart;
    if (applicableItem.quantity === 1) return;
    setCart(
      cart.map((cartItem) =>
        cartItem.menu_id === applicableItem.menu_id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
    );
  };

  const removeFromCart = (item: ItemInCart): void => {
    const remainder = cart.filter((cartItem) => cartItem.menu_id !== item.menu_id);
    setCart(remainder);
  };

  const reset = () => initialState;

  return { addToCart, incrementItem, decrementItem, removeFromCart, reset };
};
