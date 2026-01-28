import React from "react";
import "./Talent.css";
import Faq from "../../../components/Common/Faq";
import Navbar from "../../../components/Layout/Navbar";
import talent from "../../../assets/videos/talent-vid.mp4";
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

const Talent = () => {
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
      <div>
        <div className="hire">
          <div>
            <video className="talent" autoPlay loop muted>
              <source src={talent} />
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
                  Talent as a service
                </p>

                <p className="col-md-6 Navigate-Journey">
                  Hire “Enterprise-grade” Data & Analytics experts in next 48 hours
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
                    Get in touch
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
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <div className="container d-flex talent-leading-icons">
          <div>
            <img
              className=""
              src="./images/talentleading.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentsolakh.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentgbreco.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentsrd.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentcliq.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentfusion.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
        </div>

        <div style={{ marginTop: "50px" }}>
          <h4 className="cloudcardheadings observe-talent">What DataObserve Offers</h4>
        </div>
        <div className="container mt-3">
          <div className="row box">
            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/48.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "50px", height: "50px" }}
                />
                <p style={{ marginTop: "10px" }}>Agility</p>
                <h4 className="cloudcardheadings">48 Hours</h4>
                <p className="arrowtext text-center">
                  Fast onboarding to hire the Top 3% of Talents
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/timesaved.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "68px" }}
                />
                <p>Time saved</p>
                <h4 className="cloudcardheadings">85%</h4>
                <p className="arrowtext text-center">
                  interviewing hours saved per recruitment
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/highrr.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "47px", height: "62px" }}
                />
                <p>High retention rate</p>
                <h4 className="cloudcardheadings">97%</h4>
                <p className="arrowtext text-center">
                  Engagement success rates
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/enter.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "54px", height: "62px" }}
                />
                <p>Enterprise Grade Engineers</p>
                <h4 className="cloudcardheadings">90%</h4>
                <p className="arrowtext text-center">
                  our In-house engineers have strong experience in working with Fortune 500s                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/trust.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "62px" }}
                />
                <p>Trust & Reliability</p>
                <h4 className="cloudcardheadings">100+</h4>
                <p className="arrowtext text-center">
                  Full-time and Contract-to-Hire candidates available.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div
                className="text-center box-padding"
                style={{ height: "275px" }}
              >
                <img
                  src="./images/global.png"
                  className="App-logo"
                  alt="logo"
                  width={100}
                  style={{ width: "53px", height: "62px" }}
                />
                <p>Global Team</p>
                <h4 className="cloudcardheadings">5+</h4>
                <p className="arrowtext text-center">
                  Global delivery centers across the USA, Canada, UK, India, Netherlands, Dubai & Singapore
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="Talent-Overall-Background d-md-block d-none">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="TALENT-NAMES">
                        <div className="container Talent-stu-develop">
                          <h3 className="Talent-Steve">Steve Stutts</h3>
                          <h4 className="Talent-Python">Python Developer</h4>
                        </div>

                        <div className="container">
                          <p className="TaLent-EXPERT">EXPERT IN</p>
                        </div>
                        <div className="container Talent-Course-Names">
                          <div className="row TALEnt-ate">
                            <div>
                              <button className="Talent-Aws">AWS</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">TABLEAU</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">ETL</button>
                            </div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row TALEnt-ate-1">
                            <div>
                              <button className="Talent-Aws">AWS GLUE</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">REDSHIFT</button>
                            </div>
                          </div>
                        </div>

                        <div className="container">
                          <div className="row EXPERIENCE-TALENT">
                            <ul className="TaleNT-Exp-Years">
                              <li className="Talent-EXP">EXPERIENCE</li>
                              <li className="Talent-Years">6+ Years</li>
                            </ul>
                            <ul className="TaleNT-Exp-Years">
                              <li className="Talent-EXP">AVAILABILITY</li>
                              <li className="Talent-Years">Full Time</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div>
                        <img
                          src="./images/steves.png"
                          className="Talent-gayatri"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-5 offset-md-1">
                      <div className="TALENT-NAMES">
                        <div className="container Talent-stu-develop">
                          <h3 className="Talent-Steve">Harish Angal</h3>
                          <h4 className="Talent-Python">Cloud Expert</h4>
                        </div>

                        <div className="container">
                          <p className="TaLent-EXPERT">EXPERT IN</p>
                        </div>
                        <div className="container Talent-Course-Names">
                          <div className="row TALEnt-ate">
                            <div>
                              <button className="Talent-Aws">Azure</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">Power BI</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">ETL/ELT</button>
                            </div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row TALEnt-ate-1">
                            <div>
                              <button className="Talent-Aws">
                                Azure Stack HCI
                              </button>
                            </div>
                            <div>
                              <button className="Talent-Aws">ADF</button>
                            </div>
                          </div>
                        </div>

                        <div className="container">
                          <div className="row EXPERIENCE-TALENT">
                            <ul className="">
                              <li className="Talent-EXP">EXPERIENCE</li>
                              <li className="Talent-Years">5+ Years</li>
                            </ul>
                            <ul className="">
                              <li className="Talent-EXP">AVAILABILITY</li>
                              <li className="Talent-Years">Full Time</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div>
                        <img
                          src="./images/harish.png"
                          className="Talent-gayatri"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-6">
                      <div className="TALENT-NAMES">
                        <div className="container Talent-stu-develop">
                          <h3 className="Talent-Steve">Gayatri Suniti</h3>
                          <h4 className="Talent-Python">DevOps Expert</h4>
                        </div>

                        <div className="container">
                          <p className="TaLent-EXPERT">EXPERT IN</p>
                        </div>
                        <div className="container Talent-Course-Names">
                          <div className="row TALEnt-ate">
                            <div>
                              <button className="Talent-Aws">Jenkins</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">Terraform</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">K8s</button>
                            </div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row TALEnt-ate-1">
                            <div>
                              <button className="Talent-Aws">
                                GitOps/ GitLabs
                              </button>
                            </div>
                            <div>
                              <button className="Talent-Aws">
                                Platform Engg
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="container">
                          <div className="row EXPERIENCE-TALENT">
                            <ul className="">
                              <li className="Talent-EXP">EXPERIENCE</li>
                              <li className="Talent-Years">7+ Years</li>
                            </ul>
                            <ul className="">
                              <li className="Talent-EXP">AVAILABILITY</li>
                              <li className="Talent-Years">Full Time</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div>
                        <img
                          src="./images/gayatri.png"
                          className="Talent-gayatri"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>

      <section className="Talent-Overall-Background d-block d-md-none">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="TALENT-NAMES">
                        <div className="container Talent-stu-develop">
                          <h3 className="Talent-Steve">Steve Stutts</h3>
                          <h4 className="Talent-Python">Python Developer</h4>
                        </div>

                        <div className="container">
                          <p className="TaLent-EXPERT">EXPERT IN</p>
                        </div>
                        <div className="container Talent-Course-Names">
                          <div className="row TALEnt-ate">
                            <div>
                              <button className="Talent-Aws">AWS</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">TABLEAU</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">ETL</button>
                            </div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row TALEnt-ate-1">
                            <div>
                              <button className="Talent-Aws">AWS GLUE</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">REDSHIFT</button>
                            </div>
                          </div>
                        </div>

                        <div className="container">
                          <div className="row EXPERIENCE-TALENT">
                            <ul className="">
                              <li className="Talent-EXP">EXPERIENCE</li>
                              <li className="Talent-Years">6+ Years</li>
                            </ul>
                            <ul className="">
                              <li className="Talent-EXP">AVAILABILITY</li>
                              <li className="Talent-Years">Full Time</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-7">
                    <div>
                      <img
                        src="./images/steves.png"
                        className="Talent-gayatri"
                      />
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="TALENT-NAMES">
                        <div className="container Talent-stu-develop">
                          <h3 className="Talent-Steve">Harish Angal</h3>
                          <h4 className="Talent-Python">Cloud Expert</h4>
                        </div>

                        <div className="container">
                          <p className="TaLent-EXPERT">EXPERT IN</p>
                        </div>
                        <div className="container Talent-Course-Names">
                          <div className="row TALEnt-ate">
                            <div>
                              <button className="Talent-Aws">Azure</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">Power BI</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">ETL/ELT</button>
                            </div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row TALEnt-ate-1">
                            <div>
                              <button className="Talent-Aws">
                                Azure Stack HCI
                              </button>
                            </div>
                            <div>
                              <button className="Talent-Aws">ADF</button>
                            </div>
                          </div>
                        </div>

                        <div className="container">
                          <div className="row EXPERIENCE-TALENT">
                            <ul className="">
                              <li className="Talent-EXP">EXPERIENCE</li>
                              <li className="Talent-Years">5+ Years</li>
                            </ul>
                            <ul className="">
                              <li className="Talent-EXP">AVAILABILITY</li>
                              <li className="Talent-Years">Full Time</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-7">
                    <div>
                      <img
                        src="./images/harish.png"
                        className="Talent-gayatri"
                      />
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div className="container">
                  <div className="row">
                    <div className="col-md-5">
                      <div className="TALENT-NAMES">
                        <div className="container Talent-stu-develop">
                          <h3 className="Talent-Steve">Gayatri Suniti</h3>
                          <h4 className="Talent-Python">DevOps Expert</h4>
                        </div>

                        <div className="container">
                          <p className="TaLent-EXPERT">EXPERT IN</p>
                        </div>
                        <div className="container Talent-Course-Names">
                          <div className="row TALEnt-ate">
                            <div>
                              <button className="Talent-Aws">Jenkins</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">Terraform</button>
                            </div>
                            <div>
                              <button className="Talent-Aws">K8s</button>
                            </div>
                          </div>
                        </div>
                        <div className="container">
                          <div className="row TALEnt-ate-1">
                            <div>
                              <button className="Talent-Aws">
                                GitOps/ GitLabs
                              </button>
                            </div>
                            <div>
                              <button className="Talent-Aws">
                                Platform Engg
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="container">
                          <div className="row EXPERIENCE-TALENT">
                            <ul className="">
                              <li className="Talent-EXP">EXPERIENCE</li>
                              <li className="Talent-Years">7+ Years</li>
                            </ul>
                            <ul className="">
                              <li className="Talent-EXP">AVAILABILITY</li>
                              <li className="Talent-Years">Full Time</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <div className="col-md-7">
                    <div>
                      <img
                        src="./images/gayatri.png"
                        className="Talent-gayatri"
                      />
                    </div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <div
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "50px",
        }}
      >
        <h4 className="cloudcardheadings">
          Hire top 1% of Global Data &<br /> Analytics Engineers
        </h4>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="box-padding1">
                <img
                  src="./images/dataen.png"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="cloudcardheadings pt-3">Data Engineering</p>
              </div>
            </div>
            <div className=" col-md-3">
              <div className="box-padding1">
                <img
                  src="./images/clouden.png"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="cloudcardheadings pt-3">Cloud Engineering</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-padding1">
                <img
                  src="./images/dataan.png"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="cloudcardheadings pt-3">Data Analystics & Bi</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-padding1">
                <img
                  src="./images/datasc.png"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="pt-3" style={{ fontWeight: "bold" }}>Data Science - AI & ML</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="box-padding1">
                <img
                  src="./images/devops.png"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="cloudcardheadings pt-3">DevOps</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-padding1">
                <img
                  src="./images/cloudops.png"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="cloudcardheadings pt-3">CloudOps</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className=" box-padding1">
                <img
                  src="./images/fullstack.png"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="cloudcardheadings pt-3">FullStack Development</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box-padding1">
                <img
                  src="./images/qa.png"
                  alt="..."
                  style={{ height: "50px", width: "50px" }}
                />
                <p className="cloudcardheadings pt-3">QA Test Automation</p>
              </div>
            </div>
          </div>
          <div
            style={{
              marginTop: "30px",
            }}
          >
            <h4 className="cloudcardheadings">Client Testimonials</h4>
          </div>
          <section className="Talent-advanced-1">
            <div className="container-fluid">
              <div className="">
                <img
                  src="./images/energydo-2.png"
                  className="Talent-Energy"
                  alt="energy"
                />
              </div>
              <div className="row Talent-Domain-02">
                <div className="col-md-4 Talent-DOMAIN-Energy">
                  <h4 className="talent-ENergy-domain">Energy Domain</h4>
                  <p className="Talent-Data-lakeHouse">
                    Advanced Data Lakehouse Solution
                  </p>
                </div>
                <div className="col-md-8 Talent-Domain-limit">
                  <h4 className="Talent-GBR-ECO">GBR Eco</h4>
                  <p className="Talent-test-Paragraph">
                    From limitless computing power to shortened cycle times and
                    simplified data accessibility, the newfound efficiency
                    facilitated by DataObserve empowers us to generate timely
                    insights about products, customers, and vendors, markedly
                    improving their experiences.
                  </p>
                  <h5 className="TALENT-RAMA-krishna">
                    Rama Krishna Raju Dandu
                  </h5>
                  <p className="talent-CEO">Chief Operating Officer, GBR Eco</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div
        className=""
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "50px",
          // width: "1210px",
        }}
      >
        <div className=" container d-flex talent-leading-icons">
          <div>
            <img
              className=""
              src="./images/talentsolakh.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentgbreco.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentsrd.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentcliq.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
          <div>
            <img
              className=""
              src="./images/talentfusion.png"
              alt="..."
              // style={{ width: "153px", height: "70px" }}
              width={100}
            />
          </div>
        </div>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <h2 className="EXPERIENCE-cloud">Talent as a Service</h2>
          <p className="container col-md-9 wides">
            Recruit highly skilled employees as needed through a cloud-based
            platform. These hires will not only perform tasks efficiently but
            also contribute to cost savings.
          </p>
          <section className="Talent-overall-SERVICE">
            <div className="container Talent-DOcreaters">
              <div>
                <img
                  src="./images/cocreater.jpeg"
                  className="Cocreater-talent"
                  alt="cocreater"
                />
              </div>
              <div className="row Talent-MEET-Creatores">
                <div className="col-md-5"></div>
                <div
                  className="col-md-6"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start", // Ensures left alignment
                    justifyContent: "center",
                  }}
                >
                  <p className="Talent-HIRING">
                    We're introducing a new approach to hiring cloud Engineers.
                    This service will help your cloud engineering team to build
                    innovative digital transformation solutions.
                  </p>
                  <h4 className="Talent-meet-creator-heading">
                    Meet DOcreators !
                  </h4>
                  <button className="Talent-explore-DO-1">
                    Explore DOcreators{" "}
                    <i
                      className="fa fa-long-arrow-right ml-2"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
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
                      What is Talent as a Service (TaaS) and how can it benefit
                      my organization?
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
                  Talent as a Service is a model that provides on-demand access
                  to skilled professionals and expertise. It allows
                  organizations to quickly scale their teams, access specialized
                  talent, and address specific project needs without the
                  long-term commitments of traditional hiring. TaaS enhances
                  flexibility, efficiency, and agility in workforce management.
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
                      How does Talent as a Service help organizations meet their
                      talent needs?
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
                  TaaS addresses talent needs by providing access to a pool of
                  pre-vetted, skilled professionals across various domains.
                  Whether you need developers, designers, project managers, or
                  other specialists, TaaS allows you to quickly assemble a team
                  with the right skills for your projects. This flexibility is
                  especially valuable for organizations with fluctuating
                  workloads. VHS.
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
                      What types of roles and expertise can I find through
                      Talent as a Service?
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
                  Our Talent as a Service offering covers a wide range of roles
                  and expertise, including but not limited to software
                  development, UX/UI design, data science, project management,
                  and more. We work closely with our clients to understand their
                  specific requirements and provide access to professionals with
                  the right skills and experience for their projects.
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
                      Can Talent as a Service be used for both short-term and
                      long-term projects?
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
                  Yes, TaaS is designed to be flexible and adaptable to the
                  duration of your projects. Whether you need talent for a
                  short-term project, a specific phase of development, or an
                  ongoing basis, we can tailor our services to meet your unique
                  requirements. This scalability ensures that you only pay for
                  the talent you need when you need it.
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
                      How does Talent as a Service streamline the hiring
                      process?
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
                  Talent as a Service streamlines the hiring process by
                  providing access to a curated pool of pre-screened
                  professionals. Instead of going through lengthy hiring cycles,
                  you can quickly assemble a team of skilled individuals, saving
                  time and effort. This agility is particularly beneficial for
                  organizations facing tight project deadlines or sudden
                  increases in workload.
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
                      Is the talent provided through Talent as a Service vetted
                      and qualified?
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
                  Yes, we rigorously vet and qualify the professionals in our
                  talent pool. Our selection process ensures that you have
                  access to skilled individuals with proven expertise in their
                  respective fields. We prioritize quality and match the right
                  talent to your specific project requirements, giving you
                  confidence in the capabilities of the professionals you work
                  with.
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
                      How can Talent as a Service contribute to
                      cost-effectiveness in workforce management?
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
                  Talent as a Service offers cost-effectiveness by allowing
                  organizations to scale their workforce without the long-term
                  financial commitments of traditional hiring. You only pay for
                  the talent you need for the duration of your project, reducing
                  overhead costs associated with full-time employees. This
                  cost-effective model is especially valuable for project-based
                  work.
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
                      Can Talent as a Service support remote and distributed
                      work setups?
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
                  Absolutely. Talent as a Service is well-suited for remote and
                  distributed work setups. Our professionals are experienced in
                  collaborating across various geographical locations. We
                  provide the necessary tools and communication channels to
                  ensure seamless collaboration, enabling your team to work
                  together effectively, regardless of physical location.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Talktous /> */}

      <Footer />
    </div >
  );
};

export default Talent;
