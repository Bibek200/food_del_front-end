import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import Placeoder from "./pages/Placeoder/Placeoder";
import Footer from "./component/Footer/Footer";
import LoginPopup from "./component/LoginPopup/LoginPopup";

const App = () => {

  const[showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<> </>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/placeoder" element={<Placeoder />} />
        </Routes>
      </div>
      <Footer/>
    </>
  );
};

export default App;
