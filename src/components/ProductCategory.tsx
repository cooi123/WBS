import {ProductInfo} from "../types/types";
import ProductCard from "./ProductCard";
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productsInCategory.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}
function ProductCategory({products}: {products: ProductInfo[]}) {
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  console.log(products);
  return (
    <div className="my-8">
      {categories.map((category) => (
        <Category key={category} categoryName={category} products={products} />
      ))}
    </div>
  );
}

export default ProductCategory;
