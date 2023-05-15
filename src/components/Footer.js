import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles["footer-container"]}>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
    </footer>
  );
}

export default Footer;
