export type Menu = {
  id: string;
  name: string;
  price: string;
  categoryId: "food" | "drink";
  isSoldOut: boolean;
  image: string;
  description: string;
};
