import { ItemInCart } from "@/type/Cart";
import { Menu } from "@/type/Menu";
import { useRecoilState } from "recoil";
import { CartState, initialState } from ".";

export const OperateCart = () => {
  const [cart, setCart] = useRecoilState(CartState);

  const addToCart = (item: Menu): void => {
    const newItem = {
      menuId: item.id,
      name: item.name,
      quantity: 1,
      price: item.price,
    };
    const existedItem = cart.find((cartItem) => cartItem.menuId === newItem.menuId);
    if (existedItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.menuId === existedItem.menuId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      );
    } else {
      setCart([...cart, newItem]);
    }
  };

  const incrementItem = (item: ItemInCart): void => {
    setCart(
      cart.map((cartItem) =>
        cartItem.menuId === item.menuId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const decrementItem = (item: ItemInCart): void => {
    const applicableItem = cart.find((cartItem) => cartItem.menuId === item.menuId) as ItemInCart;
    if (applicableItem.quantity === 1) return;
    setCart(
      cart.map((cartItem) =>
        cartItem.menuId === applicableItem.menuId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      )
    );
  };

  const removeFromCart = (item: ItemInCart): void => {
    const remainder = cart.filter((cartItem) => cartItem.menuId !== item.menuId);
    setCart(remainder);
  };

  const reset = () => initialState;

  return { addToCart, incrementItem, decrementItem, removeFromCart, reset };
};
