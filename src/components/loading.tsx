import { observer } from "mobx-react-lite";
import styles from "styles/Home.module.css";

export const Loading = observer(() => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.description}>Loading...</p>
      </main>
    </div>
  );
});
