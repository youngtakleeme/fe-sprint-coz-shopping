import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addToBookmark, removeFromBookmark } from "../actions";
import Modal from "./Modal";

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

function Item({ productData }) {
  // 먼저 리덕스 북마크된 상품 데이터를 확인해보기
  const state = useSelector((state) => state);
  const { bookmarkedItems } = state;
  const dispatch = useDispatch();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 북마크 state와 리덕스의 데이트와 싱크 맞춰주기
  useEffect(() => {
    setIsBookmarked(
      bookmarkedItems.some(
        (bookmarkedItem) => bookmarkedItem.id === productData.id
      )
    );
  }, [bookmarkedItems, productData]);

  // 북마크 아이콘 클릭했을때 local state와 리덕스에 상태 업데이트해주기
  const clickBookmarkHandler = (event) => {
    event.stopPropagation();
    !isBookmarked
      ? dispatch(addToBookmark(productData))
      : dispatch(removeFromBookmark(productData));
    setIsBookmarked((prev) => !prev);
  };

  // Modal 띄울건지 결정하는 handeler function
  const clickItemHandler = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <Wrapper type={productData.type}>
        <div className="item-container" onClick={clickItemHandler}>
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
                {productData.type === "Exhibition" && ""}
                {productData.type === "Category" && ""}
                {productData.type === "Product" &&
                  `${productData.discountPercentage}%`}
                {productData.type === "Brand" && `관심고객수`}
              </p>
            </div>
            <p className={`content-description third-title`}>
              {productData.type === "Brand" &&
                `${Number(productData.follower).toLocaleString()}명`}
              {productData.type === "Category" && ""}
              {productData.type === "Exhibition" && productData.sub_title}
              {productData.type === "Product" &&
                `${Number(productData.price).toLocaleString()}원`}
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
      {isModalOpen ? (
        <Modal
          productData={productData}
          clickBookmarkHandler={clickBookmarkHandler}
          isBookmarked={isBookmarked}
          clickItemHandler={clickItemHandler}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default Item;
