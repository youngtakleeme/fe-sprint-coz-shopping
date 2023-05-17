import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

function ItemList({ productsData }) {
  const noBookmarkedItem = (
    <>
      <div className={styles["no-bookmarked-content"]}>
        <img
          src="../images/bookmark-icon-off.png"
          alt="활성화되지 않은 북마크 아이콘"
        />
        <p>아직 북마크된 상품이 없습니다.</p>
        <p>북마크할 새로운 상품을 추가해보세요!</p>
      </div>
    </>
  );

  return (
    <div className={styles["item-list-container"]}>
      {!productsData.length
        ? noBookmarkedItem
        : productsData.map((productData) => (
            <Item key={productData.id} productData={productData} />
          ))}
    </div>
  );
}

export default ItemList;
