import React from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {
  setCategoryId,
  setSortObj,
  setSortOrder,
  setDataPagination,
  setFilters,
  selectFilter,
} from '../../redux/slices/filterSlice';
import { fetchDataPizzas, selectPizzas } from '../../redux/slices/pizzaSlice';

import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Sort from '../../components/Sort';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination';
import { sortList } from '../../components/Sort';
import PizzasDataError from '../../components/PizzasDataError';

import styles from './Home.module.scss';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryId, sortObj, sortOrder, searchValue, dataPagination } = useSelector(selectFilter);
  const { itemsPizzas, status } = useSelector(selectPizzas);

  const isParam = React.useRef(false);
  const isFirstRender = React.useRef(true);

  const category = `${categoryId > 0 ? `&category=${categoryId}` : ''}`;
  const sort = `&sortBy=${sortOrder ? '' : '-'}${sortObj.sortProperty}`;
  const search = `${searchValue === '' ? '' : `&title=*${searchValue}*`}`;
  const page = `&page=${dataPagination.current_page}&limit=5`;

  React.useEffect(() => {
    if (window.location.search) {
      const params: any = qs.parse(window.location.search.substring(1));
      let sortOrderItem = true;
      if (params.sort[0] === '-') {
        sortOrderItem = false;
        params.sort = params.sort.substring(1);
      }

      const sortObjItem = sortList.find((item) => item.sortProperty === params.sort);
      dispatch(setFilters({ ...params, sort: sortObjItem, sortOrderItem }));

      isParam.current = true;
    }
  }, [dispatch]);

  React.useEffect(() => {
    if (!isParam.current) {
      dispatch(
        //@ts-ignore
        fetchDataPizzas({ category, sort, page, search })
      );
    }
    isParam.current = false;
    // isFirstRender.current = true;
  }, [category, sort, search, page, dispatch]);

  React.useEffect(() => {
    if (!isFirstRender.current) {
      let queryString = '';
      const categoryQS = categoryId;
      const sortQS = `${sortOrder ? '' : '-'}${sortObj.sortProperty}`;
      const pageQS = dataPagination.current_page;

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

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSortObj = (sortObject: any) => {
    dispatch(setSortObj(sortObject));
  };

  const onChangePage = (newPage: number) => {
    dispatch(setDataPagination({ ...dataPagination, current_page: newPage }));
  };

  const onChangeSortOrder = (order: boolean) => {
    dispatch(setSortOrder(order));
  };

  const skeleton = [...new Array(5)].map((_, index) => <Skeleton key={index} />);

  const pizzas = itemsPizzas.map((item: any) => <PizzaBlock key={item.id} {...item} />);

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
      {status === 'error' ? (
        <PizzasDataError />
      ) : (
        <>
          <h1>Все пиццы</h1>
          <div className={styles.pizzas}>{status === 'loading' ? skeleton : pizzas}</div>
          <Pagination dataPagination={dataPagination} setNewPage={onChangePage} />
        </>
      )}
    </>
  );
};

export default Home;
