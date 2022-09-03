import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { useState } from "react";
import Finder from "./Finder";
import Filter from "./Filter";
import Sorter from "./Sorter";

export default function Menu() {
  const [finder, setFinder] = useState("");
  const [filter, setFilter] = useState<number | null>(null);
  const [sorter, setSorter] = useState("");

  return (
    <main>
      <nav className={styles.navmenu}>
        <Logo className={styles.logo} />
        <h1>Food House</h1>
      </nav>
      <header className={styles.header}>
        <div className={styles.header__text}>Real food for life</div>
      </header>
      <section className={styles.menu}>
        <h3 className={styles.menu__title}>Menu</h3>
        <Finder finder={finder} setFinder={setFinder} />
        <div className={styles.menu__filter}>
          <Filter filter={filter} setFilter={setFilter} />
          <Sorter sorter={sorter} setSorter={setSorter} />
        </div>
      </section>
    </main>
  );
}
