import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { DataPaginationType, setDataPagination } from './filterSlice';
import { RootState } from '../store';

type DataAxios = {
  meta: DataPaginationType;
  items: Pizza[];
};

export type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  category: number;
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  itemsPizzas: Pizza[];
  status: Status; // loading, success, error
}

export interface SortPizzaParams {
  category: string;
  sort: string;
  page: string;
  search: string;
}

export const fetchDataPizzas = createAsyncThunk<Pizza[], SortPizzaParams>(
  'pizza/fetchDataPizzas',
  async (props, thunkAPI) => {
    const { category, sort, page, search } = props;
    const { data } = await axios.get<DataAxios>(
      `https://683883f38da35f95.mokky.dev/items?${category}${sort}${page}${search}`
    );
    console.log(data);
    thunkAPI.dispatch(setDataPagination(data.meta));
    return data.items;
  }
);

const initialState: PizzaSliceState = {
  itemsPizzas: [],
  status: Status.LOADING, // loading, success, error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addItemsPizzas(state, action: PayloadAction<Pizza[]>) {
      state.itemsPizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataPizzas.pending, (state) => {
        state.itemsPizzas = [];
        state.status = Status.LOADING;
      })
      .addCase(fetchDataPizzas.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
        state.itemsPizzas = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchDataPizzas.rejected, (state) => {
        state.itemsPizzas = [];
        state.status = Status.ERROR;
      });
  },
});

export const selectPizzas = (state: RootState) => state.pizzaSlice;

export const { addItemsPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
