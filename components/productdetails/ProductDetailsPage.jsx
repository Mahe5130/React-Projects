// ProductDetailsPage.js

import React from "react";
import ThumbnailGallery from "./ThumbnailGallery";
import ProductHeading from "./ProductHeading";
import AccordionSection from "./AccordionSection";
import TabsSection from "./TabsSection";
import Breadcrumbs from "../breadcrumbs1";
import Navbar from "../Navbar";
import { FooterWithSocialLinks } from "../footer";

const ProductDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <Breadcrumbs
        level1="View products"
        level1Path="/viewproducts"
        level2="Product Details"
        level2Path="/ProductDetailsPage"
      />

      <div className="flex mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        {/* Left Section - Thumbnail Gallery */}
        <div className="w-2/4 pr-8">
          <ThumbnailGallery />
        </div>

        {/* Right Section - Product Heading, Accordion, Tabs */}
        <div className="w-2/4">
          <ProductHeading />

          {/* Tabs Section */}
          <TabsSection />

          {/* Accordion Section */}
          <AccordionSection />
        </div>
      </div>
      <FooterWithSocialLinks />
    </div>
  );
};

export default ProductDetailsPage;
