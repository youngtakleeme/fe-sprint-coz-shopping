import React from "react";
import ProductListLayout from "../layouts/ProductListLayout";

function BookmarkPage() {
  return <ProductListLayout reduxStateProperty="bookmarkedItems" />;
}

export default BookmarkPage;
