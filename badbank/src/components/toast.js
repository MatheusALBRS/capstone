import styles from "../Toast.module.css";

function Toast({ toastlist, position }) {
  return (
    <div className={`${styles.container} ${styles[position]}`}>
      {toastlist.map((toast, i) => (
        <div key={i} className={`${styles.notification} ${styles.toast}`} style={{ backgroundColor: toast.backgroundColor }}>
          <button>X</button>
          <div>
            <p className={styles.title}> {toast.title}</p>
            <p className={styles.description}> {toast.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Toast;
