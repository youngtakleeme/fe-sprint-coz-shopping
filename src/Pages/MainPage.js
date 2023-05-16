import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import styles from "./MainPage.module.css";

function MainPage({ AllProductData }) {
  // 상품 리스트를 위한 4가지 데이터
  const [fourProductData, setFourProductData] = useState([]);
  console.log(fourProductData);

  // 북마크 리스트를 위한 4가지 데이터

  const result = [];
  useEffect(() => {
    AllProductData.some((el, i) => {
      result.push(el);
      if (el.id === 3) {
        console.log(result);
        setFourProductData(result);
        return true;
      }
    });
  }, []);

  return (
    <main className={styles["main-container"]}>
      <div>
        <h2>상품 리스트</h2>
        <ItemList ItemsData={fourProductData} />
      </div>
      <div>
        <h2>북마크 리스트</h2>
        <ItemList ItemsData={fourProductData} />
      </div>
    </main>
  );
}

export default MainPage;
