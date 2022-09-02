import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Menu() {
  return (
    <main>
      <nav className={styles.menu}>
        <Logo />
        <h1>Food House</h1>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Real food for life</div>
      </header>
    </main>
  );
}
