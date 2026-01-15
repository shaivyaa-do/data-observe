import React from "react";
import "./Observability.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Talktous from "../products/Talktous";

import bussiness from "../../src/videos/productvideo.mp4";

function Observability() {
  return (
    <div>
      <Navbar />
      <div className="observability-MAIN vability-do">
      <img
        src="images/do360finalbanner.png"
        className="do360bannerclass w-100"
        alt="#"
      />
     
      <div className="header-section">
      <h1 className="container" style={{ color: "#FFF", fontSize: "20px", fontWeight: "700" }}>DO360</h1>
        <div className="container size-font">
          <div
            className="row"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h1
              className="col-md-9 mobile-observa">
              Data Observability
              <br />
              Solution - Elevate
              <br />
              Data Dependability
            </h1>
            <p
              className="col-md-9 text-observa"
  >
              Unleash the true potential of your data.
            </p>
            <p
              className="col-md-6 text-observa">
              Attain profound insights into its quality and visibility for swift
              resolution of real-time data issues and minimized downtime through
              our Data Observability solution.
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
              <button className="demoClass class-demo">Get a demo</button>
            </div>
            <div className="videoClass col-md-8">
              <video className="playClass" controls>
                <source src={bussiness} type="video/mp4" />
              </video>
              {/* <img
                src="images/product360videoimg.png"
                alt="#"
                className="playClass"
              /> */}
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="definitionClass">
        <div className="container def1Class">
            <h1 className="obsheading">What is observability?</h1>
              <p className="obspara1">
                Data observability is about ensuring the quality, reliability,
                and performance of your data in the system by monitoring,
                measuring, and analyzing it. This helps eliminate all arising
                data anomalies by enabling teams to collect, profile, alert, and
                resolve data issues in near real time.
              </p>
              <p className="obspara2">
                Stay assured that your data is accurate and trustworthy for
                analysis, decision-making, and downstream processes.
                Implementing data observability practices and data governance
                strategies helps improve your overall operational efficiency,
                mitigate associated data risks with quality and productivity.
              </p>
            <div className="mt-5 pt-2">
              <div className="row">
                <div className="col-md-4 text-center">
                  <div className="box-padding-360">
                    <img className="mobile-size" src="images/dollarprod.png" alt="#" width={100} />
                    <p className="cardText">Reduce Cost</p>
                    <h1 className="cardHead">3x</h1>
                    <p className="cardText2">Reduction in Data</p>
                    <p className="cardText2">infrastructure task</p>
                  </div>
                </div>

                <div className="col-md-4 text-center">
                  <div className="box-padding-360">
                    <img className="mobile-size" src="images/minimizerisk.png" alt="#" width={100} />
                    <p className="cardText">Minimize Risk</p>
                    <h1 className="cardHead">80%</h1>
                    <p className="cardText2">Reduction in</p>
                    <p className="cardText2">Data downtime</p>
                  </div>
                </div>

                <div className="col-md-4 text-center">
                  <div className="box-padding-360">
                    <img className="mobile-size" src="images/savetime.png" alt="#" width={100} />
                    <p className="cardText">Save Time</p>
                    <h1 className="cardHead">30%</h1>
                    <p className="cardText2">Data Engineering Hours</p>
                    <p className="cardText2">Saved per Quarter</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>





      <section className="pillarsClass mb-5">
        <div className="container pt-5 mt-3">
          <div>
            <h1 className="headingpillars">Pillars of Dataobserve 360</h1>
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
                  Catalog
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
                  Freshness
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
                  Schema
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
                  Volume
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
                  Lineage
                </a>
              </li>
              <li class="nav-item pillarlinksul">
                <a
                  class="nav-link linkClass"
                  id="pills-events-tab"
                  data-toggle="pill"
                  href="#pills-events"
                  role="tab"
                  aria-controls="pills-events"
                  aria-selected="false"
                >
                  Events
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
                    <h1 className="qualityhead">Catalog</h1>
                    <p className="qualitymatter text-justify">
                      Introducing the Data Catalog at DataObserve, where we
                      organize and catalog your valuable data assets for
                      seamless accessibility and enhanced data management. Our
                      Data Catalog is a powerful tool designed to streamline
                      data discovery, improve data governance, and enhance
                      collaboration across your organization.
                    </p>
                    <p className="qualitymatter text-justify">
                      With this feature, you can easily search, locate, and
                      understand your data, enabling better decision-making,
                      data-driven insights, and efficient utilization of your
                      data resources. Whether you're a data scientist, analyst,
                      or business user, our Data Catalog simplifies data
                      exploration and ensures that your data is a strategic
                      asset at your fingertips.
                    </p>
                  </div>
                  <div className="col-md-7 mt-5">
                    <img
                      src="images/do360catalog.png"
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
                    <h1 className="qualityhead">Freshness</h1>
                    <p className="qualitymatter text-justify">
                      In DataObserve, we take data freshness seriously with our
                      robust data monitoring solutions. Our Freshness Monitoring
                      feature is designed to ensure that your data is up-to-date
                      and reliable for making critical business decisions. By
                      continuously tracking data sources, we provide real-time
                      insights into the timeliness of your information, allowing
                      you to identify and rectify any delays or discrepancies
                      promptly.
                    </p>
                    <p className="qualitymatter text-justify">
                      With Freshness Monitoring, you can trust that your data is
                      not only accurate but also current, enabling you to stay
                      agile and responsive in today's fast-paced business
                      environment.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/freshnessdo360.png"
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
                    <h1 className="qualityhead">Schema</h1>
                    <p className="qualitymatter text-justify">
                      Schema monitoring is a critical component of DataObserve's
                      data observability solutions. We understand that data
                      schema consistency is essential for accurate analysis and
                      reporting. Our schema monitoring tools continuously track
                      and validate data schemas, ensuring that any changes or
                      anomalies are immediately detected. By maintaining data
                      schema integrity, we help you avoid data quality issues,
                      improve data governance, and ensure seamless compatibility
                      across various data sources and applications.
                    </p>
                    <p className="qualitymatter text-justify">
                      With DataObserve's schema monitoring, you can trust that
                      your data retains its structural integrity, promoting
                      confident decision-making and data-driven insights.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/do360schema.png"
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
                    <h1 className="qualityhead">Volume</h1>
                    <p className="qualitymatter text-justify">
                      In DataObserve, our Volume Monitoring feature is a crucial
                      component of our data observability solutions. We
                      understand that data volume can fluctuate significantly,
                      affecting the performance and efficiency of your data
                      processes. Our Volume Monitoring ensures that you are
                      always aware of changes in data volume, helping you manage
                      and allocate resources effectively. By tracking data
                      spikes or drops in real-time, you can optimize your data
                      pipelines and storage, preventing bottlenecks or resource
                      wastage.
                    </p>
                    <p className="qualitymatter text-justify">
                      With Volume Monitoring, you can maintain control over your
                      data's scalability, ensuring it aligns perfectly with your
                      business needs.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/volumedo360.png"
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
                    <h1 className="qualityhead">Lineage</h1>
                    <p className="qualitymatter text-justify">
                      We recognize that understanding the lineage of your data
                      is essential for data governance, compliance, and
                      troubleshooting. Our Lineage Monitoring feature enables
                      you to trace the origin and transformation of data
                      throughout its lifecycle. You can easily visualize how
                      data flows through your systems, ensuring transparency and
                      accountability in data processes.
                    </p>
                    <p className="qualitymatter text-justify">
                      With Lineage Monitoring, you can quickly identify and
                      address any issues, maintain data integrity, and make
                      informed decisions about data handling and usage. It's an
                      indispensable tool for organizations seeking to optimize
                      their data management and maintain a clear understanding
                      of their data's journey.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/do360lineage.png"
                      alt="#"
                      className="qualityimgclass"
                    />
                  </div>
                </div>
              </div>
              <div
                class="tab-pane fade matter"
                id="pills-events"
                role="tabpanel"
                aria-labelledby="pills-events-tab"
              >
                <div className="row">
                  <div className="col-md-5 qualitypara">
                    <h1 className="qualityhead">Events</h1>
                    <p className="qualitymatter text-justify">
                      Incident Management is a core component of DataObserve's
                      data observability solutions. We understand that data
                      incidents can disrupt operations and affect
                      decision-making. Our Incident Management feature allows
                      you to swiftly detect, report, and resolve data-related
                      issues. Whether it's data quality discrepancies,
                      performance bottlenecks, or other anomalies, our system
                      provides real-time alerts and facilitates collaborative
                      incident resolution.
                    </p>
                    <p className="qualitymatter text-justify">
                      With Incident Management in DataObserve, you can minimize
                      downtime, maintain data reliability, and ensure that your
                      data pipelines and processes run smoothly, ultimately
                      enhancing the overall data observability of your
                      organization.
                    </p>
                  </div>
                  <div className="col-md-7">
                    <img
                      src="images/eventsdo360.png"
                      alt="#"
                      className="qualityimgclass h-95 mt-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="differclass">
        <div className="container">
          <div className="row maindiv">
            <div className="col-md-3">
              <img className="w-100" src="images/logodo360.png" alt="#" />
            </div>
            <div className="col-md-7">
              <h1 className="do1">Why DataObserve 360</h1>
              <p className="do1p text-justify">
                DataObserve 360 goes beyond monitoring and alerting. DataObserve
                360 allows organizations to understand their data systems fully
                and enables them to fix data problems in increasingly complex
                data scenarios or even prevent them in the first place.
              </p>
            </div>
            <div className="container">
              <div className="differencepart">
          
                  <h1 className="do2">
                    How Data Observability differs from Monitoring
                  </h1>
  

                <div className="row maindiffernce">
                  <div className="col-md-6 do3class">
                    <div className="card monitorclass">
                      <h1 className="monitorhead">Monitoring</h1>
                      <p className="monitordef">known unknowns</p>
                      <hr className="horline" />
                      <div className="sentenceclass">
                        <img
                          className="senmark"
                          src="images/monitorsymbol.png"
                          alt="#"
                        />
                        <p>Monitoring tells you when something is wrong</p>
                      </div>
                      <div className="sentenceclass">
                        <img
                          className="senmark"
                          src="images/monitorsymbol.png"
                          alt="#"
                        />
                        <p>Assumes you know what questions to ask</p>
                      </div>
                      <div className="sentenceclass">
                        <img
                          className="senmark"
                          src="images/monitorsymbol.png"
                          alt="#"
                        />
                        <p>
                          Periodic routine checks are supported only by
                          established standards
                        </p>
                      </div>
                      <div className="sentenceclass">
                        <img
                          className="senmark"
                          src="images/monitorsymbol.png"
                          alt="#"
                        />
                        <p>
                          3 step approach—data ingestion, issue identification,
                          and data cleaning
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 do4class">
                    <div className="card observabilityclass">
                      <h1 className="observehead">Observability</h1>
                      <p className="observedef">known unknowns</p>
                      <hr className="horline" />
                      <div className="sentenceclass">
                        <img
                          className="senmark"
                          src="images/obssymbol.png"
                          alt="#"
                        />
                        <p>Doesn't assume that something is wrong</p>
                      </div>
                      <div className="sentenceclass">
                        <img
                          className="senmark"
                          src="images/obssymbol.png"
                          alt="#"
                        />
                        <p>
                          Assumes we don't know what all the questions are to
                          ask
                        </p>
                      </div>
                      <div className="sentenceclass">
                        <img
                          className="senmark"
                          src="images/obssymbol.png"
                          alt="#"
                        />
                        <p>
                          The set of practices are advocated by data teams to
                          uncover data health
                        </p>
                      </div>
                      <div className="sentenceclass">
                        <img
                          className="senmark"
                          src="images/obssymbol.png"
                          alt="#"
                        />
                        <p>
                          Helps resolve real-time data issues without any delay
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="verses">
                  <div className="vsclass">VS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container issuesclass">
          <div>
            <h1 className="col-md-12 issueshead">
              Top Use Cases of Data Observability in solving real-time data
              issues
            </h1>
          </div>
          <div className="row issuescards mt-5">
            <div className="col-md-4 ">
              <div className="showdowclass">
                <div className="issuesmatter">
                  <img
                    src="images/issues1.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">Data Downtime Management</h1>
                  <p className="issuematterpara">
                    Don't just observe data incidents. Resolve them fast. Now
                    you can alert, respond, and resolve all your data incidents
                    in one location
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="showdowclass">
                <div className="issuesmatter">
                  <img
                    src="images/issues2.png"
                    alt="#"
                    className="issue2image"
                  />
                  <h1 className="issuematterhead">Data Pipeline Monitoring</h1>
                  <p className="issuematterpara">
                    Manage the health of 100s to 1000s of data pipelines. Detect
                    missing operations, failed jobs, and run durations so you
                    can handle pipeline growth.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="showdowclass">
                <div className="issuesmatter">
                  <img
                    src="images/issues3.png"
                    alt="#"
                    className="issueimage"
                  />
                  <h1 className="issuematterhead">Data Downtime Management</h1>
                  <p className="issuematterpara">
                    Ensure better data quality by monitoring data SLAs,
                    unexpected column changes, and null records before they get
                    to your consumers.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 offset-2">
              <div className="showdowclass mt-4">
                <div className="issuesmatter">
                  <img
                    src="images/issues4.png"
                    alt="#"
                    className="issue2image"
                  />
                  <h1 className="issuematterhead">
                    Impact Analysis and Lineage
                  </h1>
                  <p className="issuematterpara">
                    Break siloes and get the whole data story with end-to-end
                    data lineage. Understand the impact of data incidents on
                    upstream and downstream data flow.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ">
              <div className="showdowclass mt-4">
                <div className="issuesmatter">
                  <img
                    src="images/issues5.png"
                    alt="#"
                    className="issue2image"
                  />
                  <h1 className="issuematterhead">Data Anomaly Detection</h1>
                  <p className="issuematterpara">
                    The worst data incidents are unknown. Anomaly detection
                    removes bad data surprises by automatically detecting
                    deviant behaviour in your data pipelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="solutionclass">
        <div className="subsolclass">
          <div className="container">
            <h1 className="solheading">Our Solution</h1>
            <p className="solpara1">
              DataObserve' s Data Observability 360 is a customized solution
              designed to monitor and enhance the reliability of data.
            </p>
            <p className="solpara2">
              Custom frameworks and sophisticated ML models will help to detect
              anomalies, errors, and inconsistencies based on historical data
              and provide actionable insights.
            </p>
            </div>
            <div className="container-fluid solimageclass">
              <img
                src="images/do360solimage.png"
                alt=""
                className="solimage1"
              />
            </div>
            <div className="container">
            <div className="solpara3div">
              <p className="solpara3">
                Uniqueness of implementing data observability as a solution
              </p>
            </div>
            <div className="row solcardsclass">
              <div className="col-md-3">
                <img
                  src="images/solimage2.png"
                  alt="#"
                  className="solpicclass"
                />
                <h1 className="solcardhead">No-code onboarding</h1>
                <p className="solcardtext">
                  Code-free implementation for full out-of- the-box coverage
                  with your existing data stack and seamless collaboration with
                  your teammates.
                </p>
              </div>
              <div className="col-md-3">
                <img
                  src="images/solimage3.png"
                  alt="#"
                  className="solpicclass"
                />
                <h1 className="solcardhead">Security-first architecture</h1>
                <p className="solcardtext">
                  Data never leaves your environment. Our solution is 100%
                  customizable as per your Data engineering stack.
                </p>
              </div>
              <div className="col-md-3">
                <img
                  src="images/solimage4.png"
                  alt="#"
                  className="solpicclass"
                />
                <h1 className="solcardhead">Scales with your data</h1>
                <p className="solcardtext">
                  We monitor your data at rest and do not extract it from your
                  data store, facilitating end-to-end coverage no matter how
                  your stack evolves.
                </p>
              </div>
              <div className="col-md-3">
                <img
                  src="images/solimage5.png"
                  alt="#"
                  className="solpicclass"
                />
                <h1 className="solcardhead">End-to-end observability</h1>
                <p className="solcardtext">
                  Use your favourite stack. Get a single view into data health
                  across your data lakes, warehouses, ETL, business intelligence
                  tools, and catalogues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container plugclass">
          <h1 className="col-md-12 plugplay mb-p">
            Why choose DataObserve 360 as plug and play solution?
          </h1>
          <div className="row plugcards">
            <div className="col-md-3 plugcard">
              <p className="plugcardtext">
                100% Customizable for your data engineering stack
              </p>
            </div>
            <div className="col-md-3 plugcard">
              <p className="plugcardtext">
                100% Data never leaves your environment.
              </p>
            </div>
            <div className="col-md-3 plugcard">
              <p className="plugcardtext">80% Reduction in Data Downtime</p>
            </div>
            <div className="col-md-3 plugcardlast">
              <p className="plugcardtext">30% Data Engineering Hours saved</p>
            </div>
          </div>
        </div>
      </section>
      <section className="requestguideclass">
        <div className="container guidecontainer">
          <div className="guideclass">
            <div className="row">
              <div className="col-md-9">
                <h1 className="guidehead mb-p">
                  Request Guidance from a DataObserve 360Expert
                </h1>
                <p className="guidetext">
                  Connect with our experts to harness the power of DataObserve
                  360.
                </p>
              </div>
              <div className="col-md-3">
                <button className="guidedemobutton observe-button">
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
                    <p style={{ margin: "0px" }}>
                      What is Data Observability 360?
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
                  Data Observability 360 is an advanced end-to-end data quality
                  and reliability tool designed to ensure the integrity,
                  accuracy, and reliability of your data throughout its
                  lifecycle.
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
                      How does Data Observability 360 differ from traditional
                      data quality tools?
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
                  Unlike traditional data quality tools, Data Observability 360
                  provides a comprehensive solution that covers the entire data
                  pipeline, offering real-time monitoring, anomaly detection,
                  and actionable insights to address data quality issues
                  promptly.
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
                      What key features does Data Observability 360 offer?
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
                  Data Observability 360 includes features such as real-time
                  monitoring, automated anomaly detection, data profiling,
                  metadata management, data lineage tracking, and comprehensive
                  reporting. These features collectively provide a holistic
                  approach to ensuring data quality and reliability.
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
                      How does Data Observability 360 address data quality
                      issues in real-time?
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
                  The tool employs advanced algorithms and machine learning
                  techniques to monitor data in real-time, detecting anomalies
                  and discrepancies as they occur. This enables users to
                  proactively address issues and maintain high-quality data.
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
                      Can Data Observability 360 integrate with existing data
                      infrastructure?
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
                  Yes, Data Observability 360 is designed to seamlessly
                  integrate with various data platforms, databases, and data
                  warehouses. It supports popular data storage solutions,
                  ensuring compatibility with your existing infrastructure.
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
                      What is the significance of data lineage tracking in Data
                      Observability 360?
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
                  Data lineage tracking provides a visual representation of how
                  data flows through the entire pipeline. This feature helps
                  users understand the origin of data, transformations it
                  undergoes, and its destination. It plays a crucial role in
                  ensuring data reliability and compliance.
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
                      How does Data Observability 360 assist in compliance and
                      auditing?
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
                  The tool provides robust auditing capabilities, ensuring that
                  data quality and reliability meet regulatory requirements. It
                  generates detailed reports and logs for compliance purposes,
                  making it easier to demonstrate adherence to data governance
                  standards.
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
                      Can Data Observability 360 be used by non-technical users?
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
                  Absolutely. Data Observability 360 is designed with a
                  user-friendly interface that caters to both technical and
                  non-technical users. The intuitive dashboards and reports make
                  it accessible to a wide range of users, empowering them to
                  monitor and improve data quality.
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
                      Is there support and training available for Data
                      Observability 360 users?
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
                  Yes, we offer comprehensive support and training programs to
                  ensure users can maximize the benefits of Data Observability
                  360. Our support team is readily available to address any
                  queries or issues, and training materials are provided for
                  efficient onboarding.
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
                      How can organizations benefit from implementing Data
                      Observability 360?
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
                  Organizations can experience improved data quality, reduced
                  operational risks, enhanced decision-making processes, and
                  increased overall trust in their data. Data Observability 360
                  contributes to a more reliable and efficient data ecosystem,
                  positively impacting business outcomes.
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

export default Observability;
