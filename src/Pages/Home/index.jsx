import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {
  setCategoryId,
  setSortObj,
  setSortOrder,
  setDataPagination,
  setFilters,
} from '../../redux/slices/filterSlice';

import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Sort from '../../components/Sort';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination';

import { sortList } from '../../components/Sort';

import styles from './Home.module.scss';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { categoryId, sortObj, sortOrder, searchValue, dataPagination } = useSelector(
    (state) => state.filterSlice
  );

  const [itemsPizzas, setItemsPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const isParam = React.useRef(false);
  const isFirstRender = React.useRef(true);

  const category = `${categoryId > 0 ? `&category=${categoryId}` : ''}`;
  const sort = `&sortBy=${sortOrder ? '' : '-'}${sortObj.sortProperty}`;
  const search = `${searchValue === '' ? '' : `&title=*${searchValue}*`}`;
  const page = `&page=${dataPagination.current_page}&limit=5`;

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
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
      (async () => {
        setIsLoading(true);
        try {
          const { data } = await axios.get(
            `https://683883f38da35f95.mokky.dev/items?${category}${sort}${page}${search}`
          );
          setItemsPizzas(data.items);
          dispatch(setDataPagination(data.meta));
        } catch (error) {
          console.error(error);
          alert('Не удалось загрузить пиццы!');
        }
        setIsLoading(false);
      })();
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

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  const onChangeSortObj = (sortObject) => {
    dispatch(setSortObj(sortObject));
  };

  const onChangePage = (newPage) => {
    dispatch(setDataPagination({ ...dataPagination, current_page: newPage }));
  };

  const onChangeSortOrder = (order) => {
    dispatch(setSortOrder(order));
  };

  const skeleton = [...new Array(5)].map((_, index) => <Skeleton key={index} />);

  const pizzas = itemsPizzas.map((item) => <PizzaBlock key={item.id} {...item} />);

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
      <h1>Все пиццы</h1>
      <div className={styles.pizzas}>{isLoading ? skeleton : pizzas}</div>
      <Pagination dataPagination={dataPagination} setNewPage={onChangePage} />
    </>
  );
}

export default Home;
