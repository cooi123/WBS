import React from "react";
import Header from "./components/Navbar";
import {ProductCarousel} from "./components/ProductCarousel";
import ProductSection from "./components/ProductSection";
import ProductPage from "./page/ProductPage";
import AboutUs from "./page/AboutUsPage";
function App() {
  return (
    <div>
      <Header></Header>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;
