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
  const [myTrucks, setMyTrucks] = useState([]);
  const [myFilteredTrucks, setFilteredTrucks] = useState([]);
  const [filter, setFilter] = useState('');
  const [currTruck, setCurrTruck] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/listTrucks")
      .then((response) => response.json())
      .then((myTrucks) => setMyTrucks(myTrucks));
  }, []);

  const Home = () => {
    let filterTmp = [];

    switch (filter) {
      case "filterbyMexican":
        console.log("0", filter);
        for (const el of myTrucks) {
          if (el.filterTags[0] === "Mexican") {
            filterTmp.push(el);
          }
        }
        break;
      case "filterbyChicago":
        console.log("1", filter);
        for (const el of myTrucks) {
          if (el.filterTags[0] === "Chicago") {
            filterTmp.push(el);
          }
        }
        break;
      case "filterbyPhilly":
        console.log("2", filter);
        for (const el of myTrucks) {
          if (el.filterTags[0] === "Philly") {
            filterTmp.push(el);
          }
        }
        break;
      case "filterbyNoodle":
        console.log("3", filter);
        for (const el of myTrucks) {
          if (el.filterTags[0] === "Noodle") {
            filterTmp.push(el);
          }
        }
        break;
      case "filterbyCarver":
        console.log("4", filter);
        for (const el of myTrucks) {
          for (const loc of el.locationTags) {
            if (loc === "carverHall") {
              filterTmp.push(el);
            }
          }
        }
        break;
      case "filterbyKildee":
        console.log("5", filter);
        for (const el of myTrucks) {
          for (const loc of el.locationTags) {
            if (loc === "kildeeHall") {
              filterTmp.push(el);
            }
          }
        }
        break;
      case "filterbyHoover": //Always reverts to this?
        console.log("6", filter);
        for (let i = 0; i < myTrucks.length; i++) {
          // console.log(myTrucks[i]);
          for (let j = 0; j < myTrucks[i].locationTags.length; j++) {
            // console.log(myTrucks[i].locationTags[j]);
            if (myTrucks[i].locationTags[j] === "hooverHall") {
              filterTmp.push(myTrucks[i]);
              // console.log(filterTmp);
            }
          }
        }
        break;
      // default:
      //   console.log("7", filter);
      //   for (let i = 0; i < myTrucks.length; i++) {
      //     // console.log(myTrucks[i]);
      //     filterTmp.push(myTrucks[i]);
      //   }
      //   break;
    }
      
      // console.log(filterTmp);
    // setFilteredTrucks(filterTmp);
    setFilteredTrucks(myTrucks);

    const listTrucks = myFilteredTrucks.map((el) => (
      <div className="row" key={el.truckID}>
        {/* image */}
        <div className="col col-sm-3 no-gutters Storelogo">
          <img
            className="Storelogo"
            src={`${el.logoUrl}`}
          ></img>
        </div>
        {/* all other info */}
        <div className="col homeStoreName">
          <div className="row">
            <div className="row">
              <div className="col">{el.truckName}</div>
              <div className="col">
                {el.locationTags[0]} {el.locationTags[1]}
              </div>{" "}
              {/*FIX */}
            </div>
            <div className="row">
              <div className="col col-sm-3">Rating: {el.rating.rate}/5</div>
              <div className="col">description {/*FIX */}</div>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <>
        <div className="indexMain">
          {/* <!-- Filter div --> */}
          <div className="filterDiv">
            <h5 id="filterNone" className="filterTitle" onClick={setFilter("")}>
            All Trucks
          </h5>
            <h4 className="filterbyFilters">Filter By</h4>
            <h6>Type:</h6>
            <ul className="filterStyle">
              <p id="filterbyMexican" onClick={() => {console.log("filterMex"); setFilter("filterbyMexican")}}>Mexican</p>
              <p id="filterbyChicago" onClick={() => setFilter("filterbyChicago")}>Chicago</p>
              <p id="filterbyNoodle" onClick={() => setFilter("filterbyNoodle")}>Noodle</p>
              <p id="filterbyPhilly" onClick={() => setFilter("filterbyPhilly")}>Philly</p>
            </ul>
            <h6>Location:</h6>
            <ul className="filterStyle">
              <p id="filterbyKildee" onClick={() => setFilter("filterbyKildee")}>Kildee Hall</p>
              <p id="filterbyCarver" onClick={() => setFilter("filterbyCarver")}>Carver Hall</p>
              <p id="filterbyHoover" onClick={() => setFilter("filterbyHoover")}>Hoover Hall</p>
            </ul>
          </div>

          <div className="TruckDiv" id="truckListContainer">
            <div className="container">
              {/* one truck per row */}
              {listTrucks}
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
    if (!currTruck || currTruck.length < 1){
      // setCurrTruck(myTrucks[0]); //Defualt
    }

    if (!currTruck|| currTruck.length < 1){
      return (<h1>Error</h1>);
    }
    // console.log("CurTru", currTruck);
    // console.log("all", myTrucks);

    let imageArray = currTruck.otherImages;
    var arrayTmp = [];

    arrayTmp.push(currTruck.imageUrl);
    arrayTmp.push(currTruck.logoUrl);

    for (let i = 0; i < imageArray.length; i++){
      arrayTmp.push(imageArray[i]);
    }

    console.log(currTruck);
    console.log(arrayTmp);
    const carouselItems = arrayTmp.map((el) => (
      <Carousel.Item key={el} style={{backgroundColor: "lightgray"}}>
        <img src={el} alt={"Url:" + el} height="220"></img>
      </Carousel.Item>
    ));

    const truckHours = currTruck.truckHours.map((el) => (
      <p className="card-text" key={el}>{el}</p>
    ));

    const truckMenu = currTruck.menu.map((el) => (
      <h5 className="card-text" key={el} style={{display: "flex", justifyContent: 'center'}}>{el}</h5>
    ));

    const truckComments = currTruck.commentsArray.map((el) => (
      <div className="row" key={el.commentId} style={{display: "flex"}}>
        <h6>
        {el.userName} - {el.commentRating}/5
        </h6>
        <p className="card-text">{el.commentDescription}</p>

      </div>
    ));

    return (
      <>
        <div className="container trucksMargin">
          {/* edit the style to match proposal */}
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col firstTruckCol">
              <div className="card shadow-sm firstTruckCardPadding">
                
                <Carousel>{carouselItems}</Carousel>

                {/* times go here */}
                <div className="card-body">
                  <div className="card-text">{truckHours}</div>
                </div>
              </div>
            </div>
            {/* make this col wider */}
            <div className="col truckMiddleSize">
              <div className="card shadow-sm">
                <div
                  className="card-body"
                  style={{ backgroundColor: "palegoldenrod" }}
                >
                  {truckMenu}
                </div>
              </div>
              <br />
              <div className="card shadow-sm">
                <div
                  className="card-body"
                  style={{ backgroundColor: "white" }}
                >
                  {truckComments}
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
    if (!currTruck || currTruck.length < 1){
      setCurrTruck(myTrucks[0]); //Defualt
    }

    if (!currTruck){
      return (<h1>Error</h1>);
    }

    let footerInfo;

    try {
      footerInfo = currTruck.otherInfo.map((el) => (
          <p className="bottomBarLinks" key={el}>{el}</p>
      ));
    } catch (error){
      footerInfo = Array(currTruck.otherInfo).map((el) => (
        <p className="bottomBarLinks" key={el}>{el}</p>
    ));
    }

    return (
      <footer className="TrucksFooter">
        <div className="bottomBar">
          <img
            id="footerLogo"
            className="BottomLogo"
            src={currTruck.logoUrl}
          ></img>

          <div
            id="footerLinkDiv"
            style={{display: "block", marginLeft: 20, textDecoration: "underline"}}
          >
            {footerInfo}
            {/* <p className="bottomBarLinks">{currTruck.otherInfo[0]}</p>
            <p className="bottomBarLinks">{currTruck.otherInfo[1]}</p>
            <p className="bottomBarLinks">{currTruck.otherInfo[2]}</p>
            <p className="bottomBarLinks">{currTruck.otherInfo[3]}</p> */}
          </div>
        </div>
        <span className="mb-3 mb-md-0 text-body-secondary">
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
                    <area shape="rect" coords="200,230,250,280" alt="Carver" onClick={(e) => {console.log("C " + e.pageX + " " + e.pageY); setFilter("filterbyCarver")}}></area>
                    <area shape="rect" coords="120,200,150,240" alt="Hoover" onClick={(e) => {console.log("H " + e.pageX + " " + e.pageY); setFilter("filterbyHoover")}}></area>
                    <area shape="rect" coords="320,90,380,130" alt="Kildee" onClick={(e) => {console.log("K " + e.pageX + " " + e.pageY); setFilter("filterbyKildee")}}></area>
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
                <NavDropdown.Item
                  href="/Trucks"
                  onClick={() => setCurrTruck(myTrucks[0])}
                >
                  Carlos Quesadillas
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Trucks"
                  onClick={() => setCurrTruck(myTrucks[1])}
                >
                  Chicago Treats
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Trucks"
                  onClick={() => setCurrTruck(myTrucks[2])}
                >
                  The Cheesesteak Factory
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="/Trucks"
                  onClick={() => setCurrTruck(myTrucks[3])}
                >
                  Macubana
                </NavDropdown.Item>
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
          <Route
            path="/Home"
            element={
              <>
                {" "}
                <Home /> <Map /> <NormalFooter />{" "}
              </>
            }
          />
          <Route
            path="/AboutUs"
            element={
              <>
                {" "}
                <AboutUs /> <NormalFooter />{" "}
              </>
            }
          />
          <Route
            path="/Trucks"
            element={
              <>
                <Trucks /> <TrucksFooter />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                {" "}
                <Home /> <Map /> <NormalFooter />{" "}
              </>
            }
          />{" "}
          {/*default*/}
        </Routes>
      </Router>
    </div>
  );
}

export default Store;
