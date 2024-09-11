import { CartItemType } from '../redux/cart/types';
import { calcCartItemsCount } from './calcCartItemsCount';

export const calcCount = (items: CartItemType[], id: number) => {
  return calcCartItemsCount(items.filter((item) => item.id === id));
};
