import React, { useEffect } from "react";
import "./Footer.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Footer() {
  const Navigate = useNavigate();

  return (
    <div>
      <div>
        <div class="footer">
          <div className="container">
            <a className="homenavigateclass" href="/">
              <img src="./images/footer-do-logo.png" className="footer-do-Logo" alt="do-logo" width={100} /></a>
            <div className="row Footer-down-main">
              <div className="col-md-2">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Company
                  </h1>
                  <ul>
                    <li>
                      <a
                        href="./company"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="./people"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        People and Careers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Expertise
                  </h1>
                  <ul>
                    <li>
                      <a
                        href="./cloud"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Cloud transformation
                      </a>
                    </li>
                    <li>
                      <a
                        href="./dataeng"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Data Engineering
                      </a>
                    </li>
                    <li>
                      <a
                        href="./databi"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Data Analytics and BI
                      </a>
                    </li>
                    <li>
                      <a
                        href="./aiml"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        AI & Machine Learning
                      </a>
                    </li>
                    <li>
                      <a
                        href="./devops"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        DevOps-as-a-service
                      </a>
                    </li>
                    <li>
                      <a
                        href="./application"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Application Modernization
                      </a>
                    </li>
                    <li>
                      <a
                        href="./talent"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Talent as a Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Industries
                  </h1>
                  <ul>
                    <li>
                      <a
                        href="./industries"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Life sciences and Pharma
                      </a>
                    </li>
                    <li>
                      <a
                        href="./media"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Media & Entertainment
                      </a>
                    </li>
                    <li>
                      <a
                        href="./gaming"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Gaming and gambling
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2">
                <div className="col">
                  <h1 className="footer-heading" style={{ color: "white" }}>
                    Products
                  </h1>
                  <ul>
                    <li>
                      <a
                        href="./observability"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        DO{" "}
                        <span
                          style={{
                            color: "rgba(255, 255, 255, 0.70)",
                            fontSize: "15px",
                            fontWeight: "700",
                            lineHeight: "22.5px",
                            letterSpacing: "-0.32px",
                          }}
                        >
                          360
                        </span>
                      </a>
                    </li>
                    {/* <li>Health EM</li> */}
                    <li>
                      <a
                        href="./datainsights"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        DO Insights
                      </a>
                    </li>
                    <li>
                      <a
                        href="./datacharts"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        DO Charts
                      </a>
                    </li>
                    <li>
                      <a
                        href="./datamonitor"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        DO Monitor
                      </a>
                    </li>
                    <li>
                      <a
                        href="./dataprompt"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Do Prompt
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-2">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Insights
                  </h1>
                  <ul>
                    <li>
                      <a
                        href="./casestudies"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a
                        href="./blog"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Blogs
                      </a>
                    </li>
                    <li>
                      <a
                        href="./ebooks"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Ebooks
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{ color: "rgba(255, 255, 255, 0.70)", fontWeight: "400", textDecoration: "none" }}
                      >
                        Webinars & Videos
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h4 className="copy-footer-2023">© 2023 Copyright owned by one or more of the DataObserve entities. All rights reserved.</h4>
            </div>
          </div>

          {/* <div class="contain">
            <div class="clearfix"></div>
          </div> */}

        </div>
      </div>
    </div>
  );
}

export default Footer;
