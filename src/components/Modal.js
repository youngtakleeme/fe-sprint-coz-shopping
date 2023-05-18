import React from "react";
import styled from "styled-components";

// ModalView랑 Overlay 스타일링 미리 만들자
const ModalView = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;

  .url-image {
    width: 50rem;
    height: 30rem;
    border-radius: 30px;
  }

  .bookmark-icon-off,
  .bookmark-icon-on {
    cursor: pointer;
    margin-right: 15px;
  }

  .title-container {
    display: flex;
    align-items: center;

    position: relative;
    right: -40px;
    bottom: ${(props) => (props.type === "Category" ? "45px" : "65px")};
  }

  .first-title {
    font-weight: bold;
    color: white;
    font-size: x-large;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 9;
`;

// 개별 Item 에 자식으로 종속될 Modal (Item 컴포넌트에서 조건부 렌더링)
function Modal({
  productData,
  clickBookmarkHandler,
  isBookmarked,
  clickItemHandler,
}) {
  return (
    <>
      <Overlay onClick={clickItemHandler}></Overlay>
      <ModalView>
        <img
          className="url-image"
          src={
            productData.type === "Brand"
              ? productData.brand_image_url
              : productData.image_url
          }
          alt={`${productData.title} 이미지`}
        />
        <div className="title-container">
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
          <p className="first-title">
            {productData.type === "Brand"
              ? productData.brand_name
              : productData.title}
          </p>
        </div>
      </ModalView>
    </>
  );
}

export default Modal;
