import React from "react";
import {ProductInfo} from "../types/types";

// Individual Product Component
function ProductCard({product}: {product: ProductInfo}) {
  return (
    <div className="p-4 border rounded shadow-md">
      <img
        src={product.imgSrc}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-center mt-4">{product.name}</h3>
    </div>
  );
}

export default ProductCard;
