import React from 'react'
import Navbar from "./components/Navbar";
import { CarouselCustomNavigation } from "./components/carousel";
import SectionTitle from "./components/populartitle";
import SectionTitle1 from "./components/populartitle1";
import SectionTitle2 from "./components/populartitle2";
import AboutUs from "./components/aboutus";
import ClientSection from "./components/Client";
import { CarouselCustomNavigation1 } from "./components/newsletter1";
import { FooterWithSocialLinks } from "./components/footer";
import SocialSidebar from "./components/sidebar";
import ScrollToTopButton from "./components/topbutton";
import CategorySection3 from "./components/categories3";
import FeaturedSection1 from "./components/featured";
import CardSection3 from "./components/card3";



const Home = () => {
  return (
    <div className="container mx-auto">
       <Navbar />
     
      <div className='container mx-auto overflow-x-hidden'>
      <CardSection3 />
      <CarouselCustomNavigation />
      <SectionTitle />

      <FeaturedSection1 />
      <AboutUs />
   
      <SectionTitle1 />

      <CategorySection3 />
      <CarouselCustomNavigation1 />
      <SectionTitle2 />
      <ClientSection />
      <FooterWithSocialLinks />
      <ScrollToTopButton />
      <SocialSidebar />
    
      </div>
    </div>
  )
}

export default Home
