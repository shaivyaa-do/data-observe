import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import "./Datasense.css";
import Talktous from "../../components/Common/Talktous";

import Faq from "../../components/Common/Faq";
import bussiness from "../../assets/videos/bussiness.MOV";
import productVideo from "../../assets/videos/productvideo.mp4";

function Datasense() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />

      <section>
        <div className="doinsightsvideo">
          <img
            src="images/doinsightsfinalbanner.png"
            alt="#"
            className="w-100 DO-insights-image"
          />

          <div className="doinsightsheader">
            <h1
              className="container"
              style={{
                color: "#FFF",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              DOInsights
            </h1>
            <div className="container">
              <div className="row">
                <div className="col-md-6 new-mb">
                  <h1 className="doinsightsheading mb-0">
                    Simple. Crafted. Powerful.
                  </h1>

                  <h1 className="doinsightsheading"> Data Analysis.</h1>
                  <p className="doinsightsheaderpara">
                    Meet DO Insights, Business Intelligence Tool built for
                    everyone on your team.
                  </p>
                  <input
                    placeholder="Businees Email"
                    className="col-md-6 emailClass"
                    style={{
                      background: "none",
                      borderBottom: "1px solid #FFFFFF",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      color: "#FFFFFF",
                    }}
                  />
                  <div className="container">
                    <button className="demoClass DEMO-Monitor" onClick={() => navigate("/contact")}>Get a demo</button>
                  </div>
                </div>
                <div className="col-md-6"></div>
              </div>

              <div className="productvideoClass col-md-8">
                {/* <video className="productplayClass" autoPlay loop muted>
                <source src={productVideo} type="video/mp4" />
              </video> */}
                <img
                  src="images/product360videoimg.png"
                  alt="#"
                  className="playClass"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="doinsightsplayvideoclass">
        <div className="container">
          <div className="row">

          </div>
        </div>
      </section> */}


      <section className="iodefinitionClass">
        <div className="container def1Class">
          <h1 className="obsheading">What is Do Insights?</h1>
          <p className="obspara1-01">
            DO Insights is meticulously crafted to streamline the process of
            data analysis and reporting directly from your databases.
            Powered by the Modern Data Stack, our platform offers an
            intuitive interface, making it effortless for users to generate
            intricate reports and extract valuable insights from their data.
          </p>
          <p className="obspara2-02">
            Do Insights strives to eliminate gaps by providing a
            user-friendly solution that empowers non-technical users to
            conduct data analysis independently, reducing the dependency on
            developers. With us, you can trust that your data is reliable
            and suitable for analysis, decision-making, and subsequent
            processes.
          </p>

          <div className="mt-5 pt-2">
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="box-padding-360">
                  <img
                    className="mobile-size1"
                    src="images/dollarprod.png"
                    alt="#"
                    width={100} />
                  <p className="cardText1">Reduce Cost</p>
                  <h1 className="cardHead-1">10x</h1>
                  <p className="cardText2-1">Reduction in Data</p>
                  <p className="cardText2-1">infrastructure task</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="box-padding-360">
                  <img
                    className="mobile-size1"
                    src="images/minimizerisk.png"
                    alt="#"
                    width={100}
                  />
                  <p className="cardText1">Minimize Risk</p>
                  <h1 className="cardHead-1">95%</h1>
                  <p className="cardText2-1">Reduction in</p>
                  <p className="cardText2-1">Data downtime</p>
                </div>
              </div>
              <div className="col-md-4 text-center">
                <div className="box-padding-360">
                  <img
                    className="mobile-size1"
                    src="images/savetime.png"
                    alt="#"
                    width={100}
                  />
                  <p className="cardText1">Save Time</p>
                  <h1 className="cardHead-1">70%</h1>
                  <p className="cardText2-1">Data Engineering Hours</p>
                  <p className="cardText2-1">Saved per Quarter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="pillarsClass mb-5">
        <div className="container pt-5 mt-3">
          <div>
            <h1 className="headingpillars">Pillars of DO Insights</h1>
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
                  id="pills-catalog-tab"
                  data-toggle="pill"
                  href="#pills-catalog"
                  role="tab"
                  aria-controls="pills-catalog"
                  aria-selected="true"
                >
                  Dashboard
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
                  Data Sources
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
                  Query Builder
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-volume-tab"
                  data-toggle="pill"
                  href="#pills-volume"
                  role="tab"
                  aria-controls="pills-volume"
                  aria-selected="false"
                >
                  Transformations
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-lineage-tab"
                  data-toggle="pill"
                  href="#pills-lineage"
                  role="tab"
                  aria-controls="pills-lineage"
                  aria-selected="false"
                >
                  Expressions
                </a>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active matter"
                id="pills-catalog"
                role="tabpanel"
                aria-labelledby="pills-catalog-tab"
              >
                <div className="row">
                  <div className="col-md-5 qualitypara">
                    <h1 className="qualityhead">Dashboard</h1>
                    <p className="qualitymatter text-justify">
                      Dashboards are a group of related visualizations that you
                      can use to track and monitor your data. You can share a
                      dashboard with your team or subscribe to it to receive
                      regular notifications.
                    </p>
                    <p className="qualitymatter text-justify">
                      A Dashboard is a grid which contains cards. Cards can be a
                      chart, a filter, a table, or a text box. You can add as
                      many cards as you want to a dashboard.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/doinsightdashboard.png"
                      alt="#"
                      className="qualityimgclass"
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
                  <div className="col-md-5 qualitypara">
                    <h1 className="qualityhead">Data Sources</h1>
                    <p className="qualitymatter text-justify">
                      DO Insights offers the capability to seamlessly connect
                      and analyze a multitude of data sources, streamlining the
                      process of integrating and processing data from various
                      databases. Users can effortlessly add multiple data
                      sources, enabling the consolidation and analysis of data
                      from diverse origins within a unified platform.
                    </p>
                    <p className="qualitymatter text-justify">
                      This feature empowers organizations to harness the full
                      potential of their data by breaking down silos and
                      fostering comprehensive insights.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/doinsightdatasource.png"
                      alt="#"
                      className="qualityimgclass"
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
                  <div className="col-md-5 qualitypara">
                    <h1 className="qualityhead">Query</h1>
                    <p className="qualitymatter text-justify">
                      Within Insights, a Query serves as a versatile tool,
                      allowing users to execute SQL queries on their designated
                      data source. The process involves creating a query, and
                      users have the flexibility to select from various query
                      interface types.
                    </p>
                    <p className="qualitymatter text-justify">
                      This functionality is easily accessible through the "New"
                      button located within the Queries tab, providing a
                      user-friendly and efficient means to interact with data
                      and extract valuable insights.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/doinsightquerybuilder.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade matter"
                id="pills-volume"
                role="tabpanel"
                aria-labelledby="pills-volume-tab"
              >
                <div className="row">
                  <div className="col-md-5 qualitypara">
                    <h1 className="qualityhead">Transformations</h1>
                    <p className="qualitymatter text-justify">
                      Transformations play a crucial role in shaping your
                      query's data. These modifications occur post-data
                      retrieval from the database and before the data is
                      presented in the query result. The flexibility of adding
                      multiple transformations to your query ensures precise
                      data refinement.
                    </p>
                    <p className="qualitymatter text-justify">
                      To apply various transformations, simply access the 3-dot
                      menu located next to the query title, granting you control
                      over data manipulation within your query.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/doinsighttransformation.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                </div>
              </div>

              <div
                class="tab-pane fade matter"
                id="pills-lineage"
                role="tabpanel"
                aria-labelledby="pills-lineage-tab"
              >
                <div className="row">
                  <div className="col-md-5 qualitypara">
                    <h1 className="qualityhead">Expressions</h1>
                    <p className="qualitymatter text-justify">
                      Expressions are used to add complex calculations to your
                      query. You can use expressions to create complex filter
                      conditions and to create calculated columns.
                    </p>
                    <p className="qualitymatter text-justify">
                      You can use expressions to create calculate new columns
                      from existing columns. For example, you can create a new
                      column that calculates the percentage of revenue generated
                      by each product category.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/doinsightexpression.png"
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

      <section className="tenetsclass">
        <div className="container">
          <div className="tenetsheading col-md-10 ml-5">
            Tenets of DO Insights to bring real-time data insights
          </div>
          <div className="row mt-4">
            <div className="col-md-4 mt-5 ">
              <div className="showdowclass-01">
                <div className="issuesmatter">
                  <img
                    src="images/doinsightsecure.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">
                    Simple and Secure Data Connection
                  </h1>
                  <p className="issuematterpara">
                    Effortlessly connect your data sources without any technical
                    expertise and security concerns.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="showdowclass-01">
                <div className="issuesmatter">
                  <img
                    src="images/doinsighteasydata.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">Easy Data Exploration</h1>
                  <p className="issuematterpara">
                    Discover our one-of-a-kind query building interface built
                    for simple and powerful explorations.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="showdowclass-01">
                <div className="issuesmatter">
                  <img
                    src="images/doinsightvisualisation.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">
                    Customizable Visualizations
                  </h1>
                  <p className="issuematterpara">
                    Transform your explorations into customizable charts and
                    share it with your team.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="showdowclass-01">
                <div className="issuesmatter">
                  <img
                    src="images/doinsightinteractive.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">Interactive Dashboards</h1>
                  <p className="issuematterpara">
                    Organize your charts into dashboards and make them
                    interactive with filters.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="showdowclass-01">
                <div className="issuesmatter">
                  <img
                    src="images/doinsightuserfriendly.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">User-Friendly Design</h1>
                  <p className="issuematterpara">
                    Insights is built to make data analysis accessible to
                    everyone, regardless of their technical background.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 ">
              <div className="showdowclass-01">
                <div className="issuesmatter">
                  <img
                    src="images/doinsightalert.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">Stay Informed with Alerts</h1>
                  <p className="issuematterpara">
                    Stay up-to-date with important changes and trends in your
                    data through alerts and notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="doinsightrequestguideclass">
        <div className="container guidecontainer">
          <div className="doinsightguideclass">
            <div className="row">
              <div className="col-md-8">
                <h1 className="guidehead new-point">
                  Request Guidance from a DataObserve 360Expert
                </h1>
                <p className="new-guidetext">
                  Connect with our experts to harness the power of DataObserve
                  360.
                </p>
              </div>
              <div className="col-md-4">
                <button className="guidedemobutton" onClick={() => navigate("/contact")}>
                  <p className="guidebuttontext">Get a demo</p>
                  <img
                    src="images/guidearrow.png"
                    alt=""
                    className="guidearrowclass"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recentworks">
        <div className="container">
          <h1 className="recentworkshead">Our most recent works</h1>
          <div className="cardclass">
            <div className="row">
              <div className="col-md-4 cardcol">
                <div className="recentworkimgclass">
                  {/* <div className="dummyclass"></div> */}
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworksebook.png" alt="#" />
                        <p className="recentcardhead1">EBOOK</p>
                      </div>
                      <p className="workcardpara">
                        Optimal Approaches for Migrating Legacy Data Warehouses
                        to Amazon Redshift
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 cardcol">
                <div className="recentworkimgclass1">
                  {/* <div className="dummyclass1"></div> */}
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworkscasestudy.png" alt="#" />
                        <p className="recentcardhead2">case study</p>
                      </div>
                      <p className="workcardpara">
                        Achieving Data Democratization and Reducing Drug
                        Commercialization Costs by 30%: A Success Story from a
                        Fortune 500 Pharmaceutical Commercial Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 cardcol">
                <div className="recentworkimgclass2">
                  {/* <div className="dummyclass2"></div> */}
                  <div className="card therecentcard">
                    <div className="workcard">
                      <div className="recentcardhead">
                        <img src="images/recentworksblog.png" alt="#" />
                        <p className="recentcardhead1">blog</p>
                      </div>
                      <p className="workcardpara">
                        The Crucial Role of Talent in the Digital Transformation
                        Journey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="viewrecentbutton">
            View All Insights
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="16"
              viewBox="0 0 28 16"
              fill="none"
            >
              <path
                d="M27.8301 7.80075L20.7859 0.314765C20.5251 0.0376232 20.0835 0.0414782 19.8276 0.323131C19.6026 0.570707 19.6013 0.948275 19.8245 1.19745L25.1618 7.15628H1.4746C1.11864 7.15628 0.830078 7.44485 0.830078 7.80081C0.830078 8.15676 1.11864 8.44534 1.4746 8.44534H25.1617L19.8245 14.404C19.6013 14.6532 19.6026 15.0307 19.8276 15.2783C20.0835 15.56 20.5251 15.5638 20.7859 15.2867L27.8301 7.80075Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </section>

      <section class="card text-center" style={{ border: "0px" }}>
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
                    <p style={{ margin: "0px" }}>What is DO Insights?</p>
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
                  DO insights is our business intelligence tool which is
                  specifically designed to provide your teams with a simple yet
                  powerful platform for comprehensive data analysis. Its primary
                  purpose is to assist in making informed business decisions by
                  transforming raw data into meaningful insights.
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
                      How user-friendly is this product?
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
                  The interface is intuitively designed for ease of use. Even
                  team members with minimal technical expertise can navigate
                  through the tool effortlessly, making data analysis accessible
                  to everyone.
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
                      What types of data sources does DO Insights support?
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
                  DO insights supports a wide range of data sources, including
                  databases, spreadsheets, cloud services, and more. It ensures
                  compatibility with diverse data formats to accommodate the
                  needs of various teams.
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
                      Can multiple team members collaborate on a single analysis
                      project in DO Insights?
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
                  Yes, collaboration is a key feature. The tool allows multiple
                  team members to collaborate seamlessly on analysis projects.
                  It promotes teamwork by enabling shared access to datasets,
                  dashboards, and reports.
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
                      How does the DO Insights handle data security and privacy?
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
                  Security is a top priority. The tool employs robust encryption
                  methods to secure data during transmission and storage. Access
                  controls and permissions are customizable, ensuring that
                  sensitive information is only accessible to authorized
                  personnel.
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
                      What types of analyses can be performed in DO Insights?
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
                  The tool supports a variety of analyses, including descriptive
                  statistics, trend analysis, forecasting, and more. It provides
                  a versatile platform to extract valuable insights from data,
                  catering to the diverse analytical needs of different teams.
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
                      Is there a learning curve for new users?
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
                  The tool is designed with simplicity in mind. While it offers
                  advanced features, the learning curve is minimal. A
                  user-friendly interface, coupled with comprehensive tutorials
                  and documentation, ensures that team members can quickly
                  become proficient in using the tool.
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
                      Can the tool integrate with other business applications?
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
                  Yes, our business intelligence tool is designed to integrate
                  seamlessly with other popular business applications. This
                  interoperability ensures that teams can incorporate data
                  analysis into their existing workflows and systems.
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
                      Is there a limit to the size of datasets that can be
                      analyzed?
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
                  The tool is equipped to handle large datasets efficiently. Its
                  architecture is optimized for performance, allowing teams to
                  analyze and derive insights from datasets of varying sizes
                  without compromising speed or functionality.
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
                    <p style={{ margin: "0px" }}>
                      How does the tool support real-time data analysis?
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
                <div class="card-body">
                  Real-time data analysis is a key feature of our business
                  intelligence tool. It enables teams to monitor and analyze
                  data as it is generated, facilitating timely decision-making.
                  The tool's capabilities make it well-suited for scenarios
                  where up-to-the-minute insights are crucial.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Talktous /> */}

      <Footer />
    </>
  );
}

export default Datasense;
