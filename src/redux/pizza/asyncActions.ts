import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { DataAxios, Pizza, SortPizzaParams } from './types';
import { setDataPagination } from '../filter/slice';

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
