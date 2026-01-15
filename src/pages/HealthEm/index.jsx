import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import "./HealthEm.css";
import Faq from "../../components/Common/Faq";
import health from "../../assets/videos/health.mp4"

function HealthEm() {
  return (
    <>
      <Navbar />

      <div>
        <video className="health-em-video-bg" autoPlay loop muted>
          <source src={health} type="video/mp4" />
        </video>
        <section className="healthheader">
          <div className="container healthpg1">
            <div className="healthheaderclass">
              <h1 className="healthheadertext">
                Get strategic insights from all points of care to drive value-
                based healthcare
              </h1>
              <button className="healthstartbutton">Get Started</button>
            </div>
          </div>
        </section>

      </div>

      <div className="container screenpath">
        <p className="screenpathtext">
          Home <span className="screenpathspan">/</span> Products{" "}
          <span className="screenpathspan">/</span> HealthEM.AI
        </p>
      </div>
      <section>
        <div className="container">
          <h1 className="lifecyclehead">
            Improve time-to-value in healthcare with end-to-end management of
            your data lifecycle
          </h1>
          <p className="lifecycletext1">
            The healthcare industry is on the cusp of a crucial transformative
            journey. Adopting intelligent solutions to provide value-based care
            has become the norm rather than traditional fee-for-service
            compensation methods. However, healthcare practitioners are often
            unable to provide optimal care due to incorrect data management
            practices and lack of actionable healthcare data analytics
            solutions.
          </p>
          <p className="lifecycletext2">
            You need solutions that help manage your full data lifecycle - from
            ingestion to quality check - along with strategic insights to
            provide the best healthcare and improve time-to-value. Leverage our
            HealthEM.AI healthcare analytics platform to simplify your medical
            and practice management and drive value realization at speed and
            scale.
          </p>
          <button className="lifecyclebutton">
            <a href="#" className="lifecyclebuttontext">
              Revive your healthcare data management now with HealthEM.AI
            </a>
          </button>
        </div>
      </section>
      <section className="arrowclass">
        <div className="container">
          <div className="row">
            <h1 className="col-md-10 arrowhead">
              Here's how we've helped our customers win at the last mile
            </h1>
            <div className="col-md-1">
              <button className="healtharrowbutton">
                <img
                  className="healtharrowclass"
                  src="images/healthprevious.png"
                  alt="#"
                />
              </button>
            </div>
            <div className="col-md-1">
              <button className="healtharrowbutton">
                <img
                  className="healtharrowclass"
                  src="images/healthnext.png"
                  alt="#"
                />
              </button>
            </div>
            <div className="col-md-4 middlesectionarrow">
              <img
                className="arrowimage1class"
                src="images/arrowclassimage1.png"
                alt="#"
              />
            </div>
            <div className="col-md-8 middlesectionarrow">
              <h1 className="arrowmiddletext">
                Creating a data platform for self-service analytics across the
                dental value chain to improve data consolidation and timely
                decision-making
              </h1>
              <p className="arrowmiddlepara text-justify">
                See how we helped a leading dental support organization address
                their disparate practice management and EMR systems across
                clinics by combining clinical, practice, accounting, and
                marketing time into one data platform for timely insights with
                healthcare management and analytics.
              </p>
              <div className="row m-2 mt-4">
                <div className="col-md-4 arrowcard">
                  <p className="arrowcardtext">
                    Data-driven decision making from executives to physicians
                  </p>
                </div>
                <div className="col-md-4 arrowcard">
                  <p className="arrowcardtext">
                    Improved operational efficiency with real-time platform
                    refresh across 50+ clinics
                  </p>
                </div>
                <div className="col-md-4 arrowcard">
                  <p className="arrowcardtext">
                    Single source of truth across 7 different practice
                    management systems and 50+ clinics
                  </p>
                </div>
              </div>
            </div>
            <button className="arrowfinalbutton">
              <a className="arrowfinalbuttontext" href="#">
                Read more success stories
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="consultingclass">
        <div className="container contclass">
          <h1 className="consultheading">
            Consolidate your healthcare data and leverage actionable insights
            for value-driven outcomes on a single data platform
          </h1>
          <div class="row consultnavtabs">
            <div class="col-4 consultnavlinks">
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active consultnavbuttons"
                  id="v-pills-mai-tab"
                  data-toggle="pill"
                  data-target="#v-pills-mai"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-mai"
                  aria-selected="true"
                >
                  Member analytics insights
                </button>
                <button
                  class="nav-link consultnavbuttons"
                  id="v-pills-pirc-tab"
                  data-toggle="pill"
                  data-target="#v-pills-pirc"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-pirc"
                  aria-selected="false"
                >
                  Performance insights for reduced costs
                </button>
                <button
                  class="nav-link consultnavbuttons"
                  id="v-pills-pap-tab"
                  data-toggle="pill"
                  data-target="#v-pills-pap"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-pap"
                  aria-selected="false"
                >
                  Predictive analytics platform
                </button>
                <button
                  class="nav-link consultnavbuttons"
                  id="v-pills-aso-tab"
                  data-toggle="pill"
                  data-target="#v-pills-aso"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-aso"
                  aria-selected="false"
                >
                  APIs for specialized offerings
                </button>
              </div>
            </div>
            <div class="col-8">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-mai"
                  role="tabpanel"
                  aria-labelledby="v-pills-mai-tab"
                >
                  <div className="container">
                    <img
                      className="arrowimage2class"
                      src="images/arrowclassimage2.png"
                      alt="#"
                    />
                    <h1 className="memberhead">Member anlaytics insights</h1>
                    <p className="memberpara">
                      Leverage our self-service healthcare analytics platform
                      that allows you to cater to different personas or
                      decision-makers across your healthcare value chain. Avoid
                      additional spending in risk stratification, proactive
                      chronic cohort, predicting patient utilization, and SDoH
                      interventions with insights from a single, integrated data
                      platform.
                    </p>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-pirc"
                  role="tabpanel"
                  aria-labelledby="v-pills-pirc-tab"
                >
                  performance insights for reduced cost
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-pap"
                  role="tabpanel"
                  aria-labelledby="v-pills-pap-tab"
                >
                  Predictive analytics platform
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-aso"
                  role="tabpanel"
                  aria-labelledby="v-pills-aso-tab"
                >
                  APIs for specialized offerings
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ytchooseclass">
        <div className="container">
          <div className="ytchead">Why choose us?</div>
          <div className="row ytccards">
            <div className="col-md-4 ytcsectioncard">
              <div className="card ytc-card">
                <img src="images/ytccard1image.png" alt="#" className="ytccardimageclass" />
                <p className="ytccardtext">
                  Flexible delivery models and integration with EMR, HL7, APIs
                  for custom applications
                </p>

              </div>
            </div>
            <div className="col-md-4">
              <div className="card ytc-card">
                <img src="images/ytccard2image.png" alt="#" className="ytccardimageclass" />
                <p className="ytccardtext">
                  Flexible delivery models and integration with EMR, HL7, APIs
                  for custom applications
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card ytc-card">
                <img src="images/ytccard3image.png" alt="#" className="ytccardimageclass" />
                <p className="ytccardtext">
                  Flexible delivery models and integration with EMR, HL7, APIs
                  for custom applications
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq />
      <Footer />
    </>
  );
}

export default HealthEm;
