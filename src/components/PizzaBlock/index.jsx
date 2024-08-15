import React from 'react';
import style from './PizzaBlock.module.scss';

function PizzaBlock({ title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const typeNames = ['тонкое', 'традиционное'];

  return (
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
                className={`${activeType === typeId && style.active}`}
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
              className={activeSize === index && style.active}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={style.pizzaBlockInfo}>
        <span>от {price} ₽</span>
        <button className={`${style.button} ${false && style.buttonAdded}`}>
          <img width={12} height={12} src="img/card-plus.svg" alt="Plus" />
          Добавить
          {false && <div>2</div>}
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
