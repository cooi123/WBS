import React from "react";

function ProductSection() {
  const products = [
    {
      img: "assets/img/customworks/iron door.jpg",
      link: "IronDoor.html",
      title: "Wrought Iron Door",
      description: "Custom Dimensions and Patterns",
    },
    {
      img: "assets/img/customworks/interior door.jpg",
      link: "InteriorDoors.html",
      title: "Interior Doors",
    },
    {
      img: "assets/img/customworks/architrave.jpg",
      link: "PreprimedArchitrave.html",
      title: "Preprimed Architrave",
    },
    {
      img: "assets/img/customworks/cabinets.jpg",
      link: "InteriorDoors.html",
      title: "Cabinets",
    },
  ];

  return (
    <section className="mb-4 md:mb-2.5">
      <div className="container mx-auto">
        <div className="mb-4 md:mb-4.5">
          <h2 className="md:text-left text-center text-xl md:text-2xl">
            Custom Orders
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-4">
          {products.map((product, index) => (
            <div key={index} className="col-span-1 mb-6 md:mb-11.25">
              <div className="bg-white border p-2 md:p-4">
                <div className="relative">
                  <img
                    className="w-1/3 md:w-1/2 h-24 md:h-48 object-cover mx-auto"
                    src={product.img}
                    alt="Product"
                  />
                  <a href={product.link} className="absolute inset-0"></a>
                </div>
                <div className="mt-2 text-sm md:text-base">
                  <div className="font-medium">
                    <a href={product.link} className="hover:text-blue-600">
                      {product.title}
                    </a>
                  </div>
                  {product.description && (
                    <h3 className="mt-1 md:mt-2">
                      <a href={product.link} className="hover:text-blue-600">
                        {product.description}
                      </a>
                    </h3>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
