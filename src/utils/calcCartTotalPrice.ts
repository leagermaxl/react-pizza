import { CartItemType } from '../redux/cart/types';

export const calcCartTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, item) => sum + item.count * item.price, 0);
};
