import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cartSlice;
export const selectCartItems = (state: RootState) => state.cartSlice.items;
