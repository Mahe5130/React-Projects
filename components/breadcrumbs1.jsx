import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumbs({
  level1,
  level2,
  level3,
  level4,
  level1Path,
  level2Path,
  level3Path,
  level4Path,
}) {
  return (
    <div className="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-10 mt-2 mb-4">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 ">
          <li className="inline-flex items-center">
            <Link
              to="/"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-[#96887d]"
            >
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>
          {level1 ? (
            <li>
              <div className="flex items-center">
                <IoIosArrowForward />
                <Link
                  to={level1Path}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-[#96887d] md:ms-2"
                >
                  {level1}
                </Link>
              </div>
            </li>
          ) : (
            ""
          )}

          {level2 ? (
            <li>
              <div className="flex items-center">
                <IoIosArrowForward />
                <Link
                  to={level2Path}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-[#96887d] md:ms-2"
                >
                  {level2}
                </Link>
              </div>
            </li>
          ) : (
            ""
          )}

          {level3 ? (
            <li>
              <div className="flex items-center">
                <IoIosArrowForward />
                <Link
                  to={level3Path}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-[#96887d] md:ms-2"
                >
                  {level3}
                </Link>
              </div>
            </li>
          ) : (
            ""
          )}

          {level4 ? (
            <li>
              <div className="flex items-center">
                <IoIosArrowForward />
                <Link
                  to={level4Path}
                  className="ms-1 text-sm font-medium text-gray-700 hover:text-[#96887d] md:ms-2"
                >
                  {level4}
                </Link>
              </div>
            </li>
          ) : (
            ""
          )}
        </ol>
      </nav>
    </div>
  );
}

export default Breadcrumbs;
