import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";

import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const ref = useRef(null);

  // dropdown 메뉴 바깥을 클릭했을때 사라지게하기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  const buttonClickHandler = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <Link to="/" className={styles["logo-container"]}>
        <img src="../images/로고.png" alt="logo" />
        <h1>COZ Shopping</h1>
      </Link>
      <div ref={ref} className={styles["button-container"]}>
        <img
          src="../images/아이콘.png"
          alt="햄버거 아이콘"
          className={styles["dropdown-button"]}
          onClick={buttonClickHandler}
        />
        {showDropdown && <Dropdown />}
      </div>
    </header>
  );
}

export default Header;
