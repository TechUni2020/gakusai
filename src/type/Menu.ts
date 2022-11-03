export type Menu = {
  id: string;
  name: string;
  price: number;
  category_name: "food" | "drink" | "unknown";
  is_sold_out: boolean;
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
