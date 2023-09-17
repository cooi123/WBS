import React from "react";
import {ProductInfo} from "../types/types";

// Individual Product Component
function ProductCard({product}: {product: ProductInfo}) {
  return (
    <a
      href={product.link}
      className="h-full flex-grow flex-col p-4 border rounded shadow-md full-height"
    >
      <img
        src={product.imgSrc}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-center mt-4">{product.name}</h3>
    </a>
  );
}

export default ProductCard;
