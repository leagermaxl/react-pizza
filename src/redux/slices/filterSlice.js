import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortObject: {
    name: 'популярности',
    sortProperty: 'rating',
  },
  searchValue: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortObject(state, action) {
      state.sortObject = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryId, setSort, setSearchValue } = filterSlice.actions;
export default filterSlice.reducer;
