import React, { useEffect } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Events from "../images/Categories/Events.png";
import Exhibition from "../images/Categories/Exhibition.png";
import Festival from "../images/Categories/Festival.png";
import Sports from "../images/Categories/Sports.png";
import Gift from "../images/Categories/Gift.png";
import { Link } from "react-router-dom";

const CategorySection3 = () => {
  useEffect(() => {
    AOS.init({ duration: "2000", delay: "500" });
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="p-2 grid grid-cols-1 md:grid-cols-1 gap-4 mb-3">
        {/* First Row */}
        <div
          className="flex flex-row items-center bg-gray-100 rounded-lg shadow-lg border-[1px] border-[#cbd5e1]"
          data-aos="fade-up-right"
        >
          <div className="w-full">
            <img
              src={Events}
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full pl-8">
            <p className="text-center text-[#65451F] text-[25px] mb-6">
              Events
            </p>
            <span className="text-center leading-8 list-none text-[#765827]">
              Get all the unique and Memorable Gifting Ideas for your events
              with our event gifting solutions. Be it a client event, company
              offsite, formal gatherings, or personal celebrations, making the
              right gifts for the guests can make an incredible impact.
            </span>
            <button className="block mx-auto my-4 py-[10px] px-[20px] font-[16px] rounded-lg bg-[#65451F] hover:bg-[#937c62] text-white hover:text-white transition-colors 0.3s">
              View More
            </button>
          </div>
        </div>

        <div
          className="flex flex-row items-center bg-gray-100 rounded-lg shadow-lg border-[1px] border-[#cbd5e1]"
          data-aos="fade-up-left"
        >
          <div className="w-full pl-2">
            <p className="text-center text-[#65451F] text-[25px] mb-6">
              Exhibitions
            </p>
            <span className="text-center pr-8 leading-8 list-none text-[#765827]">
              With some unique gifting ideas you can create a unique display and
              experience at your tradeshow booth. We offer successful tradeshow
              gifting solutions to create excitement among the attendees.
            </span>
            <button className="block mx-auto my-4 py-[10px] px-[20px] font-[16px] rounded-lg bg-[#65451F] hover:bg-[#937c62] text-white hover:text-white transition-colors 0.3s">
              View More
            </button>
          </div>
          <div className="w-full">
            <img
              src={Exhibition}
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div
          className="flex flex-row items-center bg-gray-100 rounded-lg shadow-lg border-[1px] border-[#cbd5e1]"
          data-aos="fade-up-right"
        >
          <div className="w-full">
            <img
              src={Festival}
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full pl-8">
            <p className="text-center text-[#65451F] text-[25px] mb-6">
              Festivals & Celebrations
            </p>
            <span className="text-center leading-8 list-none text-[#765827]">
              Explore the vast range of holiday gifting ideas and gift your
              loved ones with an amazing gift. This season let's gift something
              that is close to perfection.
            </span>
            <button className="block mx-auto my-4 py-[10px] px-[20px] font-[16px] rounded-lg bg-[#65451F] hover:bg-[#937c62] text-white hover:text-white transition-colors 0.3s">
              View More
            </button>
          </div>
        </div>

        <div
          className="flex flex-row items-center bg-gray-100 rounded-lg shadow-lg border-[1px] border-[#cbd5e1]"
          data-aos="fade-up-left"
        >
          <div className="w-full pl-2">
            <p className="text-center text-[#65451F] text-[25px] mb-6">
              Sports & Games
            </p>
            <span className="text-center pr-8 leading-8 list-none text-[#765827]">
              For sports or games-related gifts, explore the wide range of
              products.
            </span>
            <button className="block mx-auto my-4 py-[10px] px-[20px] font-[16px] rounded-lg bg-[#65451F] hover:bg-[#937c62] text-white hover:text-white transition-colors 0.3s">
              View More
            </button>
          </div>
          <div className="w-full">
            <img
              src={Sports}
              alt="Image 2"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        <div
          className="flex flex-row items-center bg-gray-100 rounded-lg shadow-lg border-[1px] border-[#cbd5e1]"
          data-aos="fade-up-right"
        >
          <div className="w-full">
            <img
              src={Gift}
              alt="Image 1"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          <div className="w-full pl-8">
            <p className="text-center text-[#65451F] text-[25px] mb-6">
              Gift Boxes
            </p>
            <span className="text-center leading-8 list-none text-[#765827]">
              For every occasion, there is a special gift. If you are also
              thinking of getting a personalized gift box that suits your needs
              and matches the occasion, browse this range.
            </span>
            <button className="block mx-auto my-4 py-[10px] px-[20px] font-[16px] rounded-lg bg-[#65451F] hover:bg-[#937c62] text-white hover:text-white transition-colors 0.3s">
              View More
            </button>
          </div>
        </div>
        <Link to="/productfilterpage">
          <button className="block mx-auto my-4 py-[10px] px-[20px] font-[16px] rounded-lg bg-[#65451F] hover:bg-[#937c62] text-white hover:text-white transition-colors 0.3s">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CategorySection3;
