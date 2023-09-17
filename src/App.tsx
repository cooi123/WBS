import React from "react";
import Header from "./components/Navbar";
import {ProductCarousel} from "./components/ProductCarousel";
import ProductSection from "./components/ProductSection";
import ProductPage from "./page/ProductPage";
import AboutUs from "./page/AboutUsPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {HomePage} from "./page/HomePage";
import {ContactUsPage} from "./page/ContactUsPage";
import {WroughIronDoorDetailPage} from "./page/IronDoorDetail";
import {wroughtIronDoorDetail} from "./data/wroughtIronDoor";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/contact" element={<ContactUsPage />}></Route>
          <Route
            path="/wroughtIronDoor"
            element={
              <WroughIronDoorDetailPage details={wroughtIronDoorDetail} />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
