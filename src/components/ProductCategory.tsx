import {ProductInfo} from "../types/types";
import ProductCard from "./ProductCard";
import React, {useState} from "react";
function Category({
  categoryName,
  products,
}: {
  categoryName: string;
  products: ProductInfo[];
}) {
  const productsInCategory = products.filter(
    (product) => product.category === categoryName
  );
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{categoryName}</h2>

      <div className="flex flex-wrap ">
        {productsInCategory.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
function ProductCategory({products}: {products: ProductInfo[]}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );

  return (
    <div className="my-8">
      <div className="mb-4">
        <label htmlFor="categorySelect" className="mr-2">
          Filter by category:
        </label>
        <select
          id="categorySelect"
          onChange={(e) =>
            setSelectedCategory(
              e.target.value === "all" ? null : e.target.value
            )
          }
          className="border rounded p-2"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {categories
        .filter(
          (category) => !selectedCategory || category === selectedCategory
        )
        .map((category) => (
          <Category
            key={category}
            categoryName={category}
            products={products}
          />
        ))}
    </div>
  );
}

export default ProductCategory;
