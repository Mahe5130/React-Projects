import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./style.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 200;

      setIsVisible(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-4 right-1 p-2 bg-[#C8AE7D] text-white rounded-full cursor-pointer ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      onClick={scrollToTop}
    >
      <FaArrowUp size={24} />
    </div>
  );
};

export default ScrollToTopButton;
