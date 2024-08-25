import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemsPizzas: [],
  status: 'loading', // loading, panning, error
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    addItemsPizzas(state, action) {
      state.itemsPizzas = action.payload;
    },
  },
});

export const { addItemsPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
