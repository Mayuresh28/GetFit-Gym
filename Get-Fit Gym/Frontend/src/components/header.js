
import './head.css';
import Home from "../pages/Home";
import Services from "../pages/Services";
import Registration from "../pages/Registration";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


function header() {
  return (
    <div className="header">
    <ul>
  <li><Link to="/" className='head-link' >Home</Link></li>
  <li><Link to="/services" className='head-link'>Services</Link></li>
  <li><Link to="/registration" className='head-link'>Registration</Link></li>
  <li><Link to="/contact" className='head-link'>Contact</Link></li>

</ul>
     
    </div>
  );
}

export default header;