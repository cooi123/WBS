import React from "react";
import {ProductInformation} from "../components/ProductDescription";

function ProductPage() {
  const products = [
    {
      title: "Wrought Iron Door",
      description:
        "This is a custom-made Wrought Iron Door. It features unique designs and patterns...",
      images: [
        "assets/img/customworks/iron door1.jpg",
        "assets/img/customworks/iron door2.jpg",
      ],
    },
    {
      title: "Interior Doors",
      description: "Our interior doors are crafted with attention to detail...",
      images: [
        "assets/img/customworks/interior door1.jpg",
        "assets/img/customworks/interior door2.jpg",
      ],
    },
    // ... add more products as needed
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      {products.map((product, index) => (
        <ProductInformation key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
