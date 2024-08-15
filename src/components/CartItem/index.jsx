import React from 'react';
import style from './CartItem.module.scss';

function CartItem() {
  return (
    <div className={style.cartItem}>
      <div className={style.cartItemLeft}>
        <img width={80} height={80} src="img/pizzas/1.png" alt="" />
        <div className={style.cartItemLeftInfo}>
          <h2>Сырный цыпленок</h2>
          <p>тонкое тесто, 26 см.</p>
        </div>
      </div>
      <div className={style.cartItemCount}>
        <div className={`${style.btnCircle} ${style.btnCount}`}>
          <img src="img/minus.svg" alt="Count minus" />
        </div>
        <span>2</span>
        <div className={`${style.btnCircle} ${style.btnCount}`}>
          <img src="img/plus.svg" alt="Count plus" />
        </div>
      </div>
      <span>770 ₽</span>
      <div className={`${style.btnCircle} ${style.btnRemove}`}>
        <img height={11} width={11} src="img/crest.svg" alt="Cart remove" />
      </div>
    </div>
  );
}

export default CartItem;
