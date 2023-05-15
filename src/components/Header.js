import React, { useState } from "react";
import styles from "./Header.module.css";

import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  console.log(showDropdown);
  const buttonClickHandler = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <Link to="/" className={styles["logo-container"]}>
        <img src="../images/로고.png" alt="logo" />
        <h1>COZ Shopping</h1>
      </Link>
      <div className={styles["button-container"]}>
        <img
          src="../images/아이콘.png"
          alt="햄버거 아이콘"
          className={styles["dropdown-button"]}
          onClick={buttonClickHandler}
        />
      </div>
      {showDropdown && <Dropdown />}
    </header>
  );
}

export default Header;
