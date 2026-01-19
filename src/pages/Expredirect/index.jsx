import React from "react";
import "./Expredirect.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import talent from "../../assets/videos/talent-vid.mp4";

import footerland from "../../assets/videos/footerland.mp4";

function Expredirect() {
  const handleContactButtonClick = () => {
    const cmsLink =
      "https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.html";

    window.location.href = cmsLink;
  };

  const Navigate = useNavigate();






  return (
    <div className="scroll-Animation">
      <div className="">
        <section>
          <div className="Product-landing-Redirect">
            <div className="container" style={{ margin: "auto" }}>
              <div className="landing-ProudcT">
                <div className="d-flex Landing-product-padding">
                  <div>
                    <a className="homenavigateclass" href="/">
                      <img
                        src="./images/footer-do-logo.png"
                        className="footer-do-Logo-product"
                        alt="do-logo"
                        width={100}
                      />
                    </a>
                  </div>
                  <div className="d-flex">
                    <i
                      class="fa fa-angle-right navbar-angle-product"
                      aria-hidden="true"
                    ></i>
                    <h5 className="Products-Landing-02">Expertise</h5>
                  </div>
                </div>

                <div>
                  <button
                    className="NavBAR-Contact-Us"
                    onClick={handleContactButtonClick}
                  >
                    Contact Us
                    <i
                      class="fa fa-angle-right navbar-angle"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="exp-rdt-section1 animation-bar">
          <div className="">
            <div className="industries-height">
              <div className="gradient-layer">
                <video className="exp-rtd-video1" autoPlay loop muted>
                  <source src="https://storage.googleapis.com/do-website-resources/cloud.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="cloud1 container">
              <h1 className="cloud-text">Cloud Transformation</h1>
              <p className="col-md-8 cloud-para-landing">
                Elevate your business by embracing cloud migration for
                transformative growth. Harness the power of the cloud to drive
                innovation and streamline operations, propelling your business
                into a new era of efficiency and agility. Embrace the future
                with a seamless transition that empowers your organization's
                digital transformation journey.
              </p>
              <div className="para-section1">
                <p>Cloud Consulting</p>
                <p className="dot"></p>
                <p>Cloud Migration & Modernization</p>
                <p className="dot"></p>
                <p>Cloud Cost Optimization</p>
                <p className="dot"></p>
                <p>Cloud Ops</p>
                <p className="dot"></p>
                <p>Infrastructure as services</p>
              </div>
              <div className="view-btn">
                <a href="/cloud" style={{ textDecoration: "none" }}>
                  <button className="v-btn">
                    View
                    <svg
                      className="svg-img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                    >
                      <path d="M0.5 11L5.5 6L0.5 1" stroke="white" />
                    </svg>
                  </button></a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 2 */}
      <div>
        <section className="exp-rdt-section2 animation-bar">
          <div className="">
            <div className="industries-height">
              <div className="gradient-layer">
                <video className="exp-rtd-video1" autoPlay loop muted>
                  <source src="https://storage.googleapis.com/do-website-resources/datanalytics.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="cloud1 container">
              <h1 className="cloud-text">Data Analytics & BI</h1>
              <p className="col-md-8 cloud-para-landing">
                Unlock scalable business growth with our Business Intelligence
                and Data Analytics solutions. Harness the power of data to make
                informed decisions, driving your expansion strategy. Elevate
                your business with our services that empower you to optimize
                operations and seize new opportunities.
              </p>
              <div className="para-section1">
                <p>Data Visualization Consulting</p>
                <p className="dot"></p>
                <p>Data Analytics Products</p>
                <p className="dot"></p>
                <p>BI Migration</p>
                <p className="dot"></p>
                <p>Self-Service BI</p>
                <p className="dot"></p>
                <p>Data Governance</p>
              </div>
              <div className="view-btn">
                <a style={{ textDecoration: "none" }} href="/databi"> <button className="v-btn">
                  View
                  <svg
                    className="svg-img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                  >
                    <path d="M0.5 11L5.5 6L0.5 1" stroke="white" />
                  </svg>
                </button></a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 3 */}

      <div>
        <section className="exp-rdt-section3 animation-bar">
          <div className="">
            <div className="industries-height">
              <div className="gradient-layer">
                <video className="exp-rtd-video1" autoPlay loop muted>
                  <source src="https://storage.googleapis.com/do-website-resources/devops.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="cloud1 container">
              <h1 className="cloud-text">DevOps-as-a-service</h1>
              <p className="col-md-8 cloud-para-landing">
                Fast-track software delivery with comprehensive automation and
                continuous delivery practices, effectively minimizing costs.
                Streamline your development process by adopting end-to-end
                automation, ensuring efficient and cost-effective software
                deployment. Embrace a culture of continuous delivery to enhance
                speed and efficiency in delivering high-quality software
                products.
              </p>
              <div className="para-section1">
                <p>DevOps on Cloud </p>
                <p className="dot"></p>
                <p>Infrastructure as Code </p>
                <p className="dot"></p>
                <p>Microservices</p>
                <p className="dot"></p>
                <p>Round the Clock tracking </p>
                <p className="dot"></p>
                <p>Enhanced security and protection</p>
              </div>
              <div className="view-btn">
                <a style={{ textDecoration: "none" }} href="/devops">
                  <button className="v-btn">
                    View
                    <svg
                      className="svg-img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                    >
                      <path d="M0.5 11L5.5 6L0.5 1" stroke="white" />
                    </svg>
                  </button></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* 4 */}

      <div>
        <section className="exp-rdt-section4 animation-bar">
          <div className="">
            <div className="industries-height">
              <div className="gradient-layer">
                <video className="exp-rtd-video1" autoPlay loop muted>
                  <source src={talent} type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="cloud1 container">
              <h1 className="cloud-text">Talent-as-a-service</h1>
              <p className="col-md-8 cloud-para-landing">
                Secure top-tier Data & Analytics professionals for your
                enterprise within the next 48 hours. Elevate your team with
                industry-leading experts who bring a wealth of experience and
                skills to drive your data initiatives. Streamline your hiring
                process and swiftly access enterprise-grade talent to enhance
                your data and analytics capabilities.
              </p>
              <div className="para-section1-Talent">
                <p>Top Talent </p>
                <p className="dot"></p>
                <p>Enterprise Grade Engineers </p>
                <p className="dot"></p>
                <p>Trust & Reliability </p>
                <p className="dot"></p>
                <p>High retention rate</p>
              </div>
              <div className="view-btn">
                <a href="/talent" style={{ textDecoration: "none" }}>
                  <button className="v-btn">
                    View
                    <svg
                      className="svg-img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                    >
                      <path d="M0.5 11L5.5 6L0.5 1" stroke="white" />
                    </svg>
                  </button></a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 5 */}
      <div>
        <section className="exp-rdt-section5 animation-bar">
          <div className="">
            <div className="industries-height">
              <div className="gradient-layer">
                <video className="exp-rtd-video1" autoPlay loop muted>
                  <source src="https://storage.googleapis.com/do-website-resources/dataenginner.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="cloud1 container">
              <h1 className="cloud-text">Data Engineering</h1>
              <p className="col-md-8 cloud-para-landing">
                Enhance business flexibility through cutting-edge data
                engineering services, ensuring readiness for the future. Propel
                your organization forward with robust data infrastructure that
                fosters agility and adaptability. Embrace a dynamic future with
                our services tailored to enable your business to thrive in an
                ever-evolving landscape.
              </p>
              <div className="para-section1">
                <p>Data Warehouse Migration </p>
                <p className="dot"></p>
                <p>ELT/ETL Data Processing</p>
                <p className="dot"></p>
                <p>Database Modernization </p>
                <p className="dot"></p>
                <p>DataOps</p>
                <p className="dot"></p>
                <p>Data Integration and Pipelines</p>
              </div>
              <div className="view-btn">
                <a href="/dataeng" style={{ textDecoration: "none" }}>
                  <button className="v-btn">
                    View
                    <svg
                      className="svg-img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                    >
                      <path d="M0.5 11L5.5 6L0.5 1" stroke="white" />
                    </svg>
                  </button></a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 6 */}
      <div>
        <section className="exp-rdt-section6 animation-bar">
          <div className="">

            <div className="industries-height">
              <div className="gradient-layer">
                <video className="exp-rtd-video1" autoPlay loop muted>
                  <source src="https://storage.googleapis.com/do-website-resources/artificial.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="cloud1 container">
              <h1 className="cloud-text">AI & Machine Learning</h1>
              <p className="col-md-8 cloud-para-landing">
                ELeverage the power of AI and ML to build predictive solutions
                that elevate your business strategy. Unlock valuable insights
                and stay ahead of the competition by incorporating advanced
                technologies. Transform your operations with predictive
                analytics, tapping into the full potential of artificial
                intelligence and machine learning.
              </p>
              <div className="para-section1">
                <p>Deep Learning </p>
                <p className="dot"></p>
                <p>Predictive Analytics</p>
                <p className="dot"></p>
                <p>LLM’s & AI Models </p>
                <p className="dot"></p>
                <p> AI Chatbots </p>
                <p className="dot"></p>
                <p>INatural Language Processing & Gen AI</p>
              </div>
              <div className="view-btn">
                <a href="/aiml" style={{ textDecoration: "none" }}>
                  <button className="v-btn">
                    View
                    <svg
                      className="svg-img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                    >
                      <path d="M0.5 11L5.5 6L0.5 1" stroke="white" />
                    </svg>
                  </button></a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* 7 */}
      <div>
        <section className="exp-rdt-section7 animation-bar">
          <div className="">
            <div className="industries-height">
              <div className="gradient-layer">
                <video className="exp-rtd-video1" autoPlay loop muted>
                  <source src="https://storage.googleapis.com/do-website-resources/genaivdbg.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="cloud1 container">
              <h1 className="cloud-text">GenAI as a Service</h1>
              <p className="col-md-8 cloud-para-landing">
                Infuse your business with the innovative brilliance of AI,
                igniting creativity and unlocking new possibilities. Harness the
                transformative power of artificial intelligence to spark fresh
                ideas and drive innovative solutions for your enterprise. Propel
                your business forward by tapping into the creative potential
                that AI brings to the forefront.
              </p>
              <div className="para-section1">
                <p>Generative AI consulting </p>
                <p className="dot"></p>
                <p> Generative AI strategy</p>
                <p className="dot"></p>
                <p>Generative AI ApplicationDevelopment </p>
                <p className="dot"></p>
                <p>Generative AI model replication </p>
                <p className="dot"></p>
                <p>Model Integration & Deployment </p>
                <p className="dot"></p>
                <p> Fine Tuning LLMs </p>
              </div>
              <div className="view-btn">
                <a href="/genai" style={{ textDecoration: "none" }}>
                  <button className="v-btn">
                    View
                    <svg
                      className="svg-img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                    >
                      <path d="M0.5 11L5.5 6L0.5 1" stroke="white" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* 8 */}
      <div>
        <section className="exp-rdt-section8 animation-bar">
          <div className="">
            <div className="industries-height">
              <div className="gradient-layer">
                <video className="exp-rtd-video1" autoPlay loop muted>
                  <source src="https://storage.googleapis.com/do-website-resources/digitaltransform.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="cloud1 container">
              <h1 className="cloud-text">Application Modernization</h1>
              <p className="col-md-8 cloud-para-landing">
                Revive your business through the modernization of legacy
                applications, ensuring future readiness and adaptability. Propel
                your organization into the digital era by revitalizing outdated
                systems, fostering efficiency and innovation. Embrace a
                forward-looking strategy that ensures your business remains
                agile and well-equipped for the evolving landscape.
              </p>
              <div className="para-section1 exper-paras">
                <p>Enterprise web apps </p>
                <p className="dot"></p>
                <p>Application Migration </p>
                <p className="dot"></p>
                <p>Re-platform Services </p>
                <p className="dot"></p>
                <p>Remediation Services </p>
                <p className="dot"></p>
                <p>ICloud Applications</p>
              </div>
              <div className="view-btn">
                <a href="/application" style={{ textDecoration: "none" }}>
                  <button className="v-btn">
                    View
                    <svg
                      className="svg-img"
                      xmlns="http://www.w3.org/2000/svg"
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                    >
                      <path d="M0.5 11L5.5 6L0.5 1" stroke="white" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="animation-bar">
          <div className="d-flex">
            <div className="col-md-8 back-section-Last">
              <div className="d-flex back-industrie-last">
                <i
                  class="fa fa-angle-left home-angle-Product"
                  aria-hidden="true"
                ></i>
                <a href="/" style={{ textDecoration: "none" }}>
                  <h3 className="BACK-product">Back</h3>
                </a>
              </div>
            </div>
            <div className="col-md-4 back-to-industries">
              <div className="d-flex back-industrie-last">
                <a href="./productlanding" style={{ textDecoration: "none" }}>
                  <h3 className="BACK-product-industires">Products</h3>
                </a>
                <i
                  class="fa fa-angle-right home-angle-Product-color"
                  aria-hidden="true"
                ></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Expredirect;
