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
import Carousel from 'react-bootstrap/Carousel';

export function Store() {
  let truckListdata;
  let currTruckdata;

  fetch("").then(response)

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
          
          <div className="TruckDiv" id="truckListContainer">
            <div className="container">
              {/* one truck per row */}
              <div className="row">
                {/* image */}
                <div className="col col-sm-3 no-gutters"><img className = "Storelogo"src = "https://raw.githubusercontent.com/Cjshep215/SE319FinalProject/main/backend/images/Carlos_Quesadilas_Logo.webp"></img></div>
                {/* all other info */}

                <div className="col">
                  <div className="row">
                  <div className = "row">
                      <div className = "col">
                        title
                      </div>
                      <div className = "col">
                        place
                      </div>
                    </div>

                    <div className = "row">
                      <div className = "col col-sm-3">
                        Rating: 
                      </div>
                      <div className = "col">
                        description
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
    return (
      <>
        <div className="container trucksMargin">
          {/* edit the style to match proposal */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col firstTruckCol">
              <div className="card shadow-sm firstTruckCardPadding">
                <Carousel>
                  <Carousel.Item>
                    <img src = "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/438079255_944054677724200_3322962393491933598_n.jpg?stp=dst-jpg_p235x350&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BwHqTVGaekYQ7kNvgHp7wgS&_nc_ht=scontent-msp1-1.xx&oh=00_AfAWeilQjQOVgan3gXjkuMQQ7P2jdnj8E6FxAQKXk7IY9w&oe=663DF82F"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src = "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/438079255_944054677724200_3322962393491933598_n.jpg?stp=dst-jpg_p235x350&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BwHqTVGaekYQ7kNvgHp7wgS&_nc_ht=scontent-msp1-1.xx&oh=00_AfAWeilQjQOVgan3gXjkuMQQ7P2jdnj8E6FxAQKXk7IY9w&oe=663DF82F"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                  <img src = "https://scontent-msp1-1.xx.fbcdn.net/v/t39.30808-6/438079255_944054677724200_3322962393491933598_n.jpg?stp=dst-jpg_p235x350&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BwHqTVGaekYQ7kNvgHp7wgS&_nc_ht=scontent-msp1-1.xx&oh=00_AfAWeilQjQOVgan3gXjkuMQQ7P2jdnj8E6FxAQKXk7IY9w&oe=663DF82F"></img>
                  </Carousel.Item>
                </Carousel>

                {/* times go here */}
                <div className="card-body">
                  <p className="card-text">
                    Place the times of the truck here
                  </p>
                </div>
              </div>
            </div>
            {/* make this col wider */}
            <div className="col truckMiddleSize">
              <div className="card shadow-sm">
                <svg
                  className="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Thumbnail"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                <div className="card-body">
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col fixedFacebookWidth">
              <div className="card shadow-sm fixedFacebookWidth">
                <div className="card-body smallerCardPadding">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcarlosquesadillas&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="340"
                    height="500"
                    scrolling="no"
                    frameBorder="0"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
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

  const TrucksFooter = () => {
    return (
      <footer className="TrucksFooter">
        <div class="bottomBar">
          <img
            id="footerLogo"
            class="BottomLogo"
            src="otherImages/Carlos_Quesadilas_Logo.webp"
          ></img>

          <div
            id="footerLinkDiv"
            // style="display: block; margin-left: 20px; text-decoration: underline;"
          >
            <p class="bottomBarLinks" id="footerInfo1">
              link number 1
            </p>
            <p class="bottomBarLinks" id="footerInfo2">
              link number 2
            </p>
            <p class="bottomBarLinks" id="footerInfo3">
              link number 3
            </p>
            <p class="bottomBarLinks" id="footerInfo4">
              link number 4
            </p>
          </div>
        </div>
        <span class="mb-3 mb-md-0 text-body-secondary">
          &copy; 2024 Team: 103
        </span>
      </footer>
    );
  };

  const Map = () => {
    return (
      <div className="basicBackground mapDiv" style={{display: "flex", justifyContent: 'center'}}>
        <div className="row row-cols-1">
          <div className="col">
            <div className="card shadow-sm" style={{width: 740}}>
              <div className="map" style={{display: "flex", justifyContent: 'center', padding: 10}}>
                <div className="AlignText">
                  {/* <h3> Carver Hall </h3> */}
                </div>
                <div>
                  <img
                    src="https://github.com/Cjshep215/SE319FinalProject/blob/main/backend/otherImages/map.png?raw=true"
                    alt="Iowa State Map"
                    className="map-Image"
                    useMap="#ISUMap"
                    style={{width: 720}}
                  />
                  <map name="ISUMap">
                    <area shape="rect" coords="200,230,250,280" alt="Carver Area" onClick={(e) => console.log("C " + e.pageX + " " + e.pageY)}></area>
                    <area shape="rect" coords="120,200,150,240" alt="Hoover" onClick={(e) => console.log("H " + e.pageX + " " + e.pageY)}></area>
                    <area shape="rect" coords="320,90,380,130" alt="Kildee" onClick={(e) => console.log(" " + e.pageX + " " + e.pageY)}></area>
                  </map>
                </div>
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
          <Route path="/Trucks" element={<><Trucks /> <TrucksFooter /></>} />
          <Route path="/" element={<Home />} /> {/*default*/}
        </Routes>
      </Router>

    </div>
  );
}

export default Store;
