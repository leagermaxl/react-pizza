import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCartLocalStorage } from '../../utils/getCartLocalStorage';
import { calcCartTotalPrice } from '../../utils/calcCartTotalPrice';
import { CartItemType, CartSliceState } from './types';

const { items, totalPrice } = getCartLocalStorage();

const initialState: CartSliceState = {
  items: items,
  totalPrice: totalPrice,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItems(state, action: PayloadAction<CartItemType>) {
      const findItem = state.items.find(
        (item) => item.id === action.payload.id && item.price === action.payload.price
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.items = [...state.items, { ...action.payload, count: 1 }];
      }
      state.totalPrice = calcCartTotalPrice(state.items);
    },
    minusItem(state, action: PayloadAction<number>) {
      const findItem = state.items.find((item) => item.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcCartTotalPrice(state.items);
    },
    removeItems(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = calcCartTotalPrice(state.items);
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItems, minusItem, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
