import React from 'react';

import { SortProperty, SortType } from '../../redux/slices/filterSlice';

import styles from './Sort.module.scss';

type sortProps = {
  sortObj: SortType;
  onClickSortObj: (obj: SortType) => void;
  sortOrder: boolean;
  onClickSortOrder: (order: boolean) => void;
};

export const sortList: SortType[] = [
  { name: 'популярности', sortProperty: SortProperty.RATING },
  { name: 'цене', sortProperty: SortProperty.PRICE },
  { name: 'алфавиту', sortProperty: SortProperty.TITLE },
];

const Sort: React.FC<sortProps> = ({ sortObj, onClickSortObj, sortOrder, onClickSortOrder }) => {
  const [opened, setOpened] = React.useState(false);

  const sortRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutsideSort = (event: MouseEvent) => {
      if (sortRef.current && !event.composedPath().includes(sortRef.current)) {
        setOpened(false);
      }
    };
    document.body.addEventListener('click', handleClickOutsideSort);
    return () => {
      document.body.removeEventListener('click', handleClickOutsideSort);
    };
  }, []);

  const clickOnSort = (obj: SortType) => {
    onClickSortObj(obj);
    setOpened(false);
  };

  return (
    <div ref={sortRef} className={styles.sort}>
      <div className={styles.sortBlock}>
        <span>
          <svg
            onClick={() => onClickSortOrder(!sortOrder)}
            className={`${sortOrder ? '' : styles.sortSvg}`}
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
              fill="#2C2C2C"
            />
          </svg>
          Сортировка по:
        </span>
        <span onClick={() => setOpened(!opened)}>{sortObj.name}</span>
      </div>
      {opened && (
        <div className={styles.sortPopup}>
          <ul>
            {sortList.map((obj, index) => (
              <li
                key={index}
                onClick={() => clickOnSort(obj)}
                className={`${obj.sortProperty === sortObj.sortProperty ? styles.active : ''}`}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default Sort;
