import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

export enum SortProperty {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title',
}

export type SortType = {
  name: string;
  sortProperty: SortProperty;
};

export type DataPaginationType = {
  current_page: number;
  per_page: number;
  total_pages: number;
  remaining_count?: number;
  total_items?: number;
};

interface FilterSliceState {
  categoryId: number;
  sortObj: SortType;
  sortOrder: boolean;
  searchValue?: string;
  dataPagination?: DataPaginationType;
  page?: number;
}

const initialState: FilterSliceState = {
  categoryId: 0,
  sortObj: { name: 'популярности', sortProperty: SortProperty.RATING },
  sortOrder: true,
  searchValue: '',
  dataPagination: { current_page: 1, per_page: 5, total_pages: 2 },
  page: 1,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSortObj(state, action: PayloadAction<SortType>) {
      state.sortObj = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setDataPagination(state, action: PayloadAction<DataPaginationType>) {
      state.dataPagination = action.payload;
    },
    setSortOrder(state, action: PayloadAction<boolean>) {
      state.sortOrder = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.categoryId = action.payload.categoryId;

      state.sortObj = action.payload.sortObj;
      state.sortOrder = action.payload.sortOrder;

      if (state.dataPagination && action.payload.page) {
        state.dataPagination = {
          ...state.dataPagination,
          current_page: action.payload.page,
        };
      }
    },
  },
});

export const selectFilter = (state: RootState) => state.filterSlice;

export const {
  setCategoryId,
  setSortObj,
  setSortOrder,
  setSearchValue,
  setDataPagination,
  setFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
