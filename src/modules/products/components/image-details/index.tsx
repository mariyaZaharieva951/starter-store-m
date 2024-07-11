"use client"
import React, { useState } from "react";
import { Image as MedusaImage } from "@medusajs/medusa";
import { Container } from "@medusajs/ui";
import Image from "next/image";

type ImageGalleryProps = {
  images: MedusaImage[]
}

const ImageDetails = ({ images }: ImageGalleryProps) => {
  
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
      <div className="relative w-full overflow-hidden flex-col">
        <Container
          key={imageList[0].id}
          className="relative w-full aspect-[29/34] overflow-hidden py-0"
          id={imageList[0].id}
          onClick={() => handleImageClick(0)}
        >
          <Image
            src={imageList[0].url}
            priority={true}
            className="absolute inset-0"
            alt={`Product image 1`}
            fill
            sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 445px"
            style={{
              objectFit: "cover",
            }}
          />
        </Container>
      </div>
      <div className="flex flex-row flex-wrap mt-4 gap-2">
        {imageList.slice(1, 4).map((image, index) => (
          <Container
            key={image.id}
            className={`relative aspect-[29/34] w-[30%] overflow-hidden `}
            id={image.id}
            onClick={() => handleImageClick(index + 1)}
          >
            <Image
              src={image.url}
              priority={false}
              className="absolute inset-0 "
              alt={`Product image ${index + 2}`}
              fill
              sizes="(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 445px"
              style={{
                objectFit: "cover",
              }}
            />
          </Container>
        ))}
      </div>
    </div>
  );
}

export default ImageDetails;