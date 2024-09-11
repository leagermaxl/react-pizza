import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pizza, PizzaSliceState, Status } from './types';
import { fetchDataPizzas, fetchFullPizza } from './asyncActions';

const emptyPizza = {
  id: 0,
  title: '',
  price: [0],
  imageUrl: '',
  sizes: [],
  types: [],
  category: 0,
  rating: 0,
  composition: '',
  weights: [0],
  nutritionalValue: {
    energyValue: 0,
    protein: 0,
    fats: 0,
    carbohydrates: 0,
  },
};

const initialState: PizzaSliceState = {
  itemsPizzas: [],
  itemPizza: emptyPizza,
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
      })
      .addCase(fetchFullPizza.pending, (state) => {
        state.itemPizza = emptyPizza;
        state.status = Status.LOADING;
      })
      .addCase(fetchFullPizza.fulfilled, (state, action: PayloadAction<Pizza>) => {
        state.itemPizza = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchFullPizza.rejected, (state) => {
        state.itemPizza = emptyPizza;
        state.status = Status.ERROR;
      });
  },
});

export const { addItemsPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
