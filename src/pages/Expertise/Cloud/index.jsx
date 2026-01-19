import React from "react";
import "./Cloud.css";
import Faq from "../../../components/Common/Faq";
import Navbar from "../../../components/Layout/Navbar";

// import cloud from "../../../assets/videos/cloud.mp4";
import cloud from "../../../assets/videos/cloud-e-vid.mp4";
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

const Cloud = () => {
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
      <div className="cloudempower">
        <video className="cloud-transform-video" autoPlay loop muted>
          <source
            src={cloud}
            type="video/mp4"
          />
        </video>
        <div className="Cloud-Main-hEading">
          <div className="cLOUD-TRANSFORM">
            <p className="cloud-transform-Size"
              style={{
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "1px",
              }}
            >
              Cloud Transformation
            </p>

            <p className="col-md-6 Navigate-Journey">
              Empower Your Business Transformation Through Cloud Migration
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

          </div>
        </div>
      </div>
      <div className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <h4 className="migration">Our Expertise in Cloud Migration Services</h4>
        <p className="container col-md-9 operational">
          With a collective industry experience exceeding four decades, our
          cloud migration services are custom-designed to guide you towards
          operational excellence and comprehensive growth. We specialize in
          transforming organizations of all sizes, seamlessly transitioning IT
          infrastructure, applications, and processes into robust cloud
          ecosystems.
        </p>
      </div>
      <div className="cloudcards d-md-block d-none">
        <div className="ccdiv w-100">
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/ccon.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">cloud consulting</h1>
              <p className="cloudcardpara mb-0">
                Enhance your decision-making and optimize your operational
                capabilities with our premium cloud consulting services. Allow
                us to assist you in selecting the ideal cloud solutions tailored
                to your specific requirements.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/cmig.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">
                Cloud Migration & Modernization
              </h1>
              <p className="cloudcardpara mb-0">
                Revitalize your business systems and streamline data processes
                through cloud-powered migration services. We tailor
                modernization and cloud migration strategies to align with your
                distinct requirements.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/ccop.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Cloud Cost Optimization</h1>
              <p className="cloudcardpara mb-0">
                Through our cloud partnerships, businesses can efficiently
                manage their ongoing cloud computing expenses and gain
                comprehensive control over their cloud expenditure.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/cops.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">CloudOps</h1>
              <p className="cloudcardpara mb-0">
                Speed up development, enhance resilience, and reduce your
                operational costs with our secure and efficient CloudOps
                solutions. Feel free to inquire about the different CloudOps
                models at your disposal today.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/inas.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Infrastructure as services</h1>
              <p className="cloudcardpara mb-0">
                Create resilient and highly efficient IT infrastructures for
                computing and storing your business data using Infrastructure as
                a Service (IaaS) solutions. Contact our team to discover more
                about our cloud migration services.
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
                  <img className="notrepimg" src="/images/ccon.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">cloud consulting</h1>
                    <p className="cloudcardpara mb-0">
                      Enhance your decision-making and optimize your operational
                      capabilities with our premium cloud consulting services.
                      Allow us to assist you in selecting the ideal cloud
                      solutions tailored to your specific requirements.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/cmig.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">
                      Cloud Migration & Modernization
                    </h1>
                    <p className="cloudcardpara mb-0">
                      Revitalize your business systems and streamline data
                      processes through cloud-powered migration services. We
                      tailor modernization and cloud migration strategies to
                      align with your distinct requirements.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/ccop.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">
                      Cloud Cost Optimization
                    </h1>
                    <p className="cloudcardpara mb-0">
                      Through our cloud partnerships, businesses can efficiently
                      manage their ongoing cloud computing expenses and gain
                      comprehensive control over their cloud expenditure.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/cops.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">CloudOps</h1>
                    <p className="cloudcardpara mb-0">
                      Speed up development, enhance resilience, and reduce your
                      operational costs with our secure and efficient CloudOps
                      solutions. Feel free to inquire about the different
                      CloudOps models at your disposal today.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/inas.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">
                      Infrastructure as services
                    </h1>
                    <p className="cloudcardpara mb-0">
                      Create resilient and highly efficient IT infrastructures
                      for computing and storing your business data using
                      Infrastructure as a Service (IaaS) solutions. Contact our
                      team to discover more about our cloud migration services.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
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
              <div className=" col-md-9 card-text" style={{ color: "white" }}>
                <p style={{ fontSize: 16 }}>
                  Read case study
                  <i className="fa fa-long-arrow-right ml-2" aria-hidden="true"></i>
                </p>
              </div>
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
                <img className="srdsystems-cloud"
                  src="./images/srdsystems.png"
                  alt=""
                  style={{ width: "70px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
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
          Experience the Data Observe Advantage
        </h4>

        <p className="wides">
          As a premier provider of cloud migration services and consulting, we
          offer you a wide range of advantages.
        </p>
      </div>



      <div className="container mt-3">
        <div className="row box">
          <div className="col-md-4">
            <div
              className="text-center box-padding-cloud"
              style={{ height: "380px" }}
            >
              <img
                src="./images/money.png"
                className="App-logo"
                alt="logo"
                width={100}
              />
              <h5 className="cloudcardheadings">Cost-effectiveness</h5>

              <p className="arrowtext text-center">
                DataObserve is the rapidly expanding leader in Cloud
                Transformation and Data Analytics, boasting exceptional
                proficiency in Data Lake solutions, Data Warehouse Engineering,
                Data Migration, and Modernization.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding-cloud"
              style={{ height: "380px" }}
            >
              <img
                src="./images/time.png"
                className="App-logo"
                alt="logo"
                width={100}
              />
              <h5 className="cloudcardheadings">Decreased time to market</h5>

              <p className="arrowtext text-center ">
                DataObserve is the swiftly evolving company specializing in
                Cloud Transformation and Data Analytics, with a robust
                proficiency in Data Lake solutions, Data Warehouse Engineering,
                Data Migration, and Modernization.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div
              className="text-center box-padding-cloud"
              style={{ height: "380px" }}
            >
              <img
                src="./images/dc.png"
                className="App-logo"
                alt="logo"
                width={100}
              />
              <h5 className="cloudcardheadings">Data center consolidation</h5>

              <p className="arrowtext text-center">
                Through robust cloud migration, your business can eliminate a
                multitude of unused and irrelevant resources. This not only
                leads to reduced infrastructure costs but also streamlines data
                operations.
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
                      className="col-md-8 card-title Cloud-title"
                      style={{ color: "white", fontSize: "24px" }}
                    >
                      Maximize Your Cloud Capabilities with the  DataObserve
                      Advantage
                    </h5>
                    <p className="col-md-9 card-text Cloud-color-paragraph">
                      Streamline your cloud-driven business transformation with
                      DataObserve's comprehensive suite of cloud services,
                      encompassing consulting, optimization, migration, and
                      modernization. Our team of seasoned cloud experts is at
                      your disposal, ready to provide guidance and support.
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
                    margin: "50px",
                    borderRadius: "6px",
                    color: "#0046E8",
                  }}
                >
                  Talk to us now{" "}
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
            {/* <h3 className="cloud-head" style={{ textAlign: "center" }}>
            What Makes Us Stand Out
          </h3>
          <p
            className="container col-md-7  CLoud-Text-pARA"
            style={{
              textAlign: "center",
            }}
          >
            Years of experience in delivering cloud migration services have
            enabled us to construct enduring cloud solutions and infrastructure
            that drive business optimization. Explore some key factors that
            position us as an industry leader for the years ahead.
          </p> */}
          </div>
          <div className="container mt-3">
            <div className="row box">
              <div className="col-md-4">
                <div
                  className="text-center box-padding-cloud"
                  style={{ height: "380px" }}
                >
                  <img
                    src="./images/ddma.png"
                    className="App-logo"
                    alt="logo"
                    width={80}
                    height={100}
                  />
                  <h5 className="cloudcardheadings text-center">
                    Data-Driven Migration Assessment
                  </h5>

                  <p className="arrowtext text-left">
                    Our cloud-ready, data-driven migration assessment enables you
                    to assess the feasibility of migrating your resources and
                    infrastructure to the cloud. Inquire about how DataObserve
                    experts can assist you throughout the entire migration
                    journey.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding-cloud"
                  style={{ height: "380px" }}
                >
                  <img
                    src="./images/unte.png"
                    className="App-logo"
                    alt="logo"
                    width={80}
                    height={100}
                  />
                  <h5 className="cloudcardheadings text-center">
                    Unparalleled Talent and Experience
                  </h5>

                  <p className="arrowtext text-left">
                    With years of industry expertise and a team of committed and
                    seasoned cloud migration consultants, we offer an unparalleled
                    range of high-quality services that are sure to ensure your
                    growth.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding-cloud"
                  style={{ height: "380px" }}
                >
                  <img
                    src="./images/pics.png"
                    className="App-logo"
                    alt="logo"
                    width={80}
                    height={100}
                  />
                  <h5 className="cloudcardheadings text-center">
                    Proven, Industry-tailored Cloud Solutions
                  </h5>

                  <p className="arrowtext text-left">
                    Our cloud migration and big data processing solutions are
                    customized to align with the distinct requirements and
                    preferences of your business. Rest assured, all our cloud
                    migration solutions adhere to the highest industry standards.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding-cloud"
                  style={{ height: "380px" }}
                >
                  <img
                    src="./images/tep.png"
                    className="App-logo CLOUD-APP-LOGO"
                    alt="logo"
                    width={80}
                    height={80}
                  />
                  <h5 className="cloudcardheadings text-center" style={{ marginTop: "24px" }}>
                    Trusted Enterprise Partner
                  </h5>

                  <p className="arrowtext text-left">
                    With over incredible amount of data migrated and managed
                    annually, DataObserve is in the process to establishedit self
                    as one of the most highly trusted cloud migration providers.
                    We firmly believe in delivering 100% customer satisfaction and
                    cater to a global clientele of happy customers.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="text-center box-padding-cloud"
                  style={{ height: "380px" }}
                >
                  <img
                    src="./images/pa.png"
                    className="App-logo"
                    alt="logo"
                    width={80}
                    height={100}
                  />
                  <h5 className="cloudcardheadings text-center">Proven Accelerators</h5>

                  <p className="arrowtext text-left">
                    Unlock exponential growth through DataObserve's cloud
                    migration services and data solutions. With our assistance,
                    you can effortlessly harness industry-leading Azure and AWS
                    solutions such as Azure Stack HCI, Azure IoT, Amazon EC2,
                    Amazon RDS, and Amazon S3.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>







      {/* <Faq /> */}
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
                      What is cloud migration, and why should my business
                      consider it?
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
                  Cloud migration involves moving your business's data,
                  applications, and processes from on-premises servers to
                  cloud-based infrastructure. This transition offers numerous
                  benefits, including improved scalability, cost-efficiency,
                  enhanced security, and agility. By embracing cloud migration,
                  businesses can optimize their operations and drive digital
                  transformation.
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
                      How can cloud migration benefit my business's
                      transformation journey?
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
                  Cloud migration is a key enabler of business transformation.
                  It allows for the seamless integration of innovative
                  technologies, facilitates collaboration, and ensures
                  accessibility from anywhere. This process empowers your
                  business to adapt quickly to changing market demands,
                  streamline processes, and stay ahead in today's dynamic
                  digital landscape.
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
                      What types of cloud migration services do you provide?
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
                  We offer comprehensive cloud migration services tailored to
                  meet your business needs. Our services include assessing your
                  current infrastructure, developing a customized migration
                  strategy, executing the migration process, and providing
                  ongoing support. Whether you're considering public, private,
                  or hybrid cloud solutions, we have the expertise to guide you
                  through each step.
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
                      How secure is my data during the migration process?
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
                  Ensuring the security of your data is our top priority. We
                  follow industry best practices and employ robust security
                  measures throughout the migration process. This includes data
                  encryption, access controls, and compliance with relevant
                  regulations. Our team is committed to safeguarding your
                  sensitive information and maintaining the confidentiality,
                  integrity, and availability of your data.
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
                      Can I expect minimal disruption to my business operations
                      during the migration?
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
                  Yes, our goal is to minimize disruption to your business
                  operations during the migration process. We meticulously plan
                  each step of the migration to ensure a smooth transition. We
                  work closely with your team to schedule migrations during
                  low-impact periods and provide effective communication to keep
                  stakeholders informed throughout the process.
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
                      How does cloud migration impact scalability and
                      cost-efficiency?
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
                  Cloud migration enhances scalability by allowing you to scale
                  resources up or down based on your business requirements. This
                  flexibility ensures you only pay for the resources you use,
                  optimizing cost-efficiency. Additionally, cloud services often
                  provide pay-as-you-go pricing models, eliminating the need for
                  large upfront investments in hardware.
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
                      Is training provided for our team to adapt to the new
                      cloud environment?
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
                  Yes, we offer comprehensive training programs to ensure your
                  team is well-equipped to operate within the new cloud
                  environment. Our training includes hands-on sessions,
                  documentation, and ongoing support to empower your team with
                  the skills needed to leverage the full potential of the cloud
                  services adopted.
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
                      How do I get started with your cloud migration services?
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
                  Getting started is easy! Contact our team to schedule a
                  consultation. During this initial phase, we'll assess your
                  current infrastructure, understand your business goals, and
                  formulate a customized migration plan. Our experts will guide
                  you through each step of the process, ensuring a successful
                  and transformative cloud migration journey.
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

export default Cloud;
