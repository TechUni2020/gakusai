export type ItemInCart = {
  menu_id: string;
  name: string;
  quantity: number;
  price: number;
};

export type Cart = ItemInCart[];
