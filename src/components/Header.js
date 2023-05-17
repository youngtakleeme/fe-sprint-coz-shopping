import React, { useState, useRef, useEffect } from "react";
import styles from "./Header.module.css";

import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

function Header() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const ref = useRef(null);

  // dropdown 메뉴 바깥을 클릭했을때 사라지게하기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!ref.current.contains(e.target)) {
        setIsOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenDropdown]);

  const buttonClickHandler = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <header>
      <Link to="/" className={styles["logo-container"]}>
        <img src="../images/logo.png" alt="코드스테이츠 로고" />
        <h1>COZ Shopping</h1>
      </Link>
      <div ref={ref} className={styles["button-container"]}>
        <img
          src="../images/hamburger-icon.png"
          alt="햄버거 아이콘"
          className={styles["dropdown-button"]}
          onClick={buttonClickHandler}
        />
        {isOpenDropdown && <Dropdown />}
      </div>
    </header>
  );
}

export default Header;
