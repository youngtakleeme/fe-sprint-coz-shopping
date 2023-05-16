import React from "react";

function Product({ dataObj }) {
  return (
    <div className="item-container">
      <img
        className="url-image"
        src={dataObj["image_url"]}
        alt={`${dataObj.title} 이미지`}
      />
      <div className={"content-container"}>
        <div className={"content-title-container"}>
          <p className={"first-title"}>{dataObj.title}</p>
          <p className={"second-title"}>{dataObj.discountPercentage}%</p>
        </div>
        <p className={`content-description third-title`}>{dataObj.price}원</p>
      </div>
    </div>
  );
}

export default Product;
