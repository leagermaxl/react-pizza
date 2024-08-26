import React from 'react';
import { Link } from 'react-router-dom';

import styles from './CartEmpty.module.scss';

export default function CartEmpty() {
  return (
    <div className={styles.cartEmpty}>
      <h2>Корзина пустая 😕</h2>
      <p>Вероятней всего, вы не заказывали ещё пиццу.</p>
      <p>Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
      <img src="img/cartEmpty.png" alt="Cart empty" />
      <Link to={'/react-pizza/'}>
        <button>Вернуться назад</button>
      </Link>
    </div>
  );
}
