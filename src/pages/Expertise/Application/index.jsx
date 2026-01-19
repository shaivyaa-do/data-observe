import React from "react";
import "./Application.css";
import Faq from "../../../components/Common/Faq";
import Navbar from "../../../components/Layout/Navbar";
import devops from "../../../assets/videos/devops-vid.mp4";
import Footer from "../../../components/Layout/Footer";
import Talktous from "../../../components/Common/Talktous";
import Slider from "react-slick";

function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const Application = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Navbar />

      <div className="Application-video-Main">
        <video className="digital-transform-video" autoPlay loop muted>
          <source
            src={devops}
            type="video/mp4"
          />
        </video>
        <div className="Cloud-Main-hEading">
          <p className="cLOUD-TRANSFORM">
            <p
              className="cloud-transform-Size"
              style={{
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "1px",
              }}
            >
              Application Modernization
            </p>

            <p className="col-md-6 Navigate-Journey leagacy-application">
              Revitalize your business by modernizing legacy applications,
              ensuring you are prepared for the future.
            </p>
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
                  color: "#FF4925",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "19px",
                }}
              >
                Get in touch
              </span>{" "}
              <i
                className="fa fa-long-arrow-right ARROW-RIGHT-CLOUD"
                style={{
                  width: "23px",
                  fontSize: "29px",
                  flexShrink: "0",
                  color: "#FF4925",
                  marginLeft: "12px",
                }}
                aria-hidden="true"
              ></i>
            </button>
          </p>
        </div>
      </div>

      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <h4 className="migration">
          Our Expertise in Application Modernization Services
        </h4>
        <p className="container col-md-9 operational">
          At DataObserve, we bring over 40 years of experience in application
          modernization services across industries. Through legacy application
          modernization, we offer our expertise in more than just modernizing
          applications for the digital age.
        </p>
      </div>
      <div>
        <div className="cloudcards d-md-block d-none">
          <div className="ccdiv w-100">
            <div className="cloudimgcard">
              <img
                className="notrepimg"
                src="/images/applicationcard1.png"
                alt=""
              />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">Enterprise web apps</h1>
                <p className="cloudcardpara mb-0">
                  Revamp your enterprise web app environment, transitioning it
                  from a legacy and monolithic system into a more agile one.
                </p>
              </div>
            </div>
            <div className="cloudimgcard">
              <img
                className="notrepimg"
                src="/images/applicationcard2.png"
                alt=""
              />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">Application Migration</h1>
                <p className="cloudcardpara mb-0">
                  Relocate your in-house applications to the cloud environment
                  with minimal disruption to your business operations.
                </p>
              </div>
            </div>
            <div className="cloudimgcard">
              <img
                className="notrepimg"
                src="/images/applicationcard3.png"
                alt=""
              />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">Re-platform Services</h1>
                <p className="cloudcardpara mb-0">
                  Enhance your legacy applications to operate seamlessly on
                  modern, efficient cloud-based platforms, complete with
                  seamless optimization for the new environment.
                </p>
              </div>
            </div>
            <div className="cloudimgcard">
              <img
                className="notrepimg"
                src="/images/applicationcard4.png"
                alt=""
              />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">Remediation Services</h1>
                <p className="cloudcardpara mb-0">
                  Enhance your legacy applications to operate seamlessly on
                  modern, efficient cloud-based platforms, complete with
                  seamless optimization for the new environment.
                </p>
              </div>
            </div>
            <div className="cloudimgcard">
              <img
                className="notrepimg"
                src="/images/applicationcard5.png"
                alt=""
              />
              <div className="cloudcard card">
                <h1 className="cloudcardheading">Cloud Applications</h1>
                <p className="cloudcardpara mb-0">
                  Shorten your time to market and attain scalability through
                  cloud applications, harnessing the power of cloud-native
                  computing capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-block d-md-none">
          <section>
            <div className="container">
              <div>
                <Slider {...settings}>
                  <div className="cloudimgcard">
                    <img
                      className="notrepimg"
                      src="/images/applicationcard1.png"
                      alt=""
                    />
                    <div className="cloudcard card">
                      <h1 className="cloudcardheading">Enterprise web apps</h1>
                      <p className="cloudcardpara mb-0">
                        Revamp your enterprise web app environment,
                        transitioning it from a legacy and monolithic system
                        into a more agile one.
                      </p>
                    </div>
                  </div>
                  <div className="cloudimgcard">
                    <img
                      className="notrepimg"
                      src="/images/applicationcard2.png"
                      alt=""
                    />
                    <div className="cloudcard card">
                      <h1 className="cloudcardheading">
                        Application Migration
                      </h1>
                      <p className="cloudcardpara mb-0">
                        Relocate your in-house applications to the cloud
                        environment with minimal disruption to your business
                        operations.
                      </p>
                    </div>
                  </div>
                  <div className="cloudimgcard">
                    <img
                      className="notrepimg"
                      src="/images/applicationcard3.png"
                      alt=""
                    />
                    <div className="cloudcard card">
                      <h1 className="cloudcardheading">Re-platform Services</h1>
                      <p className="cloudcardpara mb-0">
                        Enhance your legacy applications to operate seamlessly
                        on modern, efficient cloud-based platforms, complete
                        with seamless optimization for the new environment.
                      </p>
                    </div>
                  </div>
                  <div className="cloudimgcard">
                    <img
                      className="notrepimg"
                      src="/images/applicationcard4.png"
                      alt=""
                    />
                    <div className="cloudcard card">
                      <h1 className="cloudcardheading">Remediation Services</h1>
                      <p className="cloudcardpara mb-0">
                        Enhance your legacy applications to operate seamlessly
                        on modern, efficient cloud-based platforms, complete
                        with seamless optimization for the new environment.
                      </p>
                    </div>
                  </div>
                  <div className="cloudimgcard">
                    <img
                      className="notrepimg"
                      src="/images/applicationcard5.png"
                      alt=""
                    />
                    <div className="cloudcard card">
                      <h1 className="cloudcardheading">Cloud Applications</h1>
                      <p className="cloudcardpara mb-0">
                        Shorten your time to market and attain scalability
                        through cloud applications, harnessing the power of
                        cloud-native computing capabilities.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </section>
        </div>
      </div>

      <h1 className="case mt-5" style={{ textAlign: "center" }}>Our Case Studies</h1>
      <div
        className="container  mb-3 mt-5 Built-back-colour"
        style={{
          backgroundColor: "#1A4AB9",
          borderRadius: "20px",
          marginLeft: "100px",
          marginRight: "200px",
          width: "auto",
        }}
      >
        <div className="right-media-Corner">
          <img
            className="built-corner-image"
            src="./images/right-corner-media.png"
            alt="media"
            width={100}
            height={100}
          />
        </div>

        <div
          className="row overall-built-Corner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "spacebetween",
          }}
        >
          <div className="col-md-5">
            <img
              style={{ height: "250px", width: "100%" }}
              src="./images/build.png"
              className="card-img"
              alt="..."
            />
          </div>
          <div className="col-md-7 cLOUD-Unified">
            <div className="card-body CLOUD-bODY">
              <h5
                className="col-md-9 card-title CLouD-BULIT"
                style={{
                  color: "white",
                  letterSpacing: "0.68px",
                  fontSize: "19px",
                }}
              >
                Built A Unified Augmented Analytics
                <br /> decision intelligence Platform
              </h5>
              <p
                className="col-md-9 card-text-3"
                style={{ fontSize: "13px", color: "#fff", opacity: "0.5" }}
              >
                Learn how we created a self-service, predictive, insights
                platform driven by an adaptive machine learning engine which
                helps improve decision-making.
              </p>
              <p className=" col-md-9 card-text" style={{ color: "white" }}>
                <p style={{ fontSize: 16 }}>
                  Read case study
                  <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                </p>
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src="./images/accede.png"
                  alt=""
                  style={{ width: "60px", height: "20px" }}
                />
                <img
                  src="./images/solakhen.png"
                  alt=""
                  style={{ width: "100px" }}
                />
                <img
                  src="./images/grbeco.png"
                  alt=""
                  style={{ width: "95px" }}
                />
                <img
                  className="srdsystems-cloud"
                  src="./images/srdsystems.png"
                  alt=""
                  style={{ width: "70px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
            alignItems: "center",
          }}
        >
          <h4
            className="mt-5 EXPERIENCE-cloud"
            style={{ textAlign: "center", fontWeight: 700, fontSize: "43px" }}
          >
            Benefits
          </h4>

          <p className="wides">
            Here are the advantages of teaming up with DataObserve for your
            application modernization needs:
          </p>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="./images/high1.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "69px", height: "70px" }}
                />
                <h5 className="cloudcardheadings" style={{ marginTop: "10px" }}>
                  High Technical Expertise
                </h5>

                <p className="arrowtext text-center">
                  Our technical experts have enabled our customers modernize and
                  upgrade their current applications portfolio – as well as
                  unleash the power of cloud-native applications.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="images/focus.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "59px", height: "79px" }}
                />
                <h5 className="cloudcardheadings">
                  Focus on organizational goals
                </h5>

                <p className="arrowtext text-center">
                  Our legacy application modernization approach focus on
                  organizational goals and objectives with a detailed
                  feasibility study conducted by our application solution
                  architects with your company’s stakeholders.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "350px" }}
              >
                <img
                  src="./images/advancet.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "59px", height: "79px" }}
                />
                <h5 className="cloudcardheadings">Advanced Technology</h5>

                <p className="arrowtext text-center">
                  Leverage the capabilities of the latest technology tools
                  through our strategic partnership in delivering top-level
                  application- focussed cloud services.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="mb-3 mt-5"
              style={{
                backgroundColor: "#1A4AB9",
                maxWidth: "100%",
                borderRadius: "30px",
              }}
            >
              <div
                className="row no-gutters"
                style={{
                  alignItems: "center",
                  justifyContent: "spacebetween",
                }}
              >
                <div className="col-md-9">
                  <div className="">
                    <div>
                      <h5
                        className="card-title Cloud-title"
                        style={{ color: "white", fontSize: "24px" }}
                      >
                        Modernize Your Applications with Optimal Efficiency
                      </h5>
                      <p className="col-md-9 card-text Cloud-color-paragraph">
                        Modernize Your Applications Seamlessly with Zero
                        Downtime, Supported by Our Dedicated Team
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 ObserverS-Cloud">
                  <button
                    className="observers"
                    style={{
                      width: "200px",
                      border: "none",
                      height: "55px",
                      margin: "42px",
                      borderRadius: "6px",
                      color: "#0046E8",
                    }}
                  >
                    Get a demo{" "}
                    <i
                      className="fa fa-long-arrow-right Arrow-cloud"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="back-point mt-5">
        <div>
          <div
            className="container"
            style={{
              justifyContent: "center",
              flexDirection: "column",
              display: "flex",
            }}
          >
            <h3 className="cloud-head" style={{ textAlign: "center" }}>
              What Makes Us Stand Out
            </h3>
            <p
              className="container col-md-7 CLoud-Text-pARA"
              style={{
                textAlign: "center",
              }}
            >
              At DataObserve, we recognize the significance of application
              modernization to remain competitive in today's digital era. Here's
              why we excel in the industry:
            </p>
          </div>
          <div className="container mt-3">
            <div className="row box">
              <div className="col-md-4">
                <div
                  className="text-center box-padding"
                  style={{ height: "320px" }}
                >
                  <img
                    src="./images/provenm.png"
                    className="App-logo"
                    alt="logo"
                    width={100}
                    style={{ width: "53px", height: "69px" }}
                  />
                  <h5 className="cloudcardheadings">Proven Methodologies </h5>

                  <p className="arrowtext text-center">
                    Our team employs a blend of agile and cloud-driven DevOps
                    methodologies to complete application modernization projects
                    punctually and within your specified budget. Our strategy is
                    centered around delivering gradual value to our clients,
                    guaranteeing a seamless transition to the newly modernized
                    system.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding"
                  style={{ height: "320px" }}
                >
                  <img
                    src="./images/scrum.png"
                    className="App-logo"
                    alt="logo"
                    width={100}
                    style={{ width: "53px", height: "69px" }}
                  />
                  <h5 className="cloudcardheadings">
                    Expertise in Cloud Technologies
                  </h5>

                  <p className="arrowtext text-center">
                    We possess a profound understanding of cutting-edge cloud
                    technologies and how to harness them for application
                    modernization. Our team boasts expertise in diverse cloud
                    platforms like AWS, Azure, and Google Cloud, enabling us to
                    assist you in selecting the most suitable platform for your
                    requirements.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding"
                  style={{ height: "320px" }}
                >
                  <img
                    src="./images/endtoends.png"
                    className="App-logo"
                    alt="logo"
                    width={100}
                    style={{ width: "53px", height: "69px" }}
                  />
                  <h5 className="cloudcardheadings">End-to-end Support</h5>

                  <p className="arrowtext text-center">
                    We offer comprehensive support throughout the entire
                    application modernization process. Starting from the initial
                    assessment to deployment and continuous maintenance, the
                    DataObserve team will be alongside you at every stage.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding"
                  style={{ height: "320px" }}
                >
                  <img
                    src="./images/tailored.png"
                    className="App-logo"
                    alt="logo"
                    width={100}
                    style={{ width: "53px", height: "69px" }}
                  />
                  <h5 className="cloudcardheadings">Tailored Solutions</h5>

                  <p className="arrowtext text-center">
                    Our solutions are customized to align with your business's
                    distinct needs. We invest the effort to comprehend your
                    specific requirements and offer a personalized solution
                    designed to resolve your unique challenges.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding"
                  style={{ height: "320px" }}
                >
                  <img
                    src="./images/dc.png"
                    className="App-logo"
                    alt="logo"
                    width={100}
                    style={{ width: "53px", height: "69px" }}
                  />
                  <h5 className="cloudcardheadings">Focused Data Integrity</h5>

                  <p className="arrowtext text-center">
                    Ensuring the integrity, security, and accessibility of your
                    company's data is paramount. Our tailored data governance
                    solutions, enhanced by cloud-based efficiencies,
                    comprehensively address all facets of data management.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding"
                  style={{ height: "320px" }}
                >
                  <img
                    src="./images/clouden.png"
                    className="App-logo"
                    alt="logo"
                    width={100}
                    style={{ width: "63px", height: "69px" }}
                  />
                  <h5 className="cloudcardheadings">
                    Your Go-to Modernization Partner
                  </h5>

                  <p className="arrowtext text-center">
                    DataObserve has everything to cement its position as a
                    reliable enterprise partner for application modernization
                    solutions. Our primary objective is to ensure the highest
                    level of customer satisfaction, continuously striving to
                    surpass our clients' expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="card text-center" style={{ border: "0px" }}>
        {/* {/ <div className="card-header">Featured</div> /} */}
        <div className="card-body faq-class">
          <h5 className="card-title" style={{ color: "white" }}>
            FAQs
          </h5>
          <div
            className="accordion"
            id="accordionExample"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              className="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                className="card-header"
                id="headingOne"
                style={{ textAlign: "left" }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      What is Application Modernization as a Service, and how
                      can it benefit my organization?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Application Modernization as a Service involves upgrading and
                  optimizing existing applications to align with modern
                  technologies and business needs. This service can benefit your
                  organization by enhancing performance, improving scalability,
                  reducing operational costs, and ensuring compatibility with
                  current industry standards.
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                className="card-header"
                id="headingTwo"
                style={{ textAlign: "left" }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      How does Application Modernization as a Service differ
                      from traditional application development?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  While traditional application development often involves
                  building new applications from scratch, Application
                  Modernization focuses on updating and improving existing
                  applications. It includes refactoring, rearchitecting, and
                  incorporating modern technologies to extend the lifespan and
                  functionality of legacy applications.
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                className="card-header"
                id="headingThree"
                style={{ textAlign: "left" }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      What are the key components of your Application
                      Modernization as a Service offering?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Our Application Modernization services encompass a variety of
                  components, including legacy system assessment, technology
                  stack upgrades, migration to cloud environments, user
                  interface redesign, and data architecture enhancements. We
                  tailor our approach to address the specific needs and
                  challenges of your existing applications.
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                className="card-header"
                id="headingFour"
                style={{ textAlign: "left" }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      How can Application Modernization improve the agility and
                      responsiveness of my applications?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Application Modernization improves agility by incorporating
                  technologies like containerization and microservices
                  architecture. This allows for more flexible and modular
                  development, making it easier to add new features, scale
                  applications, and respond quickly to changing business
                  requirements.
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                className="card-header"
                id="headingFive"
                style={{ textAlign: "left" }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      Is it necessary to migrate to the cloud as part of the
                      Application Modernization process?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFiver"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  While cloud migration is often a component of Application
                  Modernization, it's not always mandatory. The decision to
                  migrate to the cloud depends on your organization's goals,
                  scalability needs, and infrastructure requirements. We work
                  with you to determine the best approach based on your specific
                  circumstances.
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                className="card-header"
                id="headingSix"
                style={{ textAlign: "left" }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      How does Application Modernization address security
                      concerns for existing applications?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Security is a top priority in our Application Modernization
                  process. We conduct thorough security assessments, implement
                  best practices for secure coding, and ensure that data remains
                  protected throughout the modernization process. Our goal is to
                  enhance the security posture of your applications.
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                className="card-header"
                id="headingSeven"
                style={{ textAlign: "left" }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      Can Application Modernization as a Service support both
                      monolithic and distributed application architectures?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Yes, our Application Modernization services are designed to
                  support both monolithic and distributed architectures. Whether
                  your application is a large monolith or a set of
                  interconnected microservices, we have the expertise to
                  modernize and optimize it for improved performance and
                  scalability.
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                className="card-header"
                id="headingEight"
                style={{ textAlign: "left" }}
              >
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      width: "100%",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ margin: "0px" }}>
                      How does Application Modernization impact the user
                      experience of existing applications?
                    </p>
                    <p
                      style={{
                        margin: "0px",
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        borderRadius: "3px",
                        width: "18px",
                        height: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      +
                    </p>
                  </button>
                </h2>
              </div>
              <div
                id="collapseEight"
                className="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  Application Modernization includes user interface redesign and
                  improvements to enhance the overall user experience. This may
                  involve updating the look and feel, optimizing navigation, and
                  incorporating modern design principles to ensure that the
                  application is user-friendly and aligns with current usability
                  standards.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Talktous /> */}
      <Footer />
    </div>
  );
};

export default Application;
