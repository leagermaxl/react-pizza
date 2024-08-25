import React from 'react';

import styles from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>😕 Ничего не найдено</h1>
      <p>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
}
