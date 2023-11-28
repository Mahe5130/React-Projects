import React, { useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineRight } from "react-icons/ai";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Dropdown({ items }) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isPopularCategoriesOpen, setIsPopularCategoriesOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const handlePopularCategoriesToggle = () => {
    setIsPopularCategoriesOpen(!isPopularCategoriesOpen);
  };

  return (
    <>
      <Menu as="div" className="relative">
        <Menu.Button
          className={classNames(
            "text-black hover:text-rose-600 cursor-pointer flex",
            {
              "border-l-2 border-rose-600": isPopularCategoriesOpen,
            }
          )}
          onClick={handlePopularCategoriesToggle}
        >
          Stationary
          <AiOutlineRight className="ml-2 mt-1.5" />
        </Menu.Button>
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
            {items.map((item) => (
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    {item}
                  </a>
                )}
              </Menu.Item>
            ))}
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Pen
                </a>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Water bottle
                </a>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Notepad
                </a>
              )}
            </Menu.Item> */}
            {/* <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100" : "",
                    "block px-4 py-2 text-sm text-gray-700"
                  )}
                >
                  Pouches
                </a>
              )}
            </Menu.Item> */}
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default Dropdown;
