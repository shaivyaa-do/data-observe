import React from "react";
import "./ProductLanding.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

import footerland from "../../assets/videos/footerland.mp4";

function ProductLanding() {
  const Navigate = useNavigate();

  const handleContactButtonClick = () => {
    const cmsLink =
      "https://dataobserve.myfreshworks.com/crm/sales/web_forms/3bb315e5ced066d76d0a5422db2d9724ded4938333d17e75ec4c1192ae934cf4/form.html";

    window.location.href = cmsLink;
  };

  const handleClick = () => {
    Navigate("/observability");
  };
  const insightsClick = () => {
    Navigate("/datainsights");
  };
  const chartsClick = () => {
    Navigate("/datacharts");
  };
  const monitorClick = () => {
    Navigate("/datamonitor");
  };
  const promptClick = () => {
    Navigate("/dataprompt");
  };

  return (
    <>
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
                  <h5 className="Products-Landing-02">Products</h5>
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

      <section>
        <div className="Landing-play-bg-video-Product">
          <video className="lANDING-VIdeo-Product" autoPlay loop muted>
            <source src={footerland} type="video/mp4" />
          </video>

          <div className="LANDING-1-science-Product container">
            <div className="">
              <div className="">
                <img src="./images/frame-logo.png" alt="frame-log0" />
                <h4 className="future-home-complete-Product">Products</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="container text-center productsandtools">
            <h3 className="container col-md-8 BOOST-Heading">
              Boost your AI journey with <br />
              our products, tools & accelerators.
            </h3>
            <p className="container col-md-9 emphasis-paragraph-home">
              Our emphasis lies in assisting you in charting the correct course
              of action, eliminating uncertainty, and progressing confidently by
              integrating the strengths of AI & analytics.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row box-product-landings">


            <div
              className="col-md-8 landing-Product-over-pad"
              onClick={handleClick}
            >
              <div className="products-cards-land">
                <h4 className="Product-land-360">DO360</h4>
                <p className="product-elevate-solution">
                  Data Observability Solution - Elevate Data Dependability
                </p>
              </div>
              <div className="overlay-product">
                <div className="Product-land-360degree">
                  <h5 className="main-do-360-product">DO360</h5>
                  <img
                    src="./images/arrow-upside.png"
                    alt="arrow"
                    className="arrow-upside"
                  />
                </div>
                <div className="Detect-resolve">
                  <h4>DETECT.</h4>
                  <h4>RESOLVE.</h4>
                  <h4>PREVENT.</h4>
                </div>
                <div>
                  <p className="depend-proDuct">
                    Data Observability Solution - Elevate Data Dependability
                  </p>
                </div>
              </div>
            </div>


            <div
              className="col-md-4 landing-Product-over-pad-02"
              onClick={insightsClick}
            >
              <div className="products-cards-land-01">
                <h4 className="product-land-doinsights">DO INSIGHTS</h4>
                <p className="PRODUCT-everyone">
                  Business Intelligence Tool built for everyone on your team
                </p>
              </div>
              <div className="overlay-product-small">
                <div className="Product-land-360degree-small">
                  <h5 className="main-do-360-product-small">DO INSIGHTS</h5>
                  <img
                    src="./images/arrow-upside.png"
                    alt="arrow"
                    className="arrow-upside"
                  />
                </div>
                <div className="Detect-resolve-small">
                  <h4>Simple.</h4>
                  <h4>Powerful.</h4>
                  <h4>Data Analysis.</h4>
                </div>
                <div>
                  <p className="depend-proDuct-small">
                    Business Intelligence Tool built for everyone on your team
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row box-product-landings" onClick={chartsClick}>
            <div className="col-md-4 landing-Product-over-pad-02">
              <div className="products-cards-land-01">
                <h4 className="product-land-doinsights">DO Charts</h4>
                <p className="PRODUCT-everyone">
                  A ready to use JavaScript Visual Library for your Business
                  Applications.
                </p>
              </div>
              <div className="overlay-product-small">
                <div className="Product-land-360degree-small">
                  <h5 className="main-do-360-product-small">DO Charts</h5>
                  <img
                    src="./images/arrow-upside.png"
                    alt="arrow"
                    className="arrow-upside"
                  />
                </div>
                <div className="Detect-resolve-small">
                  <h4>Visualize.</h4>
                  <h4>generate.</h4>
                  <h4>simulate.</h4>
                </div>
                <div>
                  <p className="depend-proDuct-small">
                    A ready to use JavaScript Visual Library for your Business
                    Applications.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-8 landing-Product-over-pad"
              onClick={monitorClick}
            >
              <div className="products-cards-land">
                <h4 className="Product-land-360">DO Monitoring</h4>
                <p className="product-elevate-solution">
                  Data Observability Solution - Elevate Data Dependability
                </p>
              </div>
              <div className="overlay-product">
                <div className="Product-land-360degree">
                  <h5 className="main-do-360-product">DO Monitoring</h5>
                  <img
                    src="./images/arrow-upside.png"
                    alt="arrow"
                    className="arrow-upside"
                  />
                </div>
                <div className="Detect-resolve">
                  <h4>The all-in-one,</h4>
                  <h4>solution that lets you</h4>
                  <h4>monitor anything</h4>
                </div>
                <div>
                  <p className="depend-proDuct">
                    Meet DO Monitor a single pane of glass view of your whole IT
                    infrastructure stack
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row box-product-landings">
            <div className="col-md-8 landing-Product-over-pad">
              <div className="products-cards-land">
                <h4 className="Product-land-360">DO LOS</h4>
                <p className="product-elevate-solution">
                  Loan Origination System (LOS) is a software that helps
                  financial institutions with the processing of loan
                  applications.
                </p>
              </div>
              <div className="overlay-product">
                <div className="Product-land-360degree">
                  <h5 className="main-do-360-product">DO LOS</h5>
                  <img
                    src="./images/arrow-upside.png"
                    alt="arrow"
                    className="arrow-upside"
                  />
                </div>
                <div className="Detect-resolve">
                  <h4>Banks.</h4>
                  <h4>NBFCs.</h4>
                  <h4>DSAs.</h4>
                </div>
                <div>
                  <p className="depend-proDuct">
                    Loan Origination System (LOS) is a software that helps
                    financial institutions with the processing of loan
                    applications.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-4 landing-Product-over-pad-02"
              onClick={promptClick}
            >
              <div className="products-cards-land-01">
                <h4 className="product-land-doinsights">DO Prompts</h4>
                <p className="PRODUCT-everyone">
                  BGet ahead in Generative AI with an advanced prompt
                  engineering platform for teams
                </p>
              </div>
              <div className="overlay-product-small">
                <div className="Product-land-360degree-small">
                  <h5 className="main-do-360-product-small">DO Prompts</h5>
                  <img
                    src="./images/arrow-upside.png"
                    alt="arrow"
                    className="arrow-upside"
                  />
                </div>
                <div className="Detect-resolve-small">
                  <h4>create.</h4>
                  <h4>test.</h4>
                  <h4>Modify.</h4>
                </div>
                <div>
                  <p className="depend-proDuct-small">
                    Get ahead in Generative AI with an advanced prompt
                    engineering platform for teams
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fivth-section">
        <div>
          <div>
            <h4 className="data-inte-jo">
              Want to know more about DO Products?
            </h4>
          </div>

          <div className="container  recheck-demo">
            <div className="row REQUEST-Demo">
              <div className="col-md-6 check-Out-360">
                <p className="improve-pipelines">
                  Discover how DO 360 can improve your data pipelines and
                  monitoring. Try it with your own data in your own environment
                  for a personalized experience.
                </p>

                <button className="custom-button">
                  <i class="fa fa-play-circle play-video-home-1"></i>
                  <span>
                    Checkout DO<span style={{ fontWeight: "700" }}>360</span>
                  </span>
                  <i
                    class="fa fa-angle-right home-angle"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
              <div className="col-md-6 check-Out-360">
                <p className="improve-pipelines">
                  Speak one-on-one with a DataObserve expert and get a
                  personalized demo of DataObserve Data Intelligence Platform.
                </p>

                <button className="custom-button">
                  {/* <i class="fa fa-play-circle play-video-home"></i> */}
                  <span>Request a free demo a Demo</span>
                  <i
                    class="fa fa-angle-right home-angle"
                    aria-hidden="true"
                  ></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
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
              <a href="./industrielanding" style={{ textDecoration: "none" }}>
                <h3 className="BACK-product-industires">Industries</h3>
              </a>
              <i
                class="fa fa-angle-right home-angle-Product-color"
                aria-hidden="true"
              ></i>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductLanding;
