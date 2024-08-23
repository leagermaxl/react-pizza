import React from 'react';

import style from './PizzaBlock.module.scss';

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const typeNames = ['тонкое', 'традиционное'];

  return (
    <div className={style.pizzaBlockWrapper}>
      <div className={style.pizzaBlock}>
        <img width={260} height={260} src={imageUrl} alt="Pizza" />
        <h2>{title}</h2>
        <div className={style.options}>
          <ul>
            {types.map((typeId) => {
              return (
                <li
                  key={typeId}
                  onClick={() => setActiveType(typeId)}
                  className={`${activeType === typeId ? style.active : ''}`}
                >
                  {typeNames[typeId]}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizes.map((size, index) => (
              <li
                key={index}
                onClick={() => setActiveSize(index)}
                className={activeSize === index ? style.active : ''}
              >
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className={style.pizzaBlockInfo}>
          <span>от {price} ₽</span>
          <button className={`${style.button} ${false ? style.buttonAdded : ''}`}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#EB5A1E"
              />
            </svg>
            {/* <img width={12} height={12} src="img/card-plus.svg" alt="Plus" /> */}
            Добавить
            {false && <div>2</div>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
