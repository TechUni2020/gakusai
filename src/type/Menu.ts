export type Menu = {
  id: string;
  name: string;
  price: string;
  categoryName: "food" | "drink" | "unknown";
  isSoldOut: boolean;
  image: string;
  description: string;
};

export type MenuCollection = {
  name: string;
  price: string;
  categoryId: string;
  isSoldOut: boolean;
  image: string;
  description: string;
};
