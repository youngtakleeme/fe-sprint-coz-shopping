import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import styles from "./MainPage.module.css";
import { useSelector } from "react-redux";

function MainPage() {
  const state = useSelector((state) => state);
  const { productList, bookmarkedItems } = state;

  // 전달되는 인자의 숫자만큼 요소를 뽑아서 배열을 반환하는 함수화 시켜볼까
  const defaultProductCount = 4;
  function extractNumberOfElement(dataArr, number) {
    const extractedArray = [];
    dataArr.some((product, idx) => {
      if (idx === defaultProductCount) {
        return true;
      }
      extractedArray.push(product);
    });
    return extractedArray;
  }

  // (상품리스트) itemList에 prop으로 내려보낼 데이터
  const productsData = extractNumberOfElement(productList, defaultProductCount);

  // (북마크리스트) itemList에 prop으로 내려보낼 데이터
  const bookmarkedProductsData = extractNumberOfElement(
    bookmarkedItems,
    defaultProductCount
  );

  return (
    <main className={styles["main-container"]}>
      <div>
        <h2>상품 리스트</h2>
        <ItemList productsData={productsData} />
      </div>
      <div>
        <h2>북마크 리스트</h2>
        <ItemList productsData={bookmarkedProductsData} />
      </div>
    </main>
  );
}

export default MainPage;
