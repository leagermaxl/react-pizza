import React from 'react';

import styles from './RemovePopup.module.scss';

export default function RemovePopup({ title, confirm, deny }) {
  return (
    <div className={styles.removePopup}>
      <span>{title}</span>
      <div className={styles.buttons}>
        <button onClick={confirm} className={styles.btnConfirm}>
          Да :(
        </button>
        <button onClick={deny} className={styles.btnDeny}>
          Нет!
        </button>
      </div>
    </div>
  );
}
