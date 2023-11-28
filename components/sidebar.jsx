import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./style.css";

const socialIcons = [
  { name: "", icon: <FaFacebookF />, link: "" },
  { name: "", icon: <FaTwitter />, link: "" },
  { name: "", icon: <FaLinkedin />, link: "" },
  // Add more social icons as needed
];

const SocialSidebar = () => {
  return (
    <div className="fixed left-0 top-1/2 transform -translate-y-1/2 p-1">
      {socialIcons.map((icon, index) => (
        <a
          key={index}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-lg block rounded-full"
        >
          <span className="inline-block rounded-full bg-[#C8AE7D] p-2 transition-transform duration-300 transform scale-100 hover:scale-110 cursor-pointer">
            {icon.icon} {/* Directly render the icon component */}
          </span>
          {icon.name}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
