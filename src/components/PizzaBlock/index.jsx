import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItems } from '../../redux/slices/cartSlice';

import style from './PizzaBlock.module.scss';

function PizzaBlock({ id, title, price, imageUrl, sizes, types }) {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const typeArray = ['тонкое', 'традиционное'];
  const sizeArray = [26, 30, 40];

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartSlice.items);

  const countItem = cartItems.find((item) => item.id === id);

  const addToCart = () => {
    const itemObject = {
      id,
      title,
      price,
      imageUrl,
      size: activeSize,
      type: typeArray[activeType],
    };
    dispatch(addItems(itemObject));
  };

  return (
    <div className={style.pizzaBlockWrapper}>
      <div className={style.pizzaBlock}>
        <img width={260} height={260} src={imageUrl} alt="Pizza" />
        <h2>{title}</h2>
        <div className={style.options}>
          <ul>
            {typeArray.map((typeName, index) => {
              const typeIncludes = types.includes(index);
              return (
                <li
                  key={index}
                  onClick={typeIncludes ? () => setActiveType(index) : () => {}}
                  className={`${activeType === index ? style.active : ''} ${
                    typeIncludes ? '' : style.disabled
                  }`}
                >
                  {typeName}
                </li>
              );
            })}
          </ul>
          <ul>
            {sizeArray.map((size) => {
              const sizeIncludes = sizes.includes(size);
              return (
                <li
                  key={size}
                  onClick={sizeIncludes ? () => setActiveSize(size) : () => {}}
                  className={`${activeSize === size ? style.active : ''} ${
                    sizeIncludes ? '' : style.disabled
                  }`}
                >
                  {size} см.
                </li>
              );
            })}
          </ul>
        </div>
        <div className={style.pizzaBlockInfo}>
          <span>от {price} ₽</span>
          <button
            onClick={addToCart}
            className={`${style.button} ${countItem ? style.buttonAdded : ''}`}
          >
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
            {countItem && <span>{countItem.count}</span>}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaBlock;
