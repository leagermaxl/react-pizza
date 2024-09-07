import { CartItemType } from '../redux/slices/cartSlice';
import { calcCartTotalPrice } from './calcCartTotalPrice';

export const getCartLocalStorage = () => {
  const lsCartItems = localStorage.getItem('cart');
  const items = (lsCartItems && (JSON.parse(lsCartItems) as CartItemType[])) || [];
  const totalPrice = calcCartTotalPrice(items);

  return {
    items,
    totalPrice,
  };
};
