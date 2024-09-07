import { CartItemType } from "../redux/slices/cartSlice";

export const calcCartTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, item) => sum + item.count * item.price, 0);
};
