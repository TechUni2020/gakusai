export type Menu = {
  id: string;
  name: string;
  price: number;
  categoryName: "food" | "drink" | "unknown";
  isSoldOut: boolean;
  image: string;
  description: string;
};

export type MenuCollection = {
  name: string;
  price: number;
  category_id: string;
  is_sold_out: boolean;
  image: string;
  description: string;
};
