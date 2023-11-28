import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Infosys from "../images/Clients/Infosys.jpg";
import Infosysbpm from "../images/Clients/Infosys_bpm.jpg";
import Syngene from "../images/Clients/Syngene.jpg";
import Topaz from "../images/Clients/topaz.jpg";
import Edgeverve from "../images/Clients/Edgeverve.jpg";
import Hcltech from "../images/Clients/HCLTech.jpg";
import Microland from "../images/Clients/microland.jpg";

function ClientSection() {
  const cards = [
    {
      imageUrl: Infosys,
    },
    {
      imageUrl: Infosysbpm,
    },
    {
      imageUrl: Syngene,
    },
    {
      imageUrl: Topaz,
    },
    {
      imageUrl: Edgeverve,
    },
    {
      imageUrl: Hcltech,
    },
    {
      imageUrl: Microland,
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Set autoplay speed in milliseconds
  };

  const Card = ({ imageUrl }) => {
    return (
      <div className="w-[188px] p-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 mb-3">
        <div className="relative group">
          <div className="rounded-lg  overflow-hidden">
            <img
              src={imageUrl}
              alt=""
              className="w-auto h-auto block rounded-lg transition-transform duration-300 transform scale-100 grayscale hover:grayscale-0 group-hover:scale-105 cursor-pointer opacity-70 group-hover:opacity-100"
            />
          </div>
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

export default ClientSection;
