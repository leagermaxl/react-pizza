import { CartItemType } from '../redux/slices/cartSlice';

export const calcCartItemsCount = (items: CartItemType[]) => {
  return items.reduce((sum, item) => sum + item.count, 0);
};
