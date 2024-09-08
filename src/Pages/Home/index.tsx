import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import {
//   setCategoryId,
//   setSortObj,
//   setSortOrder,
//   setDataPagination,
//   setFilters,
//   selectFilter,
//   SortType,
// } from '../../redux/slices/filterSlice';
// import {
//   fetchDataPizzas,
//   Pizza,
//   selectPizzas,
//   SortPizzaParams,
//   Status,
// } from '../../redux/slices/pizzaSlice';

import { selectFilter } from '../../redux/filter/selectors';
import { selectPizzas } from '../../redux/pizza/selectors';
import { Pizza, SortPizzaParams, Status } from '../../redux/pizza/types';
import { SortType } from '../../redux/filter/types';
import {
  setCategoryId,
  setDataPagination,
  setFilters,
  setSortObj,
  setSortOrder,
} from '../../redux/filter/slice';
import { fetchDataPizzas } from '../../redux/pizza/asyncActions';

import { useAppDispatch } from '../../redux/store';

// import Categories from '../../components/Categories';
// import PizzaBlock from '../../components/PizzaBlock';
// import Sort from '../../components/Sort';
// import Skeleton from '../../components/Skeleton';
// import Pagination from '../../components/Pagination';
// import { sortList } from '../../components/Sort';
// import PizzasDataError from '../../components/PizzasDataError';

import {
  Categories,
  PizzaBlock,
  Sort,
  Skeleton,
  Pagination,
  PizzasDataError,
  sortList,
} from '../../components';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { categoryId, sortObj, sortOrder, searchValue, dataPagination } = useSelector(selectFilter);
  const { itemsPizzas, status } = useSelector(selectPizzas);

  const isParam = React.useRef(false);
  const isFirstRender = React.useRef(true);

  const category = `${categoryId > 0 ? `&category=${categoryId}` : ''}`;
  const sort = `&sortBy=${sortOrder ? '' : '-'}${sortObj.sortProperty}`;
  const search = `${searchValue === '' ? '' : `&title=*${searchValue}*`}`;
  const page = `&page=${dataPagination?.current_page}&limit=5`;

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as SortPizzaParams;
      let sortOrderItem = true;
      if (params?.sort[0] === '-') {
        sortOrderItem = false;
        params.sort = params?.sort?.substring(1);
      }

      const sortObjItem = sortList.find((item) => item.sortProperty === params.sort) as SortType;
      dispatch(
        setFilters({
          ...params,
          page: Number(params.page),
          categoryId: Number(params.category),
          sortObj: sortObjItem,
          sortOrder: sortOrderItem,
        })
      );

      isParam.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (!isParam.current) {
      dispatch(fetchDataPizzas({ category, sort, page, search }));
    }
    isParam.current = false;
    // isFirstRender.current = true;
  }, [category, sort, search, page, dispatch]);

  React.useEffect(() => {
    if (!isFirstRender.current) {
      let queryString = '';
      const categoryQS = categoryId;
      const sortQS = `${sortOrder ? '' : '-'}${sortObj.sortProperty}`;
      const pageQS = dataPagination?.current_page;

      if (categoryQS !== 0 || sortQS !== 'rating' || pageQS !== 1) {
        queryString = qs.stringify({
          category: categoryQS,
          sort: sortQS,
          page: pageQS,
        });
      }

      navigate(`?${queryString}`);
    }
    isFirstRender.current = false;
  }, [categoryId, sortObj, sortOrder, dataPagination, navigate]);

  const onChangeCategory = React.useCallback(
    (id: number) => {
      dispatch(setCategoryId(id));
    },
    [dispatch]
  );

  const onChangeSortObj = React.useCallback(
    (sortObject: SortType) => {
      dispatch(setSortObj(sortObject));
    },
    [dispatch]
  );

  const onChangePage = (newPage: number) => {
    if (dataPagination) dispatch(setDataPagination({ ...dataPagination, current_page: newPage }));
  };

  const onChangeSortOrder = React.useCallback(
    (order: boolean) => {
      dispatch(setSortOrder(order));
    },
    [dispatch]
  );

  const skeleton = [...new Array(5)].map((_, index) => <Skeleton key={index} />);

  const pizzas = itemsPizzas.map((item: Pizza) => <PizzaBlock key={item.id} {...item} />);

  console.log(status);
  return (
    <>
      <div className={styles.contentTop}>
        <Categories categoryId={categoryId} onClickCategory={onChangeCategory} />
        <Sort
          sortObj={sortObj}
          onClickSortObj={onChangeSortObj}
          sortOrder={sortOrder}
          onClickSortOrder={onChangeSortOrder}
        />
      </div>
      {status === Status.ERROR ? (
        <PizzasDataError />
      ) : (
        <>
          <h1>Все пиццы</h1>
          <div className={styles.pizzas}>{status === Status.LOADING ? skeleton : pizzas}</div>
          {dataPagination && (
            <Pagination dataPagination={dataPagination} setNewPage={onChangePage} />
          )}
        </>
      )}
    </>
  );
};

export default Home;
