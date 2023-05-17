import React, { useState } from "react";
import ItemList from "../components/ItemList";
import { useSelector } from "react-redux";
import styles from "./ProductListPage.module.css";
import FilterButton from "../components/FilterButton";

const filterIcons = [
  {
    id: 0,
    type: "All",
    title: "전체",
  },
  {
    id: 1,
    type: "Product",
    title: "상품",
  },
  {
    id: 2,
    type: "Category",
    title: "카테고리",
  },
  {
    id: 3,
    type: "Exhibition",
    title: "기획전",
  },
  {
    id: 4,
    type: "Brand",
    title: "브랜드",
  },
];

function ProductListPage() {
  // 선택된 아이콘(type) 저장하고 type에 맞게 아이콘과 상품리스트 렌더링하기
  const state = useSelector((state) => state);
  const { productList } = state;
  const [selectedIcon, setSelectedIcon] = useState("All");

  const filterProductList = productList.filter((item) => {
    return item.type === selectedIcon;
  });

  return (
    <div className={styles["filter-icons-container"]}>
      <div className={styles["filter-icon-container"]}>
        {filterIcons.map((icon) => (
          <FilterButton
            key={icon.id}
            type={icon.type}
            imgSrc={icon.type}
            title={icon.title}
            setSelectedIcon={setSelectedIcon}
            isSelected={icon.type === selectedIcon ? true : false}
          />
        ))}
      </div>
      <ItemList
        productsData={selectedIcon === "All" ? productList : filterProductList}
      />
    </div>
  );
}

export default ProductListPage;
