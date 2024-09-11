import React from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../redux/store';
import { Pizza } from '../../redux/pizza/types';
import { addItems } from '../../redux/cart/slice';
import { selectCartItems } from '../../redux/cart/selectors';

import { CaloriePopup, PizzaOptions } from '../';
import { calcCount } from '../../utils/calcCount';

import styles from './FullPizza.module.scss';

export const FullPizza: React.FC<Pizza> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
  composition,
  weights,
  nutritionalValue,
}) => {
  const [activeType, setActiveType] = React.useState(types[0]);
  const [activeSize, setActiveSize] = React.useState(sizes[0]);
  const [activePrice, setActivePrice] = React.useState(price[0]);
  const [activeWeight, setActiveWeight] = React.useState(weights[0]);

  const [openedCaloriePopup, setOpenedCaloriePopup] = React.useState(false);

  const typeArray = ['тонкое', 'традиционное'];
  const sizeArray = [26, 30, 40];

  const dispatch = useAppDispatch();
  const cartItems = useSelector(selectCartItems);

  const PizzaOptionsData = {
    sizes,
    types,
    price,
    weights,
    typeArray,
    sizeArray,
    activeType,
    activeSize,
    activePrice,
    activeWeight,
    setActiveSize,
    setActiveType,
    setActivePrice,
    setActiveWeight,
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
  const caloriePopupRef = React.useRef(null);
  const caloriePopupBtnRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutsideCaloriePopup = (event: MouseEvent) => {
      if (
        caloriePopupBtnRef.current &&
        !event.composedPath().includes(caloriePopupBtnRef.current)
      ) {
        setOpenedCaloriePopup(false);
      }
    };
    document.body.addEventListener('click', handleClickOutsideCaloriePopup);
    return () => {
      document.body.removeEventListener('click', handleClickOutsideCaloriePopup);
    };
  }, []);

  const countItem = calcCount(cartItems, id);

  return (
    <div className={styles.root}>
      <div className={styles.rootTop}>
        <h1>{title}</h1>
        <div className={styles.btnInfo} ref={caloriePopupBtnRef}>
          <svg
            onClick={() => setOpenedCaloriePopup(!openedCaloriePopup)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              fillRule="evenodd"
              d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10"
              clipRule="evenodd"
            ></path>
            <path
              fill="#000"
              fillRule="evenodd"
              d="M12 11a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1"
              clipRule="evenodd"
            ></path>
            <path fill="#000" d="M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
          </svg>
          {openedCaloriePopup && (
            <CaloriePopup
              ref={caloriePopupRef}
              nutritionalValue={nutritionalValue}
              weight={activeWeight}
            />
          )}
        </div>
      </div>

      <div className={styles.fullPizza}>
        <img src={imageUrl} alt="Pizza" />
        <div className={styles.fullPizzaInfo}>
          <div className={styles.fullPizzaInfoDiv}>
            <p className={styles.fullPizzaInfoTop}>
              {activeSize} см, {typeArray[activeType]} тесто, {activeWeight} г
            </p>
            <p className={styles.fullPizzaInfoComposition}>
              Состав: {composition.toLocaleLowerCase()}
            </p>
          </div>

          <div className={styles.fullPizzaInfoOptions}>
            <div className={styles.fullPizzaInfoOptionsBlock}>
              <PizzaOptions {...PizzaOptionsData} />
            </div>
          </div>
          <div className={styles.fullPizzaInfoBottom}>
            <span className={styles.fullPizzaInfoPrice}>от {activePrice} ₴</span>
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
    </div>
  );
};
