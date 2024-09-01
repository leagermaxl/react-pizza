import React from 'react';
import ContentLoader from 'react-content-loader';

import styles from '../components/PizzaBlock/PizzaBlock.module.scss';

const Skeleton: React.FC = () => {
  return (
    <div className={styles.pizzaBlockWrapper}>
      <ContentLoader
        className={styles.pizzaBlock}
        speed={2}
        width={280}
        height={484}
        viewBox="0 0 280 484"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <circle cx="140" cy="140" r="110" />
        <rect x="0" y="280" rx="14" ry="14" width="280" height="27" />
        <rect x="0" y="330" rx="10" ry="10" width="280" height="97" />
        <rect x="0" y="443" rx="10" ry="10" width="89" height="30" />
        <rect x="153" y="435" rx="30" ry="30" width="123" height="46" />
      </ContentLoader>
    </div>
  );
};

export default Skeleton;
