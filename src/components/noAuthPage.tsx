import { observer } from "mobx-react-lite";
import styles from "styles/Home.module.css";

export const NoAuthPage = observer(() => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>You Are Not Authorized</p>
      </main>
    </div>
  );
});
