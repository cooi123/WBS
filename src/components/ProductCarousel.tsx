import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    img: "./asserts/WroughIronDoor/prod-21-700x778.png",
    link: "wroughtIronDoor",
    title: "Wrought Iron Door",
  },
  {
    img: "./asserts/InteriorDoors.jpg",
    link: "InteriorDoors.html",
    title: "Interior Doors",
  },
  {
    img: "./asserts/architrave.jpg",
    link: "PreprimedArchitrave.html",
    title: "Preprimed Architrave",
  },
  {
    img: "./asserts/cabinet.jpg",
    link: "InteriorDoors.html",
    title: "Cabinets",
  },
];

export function ProductCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
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
              <div className="relative w-full max-w-sm mx-auto pb-[56.25%]">
                <img
                  className="absolute top-0 left-0 w-full h-full"
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
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
