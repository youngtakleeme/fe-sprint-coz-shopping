import React, { useState, useEffect } from "react";
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
    cursor: pointer;
  }
`;

function Item({ productData, setAllBookmarkedItem }) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  // const [isBookmarked, setIsBookmarked] = useState(() => {
  //   const isBookmarkedData = localStorage.getItem("isBookmarked")
  //     ? JSON.parse(localStorage.getItem("isBookmarked"))
  //     : [];
  //   const isBookmark = isBookmarkedData.some((el, index) => {
  //     if (el.id === productData.id) {
  //       return true;
  //     }
  //   });
  //   return isBookmark;
  // });
  // console.log(isBookmarked);

  // bookmark data in local storage
  // useEffect(() => {}, []);

  const clickBookmarkHandler = (event) => {
    event.stopPropagation();
    setIsBookmarked((prev) => !prev);
    // localStorage.setItem("isBookmarked", [productData.id]);
    setAllBookmarkedItem((prev) => [...prev, productData]);
  };

  return (
    <Wrapper type={productData.type}>
      <div className="item-container">
        <img
          className="url-image"
          src={
            productData.type === "Brand"
              ? productData.brand_image_url
              : productData.image_url
          }
          alt={`${productData.title} 이미지`}
        />
        <div className={"content-container"}>
          <div className={"content-title-container"}>
            <p className={"first-title"}>
              {productData.type === "Brand"
                ? productData.brand_name
                : productData.title}
            </p>
            <p className={"second-title"}>
              {productData.type === "Exhibition" ||
                (productData.type === "Category" && "")}
              {productData.type === "Product"
                ? `${productData.discountPercentage}%`
                : "관심고객수"}
            </p>
          </div>
          <p className={`content-description third-title`}>
            {productData.type === "Brand" && `${productData.follower}명`}
            {productData.type === "Category" && ""}
            {productData.type === "Brand" && productData.sub_title}
            {productData.type === "Product" &&
              `${Number(productData["price"]).toLocaleString()}원`}
          </p>
        </div>
      </div>
      {!isBookmarked ? (
        <img
          className="bookmark-icon-off"
          src="../images/bookmark-icon-off.png"
          onClick={clickBookmarkHandler}
          alt="활성화되지 않은 북마크 아이콘"
        />
      ) : (
        <img
          className="bookmark-icon-on"
          src="../images/bookmark-icon-on.png"
          onClick={clickBookmarkHandler}
          alt="활성화된 북마크 아이콘"
        />
      )}
    </Wrapper>
  );
}

export default Item;
