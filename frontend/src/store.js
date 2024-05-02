import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { NavDropdown, Dropdown, Nav } from "react-bootstrap";
import "./store.css";

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
        <div className="navbar">
          <div className="container">
            {/* style="color: #363636;" */}
            <Nav className="myDropdown">
              <NavDropdown
                id="nav-dropdown"
                title="All Trucks"
                menuVariant="light"
              >
                <NavDropdown.Item href="/Trucks">
                  Carlos Quesadillas
                </NavDropdown.Item>
                <NavDropdown.Item href="/Trucks">
                  Chicago Treats
                </NavDropdown.Item>
                <NavDropdown.Item href="/Trucks">
                  The Cheesesteak Factory
                </NavDropdown.Item>
                <NavDropdown.Item href="/Trucks">Macubana</NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <a href="/Home" className="navbar-brand d-flex align-items-center">
              {/* style="color: #363636;" */}
              <strong>
                <h2>Food Truck Tracker</h2>
                {/* link with the router thing */}
              </strong>
            </a>
            <a
              href="/AboutUs"
              className="navbar-brand d-flex align-items-center"
            >
              {/* style="color: #363636;" */}
              <strong>
                <h4>About Us</h4>
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
          <Route path="/" element={<Trucks />} /> {/*default*/}
        </Routes>
      </Router>
    </div>
  );
}

export default Store;
