import React, { useEffect, useState } from "react";
import Item from "./Item";
import styles from "./ItemList.module.css";

// const mockData = [
//   {
//     id: 22,
//     type: "Product",
//     title: "카페라떼",
//     sub_title: null,
//     brand_name: null,
//     price: "2500",
//     discountPercentage: 50,
//     image_url:
//       "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
//     brand_image_url: null,
//     follower: null,
//   },
//   {
//     id: 62,
//     type: "Category",
//     title: "보드게임",
//     sub_title: null,
//     brand_name: null,
//     price: null,
//     discountPercentage: null,
//     image_url:
//       "https://images.unsplash.com/photo-1632501641765-e568d28b0015?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
//     brand_image_url: null,
//     follower: null,
//   },
//   {
//     id: 71,
//     type: "Exhibition",
//     title: "인생샷 핫플레이스",
//     sub_title: "입장권 구매시 기념품 증정",
//     brand_name: null,
//     price: null,
//     discountPercentage: null,
//     image_url:
//       "https://images.pexels.com/photos/3862601/pexels-photo-3862601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     brand_image_url: null,
//     follower: null,
//   },
//   {
//     id: 21,
//     type: "Brand",
//     title: null,
//     sub_title: null,
//     brand_name: "펩시",
//     price: null,
//     discountPercentage: null,
//     image_url: null,
//     brand_image_url:
//       "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1529&q=80",
//     follower: 3940,
//   },
// ];

function ItemList({ ItemsData }) {
  return (
    <div className={styles["item-list-container"]}>
      {ItemsData.map((el, i) => (
        <Item key={el.id} dataObj={el} />
      ))}
    </div>
  );
}

export default ItemList;
