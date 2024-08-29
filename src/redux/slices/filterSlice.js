import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortObj: { name: 'популярности', sortProperty: 'rating' },
  sortOrder: true,
  searchValue: '',
  dataPagination: { current_page: 1, per_page: 5, total_pages: 2 },
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
    setDataPagination(state, action) {
      state.dataPagination = action.payload;
    },
    setSortOrder(state, action) {
      state.sortOrder = action.payload;
    },
    setFilters(state, action) {
      state.categoryId = Number(action.payload.category);

      state.sortObj = action.payload.sort;
      state.sortOrder = action.payload.sortOrderItem;

      state.dataPagination = {
        ...state.dataPagination,
        current_page: Number(action.payload.page),
      };
    },
  },
});

export const selectFilter = (state) => state.filterSlice;

export const {
  setCategoryId,
  setSortObj,
  setSortOrder,
  setSearchValue,
  setDataPagination,
  setFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
