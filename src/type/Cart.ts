export type ItemInCart = {
  menuId: string;
  name: string;
  quantity: number;
  price: number;
};

export type Cart = ItemInCart[];
