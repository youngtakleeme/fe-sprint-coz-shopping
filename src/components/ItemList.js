import React from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

const mockData = [
  {
    id: 28,
    type: "Category",
    title: "미술",
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      "https://images.unsplash.com/photo-1537884557178-342a575d7d16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80",
    brand_image_url: null,
    follower: null,
  },
  {
    id: 45,
    type: "Product",
    title: "워싱 반바지",
    sub_title: null,
    brand_name: null,
    price: "69700",
    discountPercentage: 40,
    image_url:
      "https://plus.unsplash.com/premium_photo-1666265087913-9326638decfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    brand_image_url: null,
    follower: null,
  },
  {
    id: 8,
    type: "Category",
    title: "가드닝",
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80",
    brand_image_url: null,
    follower: null,
  },
  {
    id: 38,
    type: "Category",
    title: "육류",
    sub_title: null,
    brand_name: null,
    price: null,
    discountPercentage: null,
    image_url:
      "https://images.unsplash.com/photo-1551028150-64b9f398f678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    brand_image_url: null,
    follower: null,
  },
];

function ItemList() {
  return (
    <div className={styles["item-list-container"]}>
      {mockData.map((el, i) => (
        <Item key={i} dataObj={el} />
      ))}
    </div>
  );
}

export default ItemList;
