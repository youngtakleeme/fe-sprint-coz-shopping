import React from "react";
import ProductListLayout from "../layouts/ProductListLayout";

function ProductListPage() {
  return <ProductListLayout reduxStateProperty="productList" />;
}

export default ProductListPage;
