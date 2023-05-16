import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

function ItemList({ productsData, setAllBookmarkedItem }) {
  return (
    <div className={styles["item-list-container"]}>
      {productsData.map((productData) => (
        <Item
          key={productData.id}
          productData={productData}
          setAllBookmarkedItem={setAllBookmarkedItem}
        />
      ))}
    </div>
  );
}

export default ItemList;
