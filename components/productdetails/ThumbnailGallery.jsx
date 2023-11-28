// ThumbnailGallery.js

import React, { useState } from "react";
import Exhibition1 from "../../images/viewproducts/Exhi1 - Copy.png";
import Exhibition2 from "../../images/viewproducts/Exhi2 - Copy.png";
import Exhibition3 from "../../images/viewproducts/Exhi3 - Copy.png";
import Exhibition4 from "../../images/viewproducts/Exhi4 - Copy.png";
import Exhibition5 from "../../images/viewproducts/Exhi5 - Copy.png";
import Exhibition6 from "../../images/viewproducts/Exhi6 - Copy.png";

const ThumbnailGallery = () => {
  const [selectedImage, setSelectedImage] = useState(Exhibition1);

  // Replace image URLs with your actual image URLs
  const thumbnailImages = [
    Exhibition1,
    Exhibition2,
    Exhibition3,
    // Exhibition4,
    // Exhibition5,
    // Exhibition6,
    // Exhibition3,
    // Exhibition4,
    // Exhibition5,
    // Exhibition6,
    // Exhibition4,
    // Exhibition5,
    // Exhibition6,
  ];

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex align-top">
      <div className="flex flex-col items-center overflow-y-auto max-h-[500px] w-full h-full align-top">
        {thumbnailImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index}`}
            className={`mb-2 cursor-pointer w-16 h-16 transition-transform transform-gpu hover:scale-105 focus:scale-105 ${
              selectedImage === image ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => handleThumbnailClick(image)}
          />
        ))}
      </div>
      <div className="w-[2500px] h-[500px]">
        <img
          src={selectedImage}
          alt="Selected Image"
          className="mb-2 cursor-pointer w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ThumbnailGallery;
