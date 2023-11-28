import React from "react";
import "./style.css";
import Newsletter from "../images/Categories/Desktop_Newsletter.jpg";

const EmailSection = () => {
  return (
    <div
      className="relative bg-cover bg-center flex items-center justify-end bg-[#45485e] mb-8"
      style={{ backgroundImage: `url(${Newsletter})`, height: `130px` }}
    >
      <div className="bg-white p-8 rounded-lg bg-transparent">
        <div className="flex items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 rounded mr-2"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailSection;
