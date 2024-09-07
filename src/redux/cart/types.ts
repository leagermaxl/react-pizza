export type CartItemType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  count: number;
};

export interface CartSliceState {
  items: CartItemType[];
  totalPrice: number;
}
