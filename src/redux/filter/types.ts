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

export interface FilterSliceState {
  categoryId: number;
  sortObj: SortType;
  sortOrder: boolean;
  searchValue?: string;
  dataPagination?: DataPaginationType;
  page?: number;
}
