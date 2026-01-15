import React from "react";
import "./Databi.css";
import Faq from "../../../components/Common/Faq";
import Navbar from "../../../components/Layout/Navbar";
import Footer from "../../../components/Layout/Footer";
// import databi from "../../../assets/videos/datanalytics.mp4";
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

const Databi = () => {
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
      <div className="drives">
        <div>
          <video className="daba-bi-anal" autoPlay loop muted>
            <source
              src="https://storage.googleapis.com/do-website-resources/datanalytics.mp4"
              type="video/mp4"
            />
          </video>
          <div className="DATA-Main-hEading">
            <p className="DATA-TRANSFORM">
              <p
                className="DATA-transform-Size"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "1px",
                }}
              >
                Business Intelligence and Analytics
              </p>

              <p className="col-md-6 Navigate-Journey">
                Achieve scalable business expansion through our Business
                Intelligence and Data Analytics services.
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
        <h4 className="DataBi-migration">
          Our Expertis in BI and Analytics services
        </h4>
        <p className="container col-md-9 DataBi-operational">
          With a collective industry experience exceeding four decades, our
          business intelligence and analytics services are custom-designed to
          guide you toward operational excellence and comprehensive growth.
        </p>
      </div>
      <div className="cloudcards d-md-block d-none">
        <div class="ccdiv w-100">
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/dvc.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">
                Data visualization consulting
              </h1>
              <p className="cloudcardpara mb-0">
                Data Observe's core expertise lies in consulting and our Data
                visualization capabilities empower organizations to Simplify
                intricate data and craft compelling narratives through its
                utilization.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/dap.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Data Analytics Products</h1>
              <p className="cloudcardpara mb-0">
                utilizing our array of advanced tools, we assist in the creation
                of user-friendly and engaging dashboards that enable
                organizations to easily monitor key performance indicators and
                other valuable information
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/bim (2).png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">BI Migration</h1>
              <p className="cloudcardpara mb-0">
                Effortlessly transfer your data analytics between locations,
                change formats, or migrate it from your current Business
                Intelligence environment to a new one without any complications.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/ssbi.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Self-service BI</h1>
              <p className="cloudcardpara mb-0">
                Our self-service Business Intelligence empowers various business
                teams and departments to independently analyze data and address
                inquiries without relying on IT teams or submitting formal
                requests.
              </p>
            </div>
          </div>
          <div className="cloudimgcard">
            <img className="notrepimg" src="/images/dg.png" alt="" />
            <div className="cloudcard card">
              <h1 className="cloudcardheading">Data governance</h1>
              <p className="cloudcardpara mb-0">
                At DataObserve, we are committed to democratizing data
                governance and have implemented a collaborative and
                purpose-built data governance framework.
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
                  <img className="notrepimg" src="/images/dvc.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">
                      Data visualization consulting
                    </h1>
                    <p className="cloudcardpara mb-0">
                      Data Observe's core expertise lies in consulting and our
                      Data visualization capabilities empower organizations to
                      Simplify intricate data and craft compelling narratives
                      through its utilization.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/dap.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">
                      Data Analytics Products
                    </h1>
                    <p className="cloudcardpara mb-0">
                      utilizing our array of advanced tools, we assist in the
                      creation of user-friendly and engaging dashboards that
                      enable organizations to easily monitor key performance
                      indicators and other valuable information
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/bim (2).png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">BI Migration</h1>
                    <p className="cloudcardpara mb-0">
                      Effortlessly transfer your data analytics between
                      locations, change formats, or migrate it from your current
                      Business Intelligence environment to a new one without any
                      complications.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/ssbi.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">Self-service BI</h1>
                    <p className="cloudcardpara mb-0">
                      Our self-service Business Intelligence empowers various
                      business teams and departments to independently analyze
                      data and address inquiries without relying on IT teams or
                      submitting formal requests.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard">
                  <img className="notrepimg" src="/images/dg.png" alt="" />
                  <div className="cloudcard card">
                    <h1 className="cloudcardheading">Data governance</h1>
                    <p className="cloudcardpara mb-0">
                      At DataObserve, we are committed to democratizing data
                      governance and have implemented a collaborative and
                      purpose-built data governance framework.
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
        class="container mb-3 mt-5 DATAbi-Built-back-colour"
        style={{
          backgroundColor: "#1A4AB9",
          borderRadius: "20px",
        }}
      >
        <div className="DATAbi-right-media-Corner">
          <img
            className="DATAbi-built-corner-image"
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
              <p class="col-md-9 card-text" style={{ color: "white" }}>
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
        <div
          className="container"
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

          <p className="container col-md-8 Databi-wides">
            DataObserve is the rapidly expanding Business Intelligence & Data
            Analytics company, renowned for its robust expertise in Data Lake
            solutions, Data Warehouse Engineering, Data Migration, and
            Modernization.
          </p>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "390px" }}
              >
                <img
                  src="./images/faster.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  // style={{ width: "53px", height: "80px" }}
                />
                <h5 className="cloudcardheadings">
                  Faster analysis and intuitive dashboards
                </h5>

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
                style={{ height: "390px" }}
              >
                <img
                  src="./images/business.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  // style={{ width: "76px", height: "76px" }}
                />
                <h5 className="cloudcardheadings" style={{ marginTop: "44px" }}>
                  Increased organizational efficiency
                </h5>

                <p className="arrowtext text-center">
                  Business leaders can get a holistic view of the company and
                  identify areas of opportunity with efficient BI. Access to
                  business data helps increase the organizational efficiency of
                  a company
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "390px" }}
              >
                <img
                  src="./images/clock.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  // style={{ width: "59px", height: "59px" }}
                />
                <h5 className="cloudcardheadings" style={{ marginTop: "21px" }}>
                  24*7 support service
                </h5>

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
                style={{ height: "390px" }}
              >
                <img
                  src="./images/improved.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  // style={{ width: "53px", height: "73px" }}
                />
                <h5 className="cloudcardheadings">
                  Improved competitive advantage
                </h5>

                <p className="arrowtext text-center">
                  By analyzing this data, you can gain in-depth market knowledge
                  and stay ahead of your competition. Keep up with industry
                  changes, anticipate customer needs and improve your
                  performance.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "390px" }}
              >
                <img
                  src="./images/unified.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  // style={{ width: "53px", height: "73px" }}
                />
                <h5 className="cloudcardheadings">
                  Unified and Robust information architecture
                </h5>

                <p className="arrowtext text-center">
                  DataObserve possesses a unified information architecture that
                  empowers experts to effectively tackle existing complexities
                  within this fast-evolving tech landscape.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "390px" }}
              >
                <img
                  src="./images/data.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  // style={{ height: "73px", width: "63px" }}
                />
                <h5 className="cloudcardheadings">
                  Data-driven business decisions
                </h5>

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
                        Elevate Your Business Decision-Making 
                        with Amazon QuickSight or Microsoft Power BI.
                      </h5>
                      <p class=" col-md-9 card-text Cloud-color-paragraph">
                        Looking to maximize the potential of Business
                        Intelligence (BI) in Amazon QuickSight or Microsoft
                        Power BI? Our team of BI experts is ready to provide
                        consultation and implement your next QuickSight or Power
                        BI solution.
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
          {/* <h3 className="cloud-head" style={{ textAlign: "center" }}>
            What Makes Us Stand Out
          </h3>
          <p className="text-center">
            Our aim is to establish ourselves as a reputable business
            intelligence and data analytics service provider, leveraging our
            extensive experience and global collaborations with businesses. Our
            team of BI and data analytics experts is poised to assist you in
            data collection and analysis, enabling you to extract valuable
            insights and enhance your business processes for improved execution
            and optimization. Here are a few compelling reasons why we are the
            ideal choice:
          </p> */}
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/high.png"
                  className="App-logo"
                  alt="logo"
                  width={70}
                  height={90}
                  // style={{ height: "73px", width: "63px" }}
                />
                <h5 className="cloudcardheadings">High accuracy</h5>

                <p className="arrowtext text-center">
                  Take your business to the clouds with DataObserve's cloud
                  certified architects, who can assist you in minimizing
                  downtimes, enhancing agility, and elevating your capacity to
                  innovate through efficient cloud migration.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/operation.png"
                  className="App-logo"
                  alt="logo"
                  width={70}
                  height={90}
                  // style={{ height: "73px", width: "63px" }}
                />
                <h5 className="cloudcardheadings">Operational intelligence</h5>

                <p className="arrowtext text-center">
                  Reconsider current procedures to ensure data transparency and
                  effortless accessibility. Our Data Engineering ensures fast
                  query retrieval, enabling businesses to fully unlock the
                  potential of big data solutions.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/cross.png"
                  className="App-logo"
                  alt="logo"
                  width={70}
                  height={90}
                  // style={{ height: "73px", width: "63px" }}
                />
                <h5 className="cloudcardheadings">
                  Cross-platform integration
                </h5>

                <p className="arrowtext text-center">
                  Business Intelligence involves data structures and
                  visualization to enhance decision-making. DataObserve's
                  business intelligence solutions make comprehending shopper
                  behavior more straightforward than ever.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/dataan.png"
                  className="App-logo power-Bi-data"
                  alt="logo"
                  width={80}
                  height={80}
                  // style={{ height: "73px", width: "63px" }}
                />
                <h5 className="cloudcardheadings" style={{ marginTop: "20px" }}>
                  Power BI
                </h5>

                <p className="arrowtext text-center">
                  DevOps-as-a-Service is an advanced delivery model created to
                  enhance application development. Utilize our DevOps as a
                  service (DaaS) solutions to achieve time and cost savings
                  through the automation of deployment processes.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "330px" }}
              >
                <img
                  src="./images/dc.png"
                  className="App-logo"
                  alt="logo"
                  width={80}
                  height={100}
                  // style={{ height: "73px", width: "63px" }}
                />
                <h5 className="cloudcardheadings">Secure on-cloud data</h5>

                <p className="arrowtext text-center">
                  DevOps-as-a-Service is an advanced delivery model created to
                  enhance application development. Utilize our DevOps as a
                  service (DaaS) solutions to achieve time and cost savings
                  through the automation of deployment processes.
                </p>
              </div>
            </div>

            {/* <div className="col-md-4">
            <div className="text-center box-padding">
              <img
                src="./images/application.png"
                className="App-logo arrow"
                alt="logo"
                width={100}
              />
              <h5>Application Modernization</h5>

              <p className="arrowtext text-justify">
                Application modernization is essentially the process of
                upgrading current applications using state-of-the-art computing
                technology. Increase your productivity tenfold by smoothly
                migrating your entire underlying infrastructure to the cloud
                with DataObserve.
              </p>
            </div>
          </div> */}
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
                      What is Business Intelligence (BI) and how can it benefit
                      my business?
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
                  Business Intelligence involves the use of data analysis tools
                  and processes to transform raw data into meaningful insights.
                  The benefits of BI include improved decision-making, enhanced
                  operational efficiency, and the ability to identify new
                  opportunities for growth. It provides a holistic view of your
                  business data, empowering you to make informed and strategic
                  decisions.
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
                      How can Data Analytics drive scalable business growth?
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
                  Data Analytics is the process of examining and interpreting
                  data to uncover valuable insights and trends. By leveraging
                  data analytics, businesses can identify growth opportunities,
                  optimize processes, and enhance customer experiences. It
                  enables data-driven decision-making, leading to more efficient
                  operations and a competitive edge in the market.
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
                      What types of Business Intelligence and Data Analytics
                      services do you offer?
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
                  Our Business Intelligence and Data Analytics services are
                  comprehensive and tailored to meet your business needs. We
                  offer data visualization, predictive analytics, data
                  warehousing, and business reporting services. Whether you're
                  looking to gain insights from historical data or predict
                  future trends, our services are designed to help you harness
                  the full power of your data.
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
                      How can Business Intelligence enhance my decision-making
                      processes?
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
                  Business Intelligence provides real-time insights into key
                  performance indicators, allowing you to make data-driven
                  decisions. It facilitates a deeper understanding of market
                  trends, customer behavior, and operational efficiency. With
                  BI, you can track your business's performance in real time and
                  respond quickly to changing market dynamics.
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
                      Is my data secure when utilizing Business Intelligence and
                      Data Analytics services?
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
                  Yes, ensuring the security of your data is a top priority for
                  us. We implement industry-standard security measures,
                  including encryption, access controls, and compliance with
                  data protection regulations. Our team is dedicated to
                  maintaining the confidentiality and integrity of your data
                  throughout the analytics process.
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
                      How can Data Analytics contribute to improving customer
                      experiences?
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
                  Absolutely. Our Business Intelligence and Data Analytics
                  services are designed to seamlessly integrate with your
                  existing systems and platforms. Whether you use on-premises
                  solutions or cloud-based services, our team has the expertise
                  to integrate our analytics solutions into your existing
                  infrastructure.
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
                      How can Data Analytics contribute to improving customer
                      experiences?
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
                  Data Analytics provides valuable insights into customer
                  behavior, preferences, and feedback. By analyzing this data,
                  businesses can tailor their products and services to meet
                  customer expectations. This leads to improved customer
                  satisfaction, loyalty, and the ability to respond proactively
                  to changing customer needs.
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
                      What is the typical process for implementing Business
                      Intelligence and Data Analytics solutions?
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
                  The implementation process begins with a thorough assessment
                  of your business needs and goals. We then design a customized
                  solution, implement the necessary tools and technologies, and
                  provide training to your team. Ongoing support and
                  optimization are integral parts of our service to ensure you
                  continually derive maximum value from your BI and Data
                  Analytics investments.
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

export default Databi;
