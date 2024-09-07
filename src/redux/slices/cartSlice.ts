import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { getCartLocalStorage } from '../../utils/getCartLocalStorage';
import { calcCartTotalPrice } from '../../utils/calcCartTotalPrice';

export type CartItemType = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  size: number;
  type: string;
  count: number;
};

interface CartSliceState {
  items: CartItemType[];
  totalPrice: number;
}

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
      const findItem = state.items.find((item) => item.id === action.payload.id);
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

export const selectCart = (state: RootState) => state.cartSlice;
export const selectCartItems = (state: RootState) => state.cartSlice.items;

export const { addItems, minusItem, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
