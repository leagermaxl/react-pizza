import React from 'react';

import styles from './PizzasDataError.module.scss';

const PizzasDataError: React.FC = () => {
  return (
    <div className={styles.root}>
      <h2>Произошла ошибка 😕</h2>
      <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
    </div>
  );
};
export default PizzasDataError;
