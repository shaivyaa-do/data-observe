import React, { useEffect } from "react";
import "./Indredirect.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

import footerland from "../../assets/videos/footerland.mp4";
// import lifescience from "../../assets/videos/lifescience.mp4"

function Indredirect() {
  const handleContactButtonClick = () => {
    const cmsLink =
      "https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.html";

    window.location.href = cmsLink;
  };

  const Navigate = useNavigate();

  // useEffect(() => {
  //   document.getElementById("overall").style.overflow = "hidden";

  //   return () => {
  //     document.getElementById("overall").style.overflow = "visible";
  //   };
  // }, []);

  return (
    <div className="scroll-Animation">
      <div className="">
        <section className="">
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
                    <h5 className="Products-Landing-02">Industries</h5>
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
        <section className="indrdt-section1  animation-bar">
          <div className="industries-height">
            <div className="gradient-layer">
              <video className="indrdt1" autoPlay loop muted>
                <source
                  src="https://storage.googleapis.com/do-website-resources/Life_Science.mp4"
                  type="video/mp4"
                  className=""
                />
              </video>
            </div>
          </div>
          <div className="indrdt-1-data container">
            <h1 className="indrdt-1-h1">LIFE SCIENCE</h1>
            <p className="indrdt-1-p  col-md-8">
              Drive innovation in the Life Sciences sector through the
              development of cutting-edge data solutions. Elevate research and
              development by implementing advanced data-driven approaches,
              fostering breakthroughs in the field. Propel the Life Sciences
              industry forward with tailored data solutions designed to
              stimulate creativity and progress.
            </p>
            <div className="view-btn">
              <a href="/industries" style={{ textDecoration: "none" }}>
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
        </section>

        <section className="indrdt-section2 animation-bar">
          <div className="industries-height">
            <div className="gradient-layer">
              <video className="indrdt1" autoPlay loop muted>
                <source
                  src="https://storage.googleapis.com/do-website-resources/Media.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="indrdt-1-data container">
            <h1 className="indrdt-2-h1">MEDIA & ENTERTAINMENT</h1>
            <p className="indrdt-2-p  col-md-8">
              Pioneer the digital revolution to deliver an unmatched media and
              entertainment experience. Take the lead in shaping the future of
              the industry by spearheading transformative digital initiatives.
              Elevate consumer engagement and satisfaction by driving the
              forefront of innovation in media and entertainment.
            </p>
            <div className="view-btn">
              <a href="/media" style={{ textDecoration: "none" }}>
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
        </section>

        <section className="indrdt-section3 animation-bar">
          <div className="industries-height">
            <div className="gradient-layer">
              <video className="indrdt1" autoPlay loop muted>
                <source
                  src="https://storage.googleapis.com/do-website-resources/Gaming.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="indrdt-1-data container">
            <h1 className="indrdt-3-h1">GAMING</h1>
            <p className="indrdt-3-p  col-md-8">
              Enhance customer experiences through gamification-enabled,
              data-driven solutions. Empower engagement and interaction by
              incorporating innovative gamified elements into your business
              strategy. Utilize data insights to create immersive and
              personalized experiences that captivate and delight your
              customers.
            </p>
            <div className="view-btn">
              <a href="/gaming" style={{ textDecoration: "none" }}>
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
        </section>

        <section className="indrdt-section4 animation-bar">
          <div className=" industries-height">
            <div className="gradient-layer">
              <video className="indrdt1" autoPlay loop muted>
                <source
                  src="https://storage.googleapis.com/do-website-resources/Financ.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="indrdt-1-data container">
            <h1 className="indrdt-4-h1">fINANCE</h1>
            <p className="indrdt-4-p  col-md-8">
              Craft actionable insights and deliver tangible outcomes tailored
              for the financial services sector. Drive meaningful impact by
              leveraging data to inform strategic decisions and enhance
              financial performance. Elevate your approach with tailored
              insights that translate into concrete and measurable results for
              your financial services endeavors.
            </p>
            <div className="view-btn">
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
            </div>
          </div>

        </section>

        <section className="indrdt-section5 animation-bar">
          <div className=" industries-height">
            <video className="indrdt1" autoPlay loop muted>
              <source
                src="https://storage.googleapis.com/do-website-resources/tRAVEL.mp4"
                type="video/mp4"
              />
            </video>
            <div className="indrdt-1-data container">
              <h1 className="indrdt-5-h1">TRAVEL & HOSPITALITY</h1>
              <p className="indrdt-5-p col-md-8">
                Navigate seamlessly from insights to value actualization with
                AI/ML solutions tailored for the travel and hospitality
                industry. Enhance customer experiences, optimize operations, and
                unlock the full potential of your business through advanced
                artificial intelligence and machine learning applications.
                Cruise into a new era of efficiency and innovation with our
                solutions designed to elevate the travel and hospitality sector.
              </p>
              <div className="view-btn">
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
              </div>
            </div>
          </div>
        </section>

        {/* <section className="indrdt-section6">
        <div className="">
          <video className="indrdt1" autoPlay loop muted>
            <source src={footerland} type="video/mp4" />
          </video>
          <div className="indrdt-1-data container">
            <h1 className="indrdt-6-h1">AI & ML</h1>
            <p className="indrdt-6-p">
              Explore a purposeful career journey within a collaborative
              setting.
            </p>
            <div className="view-btn">
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
            </div>
          </div>
        </div>
      </section> */}

        <section className="indrdt-section7 animation-bar">
          <div className=" industries-height">
            <div className="gradient-layer">
              <video className="indrdt1" autoPlay loop muted>
                <source
                  src="https://storage.googleapis.com/do-website-resources/CPG.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="indrdt-1-data container">
            <h1 className="indrdt-7-h1">CUstomer PACKAGED GOODS</h1>
            <p className="indrdt-7-p col-md-8">
              Empower consumer brands with CPG analytics and AI-driven insight
              engines, unlocking exponential value. Elevate decision-making
              and strategy implementation through advanced analytics,
              providing a competitive edge in the market. Drive unparalleled
              growth and efficiency in the consumer goods sector with our
              innovative AI-powered solutions.
            </p>
            <div className="view-btn">
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
            </div>
          </div>

        </section>

        <section className="indrdt-section8 animation-bar">
          <div className="industries-height">
            <div className="gradient-layer">
              <video className="indrdt1" autoPlay loop muted>
                <source
                  src="https://storage.googleapis.com/do-website-resources/mANUFACTURING.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="indrdt-1-data container">
            <h1 className="indrdt-8-h1">Manufacturing Industries</h1>
            <p className="indrdt-8-p col-md-8">
              Transform your manufacturing approach from static to intelligent
              with AI-powered industrial analytics. Propel operational
              efficiency by harnessing advanced analytics for real-time
              insights, optimizing production processes. Embrace the future of
              smart manufacturing, where AI-driven analytics drives innovation
              and agility in industrial operations.
            </p>
            <div className="view-btn">
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
            </div>
          </div>

        </section>
      </div>
      <section className="indrdt-section9 animation-bar">
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
              <a href="./expertiselanding" style={{ textDecoration: "none" }}>
                <h3 className="BACK-product-industires">Expertise</h3>
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
  );
}

export default Indredirect;
