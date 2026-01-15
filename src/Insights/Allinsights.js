import React ,{ useState} from"react";
import "./Allinsights.css";
import Navbar from "../products/Navbar";
import allinsights from "../../src/videos/allinsights-banner.MOV";
import { Link } from "react-router-dom";
import Footer from "../products/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BlogsCarousel } from "../components/carousel/BlogCarousel";
import Modal from "../components/modal/Modal";
import BlogJson from './insightsJsons/blogs.json';
import AllBlogsModalContent from "./AllBlogsModal";
// import { useSection } from './SectionContext';
import { useKeenSlider } from 'keen-slider/react';


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

function Allinsights() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

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




  const [sliderRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 100px)": {
        slides: { perView: 1, spacing: 2 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
    
  })





  return (
    <div>
      <Navbar />

      <section>
        <div className="All-insights-Main">
          <video className="company-play-bg-video" autoPlay loop muted>
            <source src={allinsights} type="video/mp4" />
          </video>

          <div className="body-science-1">
            <p className="journey-1">
              <p className="col-md-6 Journey-Head"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  letterSpacing: "1px",
                }}
              >
                Insights
              </p>
              <p className="col-md-6 our-story-1">
                Discover exclusive insights
             with a sneak peek behind
                the scenes.
              </p>
              <p className="col-md-6 our-story-1">
                Uncover valuable knowledge
               about DataObserve that sets
              
                us apart.
              </p>
            </p>
            <button className="ALL-insigts-button"
              style={{
                display: "flex",
                height: "61px",
                maxWidth: "255px",
                padding: "20px 46px 21px 48px",
                justifyContent: "center",
                alignItems: "center",
                border: "none",
                marginTop: "50px",
                borderRadius: "5px",
                marginLeft: "10%",
              }}
            >
              <span className="ALL-insight-button-text"
                style={{
                  color: "#0046E8",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "600",
                  lineHeight: "19px",
                }}
              >
                Get a demo
              </span>{" "}
            </button>
          </div>
        </div>
      </section>
      {/* case studies */}
      <section className="All-insights-back-ground section" id="casestudies">
        <div className="container-fluid">
          <div>
            <h3 className="case-study-insights">case studies</h3>
          </div>

          <div>
            <div className="container-fluid">
              <div>
                <Slider {...settings}>
                  <div>
                    <Link to="/casestudies" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-blog">
                            Enhanced data management for a fintech firm using
                            Snowflake
                          </p>
                        </div>
                        <div className="d-flex">
                          <div>
                            <img
                              src="./images/snowflake-aws.png"
                              alt="recent-1"
                              className="w-100 case-study-image snow-flake-width"
                            />
                          </div>
                          <div>
                            <img
                              src="./images/aws-casestudy.png"
                              alt="recent-1"
                              className="w-100 case-study-image-1"
                            />
                          </div>
                        </div>
                        <div>
                          <p className="hide-text">
                            Our client is a financial firm. We revolutionized
                            their data management with Snowflake's cloud
                            platform integration. This offered them consolidated
                            data sources, real-time analytics and
                            scalability....
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">Fintech</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-blog">
                            Maximizing manufacturing efficiency with
                            data engineering
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/manfacture-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                           Coming Soon
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">Manufacturing</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-cloud">
                          Empoering a fashion e-commerce brand with advanced HR analytics

                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/empower-casestudy.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                           Coming Soon
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">E-Commerce</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* case studies end */}

      {/* //top 10 insights */}
      {/* <section className="All-insights-back-ground" id="top10insights">
        <div className="container-fluid">
          <div>
            <h3 className="case-study-insights">Top 10 Insights</h3>
          </div>

          <div>
            <div className="container-fluid">
              <div>
                <Slider {...settings}>
                  <div className="d-flex">
                    <div>
                      <img
                        src="./images/insights-one.png"
                        alt="one"
                        height={100}
                      />
                    </div>
                    <div>
                      <Link to="#" className="insights-main">
                        <div className="card myDIV">
                          <div>
                            <p className="insights-paragraph-future-blog">
                              Enhanced data management for a fintech firm using
                              Snowflake
                            </p>
                          </div>
                          <div>
                            <img
                              src="./images/top10-insights.png"
                              alt="recent-1"
                              className="w-100 case-study-image"
                            />
                          </div>
                          <div>
                            <p className="hide-text">
                              The practice of data engineering in digital
                              product engineering, involving data collection,
                              transformation, and organization for analysis, is
                              on the brink of a major revolution thanks to the
                              emergence of Generative Artificial Intelligence
                              (Gen AI)....
                              <span className="read-more-insights">
                                Read more
                              </span>{" "}
                            </p>
                          </div>

                          <div className="card-body">
                            <h6 className="rvs-praveen">Posted by D.O Team</h6>
                            <div className="d-flex domain-share">
                              <div className="domain-insigts">
                                <p className="domain">Domain</p>
                              </div>
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>

                  <div className="d-flex">
                    <div>
                      <img
                        className="insights-two-number"
                        src="./images/insights-two.png"
                        alt="one"
                        height={100}
                      />
                    </div>
                    <div>
                      <Link to="#" className="insights-main">
                        <div className="card myDIV">
                          <div>
                            <p className="insights-paragraph-future-blog">
                              Enhanced data management for a fintech firm using
                              Snowflake
                            </p>
                          </div>
                          <div className="d-flex">
                            <div>
                              <img
                                src="./images/snowflake-aws.png"
                                alt="recent-1"
                                className="w-100 case-study-image snow-flake-width-1"
                              />
                            </div>

                            <div>
                              <img
                                src="./images/aws-casestudy.png"
                                alt="recent-1"
                                className="w-100 case-study-image-1"
                              />
                            </div>
                          </div>
                          <div>
                            <p className="hide-text">
                           Coming Soon
                              <span className="read-more-insights">
                                Read more
                              </span>{" "}
                            </p>
                          </div>

                          <div className="card-body">
                            <h6 className="rvs-praveen">Posted by D.O Team</h6>
                            <div className="d-flex domain-share">
                              <div className="domain-insigts">
                                <p className="domain">Domain</p>
                              </div>
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div>
                      <img
                        className="insights-two-number"
                        src="./images/insights-three.png"
                        alt="one"
                        height={100}
                      />
                    </div>
                    <div>
                      <Link to="#" className="insights-main">
                        <div className="card myDIV">
                          <div>
                            <p className="insights-paragraph-future">
                              AWS FOR APPLICATION MODERNIZATION: UPDATING YOUR
                              LEGACY SYSTEMS FOR THE CLOUD
                            </p>
                          </div>
                          <div>
                            <img
                              src="./images/top3-insights.png"
                              alt="recent-1"
                              className="w-100 case-study-image"
                            />
                          </div>
                          <div>
                            <p className="hide-text">
                           Coming Soon
                              <span className="read-more-insights">
                                Read more
                              </span>{" "}
                            </p>
                          </div>

                          <div className="card-body">
                            <h6 className="rvs-praveen">Posted by D.O Team</h6>
                            <div className="d-flex domain-share">
                              <div className="domain-insigts">
                                <p className="domain">Domain</p>
                              </div>
                              <div>
                                <img
                                  className="share"
                                  src="./images/share.png"
                                  alt="like"
                                  width={28}
                                  height={28}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-blog">
                           Coming Soon
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/Coming-Soon.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                         Coming Soon
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-blog">
                            Coming-Soon
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/Coming-Soon.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Coming Soon
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-blog">
                            Coming-Soon
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/Coming-Soon.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Coming Soon
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">Domain</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* //top 10 insights close */}

      {/* blog and articles */}
      <section className="All-insights-back-ground keen-slider" id="blogs" ref={sliderRef}>
        <div className="container-fluid">
          <div>
            <h3 className="case-study-insights">
              Blogs {!isHovered ?
                <span onMouseEnter={() => setIsHovered(true)}>
                  <img src="/images/doubleArrow.png" alt="doublearrow" height="15px" />
                </span> :
                <span style={{ fontSize: '12px', cursor: 'pointer' }} onClick={() => setIsModalOpen(true)} onMouseLeave={() => setIsHovered(false)}>
                  View all
                  <img src="/images/doubleArrow.png" alt="doublearrow" height="15px" />
                </span>}
            </h3>



          </div>
          <div>
            <div className="container-fluid">
              <div>
                <BlogsCarousel BlogJson={BlogJson} />
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                  <AllBlogsModalContent BlogJson={BlogJson} closeModal={closeModal} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* blog and articles close */}

      {/* ebooks and whitepapers */}
      <section className="All-insights-back-ground" id="ebooks">
        <div className="container-fluid">
          <div>
            <h3 className="case-study-insights">Ebook & Whitepapers</h3>
          </div>

          <div>
            <div className="container-fluid">
              <div>
                <Slider {...settings}>
                  <div>
                    <Link to="/ebooks" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            AWS FOR APPLICATION MODERNIZATION: UPDATING YOUR
                            LEGACY SYSTEMS FOR THE CLOUD
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/ebook-aws-1.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Are outdated legacy systems hindering your
                            business’s growth? Don’t wait any longer to m...
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">Cloud Migration"</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future">
                            Why is it important to understand application
                            modernization more than ever?
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/ebook-important-2.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Coming Soon
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">Application modernization</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link to="#" className="insights-main">
                      <div className="card myDIV">
                        <div>
                          <p className="insights-paragraph-future-blog">
                            Enhance your software development process with
                            DevOps
                          </p>
                        </div>
                        <div>
                          <img
                            src="./images/ebook-enhance-3.png"
                            alt="recent-1"
                            className="w-100 case-study-image"
                          />
                        </div>
                        <div>
                          <p className="hide-text">
                            Coming Soon
                            <span className="read-more-insights">
                              Read more
                            </span>{" "}
                          </p>
                        </div>

                        <div className="card-body">
                          <h6 className="rvs-praveen">Posted by D.O Team</h6>
                          <div className="d-flex domain-share">
                            <div className="domain-insigts">
                              <p className="domain">DevOps</p>
                            </div>
                            <div>
                              <img
                                className="share"
                                src="./images/share.png"
                                alt="like"
                                width={28}
                                height={28}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
              
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ebooks close */}
    </div>
  );
              }

export default Allinsights;
