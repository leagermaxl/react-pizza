import React from 'react';

import { NutritionalValueType } from '../../redux/pizza/types';

import styles from './CaloriePopup.module.scss';

type CaloriePopupProps = {
  nutritionalValue: NutritionalValueType;
  weight: number;
};

export const CaloriePopup = React.forwardRef<HTMLDivElement, CaloriePopupProps>(
  ({ nutritionalValue, weight }, ref) => {
    // export const CaloriePopup: React.FC<CaloriePopupProps> = ({ nutritionalValue, weight }) => {
    const { energyValue, protein, fats, carbohydrates } = nutritionalValue;
    return (
      <div className={styles.root} ref={ref}>
        <div className={styles.block}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12">
            <path
              fillRule="evenodd"
              d="m7.526 1.608-6.454 7.04C-.104 9.932.806 12 2.546 12h12.907c1.74 0 2.65-2.069 1.475-3.351l-6.454-7.04a2 2 0 0 0-2.948 0"
            ></path>
          </svg>
          <div className={styles.blockInfo}>
            <p>Пищевая ценность на 100 г</p>
            <section>
              <div>Энерг. ценность</div>
              <div>{energyValue} ккал</div>
            </section>
            <section>
              <div>Белки</div>
              <div>{protein} г</div>
            </section>
            <section>
              <div>Жиры</div>
              <div>{fats} г</div>
            </section>
            <section>
              <div>Углеводы</div>
              <div>{carbohydrates} г</div>
            </section>
            <section>
              <div>Вес</div>
              <div>{weight} г</div>
            </section>
          </div>
        </div>
      </div>
    );
  }
);
