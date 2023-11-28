import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import News1 from "../images/Categories/News01.jpg";
import News2 from "../images/Categories/news02.jpg";

export function CarouselCustomNavigation1() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = 2;

  const autoAdvanceCarousel = () => {
    const nextIndex = (activeIndex + 1) % totalImages;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(autoAdvanceCarousel, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const carouselImages = [
    {
      image: News1,
    },
    {
      image: News2,
    },
  ];

  return (
    <div className="carousel-container mx-auto max-w-7xl px-2 sm:px-6 lg:px-10 mb-8">
      <div className="overflow-hidden border-[4px] border-[#65451F]">
        <Carousel
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          dynamicHeight={true}
          selectedItem={activeIndex}
          onChange={(index) => setActiveIndex(index)}
          emulateTouch={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          interval={5000} // Interval in milliseconds for automatic sliding
          showArrows={false}
        >
          {carouselImages.map((item, index) => (
            <div key={index}>
              <div className="relative">
                <img
                  src={item.image}
                  alt={`image ${index + 1}`}
                  className="object-cover color-[#65451F]"
                />
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
