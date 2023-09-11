import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {products.map((product, idx) => (
          <div key={idx} className="p-4">
            <div className="bg-white shadow-md rounded overflow-hidden">
              <div className="relative">
                <img
                  className="w-full h-48 object-cover"
                  src={product.img}
                  alt="Product"
                />
                <a
                  href={product.link}
                  className="absolute top-0 left-0 w-full h-full"
                ></a>
              </div>
              <div className="p-4">
                <div className="text-sm font-medium">
                  <a href={product.link} className="hover:text-blue-600">
                    {product.title}
                  </a>
                </div>
                {product.description && (
                  <h3 className="mt-2 text-base">
                    <a href={product.link} className="hover:text-blue-600">
                      {product.description}
                    </a>
                  </h3>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
