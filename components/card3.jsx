import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import header1 from "../images/Header3/1.png";
import header2 from "../images/Header3/2.png";
import header3 from "../images/Header3/3.png";
import header4 from "../images/Header3/4.png";
import header5 from "../images/Header3/5.png";
import header6 from "../images/Header3/6.png";
import header7 from "../images/Header3/7.png";
import header8 from "../images/Header3/8.png";
import header9 from "../images/Header3/9.png";
import header10 from "../images/Header3/10.png";
import header11 from "../images/Header3/11.png";

function CardSection3() {
  const cards = [
    {
      imageUrl: header1,
    },
    {
      imageUrl: header2,
    },
    {
      imageUrl: header3,
    },
    {
      imageUrl: header4,
    },
    {
      imageUrl: header5,
    },
    {
      imageUrl: header6,
    },
    {
      imageUrl: header7,
    },
    {
      imageUrl: header8,
    },
    {
      imageUrl: header9,
    },
    {
      imageUrl: header10,
    },
    {
      imageUrl: header11,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
  };

  const Card = ({ imageUrl }) => {
    return (
      <div className=" p-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-5">
        <div className="bg-white rounded-lg shadow-lg">
          <img
            src={imageUrl}
            alt=""
            className="w-auto h-auto object-cover rounded-lg transition-transform duration-300 transform scale-100 hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="px-5">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Card key={index} imageUrl={card.imageUrl} />
        ))}
      </Slider>
    </div>
  );
}

export default CardSection3;
