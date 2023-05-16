import React from "react";

function Category({ dataObj }) {
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
          <p className={"second-title"}></p>
        </div>
        <p className={`content-description third-title`}></p>
      </div>
    </div>
  );
}

export default Category;
