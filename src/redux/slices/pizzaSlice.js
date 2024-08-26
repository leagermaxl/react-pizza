import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setDataPagination } from './filterSlice';
import axios from 'axios';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas', async (props, thunkAPI) => {
  const { category, sort, page, search } = props;
  const { data } = await axios.get(
    `https://683883f38da35f95.mokky.dev/items?${category}${sort}${page}${search}`
  );
  thunkAPI.dispatch(setDataPagination(data.meta));
  return data.items;
});

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
      .addCase(fetchPizzas.pending, (state) => {
        state.itemsPizzas = [];
        state.status = 'loading';
      })
      .addCase(fetchPizzas.fulfilled, (state, action) => {
        state.itemsPizzas = action.payload;
        state.status = 'success';
      })
      .addCase(fetchPizzas.rejected, (state) => {
        state.itemsPizzas = [];
        state.status = 'error';
      });
  },
});

export const { addItemsPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
