import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navbar() {


  // ....cms...

  const handleContactButtonClick = () => {
    const cmsLink =
      "https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.html";

    window.location.href = cmsLink;
  };

  const toolsandaccelerator = () => {
    const toolslink = "http://tools-and-accelerators.dataobserve.io/"
    window.location.href = toolslink
  };
  return (
    <div className="bg-white mainbar-nav" style={{ paddingTop: "0px" }}>
      <div className="container d-flex justify-content-between align-items-center mobile-res d-none d-md-block">
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
              <a className="d-flex homenavigateclass" href="/">
                <img
                  className="logo-main"
                  src="/images/landing-logo.png"
                  alt="logo"
                  width={100}
                />
              </a>
            </div>
            <ul className="navbar-nav navbar-just-up">
              <li className="nav-item dropdown expertise">
                <a
                  className="nav-link text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Expertise
                  <i className="fa fa-angle-down icon-01" aria-hidden="true"></i>
                </a>
                <div
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ transform: "translateX(-20%)" }}
                >
                  <div className="d-flex navcard ml-3">
                    <div className="navcard2 pt-4 pl-2">
                      <a className="dropdown-item linksclass" href="/cloud">
                        Cloud Transformation
                      </a>
                      <a className="dropdown-item linksclass" href="/databi">
                        Data Analytics & BI
                      </a>

                      <a
                        className="dropdown-item linksclass data-eng-pad"
                        href="/dataeng"
                      >
                        Data Engineering
                      </a>
                      <a
                        className="dropdown-item linksclass data-eng-pad"
                        href="/aiml"
                      >
                        AI & Machine Learning
                      </a>
                    </div>
                    <a href="#" className="navcard2 pt-4 pl-2">
                      <a className="dropdown-item linksclass" href="/devops">
                        DevOps-as-a-service
                      </a>
                      <a className="dropdown-item linksclass" href="/talent">
                        Talent-as-a-service
                      </a>
                      <a
                        className="dropdown-item linksclass data-eng-pad"
                        href="/genai"
                      >
                        Gen AI as a Service
                      </a>
                      <a
                        className="dropdown-item linksclass data-eng-pad"
                        href="/application"
                      >
                        Application Modernization
                      </a>
                    </a>

                    <img
                      src="/images/navlinkgif.gif"
                      alt="navgif"
                      className="navlinkgifclass"
                      style={{
                        width: "350px",
                        height: "196px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Products
                  <i className="fa fa-angle-down icon-01" aria-hidden="true"></i>
                </a>
                <div
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <div className="d-flex navcard ml-3">
                    <div className="navcard2 pl-2" style={{ paddingTop: "35px", paddingBottom: "25px" }}>
                      <a className="dropdown-item linksclass" href="/caliber">
                        DO Caliber
                      </a>
                      <a className="dropdown-item linksclass" href="/base">
                        DO Base
                      </a>
                    </div>
                    <a
                      href="#"
                      className="navcard2 pl-2"
                      style={{ paddingTop: "35px" }}
                    >
                      <a className="dropdown-item linksclass" href="/observability">
                        DO 360
                      </a>
                      <a className="dropdown-item linksclass" href="/metrics">
                        DO Metrics
                      </a>
                    </a>
                    <img
                      src="/images/navlink2gif.gif"
                      alt="navgif"
                      className="navlinkgifclass"
                      style={{
                        width: "300px",
                        height: "150px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark "
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Industries
                  <i className="fa fa-angle-down icon-01" aria-hidden="true"></i>
                </a>
                <div
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ left: "-35%" }}
                >
                  <div className="d-flex navcard ml-3">
                    <div className="navcard2 mt-5 pl-2">
                      <a className="dropdown-item linksclass" href="/life-science">
                        Life Science
                      </a>
                      <a className="dropdown-item linksclass" href="/media">
                        Media & Entertainment
                      </a>
                      <a className="dropdown-item linksclass" href="/gaming">
                        Gaming
                      </a>
                    </div>
                    <div className="navcard2 mt-5 pl-2">
                      <a className="dropdown-item linksclass" href="/financial-services">
                        Financial Services
                      </a>
                      <a className="dropdown-item linksclass" href="/travel-hospitality">
                        Travel & Hospitality
                      </a>
                      <a className="dropdown-item linksclass" href="/cpg">
                        CPG
                      </a>
                      <a className="dropdown-item linksclass" href="/industries-hub">
                        Industries
                      </a>
                    </div>

                    <img
                      src="/images/navlink3gif.gif"
                      alt="navgif"
                      className="navlinkgifclass"
                      style={{
                        width: "300px",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link  text-dark "
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Insights
                  <i className="fa fa-angle-down icon-01" aria-hidden="true"></i>
                </a>
                <div
                  className="dropdown-menu navlinksdropdown insights-width-parent"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ width: "1000px", left: "-600%" }}
                >
                  <a
                    href="#"
                    className="row d-flex navcard ml-3 insights-width"
                  >
                    <a href="#" className="col-md-3 navcard2 mt-3 pl-2">
                      <a className="dropdown-item linksclass" href="allinsights">
                        All Insights
                      </a>
                      <HashLink
                        to="/allinsights#casestudies"
                        className="dropdown-item linksclass"
                      >
                        Case Studies
                      </HashLink>

                      <HashLink
                        to="/allinsights#blogs"
                        className="dropdown-item linksclass"
                      >
                        Blogs
                      </HashLink>
                    </a>
                    <a href="#ebooks" className="col-md-3 navcard2 pt-3 pl-2">
                      <HashLink
                        to="/allinsights#ebooks"
                        className="dropdown-item linksclass"
                      >
                        Ebooks
                      </HashLink>
                      <HashLink
                        to="/allinsights#whitepapers"
                        className="dropdown-item linksclass"
                      >
                        Whitepapers
                      </HashLink>
                      <HashLink
                        to="/allinsights#top10insights"
                        className="dropdown-item linksclass"
                      >
                        Events
                      </HashLink>
                    </a>

                    {/* coming soon part  */}

                    {/* coming soon image ends */}
                    <div className="col-md-3 comingsoonclass pr-3">
                      {/* <p
                        style={{
                          textAlign: "center",
                         
                          color: "#D6E2FF",
                          fontSize: "30px",
                          fontWeight: 700,
                          lineHeight: "52.707px",
                          marginBottom: "0px",
                        }}
                      >
                        Coming Soon
                      </p> */}
                      <img
                        src="/images/navlink4gif.gif"
                        alt="navgif"
                        className="navlinkgifclass"
                        style={{ width: "213px", height: "166px" }}
                      />
                    </div>
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-dark "
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Company
                  <i className="fa fa-angle-down icon-01" aria-hidden="true"></i>
                </a>
                <div
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ left: "-60%" }}
                >
                  <div className="d-flex navcard ml-3">
                    <div className="navcard2 mt-5 pl-2">
                      <a className="dropdown-item linksclass" href="/company">
                        About Us
                      </a>
                      <a className="dropdown-item linksclass" href="/people">
                        Careers
                      </a>
                    </div>
                    <img
                      src="/images/navlink2gif.gif"
                      alt="navgif"
                      className="navlinkgifclass"
                      style={{
                        width: "270px",
                        height: "170px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <div className="d-flex">
              <button className="acceleratorsclass-01" onClick={toolsandaccelerator}>
                Accelerators & Tools  <i
                  className="fa fa-angle-right navbar-angle-1"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
            <div>
              <button className="NavBAR-Contact-Us" onClick={handleContactButtonClick}>
                Contact Us
                <i
                  className="fa fa-angle-right navbar-angle"
                  aria-hidden="true"
                ></i>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* ...mobile  */}

      <div className="container d-flex justify-content-between  d-block d-md-none tab-NAV">
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
            <ul className="navbar-nav">
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
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ transform: "translateX(-20%)" }}
                >
                  <a href="#" className="d-flex navcard ml-3">
                    <div className="d-flex">
                      <div className="n-w">
                        <div className="col-md-5">
                          <a href="#" className="navcard2 pt-4 pl-2">
                            <a className="dropdown-item linksclass" href="/cloud">
                              Cloud Transformation
                            </a>
                            <a className="dropdown-item linksclass" href="/databi">
                              Data Analytics & BI
                            </a>
                            <a className="dropdown-item linksclass" href="/devops">
                              DevOps-as-a-service
                            </a>
                            <a className="dropdown-item linksclass" href="/talent">
                              Talent-as-a-service
                            </a>
                          </a>
                        </div>
                        <div className="col-md-5">
                          <a href="#" className="navcard2 pt-4 pl-2">
                            <a className="dropdown-item linksclass" href="/dataeng">
                              Data Engineering
                            </a>
                            <a className="dropdown-item linksclass" href="/aiml">
                              AI & Machine Learning
                            </a>
                            <a className="dropdown-item linksclass" href="/genai">
                              Gen AI as a Service
                            </a>
                            <a
                              className="dropdown-item linksclass"
                              href="/application"
                            >
                              Application Modernization
                            </a>
                          </a>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <img
                          src="/images/navlinkgif.gif"
                          alt="navgif"
                          className="navlinkgifclass"
                          style={{
                            width: "350px",
                            height: "196px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                    </div>
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
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a href="#" className="d-flex navcard ml-3">
                    <a
                      href="#"
                      className="navcard2 pl-2"
                      style={{ paddingTop: "35px" }}
                    >
                      <a className="dropdown-item linksclass" href="/caliber">
                        DO Caliber
                      </a>
                      <a className="dropdown-item linksclass" href="/base">
                        DO Base
                      </a>
                      <a className="dropdown-item linksclass" href="/observability">
                        DO 360
                      </a>
                      <a className="dropdown-item linksclass" href="/metrics">
                        DO Metrics
                      </a>
                    </a>
                    <img
                      src="/images/navlink2gif.gif"
                      alt="navgif"
                      className="navlinkgifclass"
                      style={{
                        width: "300px",
                        height: "150px",
                        borderRadius: "10px",
                      }}
                    />
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
                  Industries
                </a>
                <div
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ left: "-35%" }}
                >
                  <div className="d-flex navcard ml-3">
                    <div className="navcard2 mt-5 pl-2">
                      <a className="dropdown-item linksclass" href="/life-science">
                        Life Science
                      </a>
                      <a className="dropdown-item linksclass" href="/media">
                        Media & Entertainment
                      </a>
                      <a className="dropdown-item linksclass" href="/gaming">
                        Gaming
                      </a>
                    </div>
                    <div className="navcard2 mt-5 pl-2">
                      <a className="dropdown-item linksclass" href="/financial-services">
                        Financial Services
                      </a>
                      <a className="dropdown-item linksclass" href="/travel-hospitality">
                        Travel & Hospitality
                      </a>
                      <a className="dropdown-item linksclass" href="/cpg">
                        CPG
                      </a>
                      <a className="dropdown-item linksclass" href="/industries-hub">
                        Industries
                      </a>
                    </div>
                    <img
                      src="/images/navlink3gif.gif"
                      alt="navgif"
                      className="navlinkgifclass"
                      style={{
                        width: "300px",
                        height: "200px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
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
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ width: "1000px", left: "-600%" }}
                >
                  <div className="d-flex">
                    <a href="#" className="d-flex  navcard ml-3">
                      <div className="n-w">
                        <div className="col-md-5">
                          <a href="#" className="col-md-3 navcard2 mt-2 pl-2">
                            <a
                              className="dropdown-item linksclass"
                              href="allinsights"
                            >
                              All Insights
                            </a>
                            <HashLink
                              to="/allinsights#casestudies"
                              className="dropdown-item linksclass"
                            >
                              Case Studies
                            </HashLink>

                            <HashLink
                              to="/allinsights#blogs"
                              className="dropdown-item linksclass"
                            >
                              Blogs
                            </HashLink>
                          </a>
                        </div>
                        <div className="col-md-5">
                          <a
                            href="#ebooks"
                            className="col-md-3 navcard2 pt-3 pl-2"
                          >
                            <HashLink
                              to="/allinsights#ebooks"
                              className="dropdown-item linksclass"
                            >
                              Ebooks
                            </HashLink>
                            <HashLink
                              to="/allinsights#whitepapers"
                              className="dropdown-item linksclass"
                            >
                              Whitepapers
                            </HashLink>
                            <HashLink
                              to="/allinsights#top10insights"
                              className="dropdown-item linksclass"
                            >
                              Events
                            </HashLink>
                          </a>
                        </div>
                      </div>

                      <div className="col-md-2">
                        <img
                          src="/images/navlink4gif.gif"
                          alt="navgif"
                          className="navlinkgifclass"
                          style={{
                            width: "350px",
                            height: "196px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                    </a>
                  </div>
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
                  className="dropdown-menu navlinksdropdown"
                  aria-labelledby="navbarDropdownMenuLink"
                  style={{ left: "-60%" }}
                >
                  <div className="d-flex navcard ml-3">
                    <div className="navcard2 mt-5 pl-2">
                      <a className="dropdown-item linksclass" href="/company">
                        About Us
                      </a>
                      <a className="dropdown-item linksclass" href="/people">
                        Careers
                      </a>
                    </div>
                    <img
                      src="/images/navlink2gif.gif"
                      alt="navgif"
                      className="navlinkgifclass"
                      style={{
                        width: "270px",
                        height: "170px",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                </div>
              </li>
              <li>
                <button className="acceleratorsclass">
                  Accelerators & Tools
                </button>
              </li>
              <li>
                <div>
                  <Link to="/contact">
                    <button className="contact">contact</button>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <div className="logo d-flex">
            <a className="d-flex homenavigateclass" href="/">
              <img
                className="logo-main"
                src="/images/landing-logo.png"
                alt="logo"
                width={100}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
