import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

import Footer from "../../components/Layout/Footer";
import Navbar from "../../components/Layout/Navbar";
import banner from "../../assets/videos/bannerhome.mp4";
import footerland from "../../assets/videos/footerland.mp4";

function Home() {
  const Navigate = useNavigate();
  const [isProcessVisible, setIsProcessVisible] = useState(false);
  const sectionRef = useRef(null);

  const handleContactButtonClick = () => {
    // Replace 'your-cms-link' with the actual CMS integration link
    const cmsLink =
      "https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.html";

    window.location.href = cmsLink;
  };

  const toolsandaccelerator = () => {
    const toolslink = "http://tools-and-accelerators.dataobserve.io/";
    window.location.href = toolslink;
  };


  const [showCards, setShowCards] = useState(false);
  const handleTextClick = () => {
    // Toggle the state when the text is clicked
    setShowCards(!showCards);
  };

  return (
    <div>
      <Navbar />

      <section>
        <div className="HomePage-Video">
          <video className="Landing-Page-video" autoPlay loop muted>
            <source src={banner} type="video/mp4" />
          </video>
          <div className="container understandandaccess">
            <div className="row">
              <div className="col-md-7">
                <p className="home-access">
                  Trusted data that's <br />
                  easy to find, understand & access
                </p>
              </div>
              <div className="col-md-5">
                <p className="organize-home">
                  DataObserve unites your entire organization so you can do more
                  with your data.
                </p>
                <button
                  className="Homepage-Contact-Us"
                  onClick={handleContactButtonClick}
                >
                  Contact Us
                  <i
                    class="fa fa-angle-right home-angle"
                    aria-hidden="true"
                  ></i>
                </button>
                <div className="watch-video-do">
                  <i class="fa fa-play-circle play-video-home"></i>
                  <p className="We-do-home">
                    <a className="Watch-Videos-home" href="#video">
                      Watch Video : What we Do?
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container Landing-page-Main">
            <div className="row">
              <div className="col-md-12">
                <p className="Landing-page-DES">Data Engineering</p>
                <p className="land-page-DES-2">SIMPLIFIED</p>
                {/* <a href="./contact" style={{ textDecoration: "none" }}>
                  <button
                    className="datatypes"
                    style={{
                      display: "flex",
                      height: "61px",
                      maxWidth: "255px",
                      padding: "20px 46px 21px 48px",
                      justifyContent: "center",
                      alignItems: "center",
                      border: "none",
                      marginTop: "70px",
                      borderRadius: "5px",
                    }}
                  >
                    <span
                      className="spans"
                      style={{
                        color: "#0046E8",
                        fontSize: "18px",
                        fontStyle: "normal",
                        fontWeight: "600",
                        lineHeight: "19px",
                      }}
                    >
                      Contact Us
                    </span>{" "}
                    <i
                      className="fa fa-long-arrow-right ARROW-RIGHT-CLOUD"
                      style={{
                        width: "23px",
                        fontSize: "29px",
                        flexShrink: "0",
                        color: "#0046E8",
                        marginLeft: "12px",
                      }}
                      aria-hidden="true"
                    ></i>
                  </button>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="video" className="landing-page-what-we-do-02">
        <div className="container Landing-Page-what-wedo-2">
          <div className="row WHAT-we-dataobserve">
            <div className="col-md-7">
              <video
                className="Landing-Page-video-we-do"
                autoPlay
                loop
                controls
              >
                <source
                  src="https://storage.googleapis.com/do-website-resources/landing-whatwedo.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-md-5 address-Home-page">
              {/* <h6 className="WHAT-LANDING">WHAT WE DO</h6> */}
              <h4 className="confidence-landing-Page">
                We ensure confidence by addressing your most formidable
                difficulties.
              </h4>
              <p className="Effective-landing-wedo">
                Effective problem-solving extends beyond discovering solutions;
                it involves continually posing further questions until we grasp
                the factors influencing success and the path to achieve it.
              </p>
              {/* <p className="landing-Read">
                <a
                  href="./contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact for more information
                </a>
              </p>
              <hr
                className="line-hr-home"
                style={{
                  width: "351px",
                  display: "inline-block",
                  borderTop: "1px solid white",
                  marginTop: "0rem",
                }}
              /> */}
              <a href="./expertiselanding" style={{ textDecoration: "none" }}>
                <button className="Homepage-Contact-Us">
                  Expertise
                  <i
                    class="fa fa-angle-right home-angle"
                    aria-hidden="true"
                  ></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="third-section"
        style={{ background: "rgba(236, 236, 236, 0.93)" }}
      >
        <div className="observe-why-landing">
          <div>
            <p className="why-data-Observe">WHY dataobserve?</p>
          </div>
          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="row">
              <div className="pro-data">
                <div className="col-md-1 new-text">
                  <img
                    src="./images/carbon.svg"
                    className="tick-HOME"
                    alt="star"
                  />
                </div>
                <div className="col-md-11 text-Foremost">
                  <h5 className="proven">Proven.</h5>
                  <p className="foremost-home">
                    Recognized as a foremost authority in data intelligence, our
                    expertise has been sought after by the world's most
                    prominent enterprises, enabling them to enhance their
                    capabilities with reliable data.
                  </p>
                </div>
              </div>
              {/* <div className="pro-data">
                <div className="col-md-1 new-text">
                  <img
                    src="./images/alpha.png"
                    className="tick-HOME"
                    alt="star"
                  />
                </div>
                <div className="col-md-11 text-Foremost">
                  <h5 className="proven">Dynamic.</h5>
                  <p className="foremost-home">
                    Get up and running in weeks as you plan big but start small,
                    dynamically advancing with a modular, unified platform as
                    you scale your data and Al initiatives.
                  </p>
                </div>
              </div> */}
              <div className="pro-data">
                <div className="col-md-1 new-text">
                  <img
                    src="./images/alphahome.svg"
                    className="tick-HOME"
                    alt="star"
                  />
                </div>
                <div className="col-md-11 text-Foremost">
                  <h5 className="proven">Dynamic.</h5>
                  <p className="foremost-home">
                    Get up and running in weeks as you plan big but start small,
                    dynamically advancing with a modular, unified platform as
                    you scale your data and Al initiatives.
                  </p>
                </div>
              </div>
              <div className="pro-data">
                <div className="col-md-1 new-text-03">
                  <img
                    src="./images/completed.svg"
                    className="tick-HOME"
                    alt="star"
                  />
                </div>
                <div className="col-md-11 text-Foremost">
                  <h5 className="proven">Complete.</h5>
                  <p className="foremost-home">
                    Find the right data, wherever it lives, for every business
                    or technology initiative, at the moment it's needed with a
                    complete and comprehensive solution to discovering trusted
                    data.
                  </p>
                  <a href="./allinsights" style={{ textDecoration: "none" }}>
                    <button className="Homepage-Contact-Us-insights">
                      Check Insights
                      <i
                        class="fa fa-angle-right home-angle"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="Women-Home">
            <img
              src="./images/women.png"
              alt="women"
              className="women-landingpage"
            />
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <h4 className="text-center Global-Home">
              Global Companies who trusts us
            </h4>
            <p className="container col-md-7 text-center Lies-Landing">
              Our emphasis lies in assisting you in charting the correct course
              of action, eliminating uncertainty & progressing confidently by
              integrating the strengths of AI & analytics.
            </p>

            <div className="container All-brand-images">
              <div className="row brand-images">
                <div>
                  <img
                    className="srd-img-01"
                    src="./images/track-home.png"
                    alt="srd"
                  // width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-13"
                    src="./images/uni-home.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-02"
                    src="./images/acc-home.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-03"
                    src="./images/koni-home.png"
                    alt="srd"
                    width={70}
                  />
                </div>
              </div>
              <div className="row brand-images">
                <div>
                  <img
                    className="srd-img-08"
                    src="./images/srd-8.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-09"
                    src="./images/srd-9.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-10"
                    src="./images/srd-10.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-11"
                    src="./images/srd-11.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-12"
                    src="./images/srd-12.png"
                    alt="srd"
                    width={100}
                  />
                </div>
              </div>
              <div className="row brand-images">
                <div>
                  <img
                    className="srd-img-4"
                    src="./images/doctalk.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-5"
                    src="./images/solakh1.png"
                    alt="srd"
                    width={120}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-6"
                    src="./images/srd-6.png"
                    alt="srd"
                    width={100}
                  />
                </div>
                <div>
                  <img
                    className="srd-img-7"
                    src="./images/srd-7.png"
                    alt="srd"
                    width={100}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="power-US">
        <div className="container Power-OBSERVER">
          <div className="ZOOM-HOME">
            <img
              src="./images/zoom.png"
              className="online-Zoom"
              alt="zoom"
              width={100}
            />
          </div>
          <div className="row zOOM-quality-home">
            <div className="col-md-6 power-Observer-lense">
              <h4 className="what-POWER-us">What Powers us?</h4>
              <h4 className="Observer-LENSE">The Observer Lense</h4>
            </div>

            <div className="col-md-6">
              <p className="Inherent-quality">
                An inherent quality within the outstanding teams at DataObserve,
                this enables us to unravel intricacies and tackle some of the
                most challenging problems. A sense of ownership permeates
                everything we undertake, coupled with a forward-looking strategy
                to problem-solving, leveraging extensive expertise, and daring
                to experiment with unconventional methods to ultimately provide
                value.
              </p>
              <a href="./productlanding" style={{ textDecoration: "none" }}>
                <button className="Homepage-Contact-Us">
                  Products
                  <i
                    class="fa fa-angle-right home-angle"
                    aria-hidden="true"
                  ></i>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="Landing-building-image">
          <div className="middle-building">
            <img
              src="./images/building.png"
              className="building-Landing"
              alt="building"
            />
          </div>

          <div className="landing-building-text">
            <div className="container">
              <div className="row">
                <div className="">
                  <p className="container col-md-8 ai-ana-home">
                    Enhancing industry standards through the integration of AI
                    and analytics.
                  </p>
                  <p className="container col-md-7 unique-home">
                    Each industry presents its unique challenges, and for
                    numerous pressing issues, there are no established
                    playbooks. Achieving solutions requires a delicate balance
                    between adhering to best practices and engaging in
                    fundamental, ground-up thinking.
                  </p>
                  <a
                    href="./industrielanding"
                    style={{ textDecoration: "none" }}
                  >
                    <button className="Homepage-Contact-Us-3">
                      Industries
                      <i
                        class="fa fa-angle-right home-angle"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fivth-section">
        <div>
          <div>
            <h4 className="data-inte-jo">
              Start your data intelligence journey today
            </h4>
          </div>

          <div className="container  recheck-demo">
            <div className="row REQUEST-Demo">
              <div className="col-md-6 check-Out-360">
                <p className="improve-pipelines">
                  Discover how DO 360 can improve your data pipelines and
                  monitoring. Try it with your own data in your own environment
                  for a personalized experience.
                </p>

                <button className="custom-button">
                  <i class="fa fa-play-circle play-video-home-1"></i>
                  <span>
                    Checkout DO<span style={{ fontWeight: "700" }}>360</span>
                  </span>
                  <i
                    class="fa fa-angle-right home-angle"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div className="col-md-6 check-Out-360">
                <p className="improve-pipelines">
                  Speak one-on-one with a DataObserve expert and get a
                  personalized demo of DataObserve Data Intelligence Platform.
                </p>

                <button className="custom-button">
                  {/* <i class="fa fa-play-circle play-video-home"></i> */}
                  <span>Request a free demo a Demo</span>
                  <i
                    class="fa fa-angle-right home-angle"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#EDEDED" }} className="sixth-SECTION">
        <div>
          <div className="container text-center productsandtools">
            <h3 className="container col-md-8 BOOST-Heading">
              Boost your AI journey with <br />
              our products, tools & accelerators.
            </h3>
            <p className="container col-md-9 emphasis-paragraph-home">
              Our emphasis lies in assisting you in charting the correct course
              of action, eliminating uncertainty, and progressing confidently by
              integrating the strengths of AI & analytics.
            </p>
            <button
              className="Homepage-Contact-Us-3"
              onClick={toolsandaccelerator}
            >
              Boost now
              <i class="fa fa-angle-right home-angle" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <div className="container">
          <div className="row boost-now-Home">
            <div className="col-md-3 WORLD-HOME">
              <div className="moni-home">
                <div className="observe-Home">
                  <div className="moni-observe">
                    <img
                      src="./images/data-observe.png"
                      className="monitoring-data-Home"
                      alt="star"
                    />
                  </div>
                </div>
                <p className="obser-monitor-Home">Monitoring & Observability</p>
              </div>
              <div className="overlay">
                <div class="text-over">
                  <h6 className="Mo-Text">Monitoring & Observability</h6>
                  <div className="LOREM-DUMMY">
                    <p className="ipsum-Simple">
                      "Monitoring and observability tools and accelerators
                      provide real-time insights and actionable data to enhance
                      system performance, troubleshoot issues, and optimize
                      operational efficiency in dynamic environments."
                    </p>
                    <i
                      class="fa fa-angle-right home-angle-lorem"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 WORLD-HOME">
              <div className="moni-home">
                <div className="observe-Home">
                  <div className="moni-observe">
                    <img
                      src="./images/data-quality.png"

                      className="monitoring-data-Home"
                      alt="star"
                    />
                  </div>
                </div>
                <p className="obser-monitor-Home">Data Quality</p>
              </div>
              <div className="overlay">
                <div class="text-over">
                  <h6 className="Mo-Text">Data Quality</h6>
                  <div className="LOREM-DUMMY">
                    <p className="ipsum-Simple">
                      "Data quality tools and accelerators ensure the integrity,
                      accuracy, and reliability of information through automated
                      processes, enabling organizations to make informed
                      decisions and derive meaningful insights from their data."
                    </p>
                    <i
                      class="fa fa-angle-right home-angle-lorem"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 WORLD-HOME">
              <div className="moni-home">
                <div className="observe-Home">
                  <div className="moni-observe">
                    <img
                      src="./images/data-management.png"
                      className="monitoring-data-Home"
                      alt="star"
                    />
                  </div>
                </div>
                <p className="obser-monitor-Home">Data Management</p>
              </div>
              <div className="overlay">
                <div class="text-over">
                  <h6 className="Mo-Text">Data Management</h6>
                  <div className="LOREM-DUMMY">
                    <p className="ipsum-Simple">
                      "Data management tools and accelerators streamline the
                      end-to-end lifecycle of data, facilitating efficient
                      storage, retrieval, integration, and governance to empower
                      organizations with robust and organized data assets."
                    </p>
                    <i
                      class="fa fa-angle-right home-angle-lorem"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 WORLD-HOME">
              <div className="moni-home">
                <div className="observe-Home">
                  <div className="moni-observe">
                    <img
                      src="./images/cloud-migration.png"
                      className="monitoring-data-Home"
                      alt="star"
                    />
                  </div>
                </div>
                <p className="obser-monitor-Home">Cloud Migration</p>
              </div>
              <div className="overlay">
                <div class="text-over">
                  <h6 className="Mo-Text">Cloud Migration</h6>
                  <div className="LOREM-DUMMY">
                    <p className="ipsum-Simple">
                      "Cloud migration tools and accelerators streamline and
                      expedite the seamless transition of applications, data,
                      and infrastructure to cloud environments, optimizing
                      scalability, agility, and cost-effectiveness for
                      organizations."
                    </p>
                    <i
                      class="fa fa-angle-right home-angle-lorem"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row boost-now-Home-1">
            <div className="col-md-3 WORLD-HOME">
              <div className="moni-home">
                <div className="observe-Home">
                  <div className="moni-observe">
                    <img
                      src="./images/charting.png"
                      className="monitoring-data-Home"
                      alt="star"
                    />
                  </div>
                </div>
                <p className="obser-monitor-Home">Analytics & Charting</p>
              </div>
              <div className="overlay">
                <div class="text-over">
                  <h6 className="Mo-Text">Analytics & Charting</h6>
                  <div className="LOREM-DUMMY">
                    <p className="ipsum-Simple">
                      "Analytics and charting tools and accelerators transform
                      raw data into actionable insights, providing visually
                      compelling representations that empower decision-makers to
                      derive meaningful conclusions and drive strategic
                      outcomes."
                    </p>
                    <i
                      class="fa fa-angle-right home-angle-lorem"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 WORLD-HOME">
              <div className="moni-home">
                <div className="observe-Home">
                  <div className="moni-observe">
                    <img
                      src="./images/esg.png"
                      className="monitoring-data-Home"
                      alt="star"
                    />
                  </div>
                </div>
                <p className="obser-monitor-Home">ESG</p>
              </div>
              <div className="overlay">
                <div class="text-over">
                  <h6 className="Mo-Text">ESG</h6>
                  <div className="LOREM-DUMMY">
                    <p className="ipsum-Simple">
                      "ESG (Environmental, Social, and Governance) tools and
                      accelerators enable organizations to measure, manage, and
                      report on sustainability and ethical practices, fostering
                      responsible business conduct and enhancing corporate
                      accountability."
                    </p>
                    <i
                      class="fa fa-angle-right home-angle-lorem"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 WORLD-HOME">
              <div className="moni-home">
                <div className="observe-Home">
                  <div className="moni-observe">
                    <img
                      src="./images/cyber-home.png"
                      className="monitoring-data-Home"
                      alt="star"
                    />
                  </div>
                </div>
                <p className="obser-monitor-Home">Cyber Security</p>
              </div>
              <div className="overlay">
                <div class="text-over">
                  <h6 className="Mo-Text">Cyber Security</h6>
                  <div className="LOREM-DUMMY">
                    <p className="ipsum-Simple">
                      "Cybersecurity tools and accelerators fortify digital
                      defenses, offering proactive threat detection, rapid
                      response capabilities, and robust safeguards to protect
                      against evolving cyber threats and ensure the resilience
                      of digital assets."
                    </p>
                    <i
                      class="fa fa-angle-right home-angle-lorem"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 WORLD-HOME">
              <div className="moni-home">
                <div className="observe-Home">
                  <div className="moni-observe">
                    <img
                      src="./images/edge-home.png"
                      className="monitoring-data-Home"
                      alt="star"
                    />
                  </div>
                </div>
                <p className="obser-monitor-Home">IOT & Edge Computing</p>
              </div>
              <div className="overlay">
                <div class="text-over">
                  <h6 className="Mo-Text">IOT & Edge Computing</h6>
                  <div className="LOREM-DUMMY">
                    <p className="ipsum-Simple">
                      "IoT and Edge Computing tools and accelerators empower
                      decentralized processing and real-time insights, enabling
                      efficient management, analysis, and optimization of data
                      at the edge, enhancing responsiveness and scalability in
                      interconnected systems."
                    </p>
                    <i
                      class="fa fa-angle-right home-angle-lorem"
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>

            {showCards && (
              <div className="row boost-now-Home-2">
                <div className="col-md-3 WORLD-HOME new-Home-last">
                  <div className="moni-home">
                    <div className="observe-Home">
                      <div className="moni-observe">
                        <img
                          src="./images/gen-home.png"
                          className="monitoring-data-Home"
                          alt="star"
                        />
                      </div>
                    </div>
                    <p className="obser-monitor-Home">Generative AI</p>
                  </div>
                  <div className="overlay">
                    <div class="text-over">
                      <h6 className="Mo-Text">Generative AI</h6>
                      <div className="LOREM-DUMMY">
                        <p className="ipsum-Simple">
                          "Gen AI tools and accelerators harness the power of
                          artificial intelligence to amplify human capabilities,
                          driving innovation, personalized experiences, and
                          optimized decision-making across diverse industries and
                          applications."
                        </p>
                        <i
                          class="fa fa-angle-right home-angle-lorem"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 WORLD-HOME new-Home-last">
                  <div className="moni-home">
                    <div className="observe-Home">
                      <div className="moni-observe">
                        <img
                          src="./images/search.png"
                          className="monitoring-data-Home"
                          alt="star"
                        />
                      </div>
                    </div>
                    <p className="obser-monitor-Home">Search</p>
                  </div>
                  <div className="overlay">
                    <div class="text-over">
                      <h6 className="Mo-Text">Search</h6>
                      <div className="LOREM-DUMMY">
                        <p className="ipsum-Simple">
                          "Search-based tools and accelerators enhance information
                          retrieval and user experience by leveraging advanced
                          algorithms, semantic understanding, and personalized
                          indexing, ensuring efficient access to relevant data and
                          insights."
                        </p>
                        <i
                          class="fa fa-angle-right home-angle-lorem"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>



          <div className="To-accrs" onClick={handleTextClick} style={{ cursor: 'pointer' }}>
            <h5 className="explore-Tool-Acc">Explore Tool & Accelerators</h5>{showCards ? '' : ''}
            <i
              class="fa fa-angle-right home-angle-acc"
              aria-hidden="true"
            ></i>
          </div>

        </div>
      </section>

      <section className="microsoft-images-landing">
        <div>
          <div>
            <h4 className="container col-md-4 partnered-home-heading">
              We’ve partnered with the best to bring you the latest
            </h4>
          </div>

          <div className="container bring-You-latest">
            <div className="row brand-images">
              <div>
                <img
                  className="land-img-1"
                  src="./images/microsoft-logo.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="land-img-2"
                  src="./images/cloudgoogle.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="land-img-3"
                  src="./images/snowflake-home.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="land-img-4"
                  src="./images/databricks-home.png"
                  alt="srd"
                  width={100}
                />
              </div>
              <div>
                <img
                  className="land-img-5"
                  src="./images/aws-landing.png"
                  alt="srd"
                  width={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Landing-play-bg-video">
        <div className="">
          <div className="overlay-landing-page">
            <div className="gradient-layer">
              <video className="lANDING-VIdeo video-overlay" autoPlay loop muted>
                <source src={footerland} type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="LANDING-1-science">
            <div className="container">
              <div className="row">
                <h4 className="container col-md-7 future-home-complete">
                  Unlock your complete potential for a future filled with
                  limitless opportunities.
                </h4>
                <p className="container col-md-8 collaborative-landing">
                  Explore a purposeful career journey within a collaborative
                  setting.
                </p>
              </div>
              <div>
                <a href="./people" style={{ textDecoration: "none" }}>
                  <button
                    className="Homepage-Contact-Us"
                    style={{ margin: "auto" }}
                  >
                    Careers
                    <i
                      class="fa fa-angle-right home-angle"
                      aria-hidden="true"
                    ></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
