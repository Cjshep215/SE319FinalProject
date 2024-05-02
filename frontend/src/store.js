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
    return (
        <div className="album py-5 albumStyle">
            {/* style=" padding-bottom: 100px;" */}
            <div className="container myContainer" >

                <div className="row row-cols-1 row-cols-sm-2 g-2">
                    {/* <!-- Connors card --> */}
                    <div className="col">
                        <div className="card shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%"
                                src="https://github.com/Cjshep215/SE319FinalProject/blob/main/backend/otherImages/ConnorProfilePicture.jpg?raw=true" role="img" focusable="false"
                                alt="Photo of Connor">
                            </img>
                            <div className="card-body">
                                <h3>Connor Shepherd</h3>
                                <p className="card-text">I am majoring in Software Engineering at Iowa State. This year, I
                                    am taking Computer Science 327, Software Engineering 319, CyberSecurity Engineering
                                    230, and more.
                                </p>
                                <h6>Email: Cjshep@iastate.edu</h6>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Lukes card --> */}
                    <div className="col">
                        <div className="card shadow-sm">
                            <img className="bd-placeholder-img card-img-top" width="100%"
                                src="https://github.com/Cjshep215/SE319FinalProject/blob/main/backend/otherImages/LukeProfilePicture.png?raw=true" role="img" preserveAspectRatio="16 / 9"
                                focusable="false" alt="Photo of Luke">
                            </img>
                            <div className="card-body">
                                <h3>Luke Herbsleb</h3>
                                <p className="card-text">I am a second year student at Iowa State University. This spring
                                    semester I am taking Coms 309, 319, 311 and more.
                                </p>
                                <h6>Email: lherb@iastate.edu</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };

  const Trucks = () => {
    return <h1>Trucks</h1>;
  };

  return (
    <div className = "basicBackground">
      {/* navbar */}
      <header>
        {/* style="background-color: #F1BE48;" */}
        <div className="navbar ">
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

      {/* <!-- Footer --> */}
      {/* there could be some magic done here to only show basic footer in certian screens */}
      <footer className="d-flex flex-wrap justify-content-between align-items-center basicFooter">
        <div className="col-md-4 d-flex align-items-center mx-5">
          <span className="mb-3 mb-md-0 text-body-secondary">
            &copy; Spring 2024 SE/ComS319 Construction of User Interfaces Team:
            103 (3/9/2024)
          </span>
        </div>
        {/* style = "width: 80px; margin-right: 20px;" */}
        <img
          src="https://github.com/Cjshep215/SE319FinalProject/blob/main/backend/otherImages/Iowa_State_Logo.jpg?raw=true"
          className="BottomLogo"
        ></img>
      </footer>
    </div>
  );
}

export default Store;
