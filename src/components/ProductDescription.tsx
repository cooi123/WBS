import React from "react";

export function ProductInformation({product}: any) {
  return (
    <div className="my-8 md:my-16">
      <h2 className="text-2xl md:text-4xl mb-4 md:mb-8">{product.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <div>
          {product.images.map((img: any, index: number) => (
            <img
              key={index}
              src={img}
              alt={`${product.title} ${index + 1}`}
              className="w-full mb-4 object-cover h-48 md:h-96"
            />
          ))}
        </div>
        <div>
          <p className="text-base md:text-lg">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
