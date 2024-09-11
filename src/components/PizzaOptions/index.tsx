import React from 'react';

import styles from './PizzaOptions.module.scss';

type PizzaOptionsProps = {
  types: number[];
  sizes: number[];
  price: number[];
  weights?: number[];
  typeArray: string[];
  sizeArray: number[];
  activeType: number;
  activeSize: number;
  activePrice?: number;
  activeWeight?: number;
  setActiveType: (newType: number) => void;
  setActiveSize: (newSize: number) => void;
  setActivePrice: (newPrice: number) => void;
  setActiveWeight?: (newWeight: number) => void;
};

export const PizzaOptions: React.FC<PizzaOptionsProps> = ({
  types,
  sizes,
  price,
  weights,
  typeArray,
  sizeArray,
  activeType,
  activeSize,
  setActiveType,
  setActiveSize,
  setActivePrice,
  setActiveWeight,
}) => {
  return (
    <div className={styles.options}>
      <ul>
        {typeArray.map((typeItem, index) => {
          const typeIncludes = types.includes(index);
          return (
            <li
              key={index}
              onClick={typeIncludes ? () => setActiveType(index) : () => {}}
              className={`${activeType === index ? styles.active : ''} ${
                typeIncludes ? '' : styles.disabled
              }`}
            >
              {typeItem}
            </li>
          );
        })}
      </ul>
      <ul>
        {sizeArray.map((sizeItem, index) => {
          const sizeIncludes = sizes.includes(sizeItem);
          return (
            <li
              key={sizeItem}
              onClick={
                sizeIncludes
                  ? () => {
                      setActiveSize(sizeItem);
                      setActivePrice(price[index]);
                      weights && setActiveWeight?.(weights[index]);
                    }
                  : () => {}
              }
              className={`${activeSize === sizeItem ? styles.active : ''} ${
                sizeIncludes ? '' : styles.disabled
              }`}
            >
              {sizeItem} см.
            </li>
          );
        })}
      </ul>
    </div>
  );
};
