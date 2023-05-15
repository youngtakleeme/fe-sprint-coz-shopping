import React from "react";
import ItemList from "../components/ItemList";
import styles from "./MainPage.module.css";

function MainPage() {
  return (
    <main className={styles["main-container"]}>
      <div>
        <h2>상품 리스트</h2>
        <ItemList />
      </div>
      <div>
        <h2>북마크 리스트</h2>
        <ItemList />
      </div>
    </main>
  );
}

export default MainPage;
