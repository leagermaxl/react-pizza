import { DataPaginationType } from "../filter/types";

export type DataAxios = {
  meta: DataPaginationType;
  items: Pizza[];
};

export type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  category: number;
  rating: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface PizzaSliceState {
  itemsPizzas: Pizza[];
  status: Status; // loading, success, error
}

export interface SortPizzaParams {
  category: string;
  sort: string;
  page: string;
  search: string;
}
