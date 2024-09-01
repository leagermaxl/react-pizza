import React from 'react';

import styles from './Categories.module.scss';

type CategoriesProps = {
  categoryId: number;
  onClickCategory: any;
};

const Categories: React.FC<CategoriesProps> = ({ categoryId, onClickCategory }) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={`${categoryId === index ? styles.active : ''}`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
