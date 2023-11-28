// ProductDetailsPage.js

import React from "react";
import ProductCheckoutPage from "./productcheckout";
import Breadcrumbs from "../breadcrumbs1";
import Navbar from "../Navbar";
import { FooterWithSocialLinks } from "../footer";

const ProductCheckoutpage = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs
        level1="View products"
        level1Path="/viewproducts"
        level2="Product Details"
        level2Path="/ProductDetailsPage"
        level3="Product Catalogue"
        level3Path="/ProductCheckoutpage"
      />
      <div className="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <ProductCheckoutPage />
      </div>
      <FooterWithSocialLinks />
    </div>
  );
};

export default ProductCheckoutpage;
