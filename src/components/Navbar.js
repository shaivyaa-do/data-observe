import React from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom"

const Navbar = () => {
  let Navigate = useNavigate();
  return (
    <div>
      <div className="container d-flex justify-content-between align-items-center">
        <nav class="navbar navbar-expand-lg navbar-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
            <ul class="navbar-nav justify-content-around">
              <li class="nav-item dropdown expertise">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Expertise
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="/cloud">
                    Cloud Transformation
                  </a>
                  <a class="dropdown-item" href="/databi">
                    Data Analytics & BI
                  </a>
                  <a class="dropdown-item" href="/devops">
                    DevOps-as-a-service
                  </a>
                  <a class="dropdown-item" href="/talent">
                    Talent-as-a-service
                  </a>
                  <a class="dropdown-item" href="/dataeng">
                    Data Engineering
                  </a>
                  <a class="dropdown-item" href="/aiml">
                    AI & Machine Learning
                  </a>
                  <a class="dropdown-item" href="/application">
                    Application Modernization
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="/observability">
                    DO360
                  </a>
                  <a class="dropdown-item" href="healthem">
                    DOHealth
                  </a>
                  <a class="dropdown-item" href="/datasense">
                    DOsense
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="/industries-hub"
                  id="navbarDropdownMenuLink"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Industries
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="/industries">
                    Life Science
                  </a>
                  <a class="dropdown-item" href="/media-entertainment">
                    Media & Entertainment
                  </a>
                  <a class="dropdown-item" href="/gaming">
                    Gaming
                  </a>
                  <a class="dropdown-item" href="/financial-services">
                    Financial Services
                  </a>
                  <a class="dropdown-item" href="/travel-hospitality">
                    Travel & Hospitality
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Insights
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="#">
                    Case Studies
                  </a>
                  <a class="dropdown-item" href="#">
                    Blogs
                  </a>
                  <a class="dropdown-item" href="#">
                    EBooks
                  </a>
                  <a class="dropdown-item" href="#">
                    Webinars & Videos
                  </a>
                  <a class="dropdown-item" href="#">
                    Events
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company
                </a>
                <div
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a class="dropdown-item" href="/company">
                    About Us
                  </a>
                  <a class="dropdown-item" href="/people">
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
