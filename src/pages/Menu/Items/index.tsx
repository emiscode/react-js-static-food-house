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

  useEffect(() => {
    const onFinder = (title: string) => {
      const regex = new RegExp(finder, "i");
      return regex.test(title);
    };

    const onFilter = (categoryId: number) => {
      if (filter) return filter === categoryId;

      return true;
    };

    const onSort = (newList: typeof items) => {
      switch (sorter) {
        case "portion":
          return newList.sort((a, b) =>
            Number(a.size) > Number(b.size) ? 1 : -1
          );
        case "how_many_people":
          return newList.sort((a, b) =>
            Number(a.serving) > Number(b.serving) ? 1 : -1
          );
        case "price":
          return newList.sort((a, b) =>
            Number(a.price) > Number(b.price) ? 1 : -1
          );
        default:
          return newList;
      }
    };

    const newList = items.filter(
      (item) => onFinder(item.title) && onFilter(Number(item.category.id))
    );

    setList(onSort(newList));
  }, [finder, filter, sorter]);

  return (
    <div className={styles.items}>
      {list.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
