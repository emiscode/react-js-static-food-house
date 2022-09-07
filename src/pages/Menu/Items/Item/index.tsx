import classNames from "classnames";
import styles from "./Item.module.scss";

interface Props {
  item: any;
}

export default function Item({ item }: Props) {
  const itemCategory = item.category.label.toLowerCase();

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
          <div
            className={classNames({
              [styles.item__category]: true,
              [styles[`item__category__${itemCategory}`]]: true,
            })}
          >
            {item.category.label}
          </div>
          <div className={styles.item__portion}>{item.size}g</div>
          <div className={styles.item__howmanypeople}>
            {item.serving}
            <span className={styles.item__serving}>
              {item.serving.toString() === "1" ? "person" : "people"}
            </span>
          </div>
          <div className={styles.item__price}>${item.price}</div>
        </div>
      </div>
    </div>
  );
}
