import "../components/head.css";
import Header from "../components/header";
import 'bootstrap/dist/css/bootstrap.min.css';



import "./home.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <div className="home-bg">
        <div className="inner-home-bg"></div>
        <div className="home-para">
          <div  id="p1">
            <span id="get">Get</span>
            <npmspan>Fit Gym</npmspan>
          </div>
          <div id="p2">
            <span >INCREASE YOUR</span>
            <span id="stamina">STAMINA</span>
          </div>
          <div  id="p3">
            <p>
              We are the best in town in terms of service so far . Give us a try
            </p>
          </div>
          <div  id="p4">
            <button id="home-btn-1">
              <Link to="/registration" className="nav-link">
                Get Started
              </Link>
            </button>

            <button id="home-btn-2">
              <Link to="/services" className="nav-link">
                Learn More
              </Link>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

//Packages for bootstrap:
//1) Bootstrap
//2) React-Bootstrap