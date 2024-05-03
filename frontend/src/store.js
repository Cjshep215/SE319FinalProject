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
    return (
      <>
        <div className="indexMain">
          {/* <!-- Filter div --> */}
          <div className="filterDiv">
            {/* <h5 id="filterNone" className="filterTitle">
            All Trucks
          </h5> */}
            <h4 className="filterbyFilters">Filter By</h4>
            <h6>Type:</h6>
            <ul className="filterStyle">
              <p id="filterbyMexican">Mexican</p>
              <p id="filterbyChicago">Chicago</p>
              <p id="filterbyNoodle">Noodle</p>
              <p id="filterbyPhilly">Philly</p>
            </ul>
            {/* <h6>Allergen:</h6>
          <ul className="filterStyle">
            <p id="filterbyEgg">Egg</p>
            <p id="filterbyDairy">Dairy</p>
            <p id="filterbyPeanut">Peanut</p>
          </ul> */}
            <h6>Location:</h6>
            <ul className="filterStyle">
              <p id="filterbyKildee">Kildee Hall</p>
              <p id="filterbyCarver">Carver Hall</p>
              <p id="filterbyHoover">Hoover Hall</p>
            </ul>
          </div>
          {/* <!-- List of trucks (this div doesn't currently snap when window gets to small, can use bootstrap for that if needed)--> */}
          <div className="TruckDiv" id="truckListContainer">
            {/* <!-- creating a grid to store each truck/information --> */}

            {/* <!-- Carlos quesadillas --> */}
            {/*  style="display: grid; margin-bottom: 25px;" */}
            <div>
              {/*  style="display: inline-flex;" */}
              <div>
                <div className="homeLogoSize">
                  <img
                    className="Storelogo"
                    src="https://raw.githubusercontent.com/Cjshep215/SE319FinalProject/main/backend/images/Carlos_Quesadilas_Logo.webp"
                  ></img>
                </div>
                {/*  style="padding: 10px;" */}
                <div>
                  {/*  style="left: 100%; text-decoration: underline;" */}
                  <h3>Carlos Quesadillas</h3>
                  {/* style="text-align: center;" */}
                  <h6>mexican food</h6>
                </div>
                {/* style="margin-top: 8px; height: auto;padding-top: 6px;" */}
                <h5>(kildee Hall)</h5>
              </div>
            </div>

            {/* <!-- second truck chicago treats-->
            <div style="display: grid; margin-bottom: 25px;">
                <div style="display: inline-flex;">
                    <div style="width: 80px;"><img className="logo"></div>
                    <div style="padding: 10px;">
                        <h3 style="left: 100%; text-decoration: underline;">Carlos Quesadillas</h3>
                        <h6 style="text-align: center;">mexican food</h6>
                    </div>
                    <h5 style="margin-top: 8px; height: auto;padding-top: 6px;">(kildee Hall)</h5>


                </div>
            </div> */}

            {/* <!-- third cheese steak factory-->
            <div style="display: grid; margin-bottom: 25px;">
                <div style="display: inline-flex;">
                    <div style="width: 80px;"><img className="logo"></div>
                    <div style="padding: 10px;">
                        <h3 style="left: 100%; text-decoration: underline;" ;>Carlos Quesadillas</h3>
                        <h6 style="text-align: center;">mexican food</h6>
                    </div>
                    <h5 style="margin-top: 8px; height: auto;padding-top: 6px;">(kildee Hall)</h5>


                </div>
            </div> */}

            {/* <!-- fourth macubana-->
            <div style="display: grid; margin-bottom: 25px;">
                <div style="display: inline-flex;">
                    <div style="width: 80px;"><img className="logo"></div>
                    <div style="padding: 10px;">
                        <h3 style="left: 100%; text-decoration: underline;" ;>Carlos Quesadillas</h3>
                        <h6 style="text-align: center;">mexican food</h6>
                    </div>
                    <h5 style="margin-top: 8px; height: auto;padding-top: 6px;">(kildee Hall)</h5>


                </div>
            </div> */}
          </div>
        </div>
      </>
    );
  };

  const AboutUs = () => {
    return (
      <div className="album py-5 albumStyle">
        {/* style=" padding-bottom: 100px;" */}
        <div className="container myContainer">
          <div className="row row-cols-1 row-cols-sm-2 g-2">
            {/* <!-- Connors card --> */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  src="https://github.com/Cjshep215/SE319FinalProject/blob/main/backend/otherImages/ConnorProfilePicture.jpg?raw=true"
                  role="img"
                  focusable="false"
                  alt="Photo of Connor"
                ></img>
                <div className="card-body">
                  <h3>Connor Shepherd</h3>
                  <p className="card-text">
                    I am majoring in Software Engineering at Iowa State. This
                    year, I am taking Computer Science 327, Software Engineering
                    319, CyberSecurity Engineering 230, and more.
                  </p>
                  <h6>Email: Cjshep@iastate.edu</h6>
                </div>
              </div>
            </div>
            {/* <!-- Lukes card --> */}
            <div className="col">
              <div className="card shadow-sm">
                <img
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  src="https://github.com/Cjshep215/SE319FinalProject/blob/main/backend/otherImages/LukeProfilePicture.png?raw=true"
                  role="img"
                  preserveAspectRatio="16 / 9"
                  focusable="false"
                  alt="Photo of Luke"
                ></img>
                <div className="card-body">
                  <h3>Luke Herbsleb</h3>
                  <p className="card-text">
                    I am a second year student at Iowa State University. This
                    spring semester I am taking Coms 309, 319, 311 and more.
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

  const NormalFooter = () => {
    return (
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
    )
  }

  const Map = () => {
    return (
      <div className="basicBackground mapDiv">
        <div className="row row-cols-1">
          <div className="col">
            <div className="card shadow-sm">
              <div className="map">
                <div>
                  <img
                    src="https://github.com/Cjshep215/SE319FinalProject/blob/main/backend/otherImages/map.png?raw=true"
                    alt="Iowa State Map"
                    className="map-Image"
                  />
                </div>
                <div className="AlignText">
                  <h3> Carver Hall </h3>
                </div>
              </div>


              <div className="card-body">
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="basicBackground">
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
          <Route path="/Home" element={<> <Home /> <Map /> <NormalFooter /> </> } />
          <Route path="/AboutUs" element={<> <AboutUs /> <NormalFooter /> </>} />
          <Route path="/Trucks" element={<Trucks />} />
          <Route path="/" element={<Trucks />} /> {/*default*/}
        </Routes>
      </Router>

    </div>
  );
}

export default Store;
