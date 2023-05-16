import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

function ItemList({ ItemsData }) {
  return (
    <div className={styles["item-list-container"]}>
      {ItemsData.map((el, i) => (
        <Item key={el.id} dataObj={el} />
      ))}
    </div>
  );
}

export default ItemList;
