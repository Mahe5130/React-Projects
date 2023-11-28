import React from "react";
import "./style.css";
import header1 from "../images/Header1/Headerimage1.png";
import header2 from "../images/Header1/Headerimage2.png";
import header3 from "../images/Header1/Headerimage3.png";
import header4 from "../images/Header1/Headerimage4.png";
import header5 from "../images/Header1/Headerimage5.png";
import header6 from "../images/Header1/Headerimage6.png";

const Card2 = ({ imageUrl, hoverText }) => (
  <div className="w-1/6 p-4 mx-auto max-w-7xl px-2 sm:px-6 lg:px-5">
    <div className="relative group">
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
        <img
          src={imageUrl}
          alt=""
          className="w-auto h-auto object-cover rounded-3xl cursor-pointer"
        />
      </div>
      <div className="top-0 left-0 w-full h-full flex items-center justify-center rounded-lg cursor-pointer">
        <div className="text-[#65451F] text-center">
          <p className="text-[14px] mt-1">{hoverText}</p>
        </div>
      </div>
    </div>
  </div>
);

const CardSection2 = () => {
  const cards = [
    {
      imageUrl: header1,
      hoverText: "Stationary",
    },
    {
      imageUrl: header3,
      hoverText: "Events & Exhibitions",
    },
    {
      imageUrl: header6,
      hoverText: "Festival And Celebration",
    },
    {
      imageUrl: header2,
      hoverText: "Food And Beverage",
    },
    {
      imageUrl: header5,
      hoverText: "Luxury Gifts",
    },
    {
      imageUrl: header4,
      hoverText: "Gift Boxes",
    },
  ];

  return (
    <div className="px-5">
      <div className="flex justify-center">
        {cards.map((card, index) => (
          <Card2
            key={index}
            imageUrl={card.imageUrl}
            hoverText={card.hoverText}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSection2;

<div className="mt-4">
  {setMyArray("1,2,3,4,5")}
  <Dropdown items={myArray} />
</div>;



className={`w-1/2 md:w-1/3 lg:w-1/6 px-0 mb-2 mt-2 relative  ${
  index === 0 ? "" : "border-[1px] border-[#65451F] h-[80px]"
}`}




//view products single
import React, { useState, useEffect } from "react";
import ".././style.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Navbar from "../Navbar";
import ViewTitle from "../seperatepages/viewtitle";
import Breadcrumbs from "../seperatepages/breadcrumbs";
import { FaPlus, FaStar } from "react-icons/fa6";
import { FooterWithSocialLinks } from "../footer";
import { Link } from "react-router-dom";
import Exhi1 from "../../images/viewproducts/Exhi1.png";
import Exhi2 from "../../images/viewproducts/Exhi2.png";
import Exhi3 from "../../images/viewproducts/Exhi3.png";
import Exhi4 from "../../images/viewproducts/Exhi4.png";
import Exhi5 from "../../images/viewproducts/Exhi5.png";
import Exhi6 from "../../images/viewproducts/Exhi6.png";
import Exhi7 from "../../images/viewproducts/Exhi7.png";
import Exhi8 from "../../images/viewproducts/Exhi8.png";
import Exhi9 from "../../images/viewproducts/Exhi9.png";
import Exhi10 from "../../images/viewproducts/Exhi10.png";
import card1 from "../../images/viewproducts/Exhi1 - Copy.png";
import card2 from "../../images/viewproducts/Exhi2 - Copy.png";
import card3 from "../../images/viewproducts/Exhi3 - Copy.png";
import card4 from "../../images/viewproducts/Exhi4 - Copy.png";
import card5 from "../../images/viewproducts/Exhi5 - Copy.png";
import card6 from "../../images/viewproducts/Exhi6 - Copy.png";
import card7 from "../../images/viewproducts/Exhi7 - Copy.png";
import card8 from "../../images/viewproducts/Exhi8 - Copy.png";
import card9 from "../../images/viewproducts/Exhi1 - Copy.png";
import card10 from "../../images/viewproducts/Exhi2 - Copy.png";
import card11 from "../../images/viewproducts/Exhi3 - Copy.png";
import card12 from "../../images/viewproducts/Exhi4 - Copy.png";
import card13 from "../../images/viewproducts/Exhi5 - Copy.png";
import card14 from "../../images/viewproducts/Exhi6 - Copy.png";
import card15 from "../../images/viewproducts/Exhi7 - Copy.png";
import card16 from "../../images/viewproducts/Exhi8 - Copy.png";
import sort_logo from "../../images/viewproducts/sort-by-img.svg";

function Viewproducts() {
  const filterCategories = ["ALL", "Card 1", "Card 2", "Card 3"];
  const initialDisplayedCards = 4;

  // State to manage selected filter
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [selectedSortCategory, setSelectedSortCategory] = useState("Default");
  const [displayedCards, setDisplayedCards] = useState(initialDisplayedCards);

  // Function to filter images based on category
  // const filteredImages = () => {
  //   if (selectedFilter === "ALL") {
  //     return cardData;
  //   } else if (selectedFilter === "Card 1") {
  //     return cardData.filter((item) => item.text.includes("Card 1"));
  //   } else if (selectedFilter === "Card 2") {
  //     return cardData.filter((item) => item.text.includes("Card 2"));
  //   } else if (selectedFilter === "Card 3") {
  //     return cardData.filter((item) => item.text.includes("Card 3"));
  //   }
  // };

  const circleImages = [
    { src: Exhi1, text: "ALL EXHIBITONS" },
    { src: Exhi2, text: "EXHIBITONS 1" },
    { src: Exhi3, text: "EVENTS 1" },
    { src: Exhi4, text: "EXHIBITONS 2" },
    { src: Exhi5, text: "EVENTS 2" },
    { src: Exhi6, text: "EXHIBITONS 3" },
    { src: Exhi7, text: "EVENTS 3" },
    { src: Exhi8, text: "EXHIBITONS 4" },
    { src: Exhi9, text: "EVENTS 4" },
    { src: Exhi10, text: "EXHIBITONS 5" },
  ];

  const cardData = [
    {
      src: card1,
      text: "Card 1",
      price: "$10",
      rating: "4.8",
      left: "(187)",
      disprice: "$30",
    },
    {
      src: card2,
      text: "Card 1",
      price: "$20",
      rating: "4.7",
      left: "(173)",
      disprice: "$40",
    },
    {
      src: card3,
      text: "Card 2",
      price: "$30",
      rating: "5.0",
      left: "(17)",
      disprice: "$60",
    },
    {
      src: card4,
      text: "Card 2",
      price: "$40",
      rating: "4.6",
      left: "(180)",
      disprice: "$80",
    },
    {
      src: card5,
      text: "Card 3",
      price: "$50",
      rating: "4.7",
      left: "(1844)",
      disprice: "$90",
    },
    {
      src: card6,
      text: "Card 3",
      price: "$60",
      rating: "4.8",
      left: "(182)",
      disprice: "$100",
    },
    {
      src: card7,
      text: "Card 2",
      price: "$70",
      rating: "4.9",
      left: "(137)",
      disprice: "$120",
    },
    {
      src: card8,
      text: "Card 3",
      price: "$80",
      rating: "4.8",
      left: "(127)",
      disprice: "$140",
    },
    {
      src: card9,
      text: "Card 1",
      price: "$10",
      rating: "4.8",
      left: "(187)",
      disprice: "$30",
    },
    {
      src: card10,
      text: "Card 1",
      price: "$20",
      rating: "4.7",
      left: "(173)",
      disprice: "$40",
    },
    {
      src: card11,
      text: "Card 2",
      price: "$30",
      rating: "5.0",
      left: "(17)",
      disprice: "$60",
    },
    {
      src: card12,
      text: "Card 2",
      price: "$40",
      rating: "4.6",
      left: "(180)",
      disprice: "$80",
    },
    {
      src: card13,
      text: "Card 3",
      price: "$50",
      rating: "4.7",
      left: "(1844)",
      disprice: "$90",
    },
    {
      src: card14,
      text: "Card 3",
      price: "$60",
      rating: "4.8",
      left: "(182)",
      disprice: "$100",
    },
    {
      src: card15,
      text: "Card 2",
      price: "$70",
      rating: "4.9",
      left: "(137)",
      disprice: "$120",
    },
    {
      src: card16,
      text: "Card 3",
      price: "$80",
      rating: "4.8",
      left: "(127)",
      disprice: "$140",
    },
  ];

  // Function to filter and sort images based on category
  const filteredImages = () => {
    let filteredData = [...cardData];

    if (selectedFilter !== "ALL") {
      filteredData = filteredData.filter((item) =>
        item.text.includes(selectedFilter)
      );
    }

    if (selectedSortCategory === "Default") {
      return filteredData.slice(0, displayedCards);
    }

    return filteredData.slice(0, displayedCards).sort((a, b) => {
      const priceA = parseFloat(a.price.replace("$", ""));
      const priceB = parseFloat(b.price.replace("$", ""));

      if (selectedSortCategory === "LowToHigh") {
        return priceA - priceB;
      } else if (selectedSortCategory === "HighToLow") {
        return priceB - priceA;
      }

      return 0;
    });
  };

  const handleLoadMore = () => {
    setLoading(true);

    // Simulate an asynchronous action (e.g., data fetching) using setTimeout
    setTimeout(() => {
      // Increase the number of displayed cards
      setDisplayedCards(displayedCards + initialDisplayedCards);

      // Set loading to false when data is loaded
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  };

  const [loading, setLoading] = useState(true);

  const handleQuickFilter = (category) => {
    // Set loading to true when a quick filter button is clicked
    setLoading(true);

    setTimeout(() => {
      setSelectedFilter(category);
      // Set loading to false when data is loaded
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  };

  useEffect(() => {
    // Simulating an asynchronous action (e.g., image loading)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed

    // Clear the timeout on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
      <Breadcrumbs />
      <ViewTitle />
      <div className="flex justify-end -mt-12 mr-12">
        <select
          value={selectedSortCategory}
          onChange={(e) => setSelectedSortCategory(e.target.value)}
          className="text-sm border p-2 rounded-lg bg-[#f6f6f6] text-gray-500"
        >
          <option value="Default">Default</option>
          <option value="LowToHigh">Price: Low to High</option>
          <option value="HighToLow">Price: High to Low</option>
        </select>
      </div>
      <div className="w-full bg-white mx-auto sm:px-6 lg:px-14 p-4 mt-2">
        {/* Top section with circle images and text */}
        <div className="flex justify-around">
          {circleImages.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={item.src}
                alt={item.text}
                className="rounded-full w-20 h-20 object-cover transition-transform duration-300 transform scale-100 hover:scale-110 cursor-pointer"
              />
              <p className="mt-2 text-[12px]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <p className="mt-2 text-[14px]">Quick Filters :</p>
          {/* Filter buttons */}
          {filterCategories.map((category, index) => (
            <button
              key={index}
              className={`text-sm font-medium border p-2 rounded-full bg-[#f6f6f6] ${
                selectedFilter === category
                  ? "text-gray-500 underline"
                  : "text-gray-500"
              }`}
              onClick={() => handleQuickFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Bottom section with cards */}
        <Link to="/ProductDetailsPage">
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
            {loading
              ? // Loading Skeleton
                Array.from({ length: displayedCards }).map((_, index) => (
                  <div key={index} className="skeleton-card">
                    <Skeleton height={300} />
                    <Skeleton
                      height={20}
                      width={80}
                      style={{ marginTop: 10 }}
                    />
                  </div>
                ))
              : filteredImages().map((item, index) => (
                  <div
                    key={index}
                    className="relative bg-white border-[1px] border-[#ccc] rounded-xl "
                  >
                    <img
                      src={item.src}
                      alt={item.text}
                      loading="lazy"
                      className="w-full h-[300px] object-cover rounded-t-xl"
                    />

                    <FaPlus className="absolute top-1 right-1 p-2 text-[#AFAFAF] rounded-bl-lg  rounded-tr-lg bg-white shadow-lg text-4xl block" />
                    <p className="text-gray-600 p-4">{item.text}</p>
                    <div className="flex items-center">
                      <p className="text-lg text-black p-4 -mt-5">
                        {item.price}
                      </p>
                      <span className="text-lg text-gray-600 line-through -mt-5">
                        {item.disprice}
                      </span>
                    </div>

                    <div className="flex items-center p-4">
                      <span className="text-gray-600 text-[14px] -mt-5">
                        {item.rating}
                      </span>
                      <FaStar className="text-[#fdb913] ml-1 w-3 h-3 -mt-5" />
                      <span className="text-gray-600 ml-2 text-[14px] -mt-5">
                        {item.left}
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </Link>

        {/* Load More Button */}
        {displayedCards < cardData.length && (
          <div className="flex justify-center mt-4">
            <button
              className="text-sm font-medium border p-2 rounded-full bg-[#f6f6f6] text-gray-500"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}

export default Viewproducts;

//End