import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"

const Navbar = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <div className="container d-flex justify-content-between align-items-center">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="logo d-flex">
              <a className='d-flex homenavigateclass' href='/'>
                <img
                  className="logo-main"
                  src="./images/main-logo.png"
                  alt="logo"
                  width={100}
                />
                <h4 className="logo-text">
                  <span className="data">
                    Data<span className="observe">Observe</span>{" "}
                  </span>
                </h4>
              </a>
            </div>
            <ul className="navbar-nav justify-content-around">
              <li className="nav-item dropdown expertise">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Expertise
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/cloud">
                    Cloud Transformation
                  </a>
                  <a className="dropdown-item" href="/databi">
                    Data Analytics & BI
                  </a>
                  <a className="dropdown-item" href="/devops">
                    DevOps-as-a-service
                  </a>
                  <a className="dropdown-item" href="/talent">
                    Talent-as-a-service
                  </a>
                  <a className="dropdown-item" href="/dataeng">
                    Data Engineering
                  </a>
                  <a className="dropdown-item" href="/aiml">
                    AI & Machine Learning
                  </a>
                  <a className="dropdown-item" href="/application">
                    Application Modernization
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/observability">
                    DO360
                  </a>
                  <a className="dropdown-item" href="healthem">
                    DOHealth
                  </a>
                  <a className="dropdown-item" href="/datasense">
                    DOsense
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="/industries-hub"
                  id="navbarDropdownMenuLink"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/industries">
                    Life Science
                  </a>
                  <a className="dropdown-item" href="/media-entertainment">
                    Media & Entertainment
                  </a>
                  <a className="dropdown-item" href="/gaming">
                    Gaming
                  </a>
                  <a className="dropdown-item" href="/financial-services">
                    Financial Services
                  </a>
                  <a className="dropdown-item" href="/travel-hospitality">
                    Travel & Hospitality
                  </a>
                  <a className="dropdown-item" href="/industrials">
                    Industrials
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Insights
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Case Studies
                  </a>
                  <a className="dropdown-item" href="#">
                    Blogs
                  </a>
                  <a className="dropdown-item" href="#">
                    EBooks
                  </a>
                  <a className="dropdown-item" href="#">
                    Webinars & Videos
                  </a>
                  <a className="dropdown-item" href="#">
                    Events
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/company">
                    About Us
                  </a>
                  <a className="dropdown-item" href="/people">
                    Careers
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <Link to="/contact">
            <button className="contact">contact</button>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
