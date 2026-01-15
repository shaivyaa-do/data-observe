import React from "react";
import "./Devops.css";
import Faq from "../../../components/Common/Faq";
import Navbar from "../../../components/Layout/Navbar";
// import devops from "../../../assets/videos/devops.mp4";
import Footer from "../../../components/Layout/Footer";
import Slider from "react-slick";
import Talktous from "../../../components/Common/Talktous";


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

const Devops = () => {
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
      <div className="Deveps_power">
        <div>
          <video className="devops" autoPlay loop muted>
            <source
              src="https://storage.googleapis.com/do-website-resources/devops.mp4"
              type="video/mp4"
            />
          </video>
          <div className="Devops-Main-hEading">
            <p className="cLOUD-TRANSFORM">
              <p
                className="cloud-transform-Size"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "1px",
                }}
              >
                DevOps As A Service
              </p>

              <p className="col-md-6 Navigate-Journey">
                Accelerate software delivery by implementing end-to-end
                automation and continuous delivery practices that reduce costs.
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
                    color: "#0046E8",
                    fontSize: "14px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "19px",
                  }}
                >
                  Talk to us now!
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
            </p>
          </div>
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
        <h4 className="migration">Our DevOps Services</h4>
        <p className=" col-md-9 operational">
          DataObserve's DevOps services offer cutting-edge and established
          technologies to enhance your organization's efficiency. By
          streamlining data flow, we foster improved collaboration between your
          IT operations and software engineering teams, ensuring seamless
          continuous deployment and integration through the amalgamation of
          software development and automation expertise.
        </p>
      </div>
      <div className="cloudcards d-md-block d-none">
        <div class="ccdiv w-100">
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/cops.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">DevOps on Cloud</h1>
              <p className="cloudcardpara mb-0">
                Implement DevOps within your organization using services offered
                by our cloud partners, designed for straightforward utilization.
                Automate manual tasks, effectively manage intricate
                environments, and keep your engineers in control of
                high-velocity development.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/inasc.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Infrastructure as Code</h1>
              <p className="cloudcardpara mb-0">
                Leverage codes and templates for provisioning, configuring, and
                overseeing your cloud infrastructure resources, all while
                monitoring and ensuring compliance with infrastructure
                standards.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img
              className="notrepimg"
              src="/images/ms.png"
              alt=""
              style={{ height: "114%" }}
            />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Microservices</h1>
              <p className="cloudcardpara mb-0">
                Utilize containers or serverless computing to construct and
                launch a microservices architecture.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img
              className="notrepimg"
              src="/images/rtct.png"
              alt=""
              style={{ height: "108%" }}
            />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Round the Clock tracking</h1>
              <p className="cloudcardpara mb-0">
                Consistently gauge DevOps productivity and implement data-driven
                enhancements using our robust monitoring system. Access detailed
                analytical reports with just a click.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/esap.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">
                Enhanced security and protection
              </h1>
              <p className="cloudcardpara mb-0">
                Guarantee heightened security for user data with our
                impenetrable security measures, which encompass threat modeling
                and risk analysis to swiftly identify security vulnerabilities.
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
                  <img className="notrepimg" src="/images/cops.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">DevOps on Cloud</h1>
                    <p className="cloudcardpara mb-0">
                      Implement DevOps within your organization using services
                      offered by our cloud partners, designed for
                      straightforward utilization. Automate manual tasks,
                      effectively manage intricate environments, and keep your
                      engineers in control of high-velocity development.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/inasc.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">Infrastructure as Code</h1>
                    <p className="cloudcardpara mb-0">
                      Leverage codes and templates for provisioning,
                      configuring, and overseeing your cloud infrastructure
                      resources, all while monitoring and ensuring compliance
                      with infrastructure standards.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img
                    className="notrepimg"
                    src="/images/ms.png"
                    alt=""
                    style={{ height: "114%" }}
                  />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">Microservices</h1>
                    <p className="cloudcardpara mb-0">
                      Utilize containers or serverless computing to construct
                      and launch a microservices architecture.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img
                    className="notrepimg"
                    src="/images/rtct.png"
                    alt=""
                    style={{ height: "108%" }}
                  />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">
                      Round the Clock tracking
                    </h1>
                    <p className="cloudcardpara mb-0">
                      Consistently gauge DevOps productivity and implement
                      data-driven enhancements using our robust monitoring
                      system. Access detailed analytical reports with just a
                      click.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/esap.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">
                      Enhanced security and protection
                    </h1>
                    <p className="cloudcardpara mb-0">
                      Guarantee heightened security for user data with our
                      impenetrable security measures, which encompass threat
                      modeling and risk analysis to swiftly identify security
                      vulnerabilities.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>

      <h1 className="case mt-5">Our Case Studies</h1>

      <div
        class="container  mb-3 mt-5 Built-back-colour"
        style={{
          backgroundColor: "#1A4AB9",
          borderRadius: "20px",
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
          class="row overall-built-Corner"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "spacebetween",
          }}
        >
          <div class="col-md-5">
            <img
              style={{ height: "250px", width: "100%" }}
              src="./images/build.png"
              className="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-7 cLOUD-Unified">
            <div class="card-body CLOUD-bODY">
              <h5
                class="col-md-9 card-title CLouD-BULIT"
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
                class="col-md-9 card-text-3"
                style={{ fontSize: "13px", color: "#fff", opacity: "0.5" }}
              >
                Learn how we created a self-service, predictive, insights
                platform driven by an adaptive machine learning engine which
                helps improve decision-making.
              </p>
              <p class=" col-md-9 card-text" style={{ color: "white" }}>
                <p style={{ fontSize: 16 }}>
                  Read case study
                  <i class="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
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
        <h4
          className="mt-5 EXPERIENCE-cloud"
          style={{ textAlign: "center", fontWeight: 700, fontSize: "43px" }}
        >
          Benefits
        </h4>

        <div className="container">
          <p className="container col-md-9 wides">
            DataObserve is the rapidly expanding leader in Cloud Transformation
            and Data Analytics, distinguished by its substantial proficiency in
            Data Lake solutions, Data Warehouse Engineering, and Data Migration
            & Modernization.
          </p>
        </div>

        <div className="container mt-3">
          <div className="row box">
            <div
              className="col-md-4"
              style={{
                justifyContent: "center",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/premium.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5 className="cloudcardheadings">Premium quality</h5>

                <p className="arrowtext text-center">
                  Our BI tools extract data from multiple sources and analyze it
                  according to user queries. The intuitive dashboards allow
                  non-technical users to understand the story behind the data
                  without learning how to code.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/wide.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "79px", width: "59px" }}
                />
                <h5 className="cloudcardheadings">Wide wealth of experience</h5>

                <p className="arrowtext text-center">
                  Business leaders can get a holistic view of the company and
                  identify areas of opportunity with efficient BI. Access to
                  business data helps increase the organizational efficiency of
                  a company.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/tech.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5 className="cloudcardheadings">Futuristic tech stack</h5>

                <p className="arrowtext text-center">
                  Facing an issue or stuck with a problem regarding BI and
                  Analytics Services? Connect with our support services at any
                  time of the day, and our experts will help you with your
                  queries.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/clock.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "66px", width: "53px" }}
                />
                <h5 className="cloudcardheadings">24*7 support</h5>

                <p className="arrowtext text-center">
                  By analyzing this data, you can gain in-depth market knowledge
                  and stay ahead of your competition. Keep up with industry
                  changes, anticipate customer needs and improve your
                  performance.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/disaster.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "71px", width: "53px" }}
                />
                <h5 className="cloudcardheadings">Disaster Recovery</h5>

                <p className="arrowtext text-center">
                  DataObserve has a unified information architecture that
                  enables experts to address existing complexities and solve
                  them efficiently in this rapidly evolving tech landscape.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/manage.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "73px", width: "53px" }}
                />
                <h5 className="cloudcardheadings">Availability Management</h5>

                <p className="arrowtext text-center">
                  Facing an issue or stuck with a problem regarding BI and
                  Analytics Services? Connect with our support services at any
                  time of the day, and our experts will help you with your
                  queries.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              class="mb-3 mt-5"
              style={{
                backgroundColor: "#1A4AB9",
                maxWidth: "100%",
                borderRadius: "30px",
              }}
            >
              <div
                class="row no-gutters"
                style={{
                  alignItems: "center",
                  justifyContent: "spacebetween",
                }}
              >
                <div class="col-md-9">
                  <div class="">
                    <div>
                      <h5
                        class="col-md-9 card-title Cloud-title"
                        style={{ color: "white", fontSize: "24px" }}
                      >
                        Maximize Your Cloud Capabilities with the
                        DataObserve Advantage
                      </h5>
                      <p class="col-md-9 card-text Cloud-color-paragraph">
                        Facing an issue or stuck with a problem regarding BI and
                        Analytics Services? Connect with our support services at
                        any time of the day, and our experts will help you with
                        your queries.
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
                      class="fa fa-long-arrow-right Arrow-cloud"
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
        <div className="container pt-3">
          <h3 className="cloud-head" style={{ textAlign: "center" }}>
            What Makes Us Stand Out
          </h3>
          <p className="container col-md-9 text-center devops-Ourselves">
            Our aim is to establish ourselves as a reputable business
            intelligence and data analytics service provider, leveraging our
            extensive experience and global collaborations with businesses. Our
            team of BI and data analytics experts is poised to assist you in
            data collection and analysis, enabling you to extract valuable
            insights and enhance your business processes for improved execution
            and optimization. Here are a few compelling reasons why we are the
            ideal choice:
          </p>
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/premium.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "63px", width: "44px" }}
                />
                <h5 className="cloudcardheadings">Premium Quality</h5>

                <p className="arrowtext text-center">
                Every project completed by our DevOps teams goes through internal quality checks to ensure quality before being delivered.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/wide1.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "63px", width: "49px" }}
                />
                <h5 className="cloudcardheadings">Scrum and Agile Expertise</h5>

                <p className="arrowtext text-center">
                  Our certified Scrum Masters empower you to deliver efficient
                  software products with flexibility. We assume complete
                  responsibility for project quality, scheduling, scope
                  planning, and cost management.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/customand.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "63px", width: "49px" }}
                />
                <h5 className="cloudcardheadings">
                  Custom and Modular Framework
                </h5>

                <p className="arrowtext text-center">
                  We've merged our best practices with extensive experience and
                  automation tools to develop our proprietary framework. Its
                  modular and customizable design ensures seamless integration
                  with your existing infrastructure.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/shakehand.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "63px", width: "49px" }}
                />
                <h5 className="cloudcardheadings">
                  Improved Internal Collaboration
                </h5>

                <p className="arrowtext text-center">
                  Our DevOps practices and methodologies bridge the gap between
                  software engineering and IT operations teams, providing them
                  with high-quality software-based solutions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/issues4.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "63px", width: "44px" }}
                />
                <h5 className="cloudcardheadings">Efficient ROI Measurement</h5>

                <p className="arrowtext text-center">
                  Monitor every facet of DevOps with our tailored analytical
                  dashboard, providing 24/7 system monitoring. We guarantee full
                  traceability and transparency in our DevOps services.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "290px" }}
              >
                <img
                  src="./images/accelerate.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ height: "63px", width: "49px" }}
                />
                <h5 className="cloudcardheadings">
                  Accelerate Product Time to Market
                </h5>

                <p className="arrowtext text-center">
                  Our specialized DevOps tools have the capability to automate
                  manual and time-consuming tasks, resulting in reduced product
                  development and release times for your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="card text-center" style={{ border: "0px" }}>
        {/* {/ <div class="card-header">Featured</div> /} */}
        <div class="card-body faq-class">
          <h5 class="card-title" style={{ color: "white" }}>
            FAQs
          </h5>
          <div
            class="accordion"
            id="accordionExample"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingOne"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
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
                      What is DevOps as a Service, and how does it benefit my
                      software development process?
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
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  DevOps as a Service (DaaS) is a model that provides end-to-end
                  automation and continuous delivery for software development.
                  It streamlines collaboration between development and
                  operations teams, enhancing efficiency and reducing
                  time-to-market. DaaS helps cut costs by automating manual
                  processes and optimizing the software development lifecycle.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingTwo"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
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
                      How can DevOps as a Service speed up software delivery?
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
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  DevOps as a Service accelerates software delivery by
                  automating key aspects of the development process. This
                  includes continuous integration, continuous testing, and
                  continuous deployment. By eliminating manual interventions and
                  streamlining workflows, DaaS ensures faster and more reliable
                  software releases, ultimately speeding up your overall
                  software delivery pipeline.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingThree"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
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
                      What are the key components of your DevOps as a Service
                      offering?
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
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Our DevOps as a Service offering includes a comprehensive set
                  of components such as continuous integration tools, automated
                  testing frameworks, deployment automation, monitoring, and
                  collaboration tools. These components work together seamlessly
                  to create an integrated and efficient DevOps environment
                  tailored to your specific needs.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingFour"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
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
                      How does DevOps as a Service contribute to cost reduction?
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
                class="collapse"
                aria-labelledby="headingFour"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  DevOps as a Service reduces costs by automating repetitive and
                  time-consuming tasks, minimizing manual errors, and optimizing
                  resource utilization. It streamlines processes across the
                  software development lifecycle, leading to increased
                  efficiency and resource savings. By fostering collaboration
                  and communication, DaaS eliminates bottlenecks and enhances
                  productivity.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingFive"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
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
                      Is my existing infrastructure compatible with DevOps as a
                      Service?
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
                class="collapse"
                aria-labelledby="headingFiver"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Yes, our DevOps as a Service solutions are designed to be
                  flexible and compatible with a variety of infrastructures,
                  including on-premises, cloud, and hybrid environments. Our
                  team will work with you to assess your current infrastructure
                  and tailor the DevOps solution to seamlessly integrate with
                  your existing systems.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingSix"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
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
                      How does DevOps as a Service address security concerns in
                      software development?
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
                class="collapse"
                aria-labelledby="headingSix"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Security is a top priority in our DevOps as a Service
                  approach. We incorporate security measures throughout the
                  development lifecycle, including code scanning, automated
                  security testing, and compliance checks. Our goal is to ensure
                  that security is not compromised at any stage of the software
                  delivery process.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingSeven"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
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
                      Can DevOps as a Service be customized for specific
                      industry regulations?
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
                class="collapse"
                aria-labelledby="headingSeven"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Absolutely. We understand the importance of compliance with
                  industry regulations. Our DevOps as a Service solutions can be
                  customized to meet specific industry standards and
                  regulations. We work closely with your team to implement
                  compliance checks and ensure that your software development
                  practices align with regulatory requirements.
                </div>
              </div>
            </div>
            <div
              class="card"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                color: "white",
                margin: "10px",
                width: "80%",
              }}
            >
              <div
                class="card-header"
                id="headingEight"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
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
                      How can my team benefit from end-to-end automation in the
                      DevOps process?
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
                class="collapse"
                aria-labelledby="headingEight"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  End-to-end automation in the DevOps process brings several
                  benefits, including reduced manual errors, faster release
                  cycles, and improved collaboration. Automation allows your
                  team to focus on innovation and development rather than
                  spending time on repetitive tasks. This results in higher
                  productivity, better software quality, and a more efficient
                  development workflow.
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

export default Devops;
