import React from "react";
import styles from "./Finder.module.scss";
import { CgSearch } from "react-icons/cg";

interface Props {
  finder: string;
  setFinder: React.Dispatch<React.SetStateAction<string>>;
}

export default function Finder({ finder, setFinder }: Props) {
  return (
    <div className={styles.finder}>
      <input
        value={finder}
        onChange={(event) => setFinder(event.target.value)}
        placeholder="Search"
      />
      <CgSearch size={16} color="#352d29" />
    </div>
  );
}
