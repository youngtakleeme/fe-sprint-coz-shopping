import React from "react";
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
`;

function Item({ dataObj }) {
  return (
    // {dataObj.type === true &&}
    <Wrapper type={dataObj.type}>
      {dataObj.type === "Product" && <Product dataObj={dataObj} />}
      {dataObj.type === "Category" && <Category dataObj={dataObj} />}
      {dataObj.type === "Exhibition" && <Exhibition dataObj={dataObj} />}
      {dataObj.type === "Brand" && <Brand dataObj={dataObj} />}
    </Wrapper>
  );
}

export default Item;
