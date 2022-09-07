import items from "./items.json";
import styles from "./Items.module.scss";
import Item from "./Item";
import { useEffect, useState } from "react";
import { idText } from "typescript";

interface Props {
  finder: string;
  filter: number | null;
  sorter: string;
}

export default function Items({ finder, filter, sorter }: Props) {
  const [list, setList] = useState(items);

  const onFinder = (title: string) => {
    const regex = new RegExp(finder, "i");
    return regex.test(title);
  };

  const onFilter = (categoryId: number) => {
    if (filter) return filter === categoryId;

    return true;
  };

  useEffect(() => {
    const newList = items.filter(
      (item) => onFinder(item.title) && onFilter(Number(item.category.id))
    );

    setList(newList);
  }, [finder, filter]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
