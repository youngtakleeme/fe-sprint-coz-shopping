import React from "react";

function Brand({ itemData }) {
  return (
    <div className="item-container">
      <img
        className="url-image"
        src={itemData["brand_image_url"]}
        alt={`${itemData.title} 이미지`}
      />
      <div className={"content-container"}>
        <div className={"content-title-container"}>
          <p className={"first-title"}>{itemData["brand_name"]}</p>
          <p className={"second-title"}>관심고객수</p>
        </div>
        <p className={`content-description third-title`}>
          {itemData.follower}명
        </p>
      </div>
    </div>
  );
}

export default Brand;
