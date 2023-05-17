import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  .filter-icon-img,
  .filter-icon-title {
    cursor: pointer;
  }

  // 선택된 아이콘의 텍스트 조건부 스타일링하기
  .filter-icon-title {
    color: ${(props) => (props.isSelected ? "#412DD4" : "black")};
    text-decoration: ${(props) => (props.isSelected ? "underline" : "none")};
    font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  }
`;

function FilterButton({ type, imgSrc, title, isSelected, setSelectedIcon }) {
  // 선택된 type 상태 ProductListPage 컴포넌트에 업데이트해주기
  const selectIconHandler = (event) => {
    setSelectedIcon(type);
  };

  return (
    <Wrapper className="filter-section-container" isSelected={isSelected}>
      <img
        className="filter-icon-img"
        src={`../images/filter-${imgSrc}-icon.png`}
        alt={`${title}} 필터 버튼`}
        onClick={selectIconHandler}
      />
      <p className="filter-icon-title" onClick={selectIconHandler}>
        {title}
      </p>
    </Wrapper>
  );
}

export default FilterButton;
