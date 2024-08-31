import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setDataPagination } from './filterSlice';
import axios from 'axios';

export const fetchDataPizzas = createAsyncThunk(
  'pizza/fetchDataPizzas',
  async (props, thunkAPI) => {
    const { category, sort, page, search } = props;
    const { data } = await axios.get(
      `https://683883f38da35f95.mokky.dev/items?${category}${sort}${page}${search}`
    );
    thunkAPI.dispatch(setDataPagination(data.meta));
    return data.items;
  }
);

const initialState = {
  itemsPizzas: [],
  status: 'loading', // loading, success, error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addItemsPizzas(state, action) {
      state.itemsPizzas = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataPizzas.pending, (state) => {
        state.itemsPizzas = [];
        state.status = 'loading';
      })
      .addCase(fetchDataPizzas.fulfilled, (state, action) => {
        state.itemsPizzas = action.payload;
        state.status = 'success';
      })
      .addCase(fetchDataPizzas.rejected, (state) => {
        state.itemsPizzas = [];
        state.status = 'error';
      });
  },
});

export const selectPizzas = (state) => state.pizzaSlice;

export const { addItemsPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
