"use client";

import React, { useState } from "react";
import { Image as MedusaImage } from "@medusajs/medusa";
import { Container } from "@medusajs/ui";
import Image from "next/image";

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageDetails: React.FC<ImageGalleryProps> = ({ images }) => {
  const [imageList, setImageList] = useState(images);

  const handleImageClick = (index: number) => {
    if (index !== 0) {
      const newImageList = [...imageList];
      const clickedImage = newImageList.splice(index, 1)[0];
      newImageList.unshift(clickedImage);
      setImageList(newImageList);
    }
  };


  return (
    <div className="flex flex-col items-start relative">
      <div className="w-full mb-4 ">
      <Image
          src={imageList[0].url}
          alt={`Product image 1`}
          layout="responsive"
          width={445} 
          height={345} 
          className="w-full rounded"
          id={imageList[0].id}
          onClick={() => handleImageClick(0)}
        />
      </div>
      
      <div className="flex flex-row flex-wrap mt-4 gap-2">
        {imageList.slice(1, 4).map((image, index) => (
          <Container
            key={image.id}
            className="relative aspect-[29/34] w-[30%] overflow-hidden"
            id={image.id}
            onClick={() => handleImageClick(index + 1)}
          >
            <Image
              src={image.url}
              priority={false}
              className="absolute inset-0 object-cover"
              alt={`Product image ${index + 2}`}
              fill
              sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 445px"
            />
          </Container>
        ))}
      </div>
    </div>
  );
};

export default ImageDetails;