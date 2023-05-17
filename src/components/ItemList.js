import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

function ItemList({ productsData }) {
  const noBookmarkedItem = (
    <>
      <div className={styles["no-bookmarked-content"]}>
        <p>북마크한 상품이 없습니다.</p>
        <p>북마크할 새로운 상품을 추가해보세요</p>
      </div>
    </>
  );

  return (
    <div className={styles["item-list-container"]}>
      {!productsData.length
        ? noBookmarkedItem
        : productsData.map((productData) => (
            <Item
              key={productData.id}
              productData={productData}
              // setAllBookmarkedItem={setAllBookmarkedItem}
            />
          ))}
    </div>
  );
}

export default ItemList;
