import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { Status } from '../../redux/pizza/types';
import { selectPizzas } from '../../redux/pizza/selectors';
import { fetchFullPizza } from '../../redux/pizza/asyncActions';

import { FullPizza, Loader, PizzasDataError } from '../../components';

import styles from './Pizza.module.scss';

const Pizza: React.FC = () => {
  const dispatch = useAppDispatch();
  const { itemPizza, status } = useSelector(selectPizzas);

  const params = useParams();

  React.useEffect(() => {
    if (params.id) {
      dispatch(fetchFullPizza(params.id));
    }
  }, [params.id, dispatch]);

  return (
    <div>
      {status === Status.ERROR ? (
        <PizzasDataError />
      ) : (
        <>
          <div className={styles.pizza}>
            {status === Status.LOADING ? <Loader /> : <FullPizza {...itemPizza} />}
          </div>
        </>
      )}
    </div>
  );
};

export default Pizza;
