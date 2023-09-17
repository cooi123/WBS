import React from "react";
import {ProductInformation} from "../components/ProductDescription";
import ProductCategory from "../components/ProductCategory";
import {products} from "../data/products";
function ProductPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <ProductCategory products={products} />
    </div>
  );
}

export default ProductPage;
