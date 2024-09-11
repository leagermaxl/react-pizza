import React from 'react';
import { BounceLoader } from 'react-spinners';

import styles from './Loader.module.scss';

export const Loader: React.FC = () => {
  return (
    <div className={styles.loader}>
      <BounceLoader
        color={'#fe5f1e'}
        loading={true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <p>Идёт загрузка...</p>
    </div>
  );
};
