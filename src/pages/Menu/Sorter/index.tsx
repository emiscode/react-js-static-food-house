import styles from "./Sorter.module.scss";
import options from "./options.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { isOptionalChain } from "typescript";

interface Props {
  sorter: string;
  setSorter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sorter({ sorter, setSorter }: Props) {
  const [open, setOpen] = useState(false);

  const sorterName =
    sorter && options.find((option) => option.value === sorter)?.name;

  return (
    <div className={styles.container}>
      <button
        className={classNames({
          [styles.sorter]: true,
          [styles["sorter--active"]]: sorter !== "",
        })}
        onClick={() => setOpen(!open)}
        onBlur={() => setOpen(false)}
      >
        <span>
          {sorterName || "Sort by"}{" "}
          {open ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
        </span>
        <div
          className={classNames({
            [styles.sorter__options]: true,
            [styles["sorter__options--active"]]: open,
          })}
        >
          {options.map((option) => (
            <div
              className={classNames({
                [styles.sorter__option]: true,
                [styles["sorter__option--active"]]:
                  option.value === sorter && sorter !== "",
              })}
              key={option.value}
              onClick={() => setSorter(option.value)}
            >
              {option.name}
            </div>
          ))}
        </div>
      </button>
      <button
        className={classNames({
          [styles.clear]: true,
          [styles["clear--active"]]: sorter !== "",
        })}
        disabled={sorter === ""}
        onClick={() => setSorter("")}
      >
        Clear
      </button>
    </div>
  );
}
