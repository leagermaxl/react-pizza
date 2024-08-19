import React from 'react';

import style from './Categories.module.scss';

function Categories({ categoryId, onClickCategory }) {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div className={style.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={index}
            onClick={() => onClickCategory(index)}
            className={`${categoryId === index ? style.active : ''}`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
