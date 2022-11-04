export type ItemInCart = {
  menuId: string;
  name: string;
  category: string;
  quantity: number;
  price: number;
};

export type Cart = ItemInCart[];
