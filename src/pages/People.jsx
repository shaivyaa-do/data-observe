import React from "react";
import "./People.css";
import Faq from "../components/Common/Faq";
import Navbar from "../components/Layout/Navbar";
// import careers from "../assets/videos/careers.mp4";
import Footer from "../components/Layout/Footer";
import Talktous from "../components/Common/Talktous";

function People() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="People-Careers-Main">
          <video className="people-careers-video" autoPlay loop muted>
            <source
              src="https://storage.googleapis.com/do-website-resources/careers.mp4"
              type="video/mp4"
            />
          </video>
          <div className="background">
            <div className="container people-data-observe">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="people-career">People & Careers</h1>
                  <p className="data-observe">
                    At DataObserve, we strive to bring together tech innovators
                    and problem solvers. Join our ever growing team for a long
                    and rewarding career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <p className="life-People">Life at DataObserve</p>
          <div className="container dataobserve-paragraph-1">
            <div className="row">
              <div className="col-md-12 paragraph-observe">
                <p className="people-Cararees-Paragraph">
                  At DataObserve, we've cultivated a positive workplace that
                  nurtures your excellence, encourages your inquisitiveness, and
                  sparks your creativity. Regardless of your location, you can
                  be an integral part of our cohesive team!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* .....circle.... */}
        <div className="container">
          <div className="row circles-both">
            <div className="circle-2">
              <div>
                <h6 className="Empathy-circle">Empathy</h6>
              </div>
              <div>
                <h6 className="Dedication-circle">Dedication</h6>
              </div>
              <div>
                <h6 className="Empathy-circle">Empathy</h6>
              </div>
              <div>
                <h6 className="Teamwork-circle">Teamwork</h6>
              </div>
              <div>
                <h6 className="Ownership-circle">Ownership</h6>
              </div>
            </div>

            <div className="circle-1">
              <div>
                <h6 className="owner">Ownership</h6>
              </div>
              <div>
                <h6 className="team">Teamwork</h6>
              </div>
              <div>
                <h6 className="Self-Reliance">Self-Reliance</h6>
              </div>
              <div>
                <h6 className="Leadership">Leadership</h6>
              </div>

              <div>
                <h6 className="Growth">Growth</h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="ourvalues-background">
          <div>
            <p className="life-2">Our values</p>
            <div className="dataobserve-paragraph-2">
              <p className="container col-md-9 People-Career-product">
                We're more than just a fantastic product company; we also boast
                an awesome work culture! Here are the six core values that are
                shaping our company's cultural foundation: six core values that
                are driving our company’s culture:
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4 card-style">
                <div class="card card-number" id="numbers-part">
                  <div class="card-body people-01-card">
                    <img
                      className="images-numbers-people"
                      src="./images/card1.png"
                      alt="card1"
                      width={100}
                    />
                    <div className="d-flex people-01-text">
                      <div>
                        <h6 className="respect" style={{ color: "blue" }}>
                          Respect
                        </h6>
                      </div>
                      <div>
                        <p className="respect-text">
                          <span style={{ color: "blue", fontWeight: "600" }}>
                            Respect &nbsp;
                          </span>
                          is the cornerstone of our <br /> company culture,
                          fostering <br />
                          collaboration and inclusivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-style">
                <div class="card card-number" id="numbers-part">
                  <div class="card-body people-01-card">
                    <img
                      className="images-numbers-people"
                      src="./images/card2.png"
                      alt="card1"
                      width={100}
                    />
                    <div className="d-flex people-01-text">
                      <div>
                        <h6 className="integrity">Integrity</h6>
                      </div>
                      <div>
                        <p className="respect-text">
                          <span style={{ color: "#EF7179", fontWeight: "600" }}>
                            Integrity &nbsp;
                          </span>
                          is our compass, guiding our <br /> actions and
                          building trust with our
                          <br />
                          clients and team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-style">
                <div class="card card-number" id="numbers-part">
                  <div class="card-body people-01-card">
                    <img
                      className="images-numbers-people"
                      src="./images/card3.png"
                      alt="card1"
                      width={100}
                    />
                    <div className="d-flex people-01-text">
                      <div>
                        <h6 className="trust">Trust</h6>
                      </div>
                      <div>
                        <p className="respect-text-3">
                          <span style={{ color: "#01BB8A", fontWeight: "600" }}>
                            Trust &nbsp;
                          </span>
                          is the foundation of our <br /> relationships at
                          DataObserve, where
                          <br />
                          transparency and reliability drive our success.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-style">
                <div class="card card-number" id="numbers-part">
                  <div class="card-body people-01-card">
                    <img
                      className="images-numbers-people"
                      src="./images/card4.png"
                      alt="card1"
                      width={100}
                    />
                    <div className="d-flex people-01-text">
                      <div>
                        <h6 className="equality">Equality</h6>
                      </div>
                      <div>
                        <p className="respect-text">
                          At DataObserve, we champion <br />
                          <span style={{ color: "#FFD703", fontWeight: "600" }}>
                            Equality
                          </span>
                          , ensuring that every voice <br /> company culture,
                          fostering <br />
                          collaboration and inclusivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-style">
                <div class="card card-number" id="numbers-part">
                  <div class="card-body people-01-card">
                    <img
                      className="images-numbers-people"
                      src="./images/card5.png"
                      alt="card1"
                      width={100}
                    />
                    <div className="d-flex people-01-text">
                      <div>
                        <h6 className="customer">
                          Customer
                          <br />
                          obsession
                        </h6>
                      </div>
                      <div>
                        <p className="respect-text-5">
                          <span style={{ color: "#00B686", fontWeight: "600" }}>
                            Customer obsession &nbsp;
                          </span>
                          is our guiding <br /> principle, fueling our
                          commitment
                          <br />
                          delivering exceptional solutions and service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 card-style">
                <div class="card card-number" id="numbers-part">
                  <div class="card-body people-01-card">
                    <img
                      className="images-numbers-people"
                      src="./images/card6.png"
                      alt="card1"
                      width={100}
                    />
                    <div className="d-flex people-01-text">
                      <div>
                        <h6 className="innovation">Innovation</h6>
                      </div>
                      <div>
                        <p className="respect-text-6">
                          <span style={{ color: "blue", fontWeight: "600" }}>
                            Innovation &nbsp;
                          </span>
                          is the heartbeat of <br /> DataObserve, driving us to
                          pioneer
                          <br />
                          cutting-edge solutions for our clients' evolving
                          needs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div>
            <p className="life-People">Perks and benefits</p>
            <div className="dataobserve-paragraph-1">
              <p className="container col-md-8 data-observe-paragraph">
                At DataObserve, our foremost concern is the holistic well-being
                of our employees, encompassing their physical, financial, and
                emotional aspects. Here's how we empower our workforce to
                achieve their utmost potential.
              </p>
            </div>
          </div>
          <div className="container mt-3">
            <div className="row">
              <div className="col-md-3">
                <div className="text-center box-padding-1">
                  <img
                    src="./images/healthcare.png"
                    className="App-logo arrow-1"
                    alt="logo"
                    width={100}
                  />

                  <p className="arrowtext-1 text-center">
                    Healthcare Insurance & Wellness Programs
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="text-center box-padding-2">
                  <img
                    src="./images/vaccation.png"
                    className="App-logo arrow-2"
                    alt="logo"
                    width={100}
                  />

                  <p className="arrowtext-2 text-center">
                    Vacation / Paid Time <br />
                    Off
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="text-center box-padding-3">
                  <img
                    src="./images/performance.png"
                    className="App-logo arrow-3"
                    alt="logo"
                    width={100}
                  />

                  <p className="arrowtext-3 text-center">
                    Performance Bonus & Rewards Programs
                  </p>
                </div>
              </div>

              <div className="col-md-3">
                <div className="text-center box-padding-4">
                  <img
                    src="./images/growth.png"
                    className="App-logo arrow-4"
                    alt="logo"
                    width={100}
                  />

                  <p className="arrowtext-4 text-center">
                    Career Growth
                    <br /> Programs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="empower-People">
              <div className="container people-data-observe-1">
                <h1 className="people-career-1">
                  DataObserve
                  <br />
                  Graduation Labs
                </h1>
                <p className="col-md-6  data-observe-1">
                  Our internal team is dedicated to fostering agile and rapid
                  learning, enabling DataObserve team members to reach their
                  maximum potential. We empower the Graduation Labs with
                  essential elements:
                </p>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-6 check-icons">
                    <li className="d-flex">
                      <i
                        class="fa fa-check-circle che-cir-1"
                        aria-hidden="true"
                      ></i>
                      <p className="team-ld">
                        A team of highly experienced learning and development
                        (L&D) professionals.
                      </p>
                    </li>
                    <li className="d-flex">
                      <i
                        class="fa fa-check-circle che-cir-1"
                        aria-hidden="true"
                      ></i>
                      <p className="team-ld">
                        An ecosystem of access-from-anywhere digital learning
                        platforms.
                      </p>
                    </li>
                    <li className="d-flex">
                      <i
                        class="fa fa-check-circle che-cir-1"
                        aria-hidden="true"
                      ></i>

                      <p className="team-ld">
                        Best-in-class content curation partnerships.
                      </p>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="inclusion-background">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="row inclusive-work-main">
                  <div className="d-flex">
                    <div className="col-md-6 people-pad-ing">
                      <img
                        className="inclusion-img-1"
                        src="./images/inclusion-1.png"
                        alt="inclu"
                        width={140}
                      />
                    </div>
                    <div className="col-md-6 people-pad-ing">
                      <img
                        className="inclusion-img-2"
                        src="./images/inclusion-4.png"
                        alt="inclu"
                        width={140}
                      />
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-md-6 people-pad-ing">
                      <img
                        className="inclusion-img-3"
                        src="./images/inclusion-2.png"
                        alt="inclu"
                        width={140}
                      />
                    </div>
                    <div className="col-md-6 people-pad-ing">
                      <img
                        className="inclusion-img-4"
                        src="./images/inclusion-3.png"
                        alt="inclu"
                        width={140}
                      />
                    </div>
                  </div>
                </div>
                <div className="people-circle-top-1">
                  <img
                    className="people-CirclE"
                    src="./images/people-circle-1.png"
                    alt="people-circle"
                    style={{ height: "100px" }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="all-workforce">
                  <h3 className="inclusive-heading">Inclusive Workforce</h3>
                  <p className="work-para">
                    DataObserve's efforts are driven by a diverse and inclusive
                    workforce committed to achieving 100% customer satisfaction.
                    We are actively fostering positive societal change through
                    our diverse employee base.
                  </p>
                  <p className="work-para">
                    At DataObserve, we recruit top talent from various
                    backgrounds and provide them with a platform for seamless
                    collaboration. Our diversity is the driving force behind our
                    teams' ability to create impactful solutions!
                  </p>
                  <button className="view-more">Current Openings</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="over-join-us">
          <div className="container">
            <div className="joinus">
              <div className="head-paragraph">
                <h3 className="text-center joinus-heading">Join Us</h3>
                <p className="container col-md-6  joinus-paragraph">
                  Explore our exciting array of job opportunities. Join us and
                  become a valuable part of this incredible journey.
                </p>
              </div>
              <div className="current-opening d-flex">
                <button className="openings">View current openings</button>
                <button className="openings">View fresher opening</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ....faq... */}
      <section>
        <div>
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
                          What career opportunities are available at
                          DataObserve?
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
                      DataObserve offers a wide range of career opportunities,
                      including roles in data analytics, cloud computing,
                      software development, project management, and more.
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
                          How can I apply for a job at DataObserve?
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
                      To apply for a job at DataObserve, you can visit our
                      careers page on our website and browse the current job
                      openings. Click on the position you're interested in and
                      follow the application instructions provided.
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
                          What qualifications and experience do I need to work
                          at DataObserve?
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
                      Qualifications and experience requirements vary depending
                      on the specific job role. You can find detailed
                      information about the qualifications and experience
                      required for each position in the job description.
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
                          Does DataObserve offer internships or entry-level
                          positions for recent graduates?
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
                      Yes, DataObserve offers internships and entry-level
                      positions for recent graduates. These opportunities are a
                      great way to kickstart your career in the tech industry.
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
                          What is the company culture like at DataObserve?
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
                      DataObserve values a culture of collaboration, innovation,
                      and continuous learning. We encourage a diverse and
                      inclusive work environment where employees can thrive.
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
                          Are there opportunities for career growth and
                          development at DataObserve?
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
                      Yes, DataObserve is committed to the professional growth
                      and development of its employees. We offer training
                      programs, mentorship, and opportunities for advancement
                      within the company.
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
                          What benefits and perks are offered to employees at
                          DataObserve?
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
                      DataObserve provides a competitive salary and benefits
                      package, which may include health insurance, retirement
                      plans, flexible work arrangements, and more. Specific
                      benefits may vary by location and position.
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
                          Is remote work or flexible work hours available at
                          DataObserve?
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
                      DataObserve recognizes the importance of work-life balance
                      and offers flexible work arrangements and remote work
                      options for certain roles, depending on the nature of the
                      job.
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
                        <p style={{ margin: "0px" }}>
                          How does DataObserve support diversity and inclusion
                          in the workplace?
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
                    <div class="card-body">
                      DataObserve is committed to fostering diversity and
                      inclusion. We have programs and initiatives in place to
                      promote diversity and ensure that all employees feel
                      valued and respected.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Talktous /> */}
      <Footer />
    </div>
  );
}

export default People;
