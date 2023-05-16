import React, { useState } from "react";
// import styles from "./Item.module.css";
import styled from "styled-components";
import Product from "./UI/Product";
import Category from "./UI/Category";
import Exhibition from "./UI/Exhibition";
import Brand from "./UI/Brand";

const Wrapper = styled.section`
  .item-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .item-container img {
    display: block;
    width: 264px;
    height: 210px;
  }

  .url-image {
    border-radius: 13px;
  }

  /* 밑에 text 부분 스타일링 */
  .content-container {
    display: flex;
    flex-direction: column;
  }

  .content-title-container {
    margin-top: 5px;
    width: 264px;
    display: flex;
    justify-content: space-between;
  }

  .first-title {
    font-weight: bold;
  }

  .second-title {
    font-weight: bold;
    color: ${(props) => (props.type === "Product" ? "purple" : "black")};
  }

  .third-title {
    text-align: ${(props) => (props.type === "Exhibition" ? "left" : "right")};
  }

  /* 북마크 아이콘 스타일링 */
  .bookmark-icon-off,
  .bookmark-icon-on {
    position: relative;
    left: 105px;
    bottom: ${(props) => (props.type === "Category" ? "65px" : "85px")};
  }
`;

function Item({ dataObj }) {
  const [bookmarked, setBookmarked] = useState(false);

  const clickBookmarkHandler = (event) => {
    // console.log(event.target);
    event.stopPropagation();
    setBookmarked((prev) => !prev);
  };

  return (
    <Wrapper type={dataObj.type}>
      {dataObj.type === "Product" && <Product dataObj={dataObj} />}
      {dataObj.type === "Category" && <Category dataObj={dataObj} />}
      {dataObj.type === "Exhibition" && <Exhibition dataObj={dataObj} />}
      {dataObj.type === "Brand" && <Brand dataObj={dataObj} />}
      {!bookmarked ? (
        <img
          className="bookmark-icon-off"
          src="../images/북마크-아이콘-off.png"
          onClick={clickBookmarkHandler}
        />
      ) : (
        <img
          className="bookmark-icon-on"
          src="../images/북마크-아이콘-on.png"
          onClick={clickBookmarkHandler}
        />
      )}
    </Wrapper>
  );
}

export default Item;
