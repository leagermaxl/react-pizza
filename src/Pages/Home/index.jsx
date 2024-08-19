import React from 'react';
import axios from 'axios';

import Categories from '../../components/Categories';
import PizzaBlock from '../../components/PizzaBlock';
import Sort from '../../components/Sort';
import Skeleton from '../../components/Skeleton';
import Pagination from '../../components/Pagination';
import { AppContext } from '../../App';

import styles from './Home.module.scss';

function Home() {
  const [itemsPizzas, setItemsPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortObj, setSortObj] = React.useState({ name: 'популярности', sortProperty: 'rating' });
  const [sortOrder, setSortOrder] = React.useState(true);
  const [dataPagination, setDataPagination] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);

  const { searchValue } = React.useContext(AppContext);

  const category = `&category=${categoryId === 0 ? '*' : categoryId}`;
  const sort = `&sortBy=${sortOrder ? '' : '-'}${sortObj.sortProperty}`;
  const search = `${searchValue === '' ? '' : `&title=*${searchValue}*`}`;
  const page = `&page=${currentPage}&limit=5`;

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://683883f38da35f95.mokky.dev/items?${page}${category}${sort}${search}`
        );
        console.log(data);
        setItemsPizzas(data.items);
        setDataPagination(data.meta);
      } catch (error) {
        console.error(error);
        alert('Не удалось загрузить пиццы!');
      }
      setIsLoading(false);
    })();
  }, [category, sort, search, page]);

  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);

  const pizzas = itemsPizzas
    // .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item) => <PizzaBlock key={item.id} {...item} />);

  return (
    <>
      <div className={styles.contentTop}>
        <Categories categoryId={categoryId} onClickCategory={(id) => setCategoryId(id)} />
        <Sort
          sortObj={sortObj}
          onClickSortType={(type) => setSortObj(type)}
          sortOrder={sortOrder}
          onClickSortOrder={(order) => setSortOrder(order)}
        />
      </div>
      <h1>Все пиццы</h1>
      <div className={styles.pizzas}>{isLoading ? skeleton : pizzas}</div>
      <Pagination
        dataPagination={dataPagination}
        setNewPage={(newPage) => setCurrentPage(newPage)}
      />
    </>
  );
}

export default Home;
