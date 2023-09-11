import React from "react";
import {ProductInformation} from "../components/ProductDescription";
import ProductCategory from "../components/ProductCategory";
import {ProductInfo} from "../types/types";
function ProductPage() {
  const products: ProductInfo[] = [
    {
      name: "Wrought Iron Door",
      description:
        "This is a custom-made Wrought Iron Door. It features unique designs and patterns...",
      imgSrc: "assets/img/customworks/iron door.jpg",
      category: "door",
    },
    {
      name: "Wrought Iron Door",
      description:
        "This is a custom-made Wrought Iron Door. It features unique designs and patterns...",
      imgSrc: "assets/img/customworks/iron door.jpg",
      category: "door",
    },
    {
      name: "Wrought Iron Door",
      description:
        "This is a custom-made Wrought Iron Door. It features unique designs and patterns...",
      imgSrc: "assets/img/customworks/iron door.jpg",
      category: "Interior Door",
    },
    {
      name: "Wrought Iron Door",
      description:
        "This is a custom-made Wrought Iron Door. It features unique designs and patterns...",
      imgSrc: "assets/img/customworks/iron door.jpg",
      category: "Another",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <ProductCategory products={products} />
    </div>
  );
}

export default ProductPage;
