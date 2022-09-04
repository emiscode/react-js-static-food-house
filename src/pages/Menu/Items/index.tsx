import items from "./items.json";
import styles from "./Items.module.scss";
import Item from "./Item";

export default function Items() {
  return (
    <div className={styles.items}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
