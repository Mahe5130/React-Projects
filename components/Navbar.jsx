import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BiUserCircle, BiSearch, BiPlus } from "react-icons/bi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiOutlineRight } from "react-icons/ai";
import "./style.css";
import gift_logo from "../images/Navbar/Gift Genie Logo 2.svg";
import UK from "../images/Navbar/UK-Flag.svg";
import USD from "../images/Navbar/US-Flag.svg";
import EUR from "../images/Navbar/Flag-Europe.svg";
import Currency from "../images/Navbar/currency-dollar.svg";
import DropdownMenu from "./Dropdown/DropdownMenu";
import { Link } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isPopularCategoriesOpen, setIsPopularCategoriesOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const [myArray, setMyArray] = useState([]);

  const handleCardToggle = () => {
    setIsCardOpen(!isCardOpen);
  };

  const handlePopularCategoriesToggle = () => {
    setIsPopularCategoriesOpen(!isPopularCategoriesOpen);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };

  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-white border-[1px]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-10 h-[66px]">
            <div className="relative flex h-14 items-center justify-between top-1">
              {/* Left side collapse button */}
              <div className="cursor-pointer" onClick={handleCardToggle}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600 inline-block"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isCardOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  ) : (
                    <image
                      xlinkHref="https://cdn.igp.com/raw/upload/assets/svg-icons/mm-new-logo.svg"
                      width="24"
                      height="24"
                    />
                  )}
                </svg>
              </div>

              {/* Search bar with search icon */}
              <div className="flex items-center flex-grow">
                {/* <label
                  htmlFor="searchInput"
                  className={`absolute pl-4 text-[14px] ${
                    inputFocused ? "hidden" : ""
                  }`}
                >
                  <p>Search for gifts</p>
                </label>

                <input
                  type="text"
                  id="searchInput"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder=""
                  className="border border-[#65451F] rounded-full p-1 pl-4  w-[430px]"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <div className="mr-4 absolute top-[1em] right-[35em] w-[1em] text-xs">
                  <BiSearch color="black" fontSize="1.8em" />
                </div> */}
                <img
                  src={gift_logo}
                  alt=""
                  className="mx-auto w-24 h-24 pl-10"
                />
              </div>

              <div className="absolute inset-y-0 right-0 flex align-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="relative">
                  <button
                    onClick={handleDropdownToggle}
                    className="text-black cursor-pointer hover:text-rose-600 mt-0.5 w-7 h-7"
                  >
                    <img src={Currency} alt="" className="w-full h-full" />
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-12 left-0 mt-2 w-30 bg-white p-4 rounded-lg shadow-lg">
                      <div className="flex items-center hover:bg-[#e0e0e0] p-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img
                            src={USD}
                            alt="Image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-[12px] font-semibold">USD</p>
                        </div>
                      </div>
                      <div className="flex items-center mt-2 hover:bg-[#e0e0e0] p-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img
                            src={UK}
                            alt="Image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-[12px] font-semibold">UK</p>
                        </div>
                      </div>
                      <div className="flex items-center mt-2 hover:bg-[#e0e0e0] p-2">
                        <div className="w-6 h-6 rounded-full overflow-hidden">
                          <img
                            src={EUR}
                            alt="Image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <p className="text-[12px] font-semibold">EUR</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <Menu as="div" className="relative ml-2">
                  <div className="inline-block">
                    <Menu.Button className="relative rounded-full text-sm focus:outline-none p-1 mr-1">
                      <Link to="/ProductCheckoutpage">
                        <HiOutlineShoppingCart color="black" fontSize="1.8em" />
                      </Link>
                    </Menu.Button>
                  </div>
                  <div className="inline-block">
                    <Menu.Button className="relative mx-0 rounded-full text-sm focus:outline-none p-1">
                      <BiUserCircle color="black" fontSize="1.8em" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Link to="/LoginPage">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Link>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>

            {isCardOpen && <DropdownMenu />}
          </div>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
