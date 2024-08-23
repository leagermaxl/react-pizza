import React from 'react';

import style from './NotFound.module.scss';

export default function NotFound() {
  return (
    <div className={style.notFound}>
      <h1>😕 Ничего не найдено</h1>
      <p>К сожалени данная страница отсутствует в нашем интернет-магазине</p>
    </div>
  );
}
