import React, { useState } from "react";
import "./style.css";

import Beverage from "../images/Featured/Beverage.png";
import Festival from "../images/Featured/Festival.png";
import Luxury from "../images/Featured/Luxury.png";
import Box from "../images/Featured/Boxes1.png";
import Bag from "../images/Featured/Bags1.png";
import Clothing from "../images/Featured/Clothing.png";
import Gadgets from "../images/Featured/Gadgets.png";
import featured5 from "../images/Featured/featured5.jpg";
import featured23 from "../images/Featured/featured2.3.png";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

function FeaturedSection1() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

  const handleMouseEnter4 = () => {
    setIsHovered4(true);
  };

  const handleMouseLeave4 = () => {
    setIsHovered4(false);
  };

  const handleMouseEnter5 = () => {
    setIsHovered5(true);
  };

  const handleMouseLeave5 = () => {
    setIsHovered5(false);
  };

  const handleMouseEnter6 = () => {
    setIsHovered6(true);
  };

  const handleMouseLeave6 = () => {
    setIsHovered6(false);
  };

  const handleMouseEnter7 = () => {
    setIsHovered7(true);
  };

  const handleMouseLeave7 = () => {
    setIsHovered7(false);
  };

  const handleMouseEnter8 = () => {
    setIsHovered8(true);
  };

  const handleMouseLeave8 = () => {
    setIsHovered8(false);
  };

  return (
    <div className="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mb-8">
      <div className="md:w-full md:px-4">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
          <div className="grid gap-4">
            <div className="relative group">
              <Link to="/viewproducts">
                <div
                  className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    className="h-auto w-full block transition duration-300 transform group-hover:scale-110 rounded-lg"
                    src={featured23}
                    alt=""
                  />

                  <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px] py-2 inline-block">
                    EVENTS & EXHIBITIONS
                    {isHovered && (
                      <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                    )}
                  </p>
                </div>
              </Link>
            </div>
            <div className="relative group">
              <div
                className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <img
                  className="h-auto w-full block transition duration-300 transform group-hover:scale-110 rounded-lg"
                  src={Festival}
                  alt=""
                />
                <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px] py-2">
                  FESTIVAL & CELEBRATION
                  {isHovered1 && (
                    <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                  )}
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <img
                  className="h-auto w-full block transition duration-300 transform group-hover:scale-110 rounded-lg"
                  src={Gadgets}
                  alt=""
                />
                <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px] py-2">
                  GADGETS & TECHNOLOGY
                  {isHovered2 && (
                    <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative group">
              <div
                className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <img
                  className="h-auto w-full block transition duration-300 transform group-hover:scale-110 rounded-lg"
                  src={featured5}
                  alt=""
                />
                <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px] py-2">
                  STATIONARY
                  {isHovered3 && (
                    <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                  )}
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg h-[380px]"
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                <img
                  className="h-full w-full block transition duration-300 transform group-hover:scale-110 rounded-lg object-cover"
                  src={Box}
                  alt=""
                />
                <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px] py-2">
                  GIFT BOXES
                  {isHovered4 && (
                    <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                  )}
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
              >
                <img
                  className="h-auto w-full block transition duration-300 transform group-hover:scale-110 rounded-lg"
                  src={Clothing}
                  alt=""
                />
                <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px] py-2">
                  CLOTHING & APPARELS
                  {isHovered5 && (
                    <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="relative group">
              <div
                className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter6}
                onMouseLeave={handleMouseLeave6}
              >
                <img
                  className="h-auto w-full block transition duration-300 transform group-hover:scale-110 rounded-lg"
                  src={Beverage}
                  alt=""
                />
                <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px]  py-2">
                  FOOD & BEVERAGES
                  {isHovered6 && (
                    <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                  )}
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter7}
                onMouseLeave={handleMouseLeave7}
              >
                <img
                  className="h-auto w-full block transition duration-300 transform group-hover:scale-110 rounded-lg"
                  src={Luxury}
                  alt=""
                />
                <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px] py-2">
                  LUXURY GIFTS
                  {isHovered7 && (
                    <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                  )}
                </p>
              </div>
            </div>
            <div className="relative group">
              <div
                className="flex flex-row items-end p-0 bg-white overflow-hidden rounded-lg"
                onMouseEnter={handleMouseEnter8}
                onMouseLeave={handleMouseLeave8}
              >
                <img
                  className="h-auto w-full block transition duration-300 transform group-hover:scale-110 rounded-lg"
                  src={Bag}
                  alt=""
                />
                <p className="absolute bg-black bg-opacity-80 left-0 w-full text-bold text-center text-white text-[16px] py-2">
                  BAGS & BACKPACKS
                  {isHovered8 && (
                    <BsArrowRightCircle className="text-lg inline-block ml-2 mb-1" />
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection1;
