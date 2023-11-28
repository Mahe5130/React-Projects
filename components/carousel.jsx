import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.css";
import ImageCarousel1 from "../images/Header Carousel/ImageCarousel1.png";
import ImageCarousel2 from "../images/Header Carousel/ImageCarousel2.png";
import ImageCarousel3 from "../images/Header Carousel/ImageCarousel3.png";
import ImageCarousel4 from "../images/Header Carousel/ImageCarousel4.png";

export function CarouselCustomNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalImages = 4;

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
      image: ImageCarousel1,
      text: "Luxury client gifting.",
      buttonText: "EXPLORE",
      buttonLink: "#button-link-1",
    },
    {
      image: ImageCarousel2,
      text: "Festival Gifting",
      buttonText: "EXPLORE",
      buttonLink: "#button-link-2",
    },
    {
      image: ImageCarousel3,
      text: "Food and Beverages",
      buttonText: "EXPLORE",
      buttonLink: "#button-link-3",
    },
    {
      image: ImageCarousel4,
      text: "Gadgets & Technology",
      buttonText: "EXPLORE",
      buttonLink: "#button-link-4",
    },
  ];

  return (
    <div
      className="carousel-container mx-auto max-w-7xl px-2 sm:px-6 lg:px-10 rounded-2xl mb-4"
      style={{ width: "100vw", height: "80vh" }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{ width: "100%", height: "100%" }}
      >
        <Carousel
          showThumbs={false}
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
                  className="rounded-2xl"
                />
                <div className="absolute top-[20%] left-[10%]">
                  <p className="text-white text-[35px] text-left">
                    {item.text}
                  </p>
                  <a href={item.buttonLink}>
                    <button className="py-[10px] px-[20px] font-[16px] rounded-lg bg-[#EAC696] hover:bg-[#65451F] text-black hover:text-white mt-[10px] transition-colors 0.3s">
                      {item.buttonText}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
