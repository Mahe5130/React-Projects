import React, { useState } from "react";
import DropdownItem from "./DropdownItem";
import { HiOutlineCog } from "react-icons/hi";
import { AiFillCaretLeft, AiOutlineThunderbolt } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";
import "./DropdownMenu.css";

const DropdownMenu = () => {
  // state for csstransition
  const [active, setActive] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  {
    /*we use this function as a callback in CSSTransition onEnter prop which runs this callback when it is 
mounted to DOM
*/
  }
  function calcHeight(el) {
    // el.offsetHeight is height in pixels of that component. we use this in dropdown menu style height to set height
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);
  }

  return (
    <div className="dropdown">
      {/* 
There are two dropdown containers for csstransitions component main and secondary.
we always go back to main conyainer and we use secondary as name for more container because we can style easy    
    */}
      <CSSTransition
        // if in is true then this CSSTransition component renders
        in={active === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        {/* CSSTransition component check for next element and adds transitions to that element by adding classNames we specified 
        in this component props to next element and we add css to animate
        */}
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem>Menu</DropdownItem>
          {/* if this item is clicked then only CSSTransition component will be triggered if active === settings as given in in prop boolean */}
          <DropdownItem goToMenu={"Stationary"} setActive={setActive}>
            Stationary
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem goToMenu="Events & exhibitions" setActive={setActive}>
            Events & exhibitions
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem
            goToMenu="Festivals & Celebrations"
            setActive={setActive}
          >
            Festivals & Celebrations
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem
            goToMenu="Eco Friendly and sustainable"
            setActive={setActive}
          >
            Eco Friendly and sustainable
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem goToMenu="Food and beverage" setActive={setActive}>
            Food and beverage
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem goToMenu="Luxury gifts" setActive={setActive}>
            Luxury gifts
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem goToMenu="Sports and games" setActive={setActive}>
            Sports and games
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem goToMenu="Gadgets and Technology" setActive={setActive}>
            Gadgets and Technology
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem goToMenu="Clothing & Apparels" setActive={setActive}>
            Clothing & Apparels
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem goToMenu="Gift boxes" setActive={setActive}>
            Gift boxes
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
          <DropdownItem goToMenu="Bags and backpacks" setActive={setActive}>
            Bags and backpacks
            <svg
              className="w-2.5 h-2.5 ms-3 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Stationary"}
        unmountOnExit
        timeout={500}
        classNames="menu-secondary"
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu={"main"}
            setActive={setActive}
          >
            <h2>Stationary</h2>
          </DropdownItem>
          <DropdownItem>Books</DropdownItem>
          <DropdownItem>Pen</DropdownItem>
          <DropdownItem>Water bottle</DropdownItem>
          <DropdownItem>Notepad</DropdownItem>
          <DropdownItem>Pouches</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Events & exhibitions"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Events & exhibitions</h2>
          </DropdownItem>
          <DropdownItem>Combo Stationary, Lanyards</DropdownItem>
          <DropdownItem>Name Badges</DropdownItem>
          <DropdownItem>Stickers</DropdownItem>
          <DropdownItem>Take away gifts</DropdownItem>
          <DropdownItem>Card holders</DropdownItem>
          <DropdownItem>
            Customized pens and pencils, key chains, bottles
          </DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Festivals & Celebrations"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Festivals & Celebrations</h2>
          </DropdownItem>
          <DropdownItem>Fragrance</DropdownItem>
          <DropdownItem>Vaporizers</DropdownItem>
          <DropdownItem>Scented Candles</DropdownItem>
          <DropdownItem>Lamps</DropdownItem>
          <DropdownItem>Wine sets</DropdownItem>
          <DropdownItem>Monopoly</DropdownItem>
          <DropdownItem>Combo idles</DropdownItem>
          <DropdownItem>Show pieces</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Eco Friendly and sustainable"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Eco Friendly and sustainable</h2>
          </DropdownItem>
          <DropdownItem>Sustainable Dairies/ Notebooks</DropdownItem>
          <DropdownItem>Sustainable Water Bottle</DropdownItem>
          <DropdownItem>Bamboo Bottle/ Mugs</DropdownItem>
          <DropdownItem>Bamboo, Cork & Wooden speakers</DropdownItem>
          <DropdownItem>Jute Bags</DropdownItem>
          <DropdownItem>Note cards and papers</DropdownItem>
          <DropdownItem>4 in 1 product hampers</DropdownItem>
          <DropdownItem>6 in 1 product hampers</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Food and beverage"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Food and beverage</h2>
          </DropdownItem>
          <DropdownItem>Chocolates</DropdownItem>
          <DropdownItem>Baked Food</DropdownItem>
          <DropdownItem>Healthy Snacks</DropdownItem>
          <DropdownItem>Alcoholic & Non- Alcoholic Beverages</DropdownItem>
          <DropdownItem>Canned Foods</DropdownItem>
          <DropdownItem>Flavored chips</DropdownItem>
          <DropdownItem>Flavored Coffee/Tea power box kit</DropdownItem>
          <DropdownItem>Brownies</DropdownItem>
          <DropdownItem>Dry fruits</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Luxury gifts"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Luxury gifts</h2>
          </DropdownItem>
          <DropdownItem>Premium Mugs</DropdownItem>
          <DropdownItem>Premium bottles</DropdownItem>
          <DropdownItem>Perfumes</DropdownItem>
          <DropdownItem>Crystal Oriented Products</DropdownItem>
          <DropdownItem>Wine set</DropdownItem>
          <DropdownItem>Leather products</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Sports and games"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Sports and games</h2>
          </DropdownItem>
          <DropdownItem>T-shirts</DropdownItem>
          <DropdownItem>Indoor games kits</DropdownItem>
          <DropdownItem>Trophies and medals</DropdownItem>
          <DropdownItem>Caps</DropdownItem>
          <DropdownItem>Sports accessories</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Gadgets and Technology"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Gadgets and Technology</h2>
          </DropdownItem>
          <DropdownItem>Bluetooth and UCB cables</DropdownItem>
          <DropdownItem>Power bank</DropdownItem>
          <DropdownItem>Speakers</DropdownItem>
          <DropdownItem>LED Display Products</DropdownItem>
          <DropdownItem>Head phones</DropdownItem>
          <DropdownItem>Smart Watches</DropdownItem>
          <DropdownItem>Keyboard & Mouse</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Clothing & Apparels"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Clothing & Apparels</h2>
          </DropdownItem>
          <DropdownItem>T-shirts</DropdownItem>
          <DropdownItem>Jackets</DropdownItem>
          <DropdownItem>Caps</DropdownItem>
          <DropdownItem>Polo T shirts</DropdownItem>
          <DropdownItem>Hoodies</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Gift boxes"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Gift boxes</h2>
          </DropdownItem>
          <DropdownItem>All Combo Product Boxes</DropdownItem>
          <DropdownItem>Wellness hampers</DropdownItem>
        </div>
      </CSSTransition>
      <CSSTransition
        in={active === "Bags and backpacks"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu overflow-y-auto max-h-60 bg-white divide-y divide-gray-100 rounded-lg shadow">
          <DropdownItem
            goToMenu="main"
            leftIcon={<AiFillCaretLeft />}
            setActive={setActive}
          >
            <h2>Bags and backpacks</h2>
          </DropdownItem>
          <DropdownItem>Laptop bags</DropdownItem>
          <DropdownItem>Slope bags</DropdownItem>
          <DropdownItem>Jute bags</DropdownItem>
          <DropdownItem>Sling bags</DropdownItem>
          <DropdownItem>Leather bags</DropdownItem>
          <DropdownItem>Travelling bags</DropdownItem>
          <DropdownItem>Carry Couture</DropdownItem>
          <DropdownItem>Traveling pouches</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
};

export default DropdownMenu;
