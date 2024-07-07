"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@medusajs/ui"
import pr from '/public/assets/pr.png';
import pr1 from '/public/assets/pr1.png';
import pr2 from '/public/assets/pr2.png';
import pr3 from '/public/assets/pr3.png';
import pr4 from '/public/assets/pr4.png';
import pr5 from '/public/assets/pr5.png';
import pr6 from '/public/assets/pr6.png';
import pr7 from '/public/assets/pr7.png';
import star from '/public/assets/star.svg';
import love from '/public/assets/love.svg';

const Products = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = () => {
    hoveredProductId(true);
  };

  const handleMouseLeave = () => {
    hoveredProductId(false);
  };

  const products = [
    {
      id: 1,
      onSale: false,
      inFavorites: false,
      fashion: "Men fashion",
      title: "Samsung Galaxy Watch 3",
      price: "1,725.00",
      likes: 5,
      src: pr,
    },
    ,
  {
    id: 2,
    onSale: false,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Apple Watch 4 2020",
    price: "$1,725.00",
    likes: 5,
    src: pr1,
  },
  {
    id: 3,
    onSale: true,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "iPhone XS Max Pro",
    price: "$1,725.00",
    likes: 5,
    src: pr2,
  },
  {
    id: 4,
    onSale: false,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Beats by Dre C 3450",
    price: "$1,725.00",
    likes: 5,
    src: pr3,
  },
  {
    id: 5,
    onSale: false,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Airpods 2nd Gen",
    price: "$1,725.00",
    likes: 5,
    src: pr4,
  },
  {
    id: 6,
    onSale: true,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Garmin Watch Fit X",
    price: "$1,725.00",
    likes: 5,
    src: pr5,
  },
  {
    id: 7,
    onSale: false,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Women Yellow Turtleneck",
    price: "$1,725.00",
    likes: 5,
    src: pr6,
  },
  {
    id: 8,
    onSale: true,
    inFavorites: false,
    fashion: "Men Fashion",
    title: "Harman Kardon Speaker",
    price: "$1,725.00",
    likes: 5,
    src: pr7,
  },
    
  ];

  return (
    <div className="boxSmall flex flex-col mt-10 py-7 border-t-2 border-grayBr">
      <div className="flex flex-col my-10">
      <h2 className="lg:text-4xl text-2xl font-bold text-rubik text-center ">
        Best Seller Products
      </h2>
      <p className="text-gray lg:text-base text-center mt-3">
        Check our best seller products on Elma website right now
      </p>
      </div>
      <div
        className="flex lg:justify-between lg:flex-wrap flex-col lg:flex-row items-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex w-[255px] h-[380px] flex-col relative items-center duration-300 hover:shadow-lg rounded-lg p-7"
            onMouseEnter={() => setHoveredProductId(product.id)}
            onMouseLeave={() => setHoveredProductId(null)}
          >
            <div className="flex w-full justify-between items-center">
              <p className="text-xs text-redText bg-redText bg-opacity-10 p-1 rounded font-bold">SALE</p>
              <Image alt="love" width={36} height={26} className="w-[36px] h-[36px]" src={love}/>
            </div>
            <Image
              src={product.src}
              alt={product.title}
              width={170}
              height={180}
              className="object-contain max-w-full h-[180px] mb-4"
            />
            <div className="w-[215px] h-[77px] flex flex-col">
              <p className="text-gray text-xs">{product.fashion}</p>
              <h3 className="text-base font-bold py-1">{product.title}</h3>
              <div className="flex justify-between text-sm text-violetLight">
                <p>{product.price}</p>
                <div className="flex gap-1">
          {Array.from({ length: product.likes }).map((_, index) => (
            <Image alt="star" width={16} height={16} key={index} src={star} className="text-yellowStar w-[16px] h-[16px]" />
          ))}
        </div>
              </div>
              {hoveredProductId === product.id && (
                <div className="absolute left-0 right-0 bottom-0 bg-white flex flex-col items-center gap-1 -mb-[60px] z-10 transition-opacity pb-2 rounded-md">
                  <Button className="w-[215px] h-[40px] custom-button bg-violetLight text-white">
                    Add to Cart
                  </Button>
                  <Button className="w-[215px] h-[40px] custom-button text-gray border border-gray bg-white">
                    Quick View
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
