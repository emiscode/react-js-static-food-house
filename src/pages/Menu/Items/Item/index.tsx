import styles from "./Item.module.scss";

interface Props {
  item: any;
}

export default function Item({ item }: Props) {
  return (
    <div className={styles.item}>
      <div className={styles.item__photo}>
        <img src={item.photo} alt="food" />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__category}>{item.category.label}</div>
          <div className={styles.item__portion}>{item.size}</div>
          <div className={styles.item__howmanypeople}>{item.serving}</div>
          <div className={styles.item__price}>{item.price}</div>
        </div>
      </div>
    </div>
  );
}
