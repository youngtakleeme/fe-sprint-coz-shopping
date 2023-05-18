import React from "react";
import ItemList from "../components/ItemList";
import styles from "./MainPage.module.css";
import { useSelector } from "react-redux";
import {
  defaultProductCount,
  extractNumberOfElementFromArray,
} from "../utils/manipulateDataFunc";

function MainPage() {
  const state = useSelector((state) => state);
  const { productList, bookmarkedItems } = state;

  // (상품리스트) itemList에 prop으로 내려보낼 데이터
  const productsData = extractNumberOfElementFromArray(
    productList,
    defaultProductCount
  );

  // (북마크리스트) itemList에 prop으로 내려보낼 데이터
  const bookmarkedProductsData = extractNumberOfElementFromArray(
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
