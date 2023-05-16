import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import styles from "./MainPage.module.css";

function MainPage({ productList, allBookmarkedItem, setAllBookmarkedItem }) {
  // 상품 리스트를 위한 4가지 데이터, 북마크 리스트를 위한 4가지 데이터 해결!
  // const [fourProductData, setFourProductData] = useState([]);
  // console.log(fourProductData);

  // 전체 상품데이터 중에 4개만 필터링하는 함수. 근데 useEffect를 쓸필요가 있나? 있겠네. setState 써야되니까 useEffect 안쓰면 무한 렌더됨.
  // 근데 생각해보니까 state을 왜 써야되지? 지워볼까. 해결!
  // useEffect(() => {
  //   const result = [];
  //   productList.some((el, i) => {
  //     result.push(el);
  //     if (el.id === 3) {
  //       console.log(result);
  //       setFourProductData(result);
  //       return true;
  //     }
  //   });
  // }, [productList]);
  const defaultProductCount = 4;

  const productsData = [];
  productList.some((product, index) => {
    if (index === defaultProductCount) {
      return true;
    }
    productsData.push(product);
  });

  // 북마크된 데이터 전체 속성: 이렇게 하지말고 애초에 로컬스토리지에 저장할때 객체형태로 넣어야겠다. 해결!
  // const BookmarkedDataObj = allBookmarkedItem.filter((el, index) => {
  //   if (allBookmarkedItem.include(el.id)) {
  //     return true;
  //   }
  // });

  // 북마크된 데이터 중에 4개만 뽑아와: 여기는 use
  const fourBookmarkedData = [];
  allBookmarkedItem.some((bookmarkedItem, index) => {
    if (index === 4) {
      return true;
    }
    fourBookmarkedData.push(bookmarkedItem);
  });

  return (
    <main className={styles["main-container"]}>
      <div>
        <h2>상품 리스트</h2>
        <ItemList
          productsData={productsData}
          setAllBookmarkedItem={setAllBookmarkedItem}
        />
      </div>
      <div>
        <h2>북마크 리스트</h2>
        <ItemList
          productsData={fourBookmarkedData}
          setAllBookmarkedItem={setAllBookmarkedItem}
        />
      </div>
    </main>
  );
}

export default MainPage;
