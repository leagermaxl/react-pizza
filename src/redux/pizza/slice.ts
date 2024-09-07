import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pizza, PizzaSliceState, Status } from './types';
import { fetchDataPizzas } from './asyncActions';

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
        if (action.payload.length <= 0) {
          state.status = Status.ERROR;
        }
      })
      .addCase(fetchDataPizzas.rejected, (state) => {
        state.itemsPizzas = [];
        state.status = Status.ERROR;
      });
  },
});

export const { addItemsPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
