import React from 'react';

import styles from './NotFound.module.scss';

const NotFound: React.FC = () => {
  return (
    <div className={styles.notFound}>
      <h1>😕 Ничего не найдено</h1>
      <p>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
};

export default NotFound;
