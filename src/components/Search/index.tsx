import React from 'react';
import debounce from 'lodash.debounce';

import { useAppDispatch } from '../../redux/store';
import { setSearchValue } from '../../redux/filter/slice';

import styles from './Search.module.scss';

function Search() {
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);

  // eslint-disable-next-line
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 600),
    []
  );

  const OnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const clearSearchValue = () => {
    setValue('');
    updateSearchValue('');
    inputRef.current?.focus();
  };

  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100"
        height="100"
        viewBox="0 0 30 30"
      >
        <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={OnChangeInput}
        className={`${styles.search} ${value !== '' ? styles.searchNoEmpty : ''}`}
        placeholder="Поиск пиццы..."
      />
      {value !== '' && (
        <svg
          className={styles.close}
          onClick={clearSearchValue}
          enableBackground="new 0 0 512 512"
          height="512px"
          id="Layer_1"
          version="1.0"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="445.2,109.2 402.8,66.8 256,213.6 109.2,66.8 66.8,109.2 213.6,256 66.8,402.8 109.2,445.2 256,298.4 402.8,445.2   445.2,402.8 298.4,256 " />
        </svg>
      )}
    </div>
  );
}

export default Search;
