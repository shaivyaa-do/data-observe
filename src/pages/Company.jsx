import React from "react";
import "./Company.css";
import Navbar from "../components/Layout/Navbar";
import companyvideo from "../assets/videos/aboutus-vid.mp4";
import Footer from "../components/Layout/Footer";

function company() {
  return (
    <div>
      <Navbar />

      <div className="company-play-bg-video">
        <video className="COMPANY-VIdeo" autoPlay loop muted>
          <source src={companyvideo} type="video/mp4" />
        </video>

        <div className="body-science">
          <p className="journey">
            <p className="about-Company"
              style={{
                fontWeight: "600",
                fontSize: "20px",
                letterSpacing: "1px",
              }}
            >
              About Us
            </p>
            <span className="our-story">Our Story </span>
            <p className="col-md-6 Navigate-Journey">
              Navigating your journey
              from insights to value
              realization
            </p>

          </p>
        </div>
      </div>

      <div className="container home-company-ourstory">
        <h6 className="color-black">
          Home<span className="home-color">/</span> Company
          <span className="home-color">/</span> Our Story
        </h6>
      </div>
      <div
        className="container ourstory-heading-Main"
        style={{
          color: "#2B2B2B",
          fontSize: 47,
          fontFamily: "Poppins",
          fontWeight: 400,
        }}
      >
        We’re a data science solutions provider
      </div>
      <section>
        <div className="container">
          <div className="row marathon-overall-top">
            <div className="col-md-4">
              <img
                className="data-science"
                src="./images/data-science.png"
                alt="datascience"
              />
            </div>
            <div className="col-md-8">
              <div className="marathon">
                <p className="marathon-1">
                  Much like a marathon, the last mile presents the toughest
                  challenge. It's the phase where enterprises frequently
                  stumble, losing the motivation and energy needed to go beyond
                  data analytics for mere insights and convert it into tangible
                  value. This is where we recognized an opportunity to close the
                  gap by converting data into actionable insights and putting
                  them into practice, thereby generating substantial and
                  measurable business results.
                </p>
                <br />
                <p className="marathon-2">
                  Our core objective is to bridge the gap between providing
                  insights and realizing concrete value. We work in close
                  partnership with our clients to help them conquer the ultimate
                  challenges in the realm of analytics. This philosophy drives
                  our network to go beyond conventional boundaries, inspiring
                  our clients to reevaluate their limitations and surpass what
                  they once considered 'impossible'.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="how-we-do-this-Main">
        <div className="cult-page">
          <div className="container">
            <h4 className="how-we-text">How we do this</h4>
            <div className="row">
              <div className="col-md-6">
                <li className="d-flex">
                  <div>
                    <img
                      className="one-number"
                      src="./images/one.png"
                      alt="one"
                    />
                  </div>
                  <p className="cultivate">
                    Nurturing an in-depth comprehension of both data intricacies
                    and the industry-specific obstacles that CXOs encounter, and
                    crafting comprehensive strategies and solutions to tackle
                    the final, most challenging phase of analytics.
                  </p>
                </li>
                <li className="d-flex">
                  <div>
                    <img
                      className="one-number"
                      src="./images/two.png"
                      alt="one"
                    />
                  </div>
                  <p className="cultivate">
                    Adopting a vertical-first strategy, fueled by our commitment
                    to excellence, to empower clients to remain at the forefront
                    and confront market disruptions with confidence.
                  </p>
                </li>
                <li className="d-flex">
                  <div>
                    <img
                      className="one-number"
                      src="./images/three.png"
                      alt="one"
                    />
                  </div>
                  <p className="cultivate">
                    Harnessing our extensive partner network that complements
                    our initiatives and promoting collaborative innovation to
                    assist clients in achieving swift value realization from
                    their investments in analytics.
                  </p>
                </li>
                <li className="d-flex">
                  <div>
                    <img
                      className="one-number"
                      src="./images/four.png"
                      alt="one"
                    />
                  </div>
                  <p className="cultivate">
                    Unleashing the potential of AI/ML within our exclusive
                    accelerators and solutions via DataObserve Studio & Lab—an
                    invaluable resource that amplifies enterprises' ability to
                    swiftly realize value.
                  </p>
                </li>
              </div>

              <div className="col-md-6">
                <img className="how-we" src="./images/how-we.png" alt="how" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container ourpurpose-body">
          <div className="row">
            <div className="col-md-4 our-card-boder">
              <div class="card our-card" style={{ width: "19.5rem" }}>
                <div class="card-body About-Purpose">
                  <img
                    className="target"
                    src="./images/target.png"
                    alt="target"
                    width={100}
                  />
                  <h6 class="card-subtitle   our-purpose-1">
                    Our purpose
                  </h6>
                  <p class="card-text empower-para">
                    Empowering decisions that lead our clients to victory.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 our-card-boder">
              <div class="card our-card" style={{ width: "19.5rem" }}>
                <div class="card-body About-Purpose">
                  <img
                    className="target"
                    src="./images/vision.png"
                    alt="target"
                    width={100}
                  />
                  <h6 class="card-subtitle  our-purpose-1">
                    Our vision
                  </h6>
                  <p class="card-text empower-para">
                    To achieve the status of the world's most essential
                    analytics partner.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 our-card-boder">
              <div class="card our-card" style={{ width: "19.5rem" }}>
                <div class="card-body About-Purpose">
                  <img
                    className="target"
                    src="./images/eye.png"
                    alt="target"
                    width={100}
                  />
                  <h6 class="card-subtitle  our-purpose-1">
                    ACE framework
                  </h6>
                  <p class="card-text empower-para">
                    We operate with integrity and trust, embrace a relaxed and
                    enjoyable approach, foster warmth, and have a good time
                    along the way.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="global-data-customer-background">
          <div className="container everyperson-data">
            <div className="row">
              <div className="col-md-6">
                <li className="d-flex">
                  <div>
                    <img
                      className="data-science-image"
                      src="./images/data-scientist.png"
                      alt="one"
                      width={100}
                    />
                  </div>
                  <div className="global-left-customers">
                    <h4 className="global-data-company">Data Scientists</h4>
                    <p className="data-science-paragraph">
                      Every person at DataObserve brings their whole self to
                      work and helps us create a culture of curiosity and
                      innovation
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <div>
                    <img
                      className="data-science-image"
                      src="./images/global-delivery.png"
                      alt="one"
                      width={100}
                    />
                  </div>
                  <div className="global-left-customers">
                    <h4 className="global-data-company">Global Delivery Centres</h4>
                    <p className="data-science-paragraph">
                      Ready to Enable user-driven analytics for some of the
                      world’s largest Fortune 50 companies
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <div>
                    <img
                      className="data-science-image"
                      src="./images/global-customer.png"
                      alt="one"
                      width={100}
                    />
                  </div>
                  <div className="global-left-customers">
                    <h4 className="global-data-company">Global Customers</h4>
                    <p className="data-science-paragraph">
                      Trust us to help them create sustainable impact by
                      systematizing the last mile adoption of analytics
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <div>
                    <img
                      className="data-science-image"
                      src="./images/global-message.png"
                      alt="one"
                      width={100}
                    />
                  </div>
                  <div className="global-left-customers">
                    <h4 className="global-data-company">
                      Unprecedented operational excellence
                    </h4>
                    <p className="data-science-paragraph">
                      with AI and self-service to solve complex problems across
                      the enterprise value chain
                    </p>
                  </div>
                </li>
                <li className="d-flex">
                  <div>
                    <img
                      className="data-science-image"
                      src="./images/global-computer.png"
                      alt="one"
                      width={100}
                    />
                  </div>
                  <div className="global-left-customers">
                    <h4 className="global-data-company">
                      One enterprise AI Studio & Labs
                    </h4>
                    <p className="data-science-paragraph">
                      offering a co-innovation platform and marketplacefor AI
                      and advanced analytics solutions to move innovation from
                      experimentation to value realization
                    </p>
                  </div>
                </li>
              </div>

              <div className="col-md-6">
                <img
                  className="how-we"
                  src="./images/datascientist.png"
                  alt="how"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default company;
