import React from "react";
import "./Media.css";
import Footer from "../../../components/Layout/Footer";
import Navbar from "../../../components/Layout/Navbar";
import Talktous from "../../../components/Common/Talktous";

// import media from "../../../assets/videos/media.mp4";
function Media() {
  return (
    <div>
      <Navbar />
      {/* !--nav bar ends--! */}

      <div className="media1div">
        <video className="media-entertain-video" autoPlay loop muted>
          <source
            src="https://storage.googleapis.com/do-website-resources/media.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container Gaming-Main-media">
          <div className="row">
            <div className="col-md-8">
              <h4 className="Gaming-HeadiNG-media" style={{ color: "white" }}>
                Media & Entertainment
              </h4>
              <p className="Gaming-DES-media">
                Lead the digital transformation for an unparalleled media and
                entertainment experience.
              </p>
              <p className="Gaming-content-media">
                Embrace the paradigm shift in the media and entertainment
                industry with lightning-fast distribution and extensive storage
                capacity through cloud migration. Collaborate with DataObserve
                to enhance the agility, flexibility, and scalability of your
                content supply chain.
              </p>
            </div>

            <div className="col-md-4"></div>
          </div>
        </div>
      </div>

      {/* !--6box stArt--! */}

      <div>
        <h3 className="media-platforms">
          Our Expertise in Media and Entertainment
          <br />
          Services
        </h3>
        <p className="container col-md-6 media-platformspara">
          Achieving deeper audience insights and enhancing operational
          efficiency to outpace the competition –these are just a couple
          of the goals being realized through the transformative fusion of
          advanced
          analytics services with cloud technology in the M&E sector.
        </p>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4 ind-bb-sg-1">
              <div className="bx1-border Media-Box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/business.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">
                      Advanced Business Intelligence
                    </h5>
                  </div>
                  <p className="boxtext text-initial">
                    From managing massive streaming workloads to handling
                    unstructured customer data, advanced data lakehouses
                    tailored for the M&E sector offer the ideal solution.
                    Discover how the synergy between cloud solutions and big
                    data is empowering AI to scale data pipelines and drive cost
                    reductions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-2">
              <div className="bx1-border Media-Box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/comercialdatalake.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">
                      D2C Streaming BigData Analytics
                    </h5>
                  </div>
                  <p className="boxtext text-initial">
                    Harness the cloud's purpose-built capabilities to provide an
                    unmatched D2C streaming experience by integrating Big Data
                    Analytics with our cloud media services. Explore how our
                    cloud solutions and advanced analytics are assisting
                    industry leaders in delivering seamless entertainment.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-3">
              <div className="bx1-border Media-Box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/data-driven.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">Unified Audience Profiling </h5>
                  </div>
                  <p className="boxtext text-initial">
                    Easily analyze extensive audience data with unified audience
                    profiling. Capture, store, manage, and interpret your
                    accumulated customer data with our partner Cloud to create
                    precise targeted marketing campaigns.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-4">
              <div className="bx1-border Media-Box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/supply-chain.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">
                      Unlock the value of Media Assets 
                    </h5>
                  </div>
                  <p className="boxtext text-initial">
                    Having trouble effectively utilizing your content catalog?
                    Advanced analytics allows you to optimize results by
                    creating custom audience segments and repurposing content
                    effortlessly, unlocking the full potential of your media
                    assets with just a few clicks.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-5">
              <div className="bx1-border Media-Box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/decentralized.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">AI/ML Models for Production</h5>
                  </div>
                  <p className="boxtext text-initial">
                    Unlock the full potential of your AI and machine learning
                    media models by seamlessly integrating them into your
                    production cycle using AWS or Azure media cloud solutions.
                    This fusion of big data analytics with production processes
                    not only enables personalized user experiences but also
                    ensures the enforcement of data quality standards.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ind-bb-sg-6">
              <div className="bx1-border Media-Box">
                <div className="text-initial">
                  <div className="d-flex">
                    <img
                      src="./images/m-devices.png"
                      className="App-logo-industrie business"
                      alt="logo"
                      width={45}
                      style={{
                        marginBottom: "10px",
                        marginTop: "-2px",
                      }}
                    />
                    <h5 className="ind-boxhead">DO For M&E </h5>
                  </div>
                  <p className="boxtext text-initial">
                    Experience an unparalleled media journey with our extensive
                    array of services, including content production, media
                    supply chain management, direct-to-consumer streaming, and
                    advanced data analytics. Explore how our tailor-made
                    solutions for media and entertainment are revolutionizing
                    the industry, setting new standards for excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* !--6box ends--! */}

      {/* !--case study --! */}

      <div className="bg-white">
        <div className="container" style={{ marginTop: "18px" }}>
          <h1 className="case-mainheadname">Our Case Studies</h1>
          <p className="container col-md-10 media-case-para">
            Struggling with media production and distribution transformation?
            Our experienced team has successfully assisted numerous
            media-focused businesses in expanding globally and improving their
            operations. Dive into our case studies to discover how our AWS media
            services can revolutionize your business.
          </p>

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
                      <i
                        class="fa fa-long-arrow-right ml-2"
                        aria-hidden="true"
                      ></i>
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
        </div>
      </div>
      {/* !--case study --! */}

      {/* !--box on img --! */}
      <div className="mediaimg">
        <div className="media-img-section">
          <div className="lab-data-media">
            <div class="card turantomedia">
              <div
                class="card-body media-bg-pink"
                // style={{
                //   borderRadius: "27px",
                //   height: "271px",
                //   width: "435px",
                //   padding:"33px"
                // }}
              >
                <p className="doc">
                  {" "}
                  <span>
                    <img src="./images/doc.png" />
                  </span>{" "}
                  BLOG{" "}
                </p>
                <h5
                  class="card-title"
                  style={{
                    fontSize: "15px",
                    fontWeight: "600px",
                    letterSpacing: "0.68px",
                    color: "white",
                  }}
                >
                  Reduce Server Licensing Expenses by 70% with Scalable Cloud
                  Data Architecture
                </h5>
                <h6
                  class="media-card-subtitle mb-2"
                  style={{
                    fontSize: "11px",
                    marginTop: "5px",
                    lineHeight: "20px",
                  }}
                >
                  According to Statista, internet users consumed approximately
                  79 zettabytes of data worldwide in 2021, and it is projected
                  to reach 180 zettabytes by 2025.
                </h6>
                <p
                  class="readmore"
                  style={{
                    color: "white",
                    marginTop: "15px",
                    fontWeight: "600",
                    letterSpacing: "1px",
                  }}
                >
                  <p className="ReAD-More-media">
                    Read more
                    <i
                      class="fa fa-long-arrow-right ml-3"
                      aria-hidden="true"
                    ></i>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* !--box img--! */}

      {/* !--faqs--! */}
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
                    <p className="faq">
                      What are Media and Entertainment Data Solutions, and how
                      do they contribute to creative excellence?
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
                <div class="card-bodys">
                  Media and Entertainment Data Solutions involve leveraging
                  advanced data technologies to enhance creativity, streamline
                  operations, and optimize content delivery. These solutions
                  play a pivotal role in powering creative excellence by
                  providing insights, personalizing content, and improving
                  audience engagement.
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
                    <p className="faq">
                      How do Media and Entertainment Data Solutions benefit
                      content creators and producers?
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
                <div class="card-bodys">
                  These solutions empower content creators and producers by
                  offering data-driven insights into audience preferences,
                  trends, and content performance. This enables them to make
                  informed decisions, create targeted content, and optimize
                  strategies for maximum impact.{" "}
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
                    <p className="faq">
                      What challenges do Media and Entertainment Data Solutions
                      address in the industry?
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
                <div class="card-bodys">
                  Media and Entertainment Data Solutions address challenges
                  related to content discovery, audience segmentation,
                  monetization strategies, and the need for real-time analytics.
                  By tackling these challenges, organizations can enhance their
                  competitiveness and adapt to rapidly changing market dynamics.{" "}
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
                    <p className="faq">
                      Can Media and Entertainment Data Solutions be customized
                      for specific content genres or platforms?
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
                <div class="card-bodys">
                  Yes, our Media and Entertainment Data Solutions are highly
                  adaptable and can be customized to fit specific content
                  genres, platforms, and distribution channels. Whether it's
                  movies, TV shows, music, or digital content, our solutions are
                  designed to meet diverse needs.
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
                    <p class="faq">
                      How do Data Solutions enhance collaboration in the Media
                      and Entertainment industry?
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
                <div class="card-bodys">
                  Our Data Solutions foster collaboration by providing a
                  centralized platform for content creators, marketers, and
                  distributors. This facilitates seamless communication,
                  efficient workflow management, and ensures that everyone is
                  working towards a unified creative vision.{" "}
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
                    <p className="faq">
                      Are Media and Entertainment Data Solutions compliant with
                      copyright and licensing regulations?
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
                <div class="card-bodys">
                  Absolutely. Our solutions are designed to adhere to copyright
                  and licensing regulations, ensuring that content usage is in
                  compliance with legal standards. This is crucial in the media
                  and entertainment industry where intellectual property
                  protection is paramount.{" "}
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
                    <p className="faq">
                      How do Media and Entertainment Data Solutions contribute
                      to audience engagement and personalization?
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
                <div class="card-bodys">
                  By analyzing audience behavior, preferences, and viewing
                  habits, our solutions enable content providers to personalize
                  recommendations, advertising, and user experiences. This
                  enhances audience engagement, leading to increased viewer
                  satisfaction and loyalty.{" "}
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
                    <p class="faq">
                      Can Data Solutions be integrated with existing content
                      management and distribution systems?
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
                <div class="card-bodys">
                  Yes, our Media and Entertainment Data Solutions are designed
                  to seamlessly integrate with existing content management and
                  distribution systems. This ensures a smooth workflow,
                  minimizes disruptions, and allows organizations to leverage
                  their current infrastructure.{" "}
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
                id="headingNine"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
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
                    <p class="faq">
                      What kind of analytics capabilities do Media and
                      Entertainment Data Solutions offer?
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
                id="collapseNine"
                class="collapse"
                aria-labelledby="headingNine"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  Our Data Solutions provide a wide range of analytics
                  capabilities, including content performance analytics,
                  audience segmentation, sentiment analysis, and predictive
                  modeling. These analytics empower organizations to make
                  data-driven decisions and stay ahead of industry trends.{" "}
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
                id="headingTen"
                style={{ textAlign: "left" }}
              >
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
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
                    <p class="faq">
                      How can organizations in the Media and Entertainment
                      industry get started with implementing Data Solutions?
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
                id="collapseTen"
                class="collapse"
                aria-labelledby="headingTen"
                data-parent="#accordionExample"
              >
                <div class="card-bodys">
                  roadmap for implementing data solutions that drive creative
                  excellence in the media and entertainment industry.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Talktous /> */}

      {/* !--footer--! */}
      <Footer />
    </div>
  );
}

export default Media;
