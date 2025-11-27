import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import img from "./assets/logo.jpg";

import Home from "./Components/Home";
import About from "./Components/About";
import Course from "./Components/Course";
import Batch from "./Components/Batch";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Job from "./Components/Job";
import Java from "./Courses/Java";
import Python from "./Courses/Python";

function Navigation() {

  const [open, setOpen] = useState(false);

  return (
    <div className="container-fluid">
      <BrowserRouter basename="/">
      
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3">

          
          <Link className="navbar-brand" to="/">
            <img src={img} alt="logo" height="60" />
          </Link>

        
          <button className="navbar-toggler"   type="button"    onClick={() => setOpen(!open)}  >
            <span className="navbar-toggler-icon"></span>
          </button>

     
          <div className={`collapse navbar-collapse ${open ? "show" : "hide"}`}>
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto ">

              <li className="nav-item mx-3 my-2">
                <Link className="nav-link" to="home">HOME</Link>
              </li>

              <li className="nav-item mx-3 my-2">
                <Link className="nav-link" to="about">ABOUT US</Link>
              </li>

           
              <li className="nav-iten mx-3 my-2" >
                <Link className="nav-link" to='course'>COURSE</Link>
              </li>


              <li className="nav-item mx-3 my-2">
                <Link className="nav-link" to="batches">BATCHES</Link>
              </li>

              <li className="nav-item mx-3 my-2">
                <Link className="nav-link" to="/testimonial">TESTIMONIAL</Link>
              </li>

              <li className="nav-item mx-3 my-2">
                <Link className="nav-link" to="/contact">CONTACT US</Link>
              </li>

              <li className="nav-item mx-3 my-2 ">
                <Link className="nav-link" to="/job">JOBS</Link>
              </li>
            </ul>
          </div>
        </nav>

        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/course/*" element={<Course />} />
          <Route path="/batches" element={<Batch />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/job" element={<Job />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Navigation;
