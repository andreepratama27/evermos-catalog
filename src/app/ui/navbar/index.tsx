import Link from "next/link";
import styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarWrapper}>
        <Link href="/" className={styles.navbarTitle}>
          Evermos Katalog
        </Link>
      </div>
    </nav>
  );
}
