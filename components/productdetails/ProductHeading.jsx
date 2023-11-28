import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductHeading = () => {
  // Assuming your rating is out of 5
  const rating = 4.5; // Replace this with the actual rating

  // State for the quantity input
  const [quantity, setQuantity] = useState(1);

  // Generate an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      color={index + 1 <= rating ? "#FFD700" : "#C4C4C4"}
      className="text-[12px]"
    />
  ));

  return (
    <div className="mb-4">
      <h2 className="text-3xl font-semibold">Product Name</h2>
      <p className="text-gray-600">Product Description</p>
      <div className="flex items-center mb-2">
        {stars}
        <span className="ml-2 text-gray-600">{rating}</span>
      </div>
      <hr />
      <div className="flex items-center mb-2">
        <p className="text-black mt-2 mb-2 mr-2">Price :</p>
        <p className="text-black mt-2 mb-2">${20}</p>
      </div>
      <div className="flex items-center mb-2">
        <label className="mr-2">Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          min={1}
          className="border p-1 mr-2 rounded-lg"
        />
        {/* <Link to="/ProductCheckoutpage"> */}
        <button className="py-[5px] px-[20px] font-[16px] rounded-lg bg-[#65451F] hover:bg-[#937c62] text-white hover:text-white transition-colors 0.3s">
          Add to Cart
        </button>
        {/* </Link> */}
      </div>
      <hr />
    </div>
  );
};

export default ProductHeading;
