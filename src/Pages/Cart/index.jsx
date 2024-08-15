import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../../components/CartItem';

import style from './Cart.module.scss';

export default function Cart() {
  return (
    <div className={style.cart}>
      <div className={style.cartTop}>
        <h1>
          <img src="img/cart.svg" alt="Cart" />
          Корзина
        </h1>
        <span>
          <img src="img/garbage-bin.svg" alt="Garbage bin" />
          Очистить корзину
        </span>
      </div>
      <CartItem />
      <CartItem />
      <CartItem />
      <div className={style.cartInfo}>
        <p>
          Всего пицц: <span>3 шт.</span>
        </p>
        <p>
          Сумма заказа: <span style={{ color: '#fe5f1e' }}>900 ₽</span>
        </p>
      </div>
      <div className={style.cartBottom}>
        <Link to={'/react-pizza/'}>
          <button className={style.btnBack}>
            <img src="img/arrow.svg" alt="Arrow" />
            Вернуться назад
          </button>
        </Link>
        <button className={style.btnPay}>Оплатить сейчас</button>
      </div>
    </div>
  );
}
