import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { selectCartItems } from '../../redux/cart/selectors';
import { addItems } from '../../redux/cart/slice';

import { PizzaOptions } from '../';
import { calcCount } from '../../utils/calcCount';

import styles from './PizzaBlock.module.scss';

type PizzaBlockProps = {
  id: number;
  title: string;
  price: number[];
  imageUrl: string;
  sizes: number[];
  types: number[];
};

export const PizzaBlock: React.FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const [activePrice, setActivePrice] = React.useState(price[0]);

  const typeArray = ['тонкое', 'традиционное'];
  const sizeArray = [26, 30, 40];

  const dispatch = useAppDispatch();
  const cartItems = useSelector(selectCartItems);

  const countItem = calcCount(cartItems, id);

  const PizzaOptionsData = {
    sizes,
    types,
    price,
    typeArray,
    sizeArray,
    activeType,
    activeSize,
    activePrice,
    setActiveSize,
    setActiveType,
    setActivePrice,
  };

  const addToCart = () => {
    const itemObject = {
      id,
      title,
      price: activePrice,
      imageUrl,
      size: activeSize,
      type: typeArray[activeType],
      count: 0,
    };
    dispatch(addItems(itemObject));
  };

  return (
    <div className={styles.pizzaBlockWrapper}>
      <div className={styles.pizzaBlock}>
        <Link to={`/react-pizza/${id}`}>
          <img width={260} height={260} src={imageUrl} alt="Pizza" />
        </Link>
        <h2>{title}</h2>
        <PizzaOptions {...PizzaOptionsData} />
        <div className={styles.pizzaBlockInfo}>
          <span>от {activePrice} ₴</span>
          <button
            onClick={addToCart}
            className={`${styles.button} ${countItem ? styles.buttonAdded : ''}`}
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
            Добавить
            {countItem !== 0 && <span>{countItem}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};
