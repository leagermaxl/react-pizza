import React from 'react';

function Sort() {
  return (
    <div className="sort">
      <div>
        <img src="img/sort-arrow.svg" alt="Sort-arrow" />
        <span>Сортировка по:</span>
        <span>популярности</span>
      </div>
      <div className="sortList">
        <ul>
          <li>популярности</li>
          <li>по цене</li>
          <li>по алфавиту</li>
        </ul>
      </div>
    </div>
  );
}

export default Sort;
