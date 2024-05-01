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
        {/* navbar */}
        <header>
            {/* style="background-color: #F1BE48;" */}
        <div class="navbar"> 
            <div class="container">
                {/* style="color: #363636;" */}
                <a class="nav-link dropdown-toggle navbar-brand" href="#" data-bs-toggle="dropdown"
                    aria-expanded="false"><strong >Trucks</strong></a>
                    {/*  style="background-color: aliceblue; */}
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="./index.html">All Trucks</a></li>
                    <li><a class="dropdown-item" href="Trucks.html?currTruckID=carlosQuesadillasTruck">Carlos Quesadillas</a></li>
                    <li><a class="dropdown-item" href="Trucks.html?currTruckID=chicagoTreatsTruck">Chicago Treats</a></li>
                    <li><a class="dropdown-item" href="Trucks.html?currTruckID=cheesesteakFactoryTruck">The Cheesesteak Factory</a></li>
                    <li><a class="dropdown-item" href="Trucks.html?currTruckID=macubanaTruck">Macubana</a></li>
                </ul>
                <a href="index.html" class="navbar-brand d-flex align-items-center">
                    {/* style="color: #363636;" */}
                    <strong >
                        <h2 href="aboutUs.html">Food Truck Tracker</h2>
                        {/* link with the router thing */}
                    </strong>
                </a>
                <a href="aboutUs.html" class="navbar-brand d-flex align-items-center">
                    {/* style="color: #363636;" */}
                    <strong >
                        <h4 href="aboutUs.html">About Us</h4>
                    </strong>
                </a>

            </div>
        </div>
    </header>


        {/* page */}
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
