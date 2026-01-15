import React from "react";
import "../Contact.css";
import Navbar from "../../components/Layout/Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <section>
        <div className="contact-bg-color">
          <div className=" container contact-overall">
            <div className="row">
              <div className="col-md-5">
                <div>
                  <p
                    style={{
                      fontWeight: "600",
                      color: "white",
                      fontSize: "20px",
                      letterSpacing: "1px",
                    }}
                  >
                    Contact
                  </p>

                  <h3 className="contact-heading">
                    Let’s
                    <br />
                    connect
                  </h3>
                  <p className="contact-paragraph">
                    Got a question? Don’t hesitate to give us a call today or
                    shoot us an email.
                  </p>

                  <div className="d-flex">
                    {/* <i
                      class="fa fa-envelope contact-phone"
                      aria-hidden="true"
                    ></i> */}

                    <img
                      className="messagebox-shadow"
                      src="./images/messagebox-shadow.png"
                      alt="message"
                      width={100}
                    />

                    <p className="mobile-number">Hello@dataobserve.io</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7 connect-page">
                <div class="card connectpage-1">
                  <div class="card-body">
                    <div className="all-names-form">
                      <div className="form-group full-g">
                        <label className="full-name required">Full Name</label>
                        <input
                          type="text"
                          className="form-control name-1"
                          style={{ background: "none", boxShadow: "none" }}
                        />
                        <label className="full-name required">Work Email</label>
                        <input
                          type="text"
                          className="form-control name-1"
                          style={{ background: "none", boxShadow: "none" }}
                        />
                        <label className="full-name">Contact Number</label>
                        <input
                          type="text"
                          className="form-control name-1"
                          style={{ background: "none", boxShadow: "none" }}
                        />
                        <label className="full-name">Message</label>
                        <textarea
                          type="text"
                          className="form-control name-1"
                          style={{ background: "none", boxShadow: "none" }}
                        />

                        <button className="contact-us-3">Contact Us</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
                <img
                  className="pattern"
                  src="./images/pattern.png"
                  alt="pattern"
                  width={100}
                />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="main-map-icon-head">
        <div className="container location-pad">
          <h3 className="our-location">Our Locations</h3>

          <div class="info-block">
            <img
              className="map"
              src="./images/location-map.png"
              alt="location"
            />

            <div className="icon-tool-1">
              <a href="#" data-tooltip="Canada &nbsp; &nbsp; comingsoon">
                <i
                  class="fa fa-map-marker map-location-size"
                  style={{ color: "red" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>

            <div className="icon-tool-2">
              <a href="#" data-tooltip="North America comingsoon">
                <i
                  class="fa fa-map-marker map-location-size"
                  style={{ color: "red" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="icon-tool-3">
              <a href="#" data-tooltip="Amsterdam comingsoon">
                <i
                  class="fa fa-map-marker map-location-size"
                  style={{ color: "red" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="icon-tool-4">
              <a href="#" data-tooltip="Dubai &nbsp; comingsoon">
                <i
                  class="fa fa-map-marker map-location-size"
                  style={{ color: "red" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="icon-tool-5">
              <a
                href="#"
                data-tooltip="India &nbsp; &nbsp; &nbsp; Kothaguda, North Hyderabad, Hyderabad, Ranga Reddy District, Telangana, India. 500084"
              >
                <i
                  class="fa fa-map-marker map-location-size location-india"
                  style={{ color: "blue" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
            <div className="icon-tool-6">
              <a href="#" data-tooltip="Singapore comingsoon">
                <i
                  class="fa fa-map-marker map-location-size"
                  style={{ color: "red" }}
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container all-image-text-head-contact">
          <div className="row">
            <div className="col-md-8">
              <div>
                <img
                  src="./images/location-background-contact.png"
                  className="Location-Contact"
                />
              </div>
              <div className="location-places">
                <div className="overall-location-text">
                  <h3 className="india-main">India</h3>
                  <h4 className="hyderabad-main">Hyderabad</h4>
                  <p className="local-main-text">
                    Kothaguda, North Hyderabad,
                    <br /> Hyderabad, Ranga Reddy District,
                    <br />
                    Telangana, India. 500084
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="coming-office-head">
                <h4 className="come-soon">Coming Soon offices in</h4>
                <ul className="canada-list-singa">
                  <li className="cndas">Canada</li>
                  <li className="cndas">North America</li>
                  <li className="cndas">Dubai</li>
                  <li className="cndas">Amsterdam</li>
                  <li className="cndas">Singapore</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="footer last-foot-m">
          <div className="container line-bottom">
            <div className="row">
              <div className="col-md-3 footer-data">
                <div class="coll">
                  <h1
                    className="footer-heading company"
                    style={{ color: "#FF4925;" }}
                  >
                    Company
                  </h1>
                  <ul>
                    <li><a href="./company" style={{ color: "white", textDecoration: "none" }}>About Us</a></li>
                    <li>Newsroom</li>
                    <li><a href="./people" style={{ color: "white", textDecoration: "none" }}>People and Careers</a></li>
                    <li>CSR</li>
                  </ul>
                  <h1 className="footer-heading company">Partners</h1>
                  <ul>
                    <li>AWS</li>
                    <li>Databricks</li>
                    <li>Snowflakes</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3 footer-data">
                <div class="coll">
                  <h1 className="footer-heading company">Services</h1>
                  <ul className="cloud">
                    <li><a href="./cloud" style={{ color: "white", textDecoration: "none" }}>Cloud transformation</a></li>
                    <li><a href="./dataeng" style={{ color: "white", textDecoration: "none" }}>Data Engineering</a></li>
                    <li><a href="./databi" style={{ color: "white", textDecoration: "none" }}>Data Analytics and BI</a></li>
                    <li><a href="./aiml" style={{ color: "white", textDecoration: "none" }}>AI & Machine Learning</a></li>
                    <li><a href="./devops" style={{ color: "white", textDecoration: "none" }}>DevOps-as-a-service</a></li>
                    <li><a href="./application" style={{ color: "white", textDecoration: "none" }}>Application Modernization</a></li>
                    <li><a href="./talent" style={{ color: "white", textDecoration: "none" }}>Talent as a Service</a></li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 footer-data">
                <div class="coll">
                  <h1 className="footer-heading company">Industries</h1>
                  <ul>
                    <li><a href="./industries" style={{ color: "white", textDecoration: "none" }}>Life sciences and Pharma</a></li>
                    <li><a href="./media" style={{ color: "white", textDecoration: "none" }}>Media & Entertainment</a></li>
                    <li><a href="./gaming" style={{ color: "white", textDecoration: "none" }}>Gaming and gambling</a></li>
                  </ul>
                  <h1 className="footer-heading company">Solutions</h1>
                  <ul>
                    <li><a href="./observability" style={{ color: "white", textDecoration: "none" }}>
                      DO{" "}
                      <span
                        style={{
                          color: "white",
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
                    <li>DOInsights</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 footer-data">
                <div class="coll">
                  <h1 className="footer-heading company">Insights</h1>
                  <ul>
                    <li><a href="./datainsights" style={{ color: "white", textDecoration: "none" }}>DO Insights</a></li>
                    <li><a href="./datacharts" style={{ color: "white", textDecoration: "none" }}>DO Charts</a></li>
                    <li><a href="./datamonitor" style={{ color: "white", textDecoration: "none" }}>DO Monitor</a></li>
                    <li><a href="./dataprompt" style={{ color: "white", textDecoration: "none" }}>Do Prompt</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div></div>

          <div class="contain">
            <div class="clearfix"></div>
          </div>

          <hr />

          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="logo logo-contact-page">
                  <a className="d-flex homenavigateclass" href="/">
                    <img
                      className="logo-main-footer"
                      src="./images/do-logo-footer.png"
                      alt="logo"
                      width={100}
                    />
                    <h4 className="logo-text-footer">
                      <span className="data-footer">
                        Data<span className="observe-footer">Observe</span>
                      </span>
                    </h4>
                  </a>
                </div>
              </div>

              <div className="col-md-5">
                <p className="privacy-dataobserve-text">
                  <span className="data-copy-right">
                    © 2023 Data
                    <span className="observe-copy-right">Observe.&nbsp;</span>
                    <span className="all-rights-footer">
                      All rights reserved.&nbsp; |&nbsp;
                    </span>
                  </span>

                  <span className="privacy-policy-1">
                    Privacy Policy &nbsp;|
                  </span>
                  &nbsp;
                  <span className="terms-condition-1">
                    Terms and Conditions
                  </span>
                </p>
              </div>
              <div className="col-md-4 socialmedia-images d-flex">
                <div>
                  <img
                    className="fb"
                    src="./images/fb.png"
                    alt="fb"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="fb"
                    src="./images/insta.png"
                    alt="fb"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="fb"
                    src="./images/link.png"
                    alt="fb"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="fb"
                    src="./images/twitter.png"
                    alt="fb"
                    width={100}
                  />
                </div>
                <img
                  className="fb"
                  src="./images/youtube.png"
                  alt="fb"
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
