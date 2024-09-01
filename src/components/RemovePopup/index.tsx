import styles from './RemovePopup.module.scss';

// const RemovePopup = forwardRef(function RemovePopup({ title, confirm, deny }, ref) {
type RemovePopupProps = {
  title: string;
  confirm: any;
  deny: any;
};
const RemovePopup: React.FC<RemovePopupProps> = ({ title, confirm, deny }) => {
  // const removePopupRef = React.useRef();
  // const isInitialMount = React.useRef(true);

  // React.useEffect(() => {
  //   if (isInitialMount.current) {
  //     isInitialMount.current = false;
  //   } else {
  //     const handleClickOutsideRemovePopup = (event) => {
  //       if (!event.composedPath().includes(removePopupRef.current)) {
  //         console.log(event.composedPath());
  //         setOpenedPopup(false);
  //       }
  //     };
  //     document.body.addEventListener('click', handleClickOutsideRemovePopup);
  //   }
  // }, []);

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
// });

export default RemovePopup;
