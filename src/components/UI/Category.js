import React from "react";

function Category({ dataObj }) {
  return (
    <div className="item-container">
      <img src={dataObj["image_url"]} />
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
