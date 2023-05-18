import React from "react";
import styled from "styled-components";

// 작성하다보니 굳이 북마크 버튼까지 컴포넌트화 해야하는지 아직 필요성을 못느끼겠음.
// 나중에 필요할때 다시 작업하고 리팩토링 하는걸로 하자!

const StyledImg = styled.img`
  position: relative;
  right: 20px;
  bottom: 40px;
  /* bottom: ${(props) => (props.type === "Category" ? "65px" : "85px")}; */
  cursor: pointer;
`;

function BookmarkButton({ clickBookmarkHandler, isBookmarked }) {
  return (
    <>
      {!isBookmarked ? (
        <StyledImg
          className="bookmark-icon-off"
          src="../images/bookmark-icon-off.png"
          onClick={clickBookmarkHandler}
          alt="활성화되지 않은 북마크 아이콘"
        />
      ) : (
        <StyledImg
          className="bookmark-icon-on"
          src="../images/bookmark-icon-on.png"
          onClick={clickBookmarkHandler}
          alt="활성화된 북마크 아이콘"
        />
      )}
    </>
  );
}

export default BookmarkButton;
