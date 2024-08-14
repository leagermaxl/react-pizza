import React from 'react';
import style from './PizzaBlock.module.scss';

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  return (
    <div className={style.pizzaBlock}>
      <img width={260} height={260} src={imageUrl} alt="Pizza" />
      <h2>{title}</h2>
      <div className={style.options}>
        <ul>
          {types.map((type) => {
            console.log(type);
            return (
              <li className={`${false && style.disabled}`}>
                {type === 0 ? 'тонкое' : 'традиционное'}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((size) => (
            <li className={false && style.active}>{size} см.</li>
          ))}
        </ul>
      </div>
      <div className={style.pizzaBlockInfo}>
        <span>от {price} ₽</span>
        <button className={`${style.button} ${false && style.buttonAdded}`}>
          <img width={12} height={12} src="img/card-plus.svg" alt="Plus" />
          Добавить
          <div>2</div>
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
