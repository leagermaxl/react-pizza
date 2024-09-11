import styles from './RemovePopup.module.scss';

type RemovePopupProps = {
  title: string;
  confirm: () => void;
  deny: () => void;
};
export const RemovePopup: React.FC<RemovePopupProps> = ({ title, confirm, deny }) => {
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
};
