import {ProductCarousel} from "../components/ProductCarousel";
import {ProductInformation} from "../components/ProductDescription";
import ProductSection from "../components/ProductSection";

export function HomePage() {
  return (
    <div>
      <ProductCarousel></ProductCarousel>
      <ProductSection></ProductSection>
    </div>
  );
}
