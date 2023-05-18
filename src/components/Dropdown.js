import React, { forwardRef } from "react";
import styles from "./Dropdown.module.css";
import { Link } from "react-router-dom";

const Dropdown = forwardRef((props, ref) => {
  return (
    <ul ref={ref} className={styles["dropdown-menu"]}>
      <Link to="/">
        <span>OOO님, 안녕하세요!</span>
      </Link>
      <Link to="/products/list">
        <img src="../images/product-icon.png" alt="상품 아이콘" />
        <span>상품리스트 페이지</span>
      </Link>
      <Link to="/bookmark">
        <img src="../images/bookmark-icon.png" alt="북마크 아이콘" />
        <span>북마크 페이지</span>
      </Link>
    </ul>
  );
});

export default Dropdown;
