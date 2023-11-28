// src/ProductCheckoutPage.js
import React, { useState } from "react";
import Exhibition2 from "../../images/viewproducts/Exhi2 - Copy.png";
import Exhibition3 from "../../images/viewproducts/Exhi3 - Copy.png";

const productsData = [
  {
    id: 1,
    name: "Product 1",
    quantity: 2,
    price: 19.99,
    image: Exhibition2,
  },
  {
    id: 2,
    name: "Product 2",
    quantity: 1,
    price: 29.99,
    image: Exhibition3,
  },

  // Add more products as needed
];

const ProductCheckoutPage = () => {
  const [products, setProducts] = useState(productsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateQuantity = (productId, newQuantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  const deleteProduct = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  const calculateTotal = () => {
    return products.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8 flex">
      <div className="w-3/4 pr-8">
        <h1 className="text-2xl font-bold mb-4">Product Checkout</h1>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center border-b border-gray-300 py-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mr-4 w-20 h-20"
            />
            <div className="flex-grow">
              <p className="text-lg font-semibold">{product.name}</p>
              <p className="text-gray-600">
                Price: ${product.price.toFixed(2)}
              </p>
              <div className="flex items-center mt-2">
                <label className="mr-2">Quantity:</label>
                <input
                  type="number"
                  min="0"
                  value={product.quantity}
                  onChange={(e) =>
                    updateQuantity(product.id, parseInt(e.target.value, 10))
                  }
                  className="border border-gray-300 px-2 py-1 w-16"
                />
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => updateQuantity(product.id, product.quantity + 1)}
                className="bg-blue-500 text-white px-2 py-1 mr-2"
              >
                +
              </button>
              <button
                onClick={() =>
                  updateQuantity(product.id, Math.max(1, product.quantity - 1))
                }
                className="bg-red-500 text-white px-2 py-1 mr-2"
              >
                -
              </button>
              <button
                onClick={() => deleteProduct(product.id)}
                className="bg-gray-500 text-white px-2 py-1"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-1/4 mt-14">
        <h2 className="text-xl font-bold mb-4">Selected Items</h2>
        <ul className="list-disc pl-4 mb-4">
          {products.map((product) => (
            <li key={product.id}>
              {product.name}: {product.quantity} x ${product.price.toFixed(2)} =
              ${(product.quantity * product.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="border-t border-gray-300 pt-4">
          <p className="text-lg font-semibold">
            Total Amount: ${calculateTotal().toFixed(2)}
          </p>
          <button
            onClick={openModal}
            className="bg-green-500 text-white px-4 py-2 mt-4"
          >
            Proceed to Checkout
          </button>
        </div>
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto mt-20">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              {/* Modal content */}
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* Your existing modal content */}
                    <div className="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                        Email Verification
                      </h3>
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="mt-1 w-full border border-gray-300 rounded-md"
                        />
                      </div>
                      <button
                        onClick={""}
                        type="button"
                        className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-500 border border-transparent rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                      >
                        Send OTP
                      </button>
                    </div>

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
                </div>

                {/* Close button
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCheckoutPage;
