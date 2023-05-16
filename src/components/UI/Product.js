import React from "react";

function Product({ itemData }) {
  return (
    <div className="item-container">
      <img
        className="url-image"
        src={itemData["image_url"]}
        alt={`${itemData.title} 이미지`}
      />
      <div className={"content-container"}>
        <div className={"content-title-container"}>
          <p className={"first-title"}>{itemData.title}</p>
          <p className={"second-title"}>{itemData.discountPercentage}%</p>
        </div>
        <p className={`content-description third-title`}>{itemData.price}원</p>
      </div>
    </div>
  );
}

export default Product;
