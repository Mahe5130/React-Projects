import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import Breadcrumbs from "../breadcrumbs1";
import { FooterWithSocialLinks } from "../footer";
import { FaPlus, FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";
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

const productData = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    category: "Client Gifting",
    src: card1,
  },
  {
    id: 2,
    name: "Product 2",
    price: 30,
    category: "Corporate Gifting",
    src: card2,
  },
  {
    id: 3,
    name: "Product 3",
    price: 25,
    category: "Client Gifting",
    src: card3,
  },
  {
    id: 4,
    name: "Product 4",
    price: 20,
    category: "Corporate Gifting",
    src: card4,
  },
  {
    id: 5,
    name: "Product 5",
    price: 30,
    category: "Employee Gifting",
    src: card5,
  },
  {
    id: 6,
    name: "Product 6",
    price: 25,
    category: "Employee Gifting",
    src: card6,
  },
  {
    id: 7,
    name: "Product 7",
    price: 40,
    category: "Holiday Gifting",
    src: card7,
  },
  {
    id: 8,
    name: "Product 8",
    price: 45,
    category: "Tech & Gadgets",
    src: card8,
  },
  { id: 9, name: "Product 9", price: 50, category: "Accessories", src: card9 },
  {
    id: 10,
    name: "Product 10",
    price: 23,
    category: "Bags & Backpacks",
    src: card10,
  },
  {
    id: 11,
    name: "Product 11",
    price: 32,
    category: "Bottles & Mugs",
    src: card11,
  },
  {
    id: 12,
    name: "Product 12",
    price: 35,
    category: "Food & Drinks",
    src: card12,
  },
  {
    id: 13,
    name: "Product 13",
    price: 28,
    category: "Headphones & Speakers",
    src: card13,
  },
  {
    id: 14,
    name: "Product 14",
    price: 30,
    category: "Medals, Trophies & Awards",
    src: card14,
  },
  {
    id: 15,
    name: "Product 15",
    price: 35,
    category: "Office Supplies",
    src: card15,
  },
  {
    id: 16,
    name: "Product 16",
    price: 40,
    category: "Sports",
    src: card16,
  },

  // Add more product data as needed
];

function ProductFilter() {
  const initialDisplayedCards = 6;
  const cardsIncrement = 3;

  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [displayedCards, setDisplayedCards] = useState(initialDisplayedCards);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      // If the product is already in the cart, update its quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );

      setCartItems(updatedCart);
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    // Filter products based on selected categories and price range
    const filtered = productData.filter(
      (product) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(product.category)) &&
        product.price >= priceRange.min &&
        product.price <= priceRange.max
    );

    setFilteredProducts(filtered);
  }, [selectedCategories, priceRange]);

  const handleCategoryChange = (category) => {
    // Update selected categories
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((c) => c !== category)
        : [...prevCategories, category]
    );
  };

  const handlePriceChange = (e) => {
    const newMinValue = parseFloat(e.target.value);
    const newMaxValue = priceRange.max;

    setPriceRange({
      min: newMinValue,
      max: newMinValue >= newMaxValue ? newMinValue : newMaxValue,
    });
  };

  const handleLoadMore = () => {
    // Increase the number of displayed cards
    setDisplayedCards(
      (prevDisplayedCards) => prevDisplayedCards + cardsIncrement
    );
  };

  return (
    <div>
      <Navbar />
      <Breadcrumbs level1="Product Fliter" level1Path="/productfilterpage" />

      <div className="flex">
        {/* Left side - Filter options */}
        <div className="w-1/3 p-4 h-screen overflow-y-auto">
          <h2 className="text-[22px] text-[#65451F] font-semibold mb-4 border-b border-black w-[140px]">
            Filter Options
          </h2>

          {/*Popular Category Filter */}
          <div className="text-sm  mb-4">
            <h3 className="text-lg text-[#765827] font-semibold mb-2">
              Popular Categories
            </h3>
            {[
              "Client Gifting",
              "Corporate Gifting",
              "Employee Gifting",
              "Holiday Gifting",
            ].map((category) => (
              <div key={category} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>

          {/*General Category Filter */}
          <div className="text-sm  mb-4">
            <h3 className="text-lg text-[#765827] font-semibold mb-2">
              General Categories
            </h3>
            {[
              "Accessories",
              "Bags & Backpacks",
              "Bottles & Mugs",
              "Food & Drinks",
              "Headphones & Speakers",
              "Medals, Trophies & Awards",
              "Office Supplies",
              "Sports",
              "Tech & Gadgets",
            ].map((category) => (
              <div key={category} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={category}
                  checked={selectedCategories.includes(category)}
                  onChange={() => handleCategoryChange(category)}
                  className="mr-2"
                />
                <label htmlFor={category}>{category}</label>
              </div>
            ))}
          </div>
          {/* Price Filter */}
          <div>
            <h3 className="text-lg text-[#765827] font-semibold mb-2">
              Price Range
            </h3>
            <div className="flex items-center">
              <input
                type="range"
                min="20"
                max="50"
                value={priceRange.min}
                onChange={handlePriceChange}
                className="w-[160px]"
                name="min"
              />
            </div>
            <p className="text-sm text-left">
              ${priceRange.min}{" "}
              {priceRange.min !== priceRange.max && `- $${priceRange.max}`}
            </p>
          </div>
        </div>

        {/* Right side - Product cards */}
        <div className="">
          {/* Display selected categories at the top */}
          {selectedCategories.length > 0 && (
            <div className="text-lg font-bold ml-4">
              {selectedCategories.join(", ")}
            </div>
          )}

          <div className="w-3/3 mt-2 grid grid-cols-1 md:grid-cols-3 gap-2">
            {filteredProducts.slice(0, displayedCards).map((product) => (
              <div
                className="relative group"
                key={product.id}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="p-4">
                  <div className="border rounded-xl shadow-lg overflow-hidden transition duration-300 transform group-hover:scale-105">
                    <img
                      src={product.src}
                      alt={product.name}
                      className="w-full h-[300px] object-cover rounded-t-xl"
                    />
                    <Link to="/ProductDetailsPage">
                      <FaPlus className="absolute top-1 right-1 p-2 text-[#AFAFAF] rounded-bl-lg  rounded-tr-lg bg-white shadow-lg text-4xl block" />
                    </Link>
                    <p className="text-gray-600 p-4">{product.name}</p>
                    <div className="flex items-center">
                      <p className="text-lg text-black p-4 -mt-5">
                        ${product.price}
                      </p>
                    </div>
                    <p className="text-lg text-gray-600 p-4 -mt-5">
                      {/* {product.category} */}
                    </p>
                    {hoveredCard === product.id && (
                      <button
                        className="absolute mx-auto bottom-7 left-0 right-0 bg-[#765827] text-white p-2 text-center rounded-xl mb-2 mr-5"
                        onClick={() => handleAddToCart(product)}
                      >
                        Add to Catalogue
                      </button>
                    )}
                    {/* <p className="text-sm font-semibold">{product.name}</p>
                <p className="text-xs text-gray-500 mb-2">{product.category}</p>
                <p className="text-sm">${product.price}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {displayedCards < filteredProducts.length && (
            <div className="text-center mt-4">
              <button
                onClick={handleLoadMore}
                className="mx-auto py-[10px] px-[20px] font-[16px] rounded-lg bg-[#765827] hover:bg-[#65451F] text-white hover:text-white transition-colors 0.3s"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
}

export default ProductFilter;
