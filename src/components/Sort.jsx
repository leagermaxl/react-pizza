import React from 'react';

function Sort() {
  const [opened, setOpened] = React.useState(false);
  const [selected, setSelected] = React.useState(0);

  const sortList = ['популярности', 'цене', 'алфавиту'];
  const selectedName = sortList[selected];

  const clickOnSort = (index) => {
    setSelected(index);
    setOpened(false);
  };

  return (
    <div className="sort">
      <div>
        <img src="img/sort-arrow.svg" alt="Sort-arrow" />
        <span>Сортировка по:</span>
        <span onClick={() => setOpened(!opened)}>{selectedName}</span>
      </div>
      {opened && (
        <div className="sortPopup">
          <ul>
            {sortList.map((name, index) => (
              <li onClick={() => clickOnSort(index)} className={selected === index ? 'active' : ''}>
                {name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Sort;
