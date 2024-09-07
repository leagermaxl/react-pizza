import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import filterSlice from './filter/slice';
import cartSlice from './cart/slice';
import pizzaSlice from './pizza/slice';

const store = configureStore({
  reducer: { filterSlice, cartSlice, pizzaSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch<AppDispatch>;
