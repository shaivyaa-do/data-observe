import React, { useState, useEffect } from "react";
import "./Domonitor.css";
import Navbar from "../../components/Layout/Navbar";
import Faq from "../../components/Common/Faq";
import Talktous from "../../components/Common/Talktous";

import Footer from "../../components/Layout/Footer";
function Domonitor() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 2) {
          setActiveLink(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //scroll

  const [visible, setVisible] = useState(false);
  const [dotVisible, setdotVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    console.log(scrolled, "scrolled");
    if (scrolled > 500) {
      setVisible(true);
      setdotVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
      setdotVisible(false);
    }
  };
  // const dotVisibleData = () => {
  //   const scrolled = document.getElementById("lastDiv")
  //   console.log(scrolled)
  //  if(scrolled){
  //   display
  //  }
  // };
  const scrollToTop = () => {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div>
      <div>
        <Navbar />
        <div className="do-monitor-m">
          <section className="web-point d-md-block d-none">
            <div
              style={{ display: dotVisible ? "inline" : "none" }}
              class="sidebar-col tablet-hidden mobile-hidden"
            >
              <div id="swiper-container" class="list-holder swiper-container">
                <ul class="side-nav">
                  <li>
                    <a
                      href="#metric"
                      className={
                        activeLink === "metric" ? "nav-link active" : "nav-link"
                      }
                      title="Metric Collection"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#problem"
                      className={
                        activeLink === "problem"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Problem Detection"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#alerting1"
                      className={
                        activeLink === "alerting1"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Alerting"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#datavisual"
                      className={
                        activeLink === "datavisual"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Visualization"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#singlepane"
                      className={
                        activeLink === "singlepane"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Single Pane of Glass"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#business"
                      className={
                        activeLink === "business"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Business Monitoring"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#integration"
                      className={
                        activeLink === "integration"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Integrations"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#security"
                      className={
                        activeLink === "security"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Security"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#deployment"
                      className={
                        activeLink === "deployment"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Deployment"
                    ></a>
                  </li>
                  <li>
                    <a
                      href="#scalability"
                      className={
                        activeLink === "scalability"
                          ? "nav-link active"
                          : "nav-link"
                      }
                      title="Scalability"
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <div className="observability-MAIN do-mon">
            <img
              src="./images/do-monitor-01.png"
              className="do360bannerclass do360bannerclass-01 w-100"
              alt="#"
            />

            <div className="header-section Domonitor-Header">
              <h1
                className="container"
                style={{ color: "#FFF", fontSize: "20px", fontWeight: "700" }}
              >
                Domonitor
              </h1>
              {/*change class  */}
              <div
                className="container monitor-text"
                style={{ paddingTop: "20px" }}
              >
                <div
                  className="row"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <h1
                    className="col-md-6 mobile-text-01"
                    style={{
                      color: "#FFF",
                      fontSize: "44px",
                      fontWeight: "700",
                    }}
                  >
                    The all-in-one,solution that lets you monitor anything
                  </h1>
                  {/*change class  */}
                  <p
                    className="col-md-6 domonitor-mobile"
                    style={{
                      marginTop: "15px",
                      fontSize: "16px",
                      color: "rgba(255, 255, 255, 0.80)",
                      fontWeight: "400px",
                    }}
                  >
                    Meet DO Monitor a single pane of glass view of your whole IT
                    infrastructure stack
                  </p>

                  <input
                    placeholder="Businees Email"
                    className="col-md-9 emailClass"
                    style={{
                      background: "none",
                      borderBottom: "1px solid #FFFFFF",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      color: "#FFFFFF",
                    }}
                  />
                  <br />
                  <div className="container">
                    <button className="demoClass new-domi">Get a demo</button>
                  </div>
                  {/* <div className="productvideoClass-1 col-md-8">
            <video className="productplayClass" autoPlay loop muted>
                <source src={productVideo} type="video/mp4" />
              </video>  
            <img
              src="images/product360videoimg.png"
              alt="#"
              className="playClass-1"
            />
          </div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="domonitor2ndbg">
          <div className="domoniter-2ndbg">
            <h1 className="font-size">Explore DO Monitor features</h1>
            <div className="dmtr2secs">
              <div className="bg2ndhead-domonitor">
                <a href="#metric">
                  <button className="btn-domonitor1">
                    <img src="/images/icons_metric.png" alt="..." />
                    <span className="btn1-domonitor">Metric Collection</span>
                  </button>
                </a>
                <a href="#problem">
                  <button className="btn-domonitor1">
                    <img src="/images/icons_problem.png" alt="..." />
                    <span className="btn1-domonitor">Problem Detection</span>
                  </button>
                </a>
                <a href="#alerting1">
                  <button className="btn-domonitor1">
                    <img src="/images/icons_alerting.png" alt="..." />
                    <span className="btn1-domonitor">Alerting</span>
                  </button>
                </a>
                <a href="#datavisual">
                  <button className="btn-domonitor1">
                    <img
                      src="/images/icons_data_visualization2.png"
                      alt="..."
                    />
                    <span className="btn1-domonitor">Data Visualization</span>
                  </button>
                </a>
                <a href="#singlepane">
                  <button className="btn-domonitor1">
                    <img
                      src="/images/icons_single_pane_of_glass.png"
                      alt="..."
                    />
                    <span className="btn1-domonitor">Single Pane of Glass</span>
                  </button>
                </a>
                <a href="#business">
                  <button className="btn-domonitor1">
                    <img
                      src="/images/icons_business_monitoring.png"
                      alt="..."
                    />
                    <span className="btn1-domonitor">Business Monitoring</span>
                  </button>
                </a>
                <a href="#integration">
                  <button className="btn-domonitor1">
                    <img src="/images/icons_integrations.png" alt="..." />
                    <span className="btn1-domonitor">Integrations</span>
                  </button>
                </a>
                <a href="#security">
                  <button className="btn-domonitor1">
                    <img src="/images/icons_security2.png" alt="..." />
                    <span className="btn1-domonitor">Security</span>
                  </button>
                </a>
                <a href="#deployment">
                  <button className="btn-domonitor1">
                    <img src="/images/icons_deployment1.png" alt="..." />
                    <span className="btn1-domonitor">Deployment</span>
                  </button>
                </a>
                <a href="#scalability">
                  <button className="btn-domonitor1">
                    <img src="/images/icons_scalability1.png" alt="..." />
                    <span className="btn1-domonitor">Scalability</span>
                  </button>
                </a>
              </div>
              {/* <div className="bg2ndhead-domonitors">
          
          </div> */}
            </div>
          </div>
        </div>

        {/* web */}

        {/* <section className="web-point d-md-block d-none">
     <div style={{ display: dotVisible ? "inline" : "none" }} class="sidebar-col tablet-hidden mobile-hidden">
        <div id="swiper-container" class="list-holder swiper-container">
          <ul class="side-nav">
            <li>
              <a href="#metric" className={activeLink === 'metric' ? 'nav-link active' : 'nav-link'} title="Metric Collection"></a>
            </li>
            <li>
              <a href="#problem" className={activeLink === 'problem' ? 'nav-link active' : 'nav-link'} title="Problem Detection"></a>
            </li>
            <li>
              <a href="#alerting1" className={activeLink === 'alerting1' ? 'nav-link active' : 'nav-link'} title="Alerting"></a>
            </li>
            <li>
              <a href="#datavisual" className={activeLink === 'datavisual' ? 'nav-link active' : 'nav-link'} title="Visualization"></a>
            </li>
            <li>
              <a href="#singlepane"  className={activeLink === 'singlepane' ? 'nav-link active' : 'nav-link'} title="Single Pane of Glass"></a>
            </li>
            <li>
              <a href="#business" className={activeLink === 'business' ? 'nav-link active' : 'nav-link'} title="Business Monitoring"></a>
            </li>
            <li>
              <a href="#integration" className={activeLink === 'integration' ? 'nav-link active' : 'nav-link'} title="Integrations"></a>
            </li>
            <li>
              <a href="#security" className={activeLink === 'security' ? 'nav-link active' : 'nav-link'} title="Security"></a>
            </li>
            <li>
              <a href="#deployment" className={activeLink === 'deployment' ? 'nav-link active' : 'nav-link'} title="Deployment"></a>
            </li>
            <li>
              <a href="#scalability" className={activeLink === 'scalability' ? 'nav-link active' : 'nav-link'} title="Scalability"></a>
            </li>
          </ul>
        </div>
      </div>
     </section> */}

        {/* mobile */}

        <section className="web-point d-md-block d-none">
          <div
            style={{ display: dotVisible ? "inline" : "none" }}
            class="sidebar-col tablet-hidden mobile-hidden"
          >
            <div id="swiper-container" class="list-holder swiper-container">
              <ul class="side-nav">
                <li>
                  <a
                    href="#metric"
                    className={
                      activeLink === "metric" ? "nav-link active" : "nav-link"
                    }
                    title="Metric Collection"
                  ></a>
                </li>
                <li>
                  <a
                    href="#problem"
                    className={
                      activeLink === "problem" ? "nav-link active" : "nav-link"
                    }
                    title="Problem Detection"
                  ></a>
                </li>
                <li>
                  <a
                    href="#alerting1"
                    className={
                      activeLink === "alerting1"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Alerting"
                  ></a>
                </li>
                <li>
                  <a
                    href="#datavisual"
                    className={
                      activeLink === "datavisual"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Visualization"
                  ></a>
                </li>
                <li>
                  <a
                    href="#singlepane"
                    className={
                      activeLink === "singlepane"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Single Pane of Glass"
                  ></a>
                </li>
                <li>
                  <a
                    href="#business"
                    className={
                      activeLink === "business" ? "nav-link active" : "nav-link"
                    }
                    title="Business Monitoring"
                  ></a>
                </li>
                <li>
                  <a
                    href="#integration"
                    className={
                      activeLink === "integration"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Integrations"
                  ></a>
                </li>
                <li>
                  <a
                    href="#security"
                    className={
                      activeLink === "security" ? "nav-link active" : "nav-link"
                    }
                    title="Security"
                  ></a>
                </li>
                <li>
                  <a
                    href="#deployment"
                    className={
                      activeLink === "deployment"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Deployment"
                  ></a>
                </li>
                <li>
                  <a
                    href="#scalability"
                    className={
                      activeLink === "scalability"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Scalability"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mobile-point d-md-none d-block">
          <div class="sidebar-col tablet-hidden mobile-hidden">
            <div id="swiper-container" class="list-holder swiper-container">
              <ul class="side-nav">
                <li>
                  <a
                    href="#metric"
                    className={
                      activeLink === "metric" ? "nav-link active" : "nav-link"
                    }
                    title="Metric Collection"
                  ></a>
                </li>
                <li>
                  <a
                    href="#problem"
                    className={
                      activeLink === "problem" ? "nav-link active" : "nav-link"
                    }
                    title="Problem Detection"
                  ></a>
                </li>
                <li>
                  <a
                    href="#alerting1"
                    className={
                      activeLink === "alerting1"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Alerting"
                  ></a>
                </li>
                <li>
                  <a
                    href="#datavisual"
                    className={
                      activeLink === "datavisual"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Visualization"
                  ></a>
                </li>
                <li>
                  <a
                    href="#singlepane"
                    className={
                      activeLink === "singlepane"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Single Pane of Glass"
                  ></a>
                </li>
                <li>
                  <a
                    href="#business"
                    className={
                      activeLink === "business" ? "nav-link active" : "nav-link"
                    }
                    title="Business Monitoring"
                  ></a>
                </li>
                <li>
                  <a
                    href="#integration"
                    className={
                      activeLink === "integration"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Integrations"
                  ></a>
                </li>
                <li>
                  <a
                    href="#security"
                    className={
                      activeLink === "security" ? "nav-link active" : "nav-link"
                    }
                    title="Security"
                  ></a>
                </li>
                <li>
                  <a
                    href="#deployment"
                    className={
                      activeLink === "deployment"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Deployment"
                  ></a>
                </li>
                <li>
                  <a
                    href="#scalability"
                    className={
                      activeLink === "scalability"
                        ? "nav-link active"
                        : "nav-link"
                    }
                    title="Scalability"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* new */}
        <section id="metric" className="one">
          <div>
            <div className="container">
              <h2 className="section1head">
                Keep control of your infrastructure by collecting
              </h2>
              <div className="pillarnavs mt-4">
                <ul
                  class="nav nav-pills justify-content-center align-items-center mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link active linkClass"
                      id="pills-catalog-tab-keep-one"
                      data-toggle="pill"
                      href="#pills-catalog-keep-one"
                      role="tab"
                      aria-controls="pills-catalog-keep-one"
                      aria-selected="true"
                    >
                      Collect From <br /> Any Source
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-freshness-tab-keep-two"
                      data-toggle="pill"
                      href="#pills-freshness-keep-two"
                      role="tab"
                      aria-controls="pills-freshness-keep-two"
                      aria-selected="false"
                    >
                      Flexible <br /> metric collection
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-keep-three"
                      data-toggle="pill"
                      href="#pills-schema-keep-three"
                      role="tab"
                      aria-controls="pills-schema-keep-three"
                      aria-selected="false"
                    >
                      DOM
                      <br />
                      Agent
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-volume-tab-keep-four"
                      data-toggle="pill"
                      href="#pills-volume-keep-four"
                      role="tab"
                      aria-controls="pills-volume-keep-four"
                      aria-selected="false"
                    >
                      Agent-less <br />
                      monitoring
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-lineage-tab-keep-five"
                      data-toggle="pill"
                      href="#pills-lineage-keep-five"
                      role="tab"
                      aria-controls="pills-lineage-keep-five"
                      aria-selected="false"
                    >
                      Synthetic <br />
                      monitoring
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-lineage-tab-keep-six"
                      data-toggle="pill"
                      href="#pills-lineage-keep-six"
                      role="tab"
                      aria-controls="pills-lineage-keep-six"
                      aria-selected="false"
                    >
                      Custom <br />
                      collection methods
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-lineage-tab-keep-seven"
                      data-toggle="pill"
                      href="#pills-lineage-keep-seven"
                      role="tab"
                      aria-controls="pills-lineage-keep-seven"
                      aria-selected="false"
                    >
                      Data <br />
                      transformation
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active matter"
                    id="pills-catalog-keep-one"
                    role="tabpanel"
                    aria-labelledby="pills-catalog-tab-keep-one"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead">
                          Collect metrics from any source
                        </h3>
                        <p className="qualitymatter text-justify">
                          Simple interface for prompt engineers to create, test,
                          and change prompts .
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Network devices
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Cloud services, containers, virtual
                                      machines
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      OS level monitoring
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Log files
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Databases
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Application
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Services
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      IoT sensors
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Web page monitoring
                                    </p>
                                  </li>

                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      HTTP/HTTPS endpoint monitoring
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Support for full range of industry
                                      standard protocols
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Collect data from external API end-points
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/anysource.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-freshness-keep-two"
                    role="tabpanel"
                    aria-labelledby="pills-freshness-tab-keep-two"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead">
                          Escalate for faster resolution
                        </h3>
                        <li className="d-flex">
                          <img
                            style={{ width: "23px", height: "23px" }}
                            src="/images/Mask groupdomonitor.png"
                            alt="..."
                          />
                          <p className="section-card-para-dom">
                            Push and pull methods for data collection:
                          </p>
                        </li>

                        <div className="sectioncards-domonitor">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <p>High intensity data collection:</p>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Minimal polling interval is 1 second
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Scheduling of metric collection
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Ability to override polling intervals for
                                      specific time periods
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Data throttling for high frequency
                                      monitoring
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <p>Collect data of any type:</p>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Numeric
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Text
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Binary
                                    </p>
                                  </li>

                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Structured JSON, XML, CSV, and other data
                                      formats
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <p>Log file monitoring:</p>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Collect and filter log file entries
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Collect eventlog entries on Windows
                                      environments
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Retrieve the number of matching log file
                                      entries
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/metric.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-keep-three"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-keep-three"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead">
                          Deploy DOM agent for in depth monitoring
                        </h3>
                        <p className="qualitymatter text-justify">
                          Native high performance Agent for all Operating
                          Systems and hardware platforms:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Negligible performance overhead
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Push or pull data delivery
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Flexible scheduling intervals
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Easy to extend with plugins or external
                                      scripts
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Immune to communication problems
                                      (in-memory or on-disk data buffering)
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Backward compatibility for effortless
                                      upgrades
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Access to Windows WMI and performance
                                      counters
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Can report to multiple DOM Servers for
                                      redundancy and HA
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Strong TLS or shared key encryption for
                                      communications
                                    </p>
                                  </li>

                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Deploy DOM agent as a package, use MSI or
                                      command line installer on Windows or
                                      deploy pre-compiled agent binaries
                                      pre-compiled agent binaries
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <p>Deploy DOM agent on any operating system:</p>

                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Any Linux distribution
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Solaris
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">AIX</p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      macOS
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">BSD</p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Windows
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/zab-three.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-volume-keep-four"
                    role="tabpanel"
                    aria-labelledby="pills-volume-tab-keep-four"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead">
                          Utilize agent-less monitoring using any protocols
                        </h3>
                        <p className="qualitymatter text-justify">
                          DOM supports whole range of various protocols for
                          remote monitoring of services:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Web monitoring
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Scriptable synthetic monitoring
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      SNMP (v1/2c/3) polling and trapping
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Java application monitoring
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      IPMI
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      SSH/Telnet checks
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      ODBC monitoring
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      ICMP and TCP checks
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Prometheus
                                    </p>
                                  </li>

                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Easy to extend using external scripts or
                                      plugins
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Collect data from HTTP endpoints
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Modbus and MQTT protocol support
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/agent-moni.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-lineage-keep-five"
                    role="tabpanel"
                    aria-labelledby="pills-lineage-tab-keep-five"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead">
                          Emulate real-life transactions with synthetic
                          monitoring
                        </h3>
                        <p className="qualitymatter text-justify">
                          Synthetic monitoring helps with creation of complex
                          scenarios for reliable monitoring of WEB applications
                          and APIs:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="">
                            <div className="col-md-12">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Immediately inform users about new
                                      problems
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Proactively execute remote scripts
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/synthetic.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-lineage-keep-six"
                    role="tabpanel"
                    aria-labelledby="pills-lineage-tab-keep-six"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h2 className="qualityhead">
                          Extend your monitoring by implementing custom data
                          collection methods
                        </h2>
                        <p className="text-justify">
                          DOM data collection can be easily extended using:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="">
                            <div className="col-md-12">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      CLI utility for pushing any data
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      External scripts written in any scripting
                                      language
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Synthetic monitoring for complex WEB and
                                      HTTP scenarios
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <p style={{ textAlign: "justify" }}>
                              DOM agent supports custom plugins, you can write
                              your own plugins, call our support to enable.
                            </p>
                            <div className="col-md-12">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Learn from a selection of examples
                                      provided by DOM developers
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Build your first DOM plugin by following a
                                      step-by-step tutorial
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/collection.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-lineage-keep-seven"
                    role="tabpanel"
                    aria-labelledby="pills-lineage-tab-keep-seven"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead">
                          Collect, normalize and optimize your data by using
                          transformations
                        </h3>
                        <p className="qualitymatter text-justify">
                          Normalize and transform any kind of data before
                          storing it:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Unstructured text with trims, replace
                                      functions and regular expressions
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      JSONPath, XPath expressions and CSV to
                                      JSON transformation
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Calculate delta between values
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Perform calculations with numeric values
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Numeral system transformations
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Validate your data and check if the
                                      received value is in a specified value
                                      range or contains errors
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Perform custom data transformations with
                                      JavaScript
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Discard repeating values with throttling
                                    </p>
                                  </li>

                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Extract Prometheus exporter data
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <p>
                              Collect data in bulk and use it to populate
                              multiple dependent metrics:
                            </p>

                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Transform and extract only the required
                                      data
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Reduce the number of
                                      connections/queries/calls to the endpoint
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Reduce the network bandwidth by collecting
                                      and transforming metrics in bulk
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Discard initial bulk data and store only
                                      the resulting metrics
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/feature-transform.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="two">
          <div className="detectprob-domonitor">
            <div className="container">
              <h2 className="section1head">Detect problems instantly</h2>
              <div className="pillarnavs mt-4">
                <ul
                  class="nav nav-pills justify-content-center align-items-center mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link active linkClass"
                      id="pills-catalog-tab-detect-one"
                      data-toggle="pill"
                      href="#pills-catalog-detect-one"
                      role="tab"
                      aria-controls="pills-catalog-detect-one"
                      aria-selected="true"
                    >
                      Smart Thresholds
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-fresh-tab-detect-two"
                      data-toggle="pill"
                      href="#pills-fresh-detect-two"
                      role="tab"
                      aria-controls="pills-fresh-detect-two"
                      aria-selected="false"
                    >
                      Trend prediction
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-detect-three"
                      data-toggle="pill"
                      href="#pills-schema-detect-three"
                      role="tab"
                      aria-controls="pills-schema-detect-three"
                      aria-selected="false"
                    >
                      Machine learning
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active matter"
                    id="pills-catalog-detect-one"
                    role="tabpanel"
                    aria-labelledby="pills-catalog-tab-detect-one"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead new-text">
                          Define smart problem thresholds
                        </h3>
                        <p className="qualitymatter text-justify">
                          Forget about tracking your metrics manually. With DOM
                          you can detect problem states within the incoming
                          metric flow automatically:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      High performance problem detection in
                                      real-time
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Highly flexible definition options
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Separate problem and problem resolution
                                      conditions
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Multiple severity levels
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Mark problems as cause or symptom events
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Root cause analysis
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Flapping protection
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Anomaly detection
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Trend prediction
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Detected problems can be classified using
                                      tags for smarter alerting
                                    </p>
                                  </li>

                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Real-time export of detected problem
                                      events to 3rd party systems (Elastic,
                                      Splunk, etc.)
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Manual problem suppression indefinitely or
                                      until a specific point in time
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>

                            <p
                              className="mon-mobile"
                              style={{ textAlign: "justify" }}
                            >
                              DOM provides its users with very flexible,
                              intelligent threshold definition options. While a
                              threshold for trigger may be as simple as "bigger
                              than x", it is possible to use all power of
                              supported functions and operators for statistical
                              analysis of history data.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/smart.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-fresh-detect-two"
                    role="tabpanel"
                    aria-labelledby="pills-fresh-tab-detect-two"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead new-text">
                          React proactively with trend prediction
                        </h3>
                        <p className="qualitymatter text-justify">
                          While it is nice to have thresholds for problem
                          detection, it's more efficient to react to issues
                          proactively. DOM predictive functions can help you
                          achieve that goal:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="">
                            <div className="col-md-12">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Forecasting a value for early alerting
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Predicting time left until reaching a
                                      problem threshold
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/prediction.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-detect-three"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-detect-three"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h3 className="qualityhead new-text">
                          Detect anomalies by using baseline monitoring
                        </h3>
                        <p className="qualitymatter text-justify">
                          Defining problem thresholds manually is not always an
                          efficient approach. In dynamic environments where the
                          baseline values can periodically change it is
                          important to automatically calculate a reference point
                          against which the problem threshold will be
                          calculated. DOM Baseline monitoring enables you to do
                          just that:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="">
                            <div className="col-md-12">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Detect anomalies based on analysis of
                                      history data in real-time
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Get powerful insights using baseline
                                      monitoring
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/detection.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="alerting1" className="three">
          <div className="container pt-5 mt-3 get-alerted">
            <div>
              <h1 className="headingpillars">Get alerted on critical issues</h1>
            </div>
            <div className="pillarnavs mt-4">
              <ul
                class="nav nav-pills justify-content-center align-items-center mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link active linkClass"
                    id="pills-catalog-tab-critical-one"
                    data-toggle="pill"
                    href="#pills-catalog-critical-one"
                    role="tab"
                    aria-controls="pills-catalog-critical-one"
                    aria-selected="true"
                  >
                    Monitoring Channels
                  </a>
                </li>
                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-freshness-tab-critical-two"
                    data-toggle="pill"
                    href="#pills-freshness-critical-two"
                    role="tab"
                    aria-controls="pills-freshness-critical-two"
                    aria-selected="false"
                  >
                    Messages Customization
                  </a>
                </li>
                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-schema-tab-critical-three"
                    data-toggle="pill"
                    href="#pills-schema-critical-three"
                    role="tab"
                    aria-controls="pills-schema-critical-three"
                    aria-selected="false"
                  >
                    Escalation Scenario
                  </a>
                </li>
                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-volume-tab-critical-four"
                    data-toggle="pill"
                    href="#pills-volume-critical-four"
                    role="tab"
                    aria-controls="pills-volume-critical-four"
                    aria-selected="false"
                  >
                    Auto- Remediation
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active matter"
                  id="pills-catalog-critical-one"
                  role="tabpanel"
                  aria-labelledby="pills-catalog-tab-critical-one"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h1 className="qualityhead">Receive problem Alerts</h1>
                      <p className="qualitymatter text-justify">
                        Use multiple messaging channels to notify the
                        responsible person or people about the different kinds
                        of events occurring in your environment:
                      </p>
                      <div className="sectioncards-domonitor">
                        <div className="sectioncard-domonitor-2">
                          <div className="row DO-MONITOR-alerts-PROBLEM">
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Alerting systems
                                      <ul className="d-flex MoniTor-sizE">
                                        <div className="list-type">
                                          <li>VictorOPS</li>
                                          <li>Opsgenie</li>
                                          <li>Pagerduty</li>
                                        </div>
                                        <div className="list-type-1">
                                          <li>SIGNL4</li>
                                          <li>And more</li>
                                        </div>
                                      </ul>
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Email
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      SMS for reliable alerts using USB modems
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Online SMS gateways
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      communication platforms:
                                      <ul className="d-flex MoniTor-sizE">
                                        <div className="list-type">
                                          <li>Slack</li>
                                          <li style={{ fontSize: "15px" }}>
                                            MS Teams
                                          </li>
                                          <li>Telegram</li>
                                        </div>
                                        <div className="list-type-1">
                                          <li>Express.ms</li>
                                          <li>Rocket.chat</li>
                                          <li>And more</li>
                                        </div>
                                      </ul>
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Webhooks for integration with external
                                      messaging, ITSM or ticketing systems
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-5 last-point">
                      <img
                        src="images/messages.png"
                        alt="#"
                        className="qualityimgclass"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-freshness-critical-two"
                  role="tabpanel"
                  aria-labelledby="pills-freshness-tab-critical-two"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h1 className="qualityhead">Customize alert messages</h1>
                      <p className="qualitymatter text-justify">
                        Define different messages for different messaging
                        channels. You can either utilize the default message
                        templates or create and customize your own message
                        template:
                      </p>
                      <div className="sectioncards-domonitor">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <ul className="MoniTor-sizE">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Customize messages based on issue type and
                                    the role of the recipient
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Enrich messages with any runtime and
                                    inventory information
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <ul className="MoniTor-sizE">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Send scheduled PDF reports for insight and
                                    long term analysis of data
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-5">
                      <img
                        src="images/customization.png"
                        alt="#"
                        className="qualityimgclass"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-schema-critical-three"
                  role="tabpanel"
                  aria-labelledby="pills-schema-tab-critical-three"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h1 className="qualityhead">
                        Escalate for faster resolution
                      </h1>
                      <p className="qualitymatter text-justify">
                        Define escalation scenarios of varying complexity
                        depending on the required workflow. From simple
                        notifications and escalations to different users, to
                        delayed notifications and automatic issue remediation:
                      </p>
                      <div className="sectioncards-domonitor">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <ul className="MoniTor-sizE">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Immediately inform users about new problems
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Proactively execute remote scripts
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Repeat notifications until problem is
                                    resolved
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Delay notifications and remote commands
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <ul className="MoniTor-sizE">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Escalate problems to other user groups
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Different escalation paths for acknowledged
                                    and unacknowledged problems
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Send a recovery message to all of the
                                    involved parties
                                  </p>
                                </li>

                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Unlimited number of escalation steps
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-5">
                      <img
                        src="images/escalation.png"
                        alt="#"
                        className="qualityimgclass"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-volume-critical-four"
                  role="tabpanel"
                  aria-labelledby="pills-volume-tab-critical-four"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h1 className="qualityhead">
                        Let DOM resolve your issues automatically
                      </h1>
                      <p className="qualitymatter text-justify">
                        With DOM you can not only receive a notification about a
                        problem but also automatically resolve it. A remediation
                        script or command can be executed to attempt and resolve
                        the issue:
                      </p>
                      <p style={{ textAlign: "justify" }}>
                        Execute a remediation script to:
                      </p>

                      <div className="sectioncards-domonitor">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <ul className="MoniTor-sizE">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Restart a service
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Manage your cloud resources
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <ul className="MoniTor-sizE">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Perform automatic resource rescaling
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "23px", height: "23px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Executing any other custom logic
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-5">
                      <img
                        src="images/automatic-recom.png"
                        alt="#"
                        className="qualityimgclass"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="datavisual" className="four">
          <div className="detectprob-domonitor">
            <div className="container pt-5 mt-3 ">
              <div>
                <h2 className="do-point" style={{ textAlign: "center" }}>
                  Gain additional insights and extend observability by powerful
                  data visualization
                </h2>
              </div>
              <div className="pillarnavs mt-4">
                <ul
                  class="nav nav-pills justify-content-center align-items-center mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link active linkClass"
                      id="pills-catalog-tab-gain-one"
                      data-toggle="pill"
                      href="#pills-catalog-gain-one"
                      role="tab"
                      aria-controls="pills-catalog-gain-one"
                      aria-selected="true"
                    >
                      Visualization
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-freshness-tab-gain-two"
                      data-toggle="pill"
                      href="#pills-freshness-gain-two"
                      role="tab"
                      aria-controls="pills-freshness-gain-two"
                      aria-selected="false"
                    >
                      Graphs
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-gain-three"
                      data-toggle="pill"
                      href="#pills-schema-gain-three"
                      role="tab"
                      aria-controls="pills-schema-gain-three"
                      aria-selected="false"
                    >
                      Geo-Maps
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-volume-tab-gain-four"
                      data-toggle="pill"
                      href="#pills-volume-gain-four"
                      role="tab"
                      aria-controls="pills-volume-gain-four"
                      aria-selected="false"
                    >
                      Infrastructure Maps
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-lineage-tab-gain-five"
                      data-toggle="pill"
                      href="#pills-lineage-gain-five"
                      role="tab"
                      aria-controls="pills-lineage-gain-five"
                      aria-selected="false"
                    >
                      Scheduled Reports
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-events-tab-gain-six"
                      data-toggle="pill"
                      href="#pills-events-gain-six"
                      role="tab"
                      aria-controls="pills-events-gain-six"
                      aria-selected="false"
                    >
                      Custom Dashboard Widgets
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active matter"
                    id="pills-catalog-gain-one"
                    role="tabpanel"
                    aria-labelledby="pills-catalog-tab-gain-one"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h2>
                          Display the collected data in many possible ways
                        </h2>
                        <p className="qualitymatter text-justify">
                          Define widget-based dashboards displaying relevant
                          information:
                        </p>
                        <div>
                          <div className="col-md-12">
                            <ul className="vendors-list">
                              <li className="d-flex">
                                <img
                                  style={{ width: "20px", height: "20px" }}
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Large selection of many different widgets
                                </p>
                              </li>
                              <li className="d-flex">
                                <img
                                  style={{ width: "20px", height: "20px" }}
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Simple drag and drop placement and scaling of
                                  widgets
                                </p>
                              </li>
                              <li className="d-flex">
                                <img
                                  style={{ width: "20px", height: "20px" }}
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Each widget is highly customizable to fit your
                                  needs
                                </p>
                              </li>
                              <li className="d-flex">
                                <img
                                  style={{ width: "20px", height: "20px" }}
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Display metrics, problems, infrastructure and{" "}
                                  geo maps on your dashboards
                                </p>
                              </li>
                              <li className="d-flex">
                                <img
                                  style={{ width: "20px", height: "20px" }}
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Display your current business service SLA{" "}
                                  information on your dashboards
                                </p>
                              </li>
                            </ul>
                          </div>
                          <p className="gainparain-domonitor">
                            Access your metrics, problems, reports and maps with
                            a click of a button.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/gainadditional.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-freshness-gain-two"
                    role="tabpanel"
                    aria-labelledby="pills-freshness-tab-gain-two"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h2 className="new-text1">
                          Analyze and correlate metrics with graphs
                        </h2>
                        <p className="qualitymatter text-justify">
                          Define custom graphs or access ad-hoc graphs with a
                          click of a button:
                        </p>
                        <div>
                          <div className="sectioncard-domonitor-2">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Multiple graph types
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Displaying of problems on the graphs
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Flexible time navigator
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Display single or multiple metrics with
                                        a click of a button
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Use of trend data for long term data
                                        overview
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Display history data for any period of
                                        time
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Display aggregated data graphs
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Export graphs as images
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5 last-point">
                        <img
                          src="images/dashboard.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-gain-three"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-gain-three"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h2 className="new-text">
                          Keep track of your monitoring targets on an
                          interactive geo-map
                        </h2>

                        <div>
                          <div className="sectioncard-domonitor-2">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Select from multiple geo-map providers
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Display a geographical overview of your
                                        environment on DOM dashboards
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Access any of your monitoring targets
                                        from the geo-map
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Group your monitoring targets into a
                                        cluster on the geo-map
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Follow the status of individual
                                        monitoring targets or the whole cluster
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5 last-point1">
                        <img
                          src="images/geomaps.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-volume-gain-four"
                    role="tabpanel"
                    aria-labelledby="pills-volume-tab-gain-four"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h2 className="new-text1">
                          Present status of your infrastructure on maps
                        </h2>
                        <p className="qualitymatter text-justify">
                          Display statuses of your elements together with real
                          time data to get a detailed overview of your
                          infrastructure on a DOM map:
                        </p>
                        <div>
                          <div className="sectioncard-domonitor-2">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Ability to display any data in real time
                                        on your maps
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Easy drag-and-drop map element
                                        deployment
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Clone and modify existing maps
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Execute scripts within your
                                        infrastructure from the map screen
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Create multi-level maps with submaps
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Context-based interaction with map
                                        elements
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Create linkages between map elements
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Create nested maps - change the scope of
                                        your current view with a click of a
                                        button
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5 infrastructure">
                        <img
                          src="images/infra-maps.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-lineage-gain-five"
                    role="tabpanel"
                    aria-labelledby="pills-lineage-tab-gain-five"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h2 className="new-text1">
                          Generate scheduled PDF reports
                        </h2>
                        <p className="qualitymatter text-justify">
                          Receive scheduled PDF reports providing useful
                          statistics of your environment:
                        </p>
                        <div>
                          <div className="sectioncard-domonitor-2">
                            <div className="col-md-12">
                              <ul className="vendors-list">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Get reports delivered straight to your Inbox
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Can be scheduled for daily, weekly, or
                                    monthly delivery
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Notify your customers about their
                                    infrastructure health
                                  </p>
                                </li>
                              </ul>
                              <p className="gainparain-domonitor">
                                Now any DOM dashboard can be turned into a PDF
                                report!
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/reports.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-events-gain-six"
                    role="tabpanel"
                    aria-labelledby="pills-events-tab-gain-six"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h2 className="new-text1">
                          Extend DOM frontend and create custom dashboard
                          widgets
                        </h2>
                        <p className="qualitymatter text-justify">
                          Extend the native DOM frontend functionality by
                          developing your own frontend widgets and modules:
                        </p>
                        <div>
                          <div className="sectioncard-domonitor-2">
                            <div className="col-md-12">
                              <ul className="vendors-list">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Get reports delivered straight to your Inbox
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Can be scheduled for daily, weekly, or
                                    monthly delivery
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Notify your customers about their
                                    infrastructure health
                                  </p>
                                </li>
                              </ul>
                              <p className="gainparain-domonitor">
                                Learn how to extend DOM frontend and create your
                                own widgets and modules by visiting DOM
                                Developer Center:
                              </p>
                              <ul className="vendors-list">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Learn from a selection of examples provided
                                    by DOM developers
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Write your first DOM module or widget by
                                    following a step-by-step tutorial
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Notify your customers about their
                                    infrastructure health
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5 domonitpr-top">
                        <img
                          src="images/custom-dash.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="singlepane" className="five">
          <div className="container">
            <h2 className="section1head">
              Leverage a single pane of glass for your entire infrastructure
            </h2>
            <div className="pillarnavs mt-4">
              <ul
                class="nav nav-pills justify-content-center align-items-center mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link active linkClass"
                    id="pills-catalog-tab-leverage-one"
                    data-toggle="pill"
                    href="#pills-catalog-leverage-one"
                    role="tab"
                    aria-controls="pills-catalog-leverage-one"
                    aria-selected="true"
                  >
                    Widget-based dashboards
                  </a>
                </li>
                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-freshness-tab-leverage-two"
                    data-toggle="pill"
                    href="#pills-freshness-leverage-two"
                    role="tab"
                    aria-controls="pills-freshness-leverage-two"
                    aria-selected="false"
                  >
                    Multi-tenancy
                  </a>
                </li>
                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-schema-tab-leverage-three"
                    data-toggle="pill"
                    href="#pills-schema-leverage-three"
                    role="tab"
                    aria-controls="pills-schema-leverage-three"
                    aria-selected="false"
                  >
                    Inventory information
                  </a>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active matter"
                  id="pills-catalog-leverage-one"
                  role="tabpanel"
                  aria-labelledby="pills-catalog-tab-leverage-one"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="sectionhead-domonitor">
                        Create flexible widget based dashboards
                      </h3>
                      <p className="sectionpara-domonitor">
                        DOM web UI provides multiple ways of presenting a visual
                        overview of your IT environment:
                      </p>
                      <div>
                        <div>
                          <div className="sectioncardm-domonitor">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Widget-based multi-page dashboards
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Easy drag and drop widget placement
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Configure automatic dashboard refresh
                                        intervals
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Ability to clone an existing dashboard
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Private and public dashboards
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Flexible graphs capable of displaying
                                        regular and aggregate data
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Create map hierarchy trees and use them
                                        to navigate through your infrastructure
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Execute a script directly from a
                                        dashboard and remediate an issue or
                                        display additional information
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p>
                                Each of the dashboard elements is extremely
                                flexible and supports multiple view, filters and
                                respects user permissions:
                              </p>
                            </div>

                            <div className="col-md-12">
                              <ul className="vendors-list">
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Filter and display only the required data
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Customize your widgets to display data at
                                    different granularity levels
                                  </p>
                                </li>
                                <li className="d-flex">
                                  <img
                                    style={{ width: "20px", height: "20px" }}
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    User permissions are respected when
                                    displaying data on dashboards
                                  </p>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="sectioncard-domonitor-4">
                          <div className="container sectioncardm-domonitor"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/widget.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-freshness-leverage-two"
                  role="tabpanel"
                  aria-labelledby="pills-freshness-tab-leverage-two"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="sectionhead-domonitor">
                        Provide a monitoring solution for multi-tenant
                        environments
                      </h3>
                      <p className="sectionpara-domonitor">
                        Deploy DOM as the central point of monitoring for
                        multiple organizations:
                      </p>
                      <div>
                        <div>
                          <div className="sectioncardm-domonitor">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Utilize user groups to isolate tenants
                                        from each other
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Define user roles to control user access
                                        to different DOM functions
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Create unique dashboards, maps and{" "}
                                        templates for different tenants
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Keep your tenants up to date with their
                                        environment by configuring scheduled{" "}
                                        reports
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sectioncard-domonitor-4">
                          <div className="container sectioncardm-domonitor"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/multi-tendency.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-schema-leverage-three"
                  role="tabpanel"
                  aria-labelledby="pills-schema-tab-leverage-three"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h2 className="sectionhead-domonitor">
                        Collect and display inventory information
                      </h2>
                      <p className="sectionpara-domonitor">
                        Automatically collect and store inventory information:
                      </p>
                      <div className="col-md-12">
                        <ul className="vendors-list">
                          <li className="d-flex">
                            <img
                              style={{ width: "20px", height: "20px" }}
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Use collected metrics to provide inventory
                              information about your hosts
                            </p>
                          </li>
                          <li className="d-flex">
                            <img
                              style={{ width: "20px", height: "20px" }}
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Combine native inventory data collection with DOM{" "}
                              API to provide additional inventory data
                            </p>
                          </li>
                          <li className="d-flex">
                            <img
                              style={{ width: "20px", height: "20px" }}
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Get an overview of your overall inventory by
                              grouping your hosts based on inventory information
                            </p>
                          </li>
                          <li className="d-flex">
                            <img
                              style={{ width: "20px", height: "20px" }}
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Provide and keep track of geo-map monitoring
                              target coordinates
                            </p>
                          </li>
                          <li className="d-flex">
                            <img
                              style={{ width: "20px", height: "20px" }}
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Dynamically update existing inventory information
                              from collected metrics
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-5 mt-5">
                      <img
                        src="images/inventory.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="business" className="six">
          <div className="detectprob-domonitor">
            <div className="container">
              <h2 className="section1head">
                Keep track of KPI's with business service
              </h2>
              <div className="pillarnavs mt-4">
                <ul
                  class="nav nav-pills justify-content-center align-items-center mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link active linkClass"
                      id="pills-catalog-tab-1"
                      data-toggle="pill"
                      href="#pills-catalog-1"
                      role="tab"
                      aria-controls="pills-catalog-1"
                      aria-selected="true"
                    >
                      Root cause analysis
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-freshness-tab"
                      data-toggle="pill"
                      href="#pills-freshness"
                      role="tab"
                      aria-controls="pills-freshness"
                      aria-selected="false"
                    >
                      Business-level impact
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab"
                      data-toggle="pill"
                      href="#pills-schema"
                      role="tab"
                      aria-controls="pills-schema"
                      aria-selected="false"
                    >
                      SLA Monitoring
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active matter"
                    id="pills-catalog-1"
                    role="tabpanel"
                    aria-labelledby="pills-catalog-tab-1"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Improve problem tracking with root cause
                          analysisDefine smart problem thresholds
                        </h2>
                        <p className="sectionpara-domonitor">
                          Correlate existing and incoming problems and perform
                          root cause analysis:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Prevent floods of secondary issues and display
                                  only the root cause
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Define flexible problem correlation logic{" "}
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Close any related incoming problems if the
                                  root cause is not resolved
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Close existing problems if a root cause
                                  problem has been detected
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Define your service elements with hierarchical
                                  service trees
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/root-cause.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-freshness"
                    role="tabpanel"
                    aria-labelledby="pills-freshness-tab"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Monitor business-level impact
                        </h2>
                        <p className="sectionpara-domonitor">
                          Define services and create service trees to perform
                          impact analysis:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Define and monitor business service SLA levels
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Simulate an outage to see business-level
                                  impact
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Multiple service status calculation algorithms{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Define service weights for custom service
                                  status calculation{" "}
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Calculate your business service availability
                                  based on service weights or number and
                                  percentage of unavailable child services{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>
                          Business services provide full support for
                          multi-talent environments with a flexible permission
                          schema:
                        </p>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                Define roles with limited access to particular
                                services
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                Secure your roles with read or write permissions
                                for your service trees
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 mt-5">
                        <img
                          src="images/bussiness-level.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-schema"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab"
                  >
                    <div className="row">
                      <div className="col-md-7 qualitypara">
                        <h1 className="qualityhead">SLA Monitoring</h1>
                        <p className="qualitymatter text-justify">
                          Define Services and service components with custom SLA
                          calculation logic:
                        </p>

                        {/* <div className="row">
                    <div className="col-md-7">
                      
                      <div className="sectioncards-domonitor">
                        <div className="sectioncard-domonitor-6">
                          <div className="container sectioncardm-domonitor ">
                            
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                              Analyze status of related services to perform SLA calculation
                              </p>
                            </div>
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                              Decrease SLA when either single or all of the components of a service are in a <a href="problem_detection">problem</a> state</p>
                            </div>
                          </div>
                        </div>
                        <div className="sectioncard-domonitor-6">
                          <div className="container sectioncardm-domonitor">
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                Define service weights for custom service status calculation                            </p>
                            </div>
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                Calculate your business service availability based on service weights or number and percentage of unavailable child services                            </p>
                            </div>
                            
                           

                          </div>
                        </div>
                      </div>
                    </div>
                   
                  </div> */}

                        {/* ndsj */}
                        <div className="row">
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                {" "}
                                Analyze status of related services to perform
                                SLA calculation
                              </p>
                            </div>
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                {" "}
                                Decrease SLA when either single or all of the
                                components of a service are in a problem state
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                {" "}
                                Create service trees for complex SLA
                                calculations of individual services
                              </p>
                            </div>
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                {" "}
                                Access daily/
                                weekly/monthly/
                                yearly overviews of
                                your service SLAs
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* jernj */}
                      </div>
                      <div className="col-md-5">
                        <img
                          src="images/sla-moni.png"
                          alt="#"
                          className="qualityimgclass"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="integration" className="seven">
          <div className="container">
            <h2 className="section1head">
              Seamlessly deploy DOM within your infrastructure
            </h2>
            <div className="pillarnavs mt-4">
              <ul
                class="nav nav-pills justify-content-center align-items-center mb-3"
                id="pills-tab"
                role="tablist"
              >
                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link active linkClass"
                    id="pills-catalog-tab-deploy-1"
                    data-toggle="pill"
                    href="#pills-catalog-deploy-1"
                    role="tab"
                    aria-controls="pills-catalog-deploy-1"
                    aria-selected="true"
                  >
                    Vendor Support
                  </a>
                </li>

                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-freshness-tab-deploy-2"
                    data-toggle="pill"
                    href="#pills-freshness-deploy-2"
                    role="tab"
                    aria-controls="pills-freshness-deploy-2"
                    aria-selected="false"
                  >
                    ITSM Integration
                  </a>
                </li>

                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-schema-tab-deploy-3"
                    data-toggle="pill"
                    href="#pills-schema-deploy-3"
                    role="tab"
                    aria-controls="pills-schema-deploy-3"
                    aria-selected="false"
                  >
                    Kubernetes Monitoring
                  </a>
                </li>

                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-schema-tab-deploy-4"
                    data-toggle="pill"
                    href="#pills-schema-deploy-4"
                    role="tab"
                    aria-controls="pills-schema-deploy-4"
                    aria-selected="false"
                  >
                    Cloud Monitoring
                  </a>
                </li>

                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link  linkClass"
                    id="pills-catalog-tab-deploy-n"
                    data-toggle="pill"
                    href="#pills-catalog-deploy-n"
                    role="tab"
                    aria-controls="pills-catalog-deploy-n"
                    aria-selected="true"
                  >
                    VMware Monitoring
                  </a>
                </li>

                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-schema-tab-deploy-5"
                    data-toggle="pill"
                    href="#pills-schema-deploy-5"
                    role="tab"
                    aria-controls="pills-schema-deploy-5"
                    aria-selected="false"
                  >
                    Data Observe API
                  </a>
                </li>

                <li class="nav-item pillarlinksul">
                  <a
                    class="nav-link linkClass"
                    id="pills-schema-tab-deploy-6"
                    data-toggle="pill"
                    href="#pills-schema-deploy-6"
                    role="tab"
                    aria-controls="pills-schema-deploy-6"
                    aria-selected="false"
                  >
                    Stream Data in Real-time
                  </a>
                </li>
              </ul>

              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active matter"
                  id="pills-catalog-deploy-1"
                  role="tabpanel"
                  aria-labelledby="pills-catalog-tab-deploy-1"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h2 className="sectionhead-domonitor">
                        Integrate DOM with existing system
                      </h2>
                      <p className="sectionpara-domonitor">
                        out of the box monitoring for leading software and
                        hardware vendors:
                      </p>
                      <div>
                        <div className="sectioncard-domonitor-4-1">
                          <div className="container sectioncardm-domonitor">
                            <p>
                              Out of the box monitoring for leading software and
                              hardware vendors:
                            </p>
                            <div className="row">
                              <div className="col-md-4">
                                <ul className="vendors-list">
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      Cisco
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      IBM
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      Juniper
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4">
                                <ul className="vendors-list">
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      HPE
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      VMware
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      F5
                                    </span>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-4">
                                <ul className="vendors-list">
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      Microsoft
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      Meraki
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      And many more
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sectioncard-domonitor-5">
                          <div className="container sectioncardm-domonitor">
                            <p>
                              With DOM you can improve monitoring and problem
                              remediation workflows for your DevOPS and ITOps
                              teams. Integrate DOM with your existing systems:
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <ul className="vendors-list">
                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      Monitor your Docker containers
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      web server backends - IIS,Apache, Nginx
                                      and more
                                    </p>
                                  </li>

                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      Database backends such as MySQL,
                                      PostgreSQL, Microsoft SQL, MongoDB and
                                      more
                                    </p>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <ul className="vendors-list">
                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      Monitor any operating system Linux,
                                      Windows, Solaris, BSD,MacOS and more
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      Cloud services such as AWS, Amazon cloud,
                                      Google cloud and more
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      IP telephony services
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-5">
                      <img
                        src="images/gif-domonitor.gif"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade matter"
                  id="pills-freshness-deploy-2"
                  role="tabpanel"
                  aria-labelledby="pills-freshness-tab-deploy-2"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h2 className="sectionhead-domonitor">
                        Forward alerts to ITSM and messaging systems
                      </h2>
                      <p className="sectionpara-domonitor">
                        Out of the box integrations with leading ISTM systems
                      </p>
                      <div>
                        <div className="sectioncard-domonitor-4-1">
                          <div className="container sectioncardm-domonitor">
                            <p>
                              Out of the box monitoring for leading software and
                              hardware vendors:
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <ul className="vendors-list">
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      ServiceNow
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      Zendesk
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      Jira ServiceDesk
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      manageEngine ServiceDesk
                                    </span>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-md-6">
                                <ul className="vendors-list">
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      TopDesk
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      SolarWinds ServiceDesk
                                    </span>
                                  </li>
                                  <li>
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <span className="section-card-para-dom">
                                      And many more
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sectioncard-domonitor-5">
                          <div className="container sectioncardm-domonitor mt-4">
                            <p>
                              Integrations are provided in a form of
                              customizable JavaScript Webooks
                            </p>
                            <div className="row">
                              <div className="col-md-6">
                                <ul className="vendors-list">
                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      Customize an existing integration or
                                      create a new one from scratch
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      Import an integration from the community
                                      share
                                    </p>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-6">
                                <ul className="vendors-list">
                                  <li className="d-flex">
                                    <span>
                                      {" "}
                                      <img
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                    </span>
                                    <p className="section-card-para-dom">
                                      Export your custom integration and share
                                      it with the DOM community
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 mt-5">
                      <img
                        src="images/itsm-integration.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-3"
                  role="tabpanel"
                  aria-labelledby="pills-schema-tab-deploy-3"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h3 className="qualityhead">
                        Keep track of your Kubernetes deployment on every level
                      </h3>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Automatic Discovery and monitoring of Kubernetes nodes
                          and pods{" "}
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Create dashboard to visualize the status of your
                          Kubernetes nodes and pod
                        </p>
                      </div>
                      <p className="sectionpara-domonitor">
                        Kubernetes monitoring also enables you to monitor
                        Kubernetes components, such as:
                      </p>

                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Kube-controller-manager
                        </p>
                      </div>

                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">Kube-apiServer</p>
                      </div>

                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">Kube-scheduler</p>
                      </div>

                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">Kubelet</p>
                      </div>
                      <p className="qualityhead">
                        DOM is also capable of monitoring pods, nodes and
                        Kubernetes components in the Redhat OpenShift container
                        infrastructures.
                      </p>
                    </div>
                    <div className="col-md-5 deploy-3rd-div">
                      <img
                        src="images/kubernetes.png"
                        alt="#"
                        className="qualityimgclass"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-4"
                  role="tabpanel"
                  aria-labelledby="pills-schema-tab-deploy-4"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h1 className="qualityhead">
                        Seamlessly deploy DOM with in your infrastructure
                      </h1>
                      <p className="qualitymatter text-justify">
                        Platform-agnostic out-of-the-box cloud monitoring:
                      </p>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Connect to any cloud API endpoint over HTTP
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Leverage DOM discovery features to improve the
                          observability of your cloud environment{" "}
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Automatically discover and start monitoring your cloud
                          entities and components{" "}
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Represent your cloud infrastructure in a single pane
                          of glass view with DOM maps and dashboards{" "}
                        </p>
                      </div>
                      <p>
                        Monitor your AWS cloud environment with the official DOM
                        templates:
                      </p>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Collect metrics and events from your AWS EC2 instances{" "}
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Automatically discover and start monitoring your AWS
                          EBS instance volumes{" "}
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Track the performance of your AWS RDS instances{" "}
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Collect information about your AWS S3 buckets and
                          receive notifications about alarm state changes{" "}
                        </p>
                      </div>
                      <p>
                        Monitor your Microsoft Azure cloud deployments with the
                        official DOM templates:
                      </p>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Discover and monitor the state of your Azure virtual
                          machines{" "}
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Monitor the resource usage and state of your Azure
                          MySQL instances{" "}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-5 deploy-4-img-div">
                      <img
                        src="images/cloud-monitoring.png"
                        alt="#"
                        className="qualityimgclass"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade matter"
                  id="pills-catalog-deploy-n"
                  role="tabpanel"
                  aria-labelledby="pills-catalog-tab-deploy-n"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h1 className="qualityhead">VMware Monitoring</h1>
                      <p className="qualitymatter text-justify">
                        Connect DOM to your VMware instance and automatically
                        discover VMware guests, clusters, hypervisors and
                        datastores:
                      </p>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="check-domonitor">
                            <img
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Monitor your VMware endpoints without deploying
                              any additional agent software
                            </p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="check-domonitor">
                            <img
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Customize the discovered monitoring endpoints and
                              collect additional information
                            </p>
                          </div>
                        </div>
                        <p className="qualitymatter text-justify">
                          Monitor VMware metrics such as:
                        </p>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="vendors-list">
                              <li className="d-flex">
                                <span>
                                  {" "}
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                </span>
                                <p className="section-card-para-dom">
                                  VMware alarm status
                                </p>
                              </li>

                              <li className="d-flex">
                                <span>
                                  {" "}
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                </span>
                                <p className="section-card-para-dom">
                                  VMware guest state
                                </p>
                              </li>

                              <li className="d-flex">
                                <span>
                                  {" "}
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                </span>
                                <p className="section-card-para-dom">
                                  VMware guest and hypervisor performance
                                  metrics
                                </p>
                              </li>

                              <li className="d-flex">
                                <span>
                                  {" "}
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                </span>
                                <p className="section-card-para-dom">
                                  Datastore IOPS read/write metrics
                                </p>
                              </li>
                            </ul>
                          </div>

                          <div className="col-md-6">
                            <ul className="vendors-list">
                              <li className="d-flex">
                                <span>
                                  {" "}
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                </span>
                                <p className="section-card-para-dom">
                                  Datastore performance counters
                                </p>
                              </li>

                              <li className="d-flex">
                                <span>
                                  {" "}
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                </span>
                                <p className="section-card-para-dom">
                                  VMware event log entries
                                </p>
                              </li>

                              <li className="d-flex">
                                <span>
                                  {" "}
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                </span>
                                <p className="section-card-para-dom">
                                  VMware Hypervisor and vSphere Distributed
                                  Switch network metrics
                                </p>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <p className="qualitymatter text-justify">
                          DOM also provides an official template for VMWare
                          SD-WAN VeloCloud component discovery and monitoring:
                        </p>
                        <div>
                          <div className="check-domonitor">
                            <img
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Gateway state and utilization
                            </p>
                          </div>
                          <div className="check-domonitor">
                            <img
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Edge state, uptime, version, and more
                            </p>
                          </div>
                          <div className="check-domonitor">
                            <img
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Link network statistics
                            </p>
                          </div>
                          <div className="check-domonitor">
                            <img
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              SDWan peers and peers path metrics
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 deploy-5-img-div">
                      <img
                        src="images/machine-moni.png"
                        alt="#"
                        className="qualityimgclass quality-image"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-5"
                  role="tabpanel"
                  aria-labelledby="pills-schema-tab-deploy-5"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h1 className="qualityhead">
                        Customize your integration with DOM API
                      </h1>
                      <p className="qualitymatter text-justify">
                        Create automation workflows and integrate with other
                        systems using well-documented
                      </p>
                      <p className="qualitymatter text-justify">
                        JSON RPC API:
                      </p>
                      <div className="row">
                        <div className="col-md-6">
                          <ul className="vendors-list">
                            <li className="d-flex">
                              <span>
                                {" "}
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                              </span>
                              <p className="section-card-para-dom">
                                Automate DOM management via API
                              </p>
                            </li>
                            <li className="d-flex">
                              <span>
                                {" "}
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                              </span>
                              <p className="section-card-para-dom">
                                200+ different methods available
                              </p>
                            </li>
                            <li className="d-flex">
                              <span>
                                {" "}
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                              </span>
                              <p className="section-card-para-dom">
                                Create new applications to work with DOM
                              </p>
                            </li>
                            <li className="d-flex">
                              <span>
                                {" "}
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                              </span>
                              <p className="section-card-para-dom">
                                Integrate DOM with third party software:
                                Configuration management,{" "}
                                <a className="https://www.DOM.com/integrations?cat=helpdesks">
                                  ticketing
                                </a>{" "}
                                systems
                              </p>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-6">
                          <ul className="vendors-list">
                            <li className="d-flex">
                              <span>
                                {" "}
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                              </span>
                              <p className="section-card-para-dom">
                                Retrieve and manage configuration and historical
                                data
                              </p>
                            </li>
                            <li className="d-flex">
                              <span>
                                {" "}
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                              </span>
                              <p className="section-card-para-dom">
                                Create named API tokens with expiry date for
                                secure access to API
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 deploy-5-img-div">
                      <img
                        src="images/monitor-api.png"
                        alt="#"
                        className="qualityimgclass"
                      />
                    </div>
                  </div>
                </div>

                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-6"
                  role="tabpanel"
                  aria-labelledby="pills-schema-tab-deploy-6"
                >
                  <div className="row">
                    <div className="col-md-7 qualitypara">
                      <h1 className="qualityhead">
                        Stream metrics and events over HTTP
                      </h1>
                      <p className="qualitymatter text-justify">
                        Make DOM a part of your data pipeline:
                      </p>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Stream DOM metrics and events to message brokers like
                          Amazon SQS, Kafka, RabbitMQ and Amazon Kinesis
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          React to DOM events and automatically adapt your
                          system behavior accordingly
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          Streaming is done over HTTP via REST API
                        </p>
                      </div>
                      <div className="check-domonitor">
                        <img src="/images/Mask groupdomonitor.png" alt="..." />
                        <p className="section-card-para-dom">
                          DOM data and events can also be exported to a file in
                          real-time
                        </p>
                      </div>
                      <p className="qualitymatter">
                        Gain additional insights from your metrics and events by
                        streaming them to an external AI engine, or stream them
                        to a data lake or data warehouse for long-term storage
                        and analytics.
                      </p>
                    </div>
                    <div className="col-md-5">
                      {/* <img
                        src="images/api-zabbi.png"
                        alt="#"
                        className="qualityimgclass"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="security" className="eight">
          <div className="detectprob-domonitor">
            <div className="container">
              <h2 className="section1head">Enterprise grade security</h2>
              <div className="pillarnavs mt-4">
                <ul
                  class="nav nav-pills justify-content-center align-items-center mb-3"
                  style={{ fontSize: "11px" }}
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link active linkClass"
                      id="pills-catalog-tab-enterprise-2-1"
                      data-toggle="pill"
                      href="#pills-catalog-enterprise-2-1"
                      role="tab"
                      aria-controls="pills-catalog-enterprise-2-1"
                      aria-selected="true"
                    >
                      Encryption
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-freshness-tab-enterprise-2-2"
                      data-toggle="pill"
                      href="#pills-freshness-enterprise-2-2"
                      role="tab"
                      aria-controls="pills-freshness-enterprise-2-2"
                      aria-selected="false"
                    >
                      Flexible Permissions
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-enterprise-2-3"
                      data-toggle="pill"
                      href="#pills-schema-enterprise-2-3"
                      role="tab"
                      aria-controls="pills-schema-enterprise-2-3"
                      aria-selected="false"
                    >
                      User Roles
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-enterprise-2-4"
                      data-toggle="pill"
                      href="#pills-schema-enterprise-2-4"
                      role="tab"
                      aria-controls="pills-schema-enterprise-2-4"
                      aria-selected="false"
                    >
                      User Authentication
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-enterprise-2-5"
                      data-toggle="pill"
                      href="#pills-schema-enterprise-2-5"
                      role="tab"
                      aria-controls="pills-schema-enterprise-2-5"
                      aria-selected="false"
                    >
                      Secret Vault
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-enterprise-2-6"
                      data-toggle="pill"
                      href="#pills-schema-enterprise-2-6"
                      role="tab"
                      aria-controls="pills-schema-enterprise-2-6"
                      aria-selected="false"
                    >
                      Configuration Change Tracking
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-enterprise-2-7"
                      data-toggle="pill"
                      href="#pills-schema-enterprise-2-7"
                      role="tab"
                      aria-controls="pills-schema-enterprise-2-7"
                      aria-selected="false"
                    >
                      Restrict Data Access
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-enterprise-2-8"
                      data-toggle="pill"
                      href="#pills-schema-enterprise-2-8"
                      role="tab"
                      aria-controls="pills-schema-enterprise-2-8"
                      aria-selected="false"
                    >
                      Just-in-time User Provisioning
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active matter"
                    id="pills-catalog-enterprise-2-1"
                    role="tabpanel"
                    aria-labelledby="pills-catalog-tab-enterprise-2-1"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Encrypt communication between DO Monitor Components
                        </h2>
                        <p className="sectionpara-domonitor">
                          DOM supports encrypting any communication stream
                          between different DOM components:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  All communications between various DOM
                                  components (such as DOM server, proxies,
                                  agents and command-line utilities) support TLS
                                  protocol
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Support for certificate and pre-shared key
                                  encryption
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Encryption is optional and configurable for
                                  individual components
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  All sensitive information is encrypted and can
                                  be stored in an external secret for additional
                                  security
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Select from a list of supported encryption
                                  algorithms based on your security policy{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/encryption.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-freshness-enterprise-2-2"
                    role="tabpanel"
                    aria-labelledby="pills-freshness-tab-enterprise-2-2"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Restrict access with a flexible permission schema
                        </h2>
                        <p className="sectionpara-domonitor">
                          DOM provides a flexible user permission schema which
                          can be efficiently used to manage user permissions
                          within one DOM installation or in a Distributed
                          environment{" "}
                        </p>
                        <p className="sectionpara-domonitor">
                          You can define three levels of permissions:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Read-write – a read-write access
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Read-only – a read-only access{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Deny – access denied
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="sectionpara-domonitor">
                          User types are used to define access to administrative
                          functions and to specify default permissions:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  DOM User have read-only permissions on
                                  collected data and Events
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  DOM Admins can manage your monitoring
                                  configuration and read the collected data and
                                  events
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  DOM Super Admins are capable of managing DOM
                                  instance configuration, in addition to having
                                  DOM Admin privileges
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/flexible.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-enterprise-2-3"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-enterprise-2-3"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Secure your workflow with User Roles
                        </h2>
                        <p className="sectionpara-domonitor">
                          Create your own custom user roles with a granular set
                          of permissions for different types of users in your
                          environment.
                        </p>
                        <p className="sectionpara-domonitor">
                          User roles also enable you to Hide or show DOM UI
                          elements to fit the needs of your users and customers.
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Limit access to specific UI elements
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Limit access to performing specific actions in
                                  the UI
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Create an allow or deny list for specific API
                                  method
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/userroles.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-enterprise-2-4"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-enterprise-2-4"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Authenticate users by utilizing existing
                          infrastructure
                        </h2>
                        <p className="sectionpara-domonitor">
                          Integrate DOM together with your existing
                          authentication mechanisms. DOM supports a variety of
                          authentication methods:{" "}
                        </p>

                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Internal DOM logins
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  HTTP authentication
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Support for multi-factor authentication
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Define your own password complexity
                                  requirements
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  LDAP authentication
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  SAML authentication
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Single sign-on authentication
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Native integration with Active Directory
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="sectionpara-domonitor">
                          With native support for HTTP, LDAP and SAML
                          authentication you can provide an additional layer of
                          security and improve the user experience while working
                          with DOM.
                        </p>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/authentication.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-enterprise-2-5"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-enterprise-2-5"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Keep secrets secure
                        </h2>
                        <p className="sectionpara-domonitor">
                          Once entered, you have the option to hide your
                          sensitive information from prying eyes:
                        </p>

                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Hide your usernames, passwords, authentication
                                  keys and other sensitive information
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Hidden information cannot be retrieved via API
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <p>
                          Deploy an external vault to keep your secrets under
                          tight control:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Unified storage for all your secrets{" "}
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Strict limitations for accessing the vault
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Detailed vault level audit log
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Store your secrets in HashiCorp or CyberArk
                                  vault{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/secret-valut.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-enterprise-2-6"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-enterprise-2-6"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Keep track of configuration changes
                        </h2>
                        <p className="sectionpara-domonitor">
                          Track changes in your environment by utilizing the
                          Audit log:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Find out which user made changes to any DOM
                                  entities{" "}
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Tracks the IP address from which the user
                                  logged into DOM
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Filter the audit log and follow changes made
                                  by a specific user on a particular resource{" "}
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Export full or filtered audit log via API for
                                  further analysis
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/track.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-enterprise-2-7"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-enterprise-2-7"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Restrict data collection
                        </h2>
                        <p className="sectionpara-domonitor">
                          Restrict access to sensitive information by limiting
                          which metric can be collected in your environment:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Define metric allow and deny lists
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Prevent unsanctioned access to sensitive
                                  information
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Restrict the direction of network
                                  communication
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Permit connections only to and from specified
                                  end-points
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Restrict unencrypted connections to your
                                  monitoring targets
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/restrict-data.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-enterprise-2-8"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-enterprise-2-8"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h2 className="sectionhead-domonitor">
                          Automatically provision your DOM users
                        </h2>
                        <p className="sectionpara-domonitor">
                          Just-in-Time user provisioning enables you to
                          integrate DOM with your existing LDAP or SAML
                          infrastructure and automatically provision DOM users
                          in a centralized and secure way:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-3">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Automatic role and permission assignment{" "}
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Continuous user account management with SCIM
                                  provisioning
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Automatic provisioning of alert message
                                  endpoints based on user LDAP/SAML attributes
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        {/* <img
                      src="images/enterguide1.png"
                      alt="#"
                      className="matricsimg-domonitor"
                    /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="deployment" className="nine">
          <div className="container">
            <h2 className="section1head">
              Deploy in 5 minutes on-premise or in the cloud
            </h2>
            <div className="pillarnavs mt-4">
              <div className="tabs-monitor">
                <ul
                  class="nav nav-pills justify-content-center align-items-center mb-3"
                  style={{ fontSize: "11px" }}
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link active linkClass linkclass-monitor"
                      id="pills-catalog-tab-deploy-one"
                      data-toggle="pill"
                      href="#pills-catalog-deploy-one"
                      role="tab"
                      aria-controls="pills-catalog-deploy-one"
                      aria-selected="true"
                    >
                      Install <br />
                      in minutes
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass linkclass-monitor"
                      id="pills-outof-tab-deploy-two"
                      data-toggle="pill"
                      href="#pills-outof-deploy-two"
                      role="tab"
                      aria-controls="pills-outof-deploy-two"
                      aria-selected="false"
                    >
                      Out-of-the-box
                      <br /> Templates
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass linkclass-monitor"
                      id="pills-schema-tab-deploy-three"
                      data-toggle="pill"
                      href="#pills-schema-deploy-three"
                      role="tab"
                      aria-controls="pills-schema-deploy-three"
                      aria-selected="false"
                    >
                      Network
                      <br /> Discovery
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass linkclass-monitor"
                      id="pills-schema-tab-deploy-four"
                      data-toggle="pill"
                      href="#pills-schema-deploy-four"
                      role="tab"
                      aria-controls="pills-schema-deploy-four"
                      aria-selected="false"
                    >
                      Resource <br />
                      Discovery
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass linkclass-monitor"
                      id="pills-schema-tab-deploy-five"
                      data-toggle="pill"
                      href="#pills-schema-deploy-five"
                      role="tab"
                      aria-controls="pills-schema-deploy-five"
                      aria-selected="false"
                    >
                      Automatic Agent <br />
                      Deployment
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass linkclass-monitor"
                      id="pills-schema-tab-deploy-six"
                      data-toggle="pill"
                      href="#pills-schema-deploy-six"
                      role="tab"
                      aria-controls="pills-schema-deploy-six"
                      aria-selected="false"
                    >
                      Onboarding <br />
                      Workflow
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass linkclass-monitor"
                      id="pills-schema-tab-deploy-seven"
                      data-toggle="pill"
                      href="#pills-schema-deploy-seven"
                      role="tab"
                      aria-controls="pills-schema-deploy-seven"
                      aria-selected="false"
                    >
                      Seamless
                      <br /> Upgrades
                    </a>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active matter"
                  id="pills-catalog-deploy-one"
                  role="tabpanel"
                  aria-labelledby="pills-catalog-tab-deploy-one"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h2 className="sectionhead-domonitor">
                        Install DOM in minutes
                      </h2>
                      <p className="sectionpara-domonitor">
                        DOM provides many different ways how you can deploy
                        individual DOM components:
                      </p>
                      <div className="sectioncards-domonitor">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                Use official packages, docker or cloud images
                                for fast deployment
                              </p>
                            </div>
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                Use templates to manage monitoring of thousands
                                of devices, make local overrides if needed
                              </p>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="check-domonitor">
                              <img
                                src="/images/Mask groupdomonitor.png"
                                alt="..."
                              />
                              <p className="section-card-para-dom">
                                Deploy a PoC environment from a preconfigured
                                virtual machine appliance image
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/installminute.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-outof-deploy-two"
                  role="tabpanel"
                  aria-labelledby="pills-outof-tab-deploy-two"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="sectionhead-domonitor">
                        Save your time by using out-of-the-box templates
                      </h3>
                      <p className="sectionpara-domonitor">
                        Vast selection of out-of-the-box templates provides the
                        ability to immediately start monitoring your
                        infrastructure: :
                      </p>
                      <div>
                        <div>
                          <div className="sectioncardm-domonitor">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Use out-of-the-box templates for your
                                        devices and systems
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Customize existing templates or build
                                        new custom templates
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Use hundreds of templates built by DOM
                                        community
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Apply for the Professional template
                                        building service from the DOM team
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Templates enable ease of management and
                                        automate monitoring for your devices
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sectioncard-domonitor-4">
                          <div className="container sectioncardm-domonitor"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/outofbox.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-three"
                  role="tabpanel"
                  aria-labelledby="pills-freshness-tab-deploy-three"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="sectionhead-domonitor">
                        Discover devices and services on your network
                      </h3>
                      <p className="sectionpara-domonitor">
                        DOM will automatically scan your network and add
                        discovered devices for monitoring:
                      </p>
                      <div>
                        <div>
                          <div className="sectioncardm-domonitor">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Discovery of devices having multiple
                                        network interfaces
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Specify IP address ranges for the
                                        network scan
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Detect lost devices and define custom
                                    offboarding logic
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p>
                                Scan your network hosts for availability by
                                scanning for different services:
                              </p>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Perform simple pings
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Check for SNMP availability
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Look for response from DOM agent
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Probe for TCP, HTTP, FTP services
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        And many more
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sectioncard-domonitor-4">
                          <div className="container sectioncardm-domonitor"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/network.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-four"
                  role="tabpanel"
                  aria-labelledby="pills-freshness-tab-deploy-four"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="sectionhead-domonitor">
                        Automate metric collection and problem threshold
                        creation
                      </h3>
                      <p className="sectionpara-domonitor">
                        Resource discovery enables DOM to automatically discover
                        metrics on your monitoring endpoints:
                      </p>
                      <div>
                        <div>
                          <div className="sectioncardm-domonitor">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Resource discovery: automatically create
                                    items, triggers and graphs for discovered
                                    elements on a host
                                  </p>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <img
                                    src="/images/Mask groupdomonitor.png"
                                    alt="..."
                                  />
                                  <p className="section-card-para-dom">
                                    Use resource discovery to automatically
                                    create monitoring targets based on the
                                    received data
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p>
                                Resource discovery is virtually limitless.
                                Discover entities such as:
                              </p>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Network interfaces
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Services
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        CPUs
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        File systems
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Docker containers
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Java application MBeans
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        SNMP entities
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        IPMI sensors
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Custom components for your in-house
                                        application
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        And much, much more!
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sectioncard-domonitor-4">
                          <div className="container sectioncardm-domonitor"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/resource.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-five"
                  role="tabpanel"
                  aria-labelledby="pills-freshness-tab-deploy-five"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="sectionhead-domonitor">
                        Automate agent deployment
                      </h3>
                      <p className="sectionpara-domonitor">
                        Automatically discover your DOM agents and start
                        monitoring them immediately:
                      </p>
                      <div>
                        <div>
                          <div className="sectioncardm-domonitor">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Populate agents with customizable
                                        metadata
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Define custom onboarding workflows which
                                        will react to different metadata values
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        React to changes in agent metadata
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div>
                              <p>
                                Define custom device onboarding logic, depending
                                on the agent metadata:
                              </p>
                            </div>

                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Assign a host to a host group
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Apply a monitoring template that matches
                                        the discovered service
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Notify your administrators
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        And many more
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sectioncard-domonitor-4">
                          <div className="container sectioncardm-domonitor"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/automatic.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-six"
                  role="tabpanel"
                  aria-labelledby="pills-freshness-tab-deploy-six"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="sectionhead-domonitor">
                        Onboard and offboard discovered devices automatically
                      </h3>
                      <p className="sectionpara-domonitor">
                        Define custom device onboarding and offboarding
                        workflow, depending on the device type:
                      </p>
                      <div>
                        <div>
                          <div className="sectioncardm-domonitor">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Assign a host to a host group
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Apply a monitoring template that matches
                                        the discovered service
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Notify your administrators
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "23px",
                                          height: "23px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        And many more
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sectioncard-domonitor-4">
                          <div className="container sectioncardm-domonitor"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/onboarding.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade matter"
                  id="pills-schema-deploy-seven"
                  role="tabpanel"
                  aria-labelledby="pills-freshness-tab-deploy-seven"
                >
                  <div className="row">
                    <div className="col-md-7">
                      <h3 className="sectionhead-domonitor">
                        Keep your infrastructure up to date with seamless
                        upgrades
                      </h3>
                      <p className="sectionpara-domonitor">
                        The DOM upgrade process is simple - just deploy the new
                        version of DOM Server, Proxy and UI and you are done. No
                        loss of existing data, configuration or functionality:
                      </p>
                      <div>
                        <div>
                          <div className="sectioncardm-domonitor">
                            <div className="">
                              <div className="col-md-12"></div>
                              <div>
                                <div className="check-domonitor">
                                  <ul className="MoniTor-sizE">
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "20px",
                                          height: "20px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Support of near zero-downtime upgrades
                                        between major versions6.4
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "20px",
                                          height: "20px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        Backward and forward compatibility of
                                        all DOM components within one major
                                        release to ensure quick and easy upgrade
                                        process
                                      </p>
                                    </li>
                                    <li className="d-flex">
                                      <img
                                        style={{
                                          width: "20px",
                                          height: "20px",
                                        }}
                                        src="/images/Mask groupdomonitor.png"
                                        alt="..."
                                      />
                                      <p className="section-card-para-dom">
                                        DOM agents are backwards compatible with
                                        previous major releases
                                      </p>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="sectioncard-domonitor-4">
                          <div className="container sectioncardm-domonitor">
                            {/* <div className="check-domonitor">
                            <img
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p>
                            Multiple frontends allow you to avoid downtimes and perform maintenance tasks on individual frontend servers

                            </p>
                          </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-5 mt-5">
                      <img
                        src="images/seamless.png"
                        alt="#"
                        className="matricsimg-domonitor"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="scalability" className="ten">
          <div className="detectprob-domonitor">
            <div className="container">
              <h2 className="section1head">Scale without limits</h2>
              <div className="pillarnavs mt-4">
                <ul
                  class="nav nav-pills justify-content-center align-items-center mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link active linkClass"
                      id="pills-catalog-tab-first"
                      data-toggle="pill"
                      href="#pills-catalog-first"
                      role="tab"
                      aria-controls="pills-catalog-first"
                      aria-selected="true"
                    >
                      Scale Up
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-freshness-tab-last"
                      data-toggle="pill"
                      href="#pills-freshness-last"
                      role="tab"
                      aria-controls="pills-freshness-last"
                      aria-selected="false"
                    >
                      Data Sources
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-three"
                      data-toggle="pill"
                      href="#pills-schema-three"
                      role="tab"
                      aria-controls="pills-schema-three"
                      aria-selected="false"
                    >
                      High Availability
                    </a>
                  </li>
                  <li class="nav-item pillarlinksul">
                    <a
                      class="nav-link linkClass"
                      id="pills-schema-tab-scale-four"
                      data-toggle="pill"
                      href="#pills-schema-scale-four"
                      role="tab"
                      aria-controls="pills-schema-scale-four"
                      aria-selected="false"
                    >
                      Data retention policy
                    </a>
                  </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                  <div
                    class="tab-pane fade show active matter"
                    id="pills-catalog-first"
                    role="tabpanel"
                    aria-labelledby="pills-catalog-tab-first"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h3 className="sectionhead-domonitor">
                          Scale up your DOM infrastructure
                        </h3>
                        <p className="sectionpara-domonitor">
                          Add an extra layer of scalability by deploying DOM
                          proxies. Scale up to collect millions of metrics from
                          hundreds of thousands of devices, services,
                          applications, and more. DOM proxies are easy to deploy
                          and enable unlimited vertical scalability:
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Delegate metric collection to DO Monitor
                                  proxies
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Deploy an unlimited amount of DO Monitor
                                  proxies
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Monitor thousands of remote locations, company
                                  branches, data center
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Deploy DO monitor proxies from packages,
                                  containers and cloud images
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Reduce network overhead - traffic between
                                  central DOM server backend and proxies is
                                  compressed!
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p>
                                  Stay compliant with the highest security
                                  standards by using TLS PSK or certificate{" "}
                                  encryption with full control of permitted
                                  security algorithms
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/scale-one-monitor.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-freshness-last"
                    role="tabpanel"
                    aria-labelledby="pills-freshness-tab-last"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h3 className="sectionhead-domonitor">
                          Monitor remote locations without fear of data loss
                        </h3>
                        <p className="sectionpara-domonitor">
                          Monitor locations all over the globe! Collect metrics
                          from remote locations securely and prevent data loss
                          even in case of a network outage. By deploying DOM{" "}
                          proxies you can
                        </p>
                        <div className="sectioncards-domonitor">
                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Monitor behind the firewall, DMZ
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Collect data even in case of network issues
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Remotely run custom scripts on monitoring
                                  targets for automatic problem remediation
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p className="section-card-para-dom">
                                  Distribute your monitoring across an unlimited
                                  number of locations all over the globe
                                </p>
                              </div>
                              <div className="check-domonitor">
                                <img
                                  src="/images/Mask groupdomonitor.png"
                                  alt="..."
                                />
                                <p>
                                  Instantly sync configuration changes across
                                  your whole DOM infrastructure
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p>
                            With DOM proxies you can execute remote commands in
                            remote locations - either on the proxies themselves
                            or on the agents monitored by the proxy.
                          </p>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/scale-two-monitor.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-three"
                    role="tabpanel"
                    aria-labelledby="pills-freshness-tab-three"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h3 className="sectionhead-domonitor">
                          Avoid downtime with High availability
                        </h3>
                        <p className="sectionpara-domonitor">
                          Prevent data loss and add an extra layer of redundancy
                          with DOM High availability:
                        </p>
                        <div>
                          <div>
                            <div className="sectioncardm-domonitor">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="check-domonitor">
                                    <img
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Deploy a secondary DOM backend server to
                                      prevent data loss in case of an issue
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="check-domonitor">
                                    <img
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Having HA enables you to perform seamless
                                      OS level maintenance and deploy the latest
                                      OS updates without any downtime
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <p>
                                  Deploy multiple DOM frontends to avoid
                                  downtime and improve the user experience:
                                </p>
                              </div>

                              <div className="row">
                                <div className="col-md-6">
                                  <div className="check-domonitor">
                                    <img
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Deploy multiple frontendsall over the
                                      globe for optimal UX across different
                                      teams or departments
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="check-domonitor">
                                    <img
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Multiple frontends allow you to avoid
                                      downtimes and perform maintenance tasks on
                                      individual frontend servers
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="check-domonitor">
                                    <img
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Implement load balancing between your
                                      frontends for best performance
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="sectioncard-domonitor-4">
                            <div className="container sectioncardm-domonitor">
                              {/* <div className="check-domonitor">
                            <img
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p>
                            Multiple frontends allow you to avoid downtimes and perform maintenance tasks on individual frontend servers

                            </p>
                          </div> */}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/scale-three.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade matter"
                    id="pills-schema-scale-four"
                    role="tabpanel"
                    aria-labelledby="pills-schema-tab-scale-four"
                  >
                    <div className="row">
                      <div className="col-md-7">
                        <h3 className="sectionhead-domonitor">
                          Preserve and store your data
                        </h3>
                        <p className="sectionpara-domonitor">
                          Define flexible storage periods for different data
                          sets:
                        </p>
                        <div className="sectioncardm-domonitor">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      History data
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Hourly trends
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Events
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="check-domonitor">
                                <ul className="MoniTor-sizE">
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Audit log entries
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Other data
                                    </p>
                                  </li>
                                  <li className="d-flex">
                                    <img
                                      style={{ width: "23px", height: "23px" }}
                                      src="/images/Mask groupdomonitor.png"
                                      alt="..."
                                    />
                                    <p className="section-card-para-dom">
                                      Frontend user sessions
                                    </p>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p>
                              DOM is capable of storing history metrics and
                              collecting hourly metric trends for an unlimited
                              time period.
                            </p>
                            <p>
                              For example, to preserve database storage space,
                              you may opt-in to store the history data for 6
                              months while storing hourly trends for 2 years:
                            </p>
                          </div>
                          <div className="d-flex">
                            <img
                              style={{ width: "23px", height: "23px" }}
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              Out of the box partitioning support improves the
                              performance and ease of removing old data
                            </p>
                          </div>
                          <p>With DOM you are the sole owner of your data:</p>

                          <div className="d-flex">
                            <img
                              style={{ width: "23px", height: "23px" }}
                              src="/images/Mask groupdomonitor.png"
                              alt="..."
                            />
                            <p className="section-card-para-dom">
                              None of the collected data or telemetry get sent
                              to DOM LLC or any other 3rd parties
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-5 mt-5">
                        <img
                          src="images/scale-four.png"
                          alt="#"
                          className="matricsimg-domonitor"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container finalsection-domonitor">
          <div className="row ">
            <div className="col-md-6 finalsection1-domonitor">
              <img src="/images/addvalue.png" alt="#" />
              <h3 className="headfinalsec-domonitor">
                Add value to your business with DO Monitoring
              </h3>
              <p>
                You can use DO Monitoring for a lot more than just monitoring
                your own infrastructure! With DO Monitoring you can provide
                monitoring services for multiple customers in a multi-tenant
              </p>
              <p>
                Flexible role and permissions schema enables isolation between
                each customer{" "}
                <p>
                  Create unique customer dashboards providing insight into
                  customer
                </p>
              </p>
            </div>
            <div className="col-md-6 finalsection1-domonitor">
              <img src="/images/do-language-01.png" alt="#" />
              <h3 className="headfinalsec-domonitor">DOM in your language</h3>
              <p>
                DOM frontend and documentation are available in many different
                languages. Our goal is to make DOM easy to use for people all
                over the globe. With DOM community localization tools you have
                the opportunity to help us translate DOM into your language.
              </p>
              <p>A vast selection of languages available out of the box</p>
              <p>
                Easy to use localization tools for both the DOM Frontend and the
                documentation
              </p>
            </div>
          </div>
        </div>
      </div>

      <button
        className="scroll-to-top-button"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
      </button>
      {/* <Faq /> */}
      {/* <Talktous /> */}
      <Footer />
    </div>
  );
}

export default Domonitor;
