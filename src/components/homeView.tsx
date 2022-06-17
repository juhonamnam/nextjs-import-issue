import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { toDoListStore } from "src/stores/toDoListStore";
import styles from "styles/Home.module.css";

export const HomeView = observer(() => {
  useEffect(() => {
    toDoListStore.retrieve();
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Main Page</h1>
        <p className={styles.description}>
          If see this page, check out the source code in the following
          directory:
        </p>
        <p className={styles.description}>
          <code className={styles.code}>src/pages/index.tsx</code>
        </p>
        <p className={styles.description}>
          Now swtich the order of the two imports as instructed in the comment,
          <br />
          and refresh the page. You will see the unexpected error.
        </p>
      </main>
    </div>
  );
});
