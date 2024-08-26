import React from 'react';

import styles from './PizzasDataError.module.scss';

export default function PizzasDataError() {
  return (
    <div className={styles.root}>
      <h2>Произошла ошибка 😕</h2>
      <p>К сожалению, не удалось получить пиццы. Попробуйте повторить попытку позже.</p>
    </div>
  );
}
