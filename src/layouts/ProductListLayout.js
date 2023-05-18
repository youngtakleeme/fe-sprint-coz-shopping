import React, { useState } from "react";
import { useSelector } from "react-redux";
import { filterIconsData } from "../data/filterIconData";
import styles from "./ProductListLayout.module.css";
import FilterButton from "../components/FilterButton";
import ItemList from "../components/ItemList";

function ProductListLayout({ reduxStateProperty }) {
  // 선택된 아이콘(type) 저장하고 type에 맞게 아이콘과 상품리스트 렌더링하기
  const state = useSelector((state) => state);
  const dataWantToDisplay = state[reduxStateProperty];
  const [selectedIcon, setSelectedIcon] = useState("All");

  const filterDataWantToDisplay = dataWantToDisplay.filter((item) => {
    return item.type === selectedIcon;
  });

  return (
    <div className={styles["filter-icons-container"]}>
      <div className={styles["filter-icon-container"]}>
        {filterIconsData.map((icon) => (
          <FilterButton
            key={icon.id}
            type={icon.type}
            imgSrc={icon.type}
            title={icon.title}
            setSelectedIcon={setSelectedIcon}
            isselected={icon.type === selectedIcon ? true : false}
          />
        ))}
      </div>
      <ItemList
        productsData={
          selectedIcon === "All" ? dataWantToDisplay : filterDataWantToDisplay
        }
      />
    </div>
  );
}

export default ProductListLayout;
