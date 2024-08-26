import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortObj: { name: 'популярности', sortProperty: 'rating' },
  sortOrder: true,
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortObj(state, action) {
      state.sortObj = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.category);

      state.sortObj = action.payload.sort;
      state.sortOrder = action.payload.sortOrderItem;
    },
  },
});

export const { setCategoryId, setSortObj, setSortOrder, setSearchValue, setFilters } =
  filterSlice.actions;
export default filterSlice.reducer;
