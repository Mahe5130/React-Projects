import React, { useEffect, useState } from "react";
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutus1 from "../images/AboutUs/aboutus1.jpg";
import Aboutus2 from "../images/AboutUs/aboutus2.jpg";

const AboutUs = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: "2000" });
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative mb-8" data-aos="fade-up">
      <div
        className="bg-cover bg-center h-64 md:h-96"
        style={{
          backgroundImage: `url(${Aboutus1})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/* Text Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-center px-14 py-14">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">About Us</h2>
            <p className="text-lg md:text-xl mb-8">
              Our curated selection of premium gifts reflects our commitment to
              quality, creativity, and customization. Whether you're looking to
              express gratitude valued clients, reward your hardworking team, or
              enhance your brand image, we are your trusted partner in creating
              memorable gifting experiences.
            </p>
            <span>
              Join us in making every corporate gesture a statement of
              excellence.
            </span>
            <button
              onClick={openModal}
              className="block mx-auto my-4 py-[10px] px-[20px] font-[16px] rounded-lg  bg-[#65451F] hover:bg-[#EAC696]  text-white hover:text-white transition-colors 0.3s"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 z-50 bg-black opacity-50"></div>
          <div className="relative z-50 bg-white p-8 max-w-md mx-auto rounded-lg overflow-y-auto max-h-full shadow-lg border-2">
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                About Us
              </h3>
              <button
                onClick={closeModal}
                type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
            </div>
            <img src={Aboutus2} alt="Modal Image" className="mb-4 rounded-lg" />
            <p className="text-gray-700">
              Our curated selection of premium gifts reflects our commitment to
              quality, creativity, and customization. Whether you're looking to
              express gratitude valued clients, reward your hardworking team, or
              enhance your brand image, we are your trusted partner in creating
              memorable gifting experiences. Our curated selection of premium
              gifts reflects our commitment to quality, creativity, and
              customization. Whether you're looking to express gratitude valued
              clients, reward your hardworking team, or enhance your brand
              image, we are your trusted partner in creating memorable gifting
              experiences. Our curated selection of premium gifts reflects our
              commitment to quality, creativity, and customization. Whether
              you're looking to express gratitude valued clients, reward your
              hardworking team, or enhance your brand image, we are your trusted
              partner in creating memorable gifting experiences.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;
