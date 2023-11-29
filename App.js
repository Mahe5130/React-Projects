// import { Carousel } from '@material-tailwind/react';
import Home from "./Home"
import { BrowserRouter as Router, Route,Routes, Navigate, BrowserRouter  } from "react-router-dom";
import Viewproducts from "./components/seperatepages/viewproducts";
import ProductDetailsPage from "./components/productdetails/ProductDetailsPage";
import ProductCheckoutPage from "./components/productcheckout/ProductCheckoutpage";
import ProductFilter from "./components/productfliter/productfilterpage";
import AuthForm from "./components/Login";




function App() {
  return (
   
  
     <BrowserRouter>
      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route exact path="/viewproducts" element={<Viewproducts />} />
        <Route exact path="/ProductDetailsPage" element={<ProductDetailsPage />} />
        <Route exact path="/ProductCheckoutpage" element={<ProductCheckoutPage />} />
        <Route exact path="/productfilterpage" element={<ProductFilter />} />
      </Routes >
    </BrowserRouter>
    
     
  );
}

export default App;
