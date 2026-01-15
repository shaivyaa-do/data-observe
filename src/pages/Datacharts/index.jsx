import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Talktous from "../../components/Common/Talktous";

import "./Datacharts.css";

// import Faq from "./Faq";
// import bussiness from "../../assets/videos/bussiness.MOV";
// import productVideo from "../../assets/videos/productvideo.mp4";

function Datacharts() {
  return (
    <>
      <Navbar />

      <div className="observability-MAIN">
        <img
          src="./images/data-charts-01.png"
          className="do360bannerclass do360Datacharts-01 w-100"
          alt="#"
        />

        <div className="header-section">
          <h1
            className="container"
            style={{ color: "#FFF", fontSize: "20px", fontWeight: "700" }}
          >
            Datacharts
          </h1>
          <div className="container data-pad">
            <div
              className="row"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h1
                className="col-md-6 mobile-data"
                style={{ color: "#FFF", fontSize: "46px", fontWeight: "700" }}
              >
                A JavaScript Visualization Library with AI Chart generator and
                simulator
              </h1>
              <p className="col-md-6 data-charts">
                Meet DO Charts, a ready to use JavaScript Visual Library for
                your Business Applications.
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
                <button className="demoClass">Get a demo</button>
              </div>
              <div className="productvideoClass-1 col-md-8">
                {/* <video className="productplayClass" autoPlay loop muted>
                <source src={productVideo} type="video/mp4" />
              </video>  */}
                <img
                  src="images/product360videoimg.png"
                  alt="#"
                  className="playClass-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="iodefinitionClass-1">
        <div className="container def1Class">
          <div>
            <h1 className="obsheading">What is DO Charts?</h1>

            <p className="container col-md-8 obspara1 text-center">
              DO Charts is a Declarative Framework for Rapid Construction of
              Web-based Visualization. It provides a wide range of chart types
              with AI driven chart generator and simulator, including bar
              charts, line charts, scatter plots, pie charts, and more, making
              it a versatile tool for data visualization and presentation.
            </p>
            {/* <p className="obspara2 text-center">
                Do Insights strives to eliminate gaps by providing a
                user-friendly solution that empowers non-technical users to
                conduct data analysis independently, reducing the dependency on
                developers. With us, you can trust that your data is reliable
                and suitable for analysis, decision-making, and subsequent
                processes.
              </p> */}
          </div>

          <div className="mt-5 pt-2">
            <div className="row">
              <div className="col-md-4 text-center">
                <div className="box-padding-360">
                  <img
                    className="mobile-size-01"
                    src="images/dollarprod.png"
                    alt="#"
                    width={100}
                  />
                  <p className="cardText">Reduce Cost</p>
                  <h1 className="cardHead">5x</h1>
                  <p className="cardText2">Reduction in App</p>
                  <p className="cardText2">infrastructure Costs</p>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="box-padding-360">
                  <img
                    className="mobile-size-01"
                    src="images/minimizerisk.png"
                    alt="#"
                    width={100}
                  />
                  <p className="cardText">Minimize Risk</p>
                  <h1 className="cardHead">98%</h1>
                  <p className="cardText2">Reduction in</p>
                  <p className="cardText2">Chart Rendering Downtime</p>
                </div>
              </div>

              <div className="col-md-4 text-center">
                <div className="box-padding-360">
                  <img
                    className="mobile-size-01"
                    src="images/savetime.png"
                    alt="#"
                    width={100}
                  />
                  <p className="cardText">Save Time</p>
                  <h1 className="cardHead">90%</h1>
                  <p className="cardText2">Data Engineering Hours</p>
                  <p className="cardText2">Saved per Quarter</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pillarsClass mb-5">
        <div className="container pt-5 mt-3">
          <div>
            <h1 className="headingpillars-01">Types of DO Charts</h1>
          </div>
          <div>
            <p className="container col-md-10 charts-maps-ParagrapH">
              The basic chart types DO Charts supports include line series, bar
              series, scatter series, pie charts, candle-stick series, boxplot
              series for statistics, map series, heatmap series, lines series
              for directional information, graph series for relationships,
              treemap series, sunburst series, parallel series for
              multi-dimensional data, funnel series, gauge series. And it's
              extremely easy to create a combination of them with DO Charts.
            </p>
          </div>
          <div className="pillarnavs mt-4">
            <ul
              class="nav nav-pills justify-content-center align-items-center mb-3"
              id="pills-tab"
              role="tablist"
            >
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link active linkClass link-active"
                  id="pills-catalog-tab"
                  data-toggle="pill"
                  href="#pills-catalog"
                  role="tab"
                  aria-controls="pills-catalog"
                  aria-selected="true"
                >
                  Data Visualization of <br />
                  Tens of Millions on Web
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass linkclass-data"
                  id="pills-freshness-tab"
                  data-toggle="pill"
                  href="#pills-freshness"
                  role="tab"
                  aria-controls="pills-freshness"
                  aria-selected="false"
                >
                  Mobile Optimization
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
                  Interactive Data <br />
                  Exploration In-Depth
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
                  Multi-Dimensional Data Support
                  <br /> and Rich Visual Coding
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass linkclass-data"
                  id="pills-lineage-tab"
                  data-toggle="pill"
                  href="#pills-lineage"
                  role="tab"
                  aria-controls="pills-lineage"
                  aria-selected="false"
                >
                  Dynamic Data
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-lineage-tab-1"
                  data-toggle="pill"
                  href="#pills-lineage-1"
                  role="tab"
                  aria-controls="pills-lineage"
                  aria-selected="false"
                >
                  More Powerful and Beautiful <br />
                  3D Visualization with GL
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
                  <div className="col-md-7">
                    <img
                      src="images/data-charts-img-6.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                  <div className="col-md-5 qualitypara">
                    {/* <h4 className="qualityhead">
                      Data Visualization of Tens of Millions on Web
                    </h4> */}
                    <p className="qualitymatter text-justify">
                      With the help of incremental rendering technique since
                      v4.0 and optimization of all aspects, DO Charts can
                      display the visualization of tens of millions of data.
                      What's more, interactions like scaling and transforming
                      are fluent all the same. Tens of millions of data usually
                      takes over hundreds of MB in memory. DO Charts provide
                      streaming data ability since v4.0 and makes it possible to
                      render as much data as loaded from WebSocket. There is no
                      need to wait for all data to be loaded to start rendering.
                    </p>
                    {/* <p className="qualitymatter text-justify">
                      A Dashboard is a grid which contains cards. Cards can be a
                      chart, a filter, a table, or a text box. You can add as
                      many cards as you want to a dashboard.
                    </p> */}
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
                    <img
                      src="images/data-charts-img-5.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                  <div className="col-md-5 qualitypara">
                    {/* <h4 className="qualityhead">Mobile Optimization</h4> */}
                    <p className="qualitymatter text-justify">
                      DO Charts has been carefully optimized for mobile
                      interaction, such zooming and panning the coordinate
                      system with your fingers on small screens. The PC users
                      can also use the mouse wheel to do the same interaction.
                      The fine-grained modularity and packaging mechanism allows
                      DO Charts to have a small package size on mobile, and the
                      optional SVG rendering engine makes the memory cost of
                      mobile much smaller.
                    </p>
                    {/* <p className="qualitymatter text-justify">
                      This feature empowers organizations to harness the full
                      potential of their data by breaking down silos and
                      fostering comprehensive insights.
                    </p> */}
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
                  <div className="col-md-7">
                    <img
                      src="images/data-charts-img-4.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                  <div className="col-md-5 qualitypara">
                    <h4 className="qualityhead">
                      Interactive Data Exploration In-Depth
                    </h4>
                    <p className="qualitymatter text-justify">
                      Interaction is an important means of mining information
                      from data. Overview first, zoom filtering to view details
                      as needed is a basic requirement for data visualization
                      interaction. DO Charts has been on the road of
                      interaction. We have provided legend, visualMap, dataZoom,
                      tooltip, brush and other ready-to-use interactive
                      components, which can perform interactive operations such
                      as multi-dimensional data screening, view zooming, and
                      display details on the data.
                    </p>
                    {/* <p className="qualitymatter text-justify">
                      This functionality is easily accessible through the "New"
                      button located within the Queries tab, providing a
                      user-friendly and efficient means to interact with data
                      and extract valuable insights.
                    </p> */}
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
                  <div className="col-md-7">
                    <img
                      src="images/data-charts-img-3.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                  <div className="col-md-5 qualitypara">
                    {/* <h4 className="qualityhead">
                      Multi-Dimensional Data Support and Rich Visual Coding
                    </h4> */}
                    <p className="qualitymatter text-justify">
                      DO Charts 3 began to strengthen support for
                      multi-dimensional data. In addition to the common
                      multi-dimensional data visualization tools such as
                      parallel coordinates, for traditional scatter plots, etc.,
                      the input data can also be multiple dimensions. With the
                      rich visual coding provided by the visual mapping
                      component visualMap, it is possible to map data of
                      different dimensions to color, size, transparency,
                      shading, etc. Different visual channels.
                    </p>
                    {/* <p className="qualitymatter text-justify">
                      To apply various transformations, simply access the 3-dot
                      menu located next to the query title, granting you control
                      over data manipulation within your query.
                    </p> */}
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
                  <div className="col-md-7">
                    <img
                      src="images/data-charts-img-2.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                  <div className="col-md-5 qualitypara">
                    {/* <h1 className="qualityhead">Dynamic Data</h1> */}
                    <p className="qualitymatter text-justify">
                      DO Charts is driven by data, and changes in data drive
                      changes in the chart. So the implementation of dynamic
                      data has become extremely simple, just need to get the
                      data, fill in the data, DO Charts will find the difference
                      between the two sets of data and then use the appropriate
                      animation to represent the data changes. The timeline
                      component can present data information in a higher time
                      dimension.
                    </p>
                    {/* <p className="qualitymatter text-justify">
                      You can use expressions to create calculate new columns
                      from existing columns. For example, you can create a new
                      column that calculates the percentage of revenue generated
                      by each product category.
                    </p> */}
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade matter"
                id="pills-lineage-1"
                role="tabpanel"
                aria-labelledby="pills-lineage-tab"
              >
                <div className="row">
                  <div className="col-md-7">
                    <img
                      src="images/data-charts-img-1.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                  <div className="col-md-5 qualitypara">
                    {/* <h4 className="qualityhead">
                      More Powerful and Beautiful 3D Visualization with GL
                    </h4> */}
                    <p className="qualitymatter text-justify">
                      Do you want to achieve 3D visualization in VR, large
                      screen scenes? We provide WebGL-based ECharts GL. You can
                      use DO Charts GL to draw 3D Earth, buildings, and
                      population distribution histograms as easily as DO Charts
                      common components. Furthermore, we also provide
                      configuration items so that you can get artistic results
                      with a few lines of configuration!
                    </p>
                    {/* <p className="qualitymatter text-justify">
                      You can use expressions to create calculate new columns
                      from existing columns. For example, you can create a new
                      column that calculates the percentage of revenue generated
                      by each product category.
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tenetsclass-1">
        <div className="container">
          <div className="tenetsheading-01 col-md-10 ml-5">
            Tenets of DO Insights to bring real-time data insights
          </div>
          <div className="row mt-4">
            <div className="col-md-4 ">
              <div className="showdowclass-data">
                <div className="issuesmatter">
                  <img
                    src="images/chartsecure-1.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead-01">Flexible Chart Types</h1>
                  <p className="issuematterpara">
                    Do Charts provides more than 20 chart types AI generated and
                    available out of the box, along with a dozen components, and
                    each of them can be arbitrarily combined to use.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="showdowclass-data">
                <div className="issuesmatter">
                  <img
                    src="images/chartsecure-2.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead-01">
                    Powerful Rendering Engine
                  </h1>
                  <p className="issuematterpara">
                    Easily switch between Canvas and SVG rendering. Progressive
                    rendering and stream loading make it possible to render 10
                    million data in realtime.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="showdowclass-data">
                <div className="issuesmatter">
                  <img
                    src="images/chartsecure-3.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead-01">
                    Professional Data Analysis
                  </h1>
                  <p className="issuematterpara">
                    Manage data through datasets, which support data transforms
                    like filtering, clustering, and regression to help analyze
                    multi-dimensional analysis of the same data. Can also
                    simulate using AI simulator
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="showdowclass-data">
                <div className="issuesmatter">
                  <img
                    src="images/chartsecure-4.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead-01">Elegant Visual Design</h1>
                  <p className="issuematterpara">
                    The default design follows visualization principles,
                    supports responsive design. Flexible configurations make it
                    easy to customize.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="showdowclass-data">
                <div className="issuesmatter">
                  <img
                    src="images/chartsecure-5.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead-01">Accessibility-Friendly</h1>
                  <p className="issuematterpara">
                    Automatically generated chart descriptions and decal
                    patterns help users with disabilities understand the content
                    and the stories behind the charts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-5 ">
              <div className="showdowclass-data">
                <div className="issuesmatter">
                  <img
                    src="images/chartsecure-6.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead-01">
                    Stay Informed with Alerts
                  </h1>
                  <p className="issuematterpara">
                    Stay up-to-date with important changes and trends in your
                    charts through alerts and notifications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="doinsightrequestguideclass-1">
        <div className="container guidecontainer">
          <div className="doinsightguideclass-1">
            <div className="row">
              <div className="col-md-9">
                <h1 className="guidehead text-mb">
                  Request Guidance from a Data Charts Expert
                </h1>
                <p className="guidetext-01">
                  Connect with our experts to harness the  power of Data with DO
                  Charts.
                </p>
              </div>
              <div className="col-md-3">
                <button className="guidedemobutton">
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

      {/* <section class="card text-center" style={{ border: "0px" }}>
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
      </section> */}
{/* <Talktous /> */}

      <Footer />
    </>
  );
}

export default Datacharts;
