import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchData = createAsyncThunk('pizza/fetchData', async (props) => {
  const { category, sort, page, search } = props;
  const { data } = await axios.get(
    `https://683883f38da35f95.mokky.dev/items?${category}${sort}${page}${search}`
  );
  console.log(data);
  return data;
});

const initialState = {
  itemsPizzas: [],
  dataPagination: { current_page: 1, per_page: 5, total_pages: 2 },
  status: 'loading', // loading, success, error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addItemsPizzas(state, action) {
      state.itemsPizzas = action.payload;
    },
    setDataPagination(state, action) {
      state.dataPagination = action.payload;
    },
    setCurrentPage(state, action) {
      state.dataPagination = {
        ...state.dataPagination,
        current_page: Number(action.payload),
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.itemsPizzas = [];
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.itemsPizzas = action.payload.items;
        state.dataPagination = action.payload.meta;
        console.log(action.payload);
        state.status = 'success';
      })
      .addCase(fetchData.rejected, (state) => {
        state.itemsPizzas = [];
        state.status = 'error';
      });
  },
});

export const { addItemsPizzas, setDataPagination, setCurrentPage } = pizzaSlice.actions;
export default pizzaSlice.reducer;
