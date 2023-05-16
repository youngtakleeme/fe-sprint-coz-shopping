import React from "react";

function Brand({ dataObj }) {
  return (
    <div className="item-container">
      <img className="url-image" src={dataObj["brand_image_url"]} />
      <div className={"content-container"}>
        <div className={"content-title-container"}>
          <p className={"first-title"}>{dataObj["brand_name"]}</p>
          <p className={"second-title"}>관심고객수</p>
        </div>
        <p className={`content-description third-title`}>
          {dataObj.follower}명
        </p>
      </div>
    </div>
  );
}

export default Brand;
