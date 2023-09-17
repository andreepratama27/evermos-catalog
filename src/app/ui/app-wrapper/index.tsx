import Navbar from "../navbar";
import styles from "./appWrapper.module.scss";

export default function AppWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.main}>
      <Navbar />
      <div className={styles.appWrapper}>{children}</div>
    </main>
  );
}
