import React from "react";
import styles from "./Item.module.css";

function Item({ dataObj }) {
  return (
    <div className={styles["item-container"]}>
      <img src={dataObj.image_url} className="" />
      <div className={styles["content-container"]}>
        <div className={styles["content-title-container"]}>
          <p>텍스트1</p>
          <p>텍스트2</p>
        </div>
        <p className={styles["content-description"]}>텍스트3</p>
      </div>
    </div>
  );
}

export default Item;
