import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

export function Store() {
  const Home = () => {
    return <h1>home</h1>;
  };

  const AboutUs = () => {
    return <h1>AboutUs</h1>;
  };

  const Trucks = () => {
    return <h1>Trucks</h1>;
  };
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Trucks" element={<Trucks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default Store;
