import React, { useState, useEffect } from "react";
import Navbar from "../../../components/Layout/Navbar";
import "./Genai.css";
import Faq from "../../../components/Common/Faq";
import Footer from "../../../components/Layout/Footer";
import { Link } from "react-router-dom";
import Talktous from "../../../components/Common/Talktous";

// import genai from "../../../assets/videos/genaivdbg.mp4";
import Slider from "react-slick";

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

function Genai() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    // nextArrow: <Arrow />,
    // prevArrow: <Arrow />,

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

  return (
    <div>
      <Navbar />
      <div className="genaibg">
        <video className="genai-transform-video" autoPlay loop muted>
          <source src="https://storage.googleapis.com/do-website-resources/genaivdbg.mp4" type="video/mp4" />
        </video>
        <div
          className="GenAI-DO"
          style={{
            display: "inline-flex",

            flexDirection: "column",
            alignItems: "flex-start",
            position: "absolute",
            top: "234px",
            right: "0%",
            left: "21%",
            paddingLeft: "31%",
          }}
        >
          <h4
            className="GENAI-HEADing"
            style={{
              color: "white",
              fontSize: "45px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "45px",
            }}
          >
            Generative AI Consulting <br />
            Services
          </h4>
          <p className="text-muted" style={{ fontSize: "22px" }}>
            Ignite your business with AI's creative spark
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "30px",
          alignItems: "center",
        }}
      >
        <h4
          className="GenAI-Redefine"
          style={{ textAlign: "center", fontWeight: 700, fontSize: "35px" }}
        >
          Redefine what’s possible for your business with <br />
          Generative AI technology
        </h4>
        <p
          className="container col-md-9 Genai-pioneer"
          style={{
            textAlign: "center",
            marginTop: "10px",

            fontSize: "18px",
          }}
        >
          Pioneering the frontier of AI innovation, generative AI harnesses
          cutting-edge methodologies, including transformers, reinforcement
          learning, flow-based models, and autoregressive models, to craft
          AI-generated models and applications. At DataObserve, a leading
          generative AI firm, we boast a team of expert AI professionals
          dedicated to assisting businesses in realizing their objectives
          through the power of generative AI solutions.
        </p>
      </div>

      <div className="cloudcards1 d-md-block d-none">
        <div class="ccdiv1">
          <div className="cloudimgcard1">
            <img className="notrepimg" src="/images/ccon.png" alt="" />
            <div className="cloudcard1 card">
              <h1 className="cloudcardheading1">Generative AI consulting</h1>
              <p className="cloudcardpara1 mb-0">
                Our expert team discerns chances for seamlessly incorporating
                generative AI into your current business operations and
                products. We offer tailored solutions designed to meet your
                precise requirements, encompassing data preparation and
                modeling, algorithm creation and integration, along with
                continuous support and maintenance.
              </p>
            </div>
          </div>
          <div className="cloudimgcard1">
            <img className="notrepimg" src="/images/cmig.png" alt="" />
            <div className="cloudcard1 card">
              <h1 className="cloudcardheading1">Generative AI strategy</h1>
              <p className="cloudcardpara1 mb-0">
                Our team offers comprehensive services for model integration and
                deployment, covering everything from data preparation and
                modeling, performance optimization, to algorithm development and
                implementation, along with continuous support and maintenance.
                These services are designed to ensure the successful deployment
                of generative AI models within your business operations.
              </p>
            </div>
          </div>
          <div className="cloudimgcard1">
            <img className="notrepimg" src="/images/ccop.png" alt="" />
            <div className="cloudcard1 card">
              <h1 className="cloudcardheading1">
                Generative AI ApplicationDevelopment
              </h1>
              <p className="cloudcardpara1 mb-0">
                Our team offers comprehensive services for model integration and
                deployment, covering everything from data preparation and
                modeling, performance optimization, to algorithm development and
                implementation, along with continuous support and maintenance.
                These services are designed to ensure the successful deployment
                of generative AI models within your business operations.
              </p>
            </div>
          </div>
          <div className="cloudimgcard1">
            <img className="notrepimg" src="/images/cops.png" alt="" />
            <div className="cloudcard1 card">
              <h1 className="cloudcardheading1">
                Generative AI model replication
              </h1>
              <p className="cloudcardpara1 mb-0">
                Our team offers comprehensive services for model integration and
                deployment, covering everything from data preparation and
                modeling, performance optimization, to algorithm development and
                implementation, along with continuous support and maintenance.
                These services are designed to ensure the successful deployment
                of generative AI models within your business operations.
              </p>
            </div>
          </div>
          <div className="cloudimgcard1">
            <img className="notrepimg" src="/images/inas.png" alt="" />
            <div className="cloudcard1 card">
              <h1 className="cloudcardheading1">
                Model Integration & Deployment
              </h1>
              <p className="cloudcardpara1 mb-0">
                Our team offers comprehensive services for model integration and
                deployment, covering everything from data preparation and
                modeling, performance optimization, to algorithm development and
                implementation, along with continuous support and maintenance.
                These services are designed to ensure the successful deployment
                of generative AI models within your business operations.
              </p>
            </div>
          </div>
          <div className="cloudimgcard1">
            <img className="notrepimg" src="/images/rtct-genai.png" alt="" />
            <div className="cloudcard1 card">
              <h1 className="cloudcardheading1">Fine Tuning LLMs</h1>
              <p className="cloudcardpara1 mb-0">
                Our experts employ prompt engineering, selecting suitable
                pretrained models and enhancing their performance through
                transfer learning, data augmentation, gradient descent, and
                hyperparameter tuning. Rigorous data curation, precise
                instructions, and performance evaluations guarantee the efficacy
                of LLMs for your specific tasks.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="d-block d-md-none">
        <section>
          <div className="container">
            <div>
              <Slider {...settings}>
                <div className="cloudimgcard1">
                  <img className="notrepimg" src="/images/ccon.png" alt="" />
                  <div className="cloudcard1 card">
                    <h1 className="cloudcardheading1">
                      Generative AI consulting
                    </h1>
                    <p className="cloudcardpara1 mb-0">
                      Our expert team discerns chances for seamlessly
                      incorporating generative AI into your current business
                      operations and products. We offer tailored solutions
                      designed to meet your precise requirements, encompassing
                      data preparation and modeling, algorithm creation and
                      integration, along with continuous support and
                      maintenance.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard1">
                  <img className="notrepimg" src="/images/cmig.png" alt="" />
                  <div className="cloudcard1 card">
                    <h1 className="cloudcardheading1">
                      Generative AI strategy
                    </h1>
                    <p className="cloudcardpara1 mb-0">
                      Our team offers comprehensive services for model
                      integration and deployment, covering everything from data
                      preparation and modeling, performance optimization, to
                      algorithm development and implementation, along with
                      continuous support and maintenance. These services are
                      designed to ensure the successful deployment of generative
                      AI models within your business operations.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard1">
                  <img className="notrepimg" src="/images/ccop.png" alt="" />
                  <div className="cloudcard1 card">
                    <h1 className="cloudcardheading1">
                      Generative AI ApplicationDevelopment
                    </h1>
                    <p className="cloudcardpara1 mb-0">
                      Our team offers comprehensive services for model
                      integration and deployment, covering everything from data
                      preparation and modeling, performance optimization, to
                      algorithm development and implementation, along with
                      continuous support and maintenance. These services are
                      designed to ensure the successful deployment of generative
                      AI models within your business operations.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard1">
                  <img className="notrepimg" src="/images/cops.png" alt="" />
                  <div className="cloudcard1 card">
                    <h1 className="cloudcardheading1">
                      Generative AI model replication
                    </h1>
                    <p className="cloudcardpara1 mb-0">
                      Our team offers comprehensive services for model
                      integration and deployment, covering everything from data
                      preparation and modeling, performance optimization, to
                      algorithm development and implementation, along with
                      continuous support and maintenance. These services are
                      designed to ensure the successful deployment of generative
                      AI models within your business operations.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard1">
                  <img className="notrepimg" src="/images/inas.png" alt="" />
                  <div className="cloudcard1 card">
                    <h1 className="cloudcardheading1">
                      Model Integration & Deployment
                    </h1>
                    <p className="cloudcardpara1 mb-0">
                      Our team offers comprehensive services for model
                      integration and deployment, covering everything from data
                      preparation and modeling, performance optimization, to
                      algorithm development and implementation, along with
                      continuous support and maintenance. These services are
                      designed to ensure the successful deployment of generative
                      AI models within your business operations.
                    </p>
                  </div>
                </div>
                <div className="cloudimgcard1">
                  <img
                    className="notrepimg"
                    src="/images/rtct-genai.png"
                    alt=""
                  />
                  <div className="cloudcard1 card">
                    <h1 className="cloudcardheading1">Fine Tuning LLMs</h1>
                    <p className="cloudcardpara1 mb-0">
                      Our experts employ prompt engineering, selecting suitable
                      pretrained models and enhancing their performance through
                      transfer learning, data augmentation, gradient descent,
                      and hyperparameter tuning. Rigorous data curation, precise
                      instructions, and performance evaluations guarantee the
                      efficacy of LLMs for your specific tasks.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </div>

      <div className="row generativeAI">
        <h3 className="col-md-8 businessachive-genai">
          Make your business achieve more using generative AI now
        </h3>
        <a href="/contact" style={{ textDecoration: "none" }}>
          <button className="col-md-4 btn-genai">
            <p className="btn-text genai-point">
              Let's Get The
              <br />
              Ball Rolling
            </p>
            <i
              class="fa fa-arrow-circle-o-right"
              style={{ color: "blue", marginLeft: "5px", fontSize: "20px" }}
              aria-hidden="true"
            ></i>
          </button>
        </a>
      </div>
      <div className="container mt-5">
        <h2 className="genai-AI-Application">Generative AI Applications</h2>
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Task</th>
              <th scope="col">Description</th>
              <th scope="col">Model</th>
            </tr>
          </thead>
          <tbody style={{ fontSize: "15px" }}>
            <tr>
              <td>Text classification</td>
              <td>Assigns labels to a given text sequence</td>
              <td>NLP</td>
            </tr>
            <tr>
              <td>Text generation</td>
              <td>Generates text based on a provided prompt</td>
              <td>NLP</td>
            </tr>
            <tr>
              <td>Summarization</td>
              <td>Generates a summary of a text or document</td>
              <td>NLP</td>
            </tr>
            <tr>
              <td>Image classification</td>
              <td>Labels an image with appropriate categories</td>
              <td>Computer vision</td>
            </tr>
            <tr>
              <td>Image segmentation</td>
              <td>
                Labels each pixel in an image (supports semantic, panoptic, and
                instance segmentation)
              </td>
              <td>Computer vision</td>
            </tr>
            <tr>
              <td>Object detection</td>
              <td>
                Predicts bounding boxes and classes of objects in an image
              </td>
              <td>Computer vision</td>
            </tr>
            <tr>
              <td>Audio classification</td>
              <td>Assigns labels to audio data</td>
              <td>Audio</td>
            </tr>
            <tr>
              <td>Automatic speech recognition</td>
              <td>Converts speech into written text</td>
              <td>Audio</td>
            </tr>
            <tr>
              <td>Visual question answering</td>
              <td>
                Answers questions about an image given the image and a question
              </td>
              <td>Multimodal</td>
            </tr>
            <tr>
              <td>Document question answering</td>
              <td>
                Answers questions about a document given an image and a question
              </td>
              <td>Multimodal</td>
            </tr>
            <tr>
              <td>Image captioning</td>
              <td>Generates a caption for a given image</td>
              <td>Multimodal</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        class="container card"
        style={{
          maxWidth: "100%",
          marginTop: "50px",
          border: "none",
          background: "#F8F8F8",
        }}
      >
        <div className="container">
          <div class="row no-gutters-genai">
            <div
              class="col-md-6"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src="/images/generativeaibg.png" class="card-img" alt="..." />
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title generative-genai1">
                  Generative AI
                  <br /> opportunity assessment
                </h5>
                <p class="card-text para-genai">
                  Our AI specialists harness a wide array of models, including
                  text, vision, audio, multimodal, reinforcement learning,
                  time-series, and graph models to cater to your needs. To
                  pinpoint the perfect Large Language Model (LLM), create and
                  execute code, and achieve your business goals, we provide a
                  comprehensive generative AI opportunity assessment.
                </p>
                <li className="para-genai">
                  <i
                    class="fa fa-angle-double-right"
                    style={{ color: "blue", marginTop: "3px" }}
                    aria-hidden="true"
                  >
                    {" "}
                  </i>
                  <p style={{ marginLeft: "5px" }}>
                    Stakeholder Interviews: Understanding and Prioritizing
                    Generative AI Opportunities
                  </p>
                </li>
                <li className="para-genai">
                  <i
                    class="fa fa-angle-double-right"
                    style={{ color: "blue", marginTop: "3px" }}
                    aria-hidden="true"
                  ></i>{" "}
                  <p style={{ marginLeft: "5px" }}>
                    Identifying the Optimal Use Cases .
                  </p>
                </li>
                <li className="para-genai">
                  <i
                    class="fa fa-angle-double-right"
                    style={{ color: "blue", marginTop: "3px" }}
                    aria-hidden="true"
                  ></i>
                  <p style={{ marginLeft: "5px" }}>
                    Determining the Right Approach for Fine-Tuning or Training
                    Domain-Specific LLMs
                  </p>
                </li>
                <li className="para-genai">
                  <i
                    class="fa fa-angle-double-right"
                    style={{ color: "blue", marginTop: "3px" }}
                    aria-hidden="true"
                  ></i>
                  <p style={{ marginLeft: "5px" }}>
                    {" "}
                    Selecting the Appropriate Tools
                  </p>
                </li>
                <li className="para-genai">
                  <i
                    class="fa fa-angle-double-right"
                    style={{ color: "blue", marginTop: "3px" }}
                    aria-hidden="true"
                  ></i>
                  <p style={{ marginLeft: "5px" }}>
                    Implementing the Relevant Generative AI Solutions
                  </p>
                </li>
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="row generativeAI">
        <h3 className="col-md-8 businessachive-genai">
          Discover the power of generative AI to reduce turnaround time
        </h3>
        <a href="/contact" style={{ textDecoration: "none" }}>
          <button className="col-md-4 btn-genai">
            <span className="btn-text genai-point">
              Let's Get The
              <br /> Ball Rolling
            </span>
            <i
              class="fa fa-arrow-circle-o-right"
              style={{ color: "blue", marginLeft: "5px", fontSize: "20px" }}
              aria-hidden="true"
            ></i>
          </button>
        </a>
      </div>
      <div style={{ background: "#F8F8F8" }}>
        <div className="container">
          <h2 className="unleash-gen-ai">
            Unleash the limitless possibilities of generative AI for your
            business
          </h2>
          <div class="row" style={{ marginTop: "2rem" }}>
            <div class="col-md-3" style={{ background: "#F8F8F8" }}>
              <div
                class="nav flex-column nav-pills"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <a
                  class="nav-link active healthcare-genai"
                  id="v-pills-home-tab"
                  data-toggle="pill"
                  href="#v-pills-home"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  Healthcare
                </a>
                <a
                  class="nav-link healthcare-genai"
                  id="v-pills-profile-tab"
                  data-toggle="pill"
                  href="#v-pills-profile"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  Manufacturing
                </a>
                <a
                  class="nav-link healthcare-genai"
                  id="v-pills-messages-tab"
                  data-toggle="pill"
                  href="#v-pills-messages"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  Retail
                </a>
                <a
                  class="nav-link healthcare-genai"
                  id="v-pills-settings-tab"
                  data-toggle="pill"
                  href="#v-pills-settings"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  Supply Chain & Logistics
                </a>
                <a
                  class="nav-link healthcare-genai"
                  id="v-pills-bank-tab"
                  data-toggle="pill"
                  href="#v-pills-bank"
                  role="tab"
                  aria-controls="v-pills-bank"
                  aria-selected="false"
                >
                  Banking & Finance
                </a>
                <a
                  class="nav-link healthcare-genai"
                  id="v-pills-insurance-tab"
                  data-toggle="pill"
                  href="#v-pills-insurance"
                  role="tab"
                  aria-controls="v-pills-insurance"
                  aria-selected="false"
                >
                  Insurance
                </a>
              </div>
            </div>
            <div class="col-md-9">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <h3 className="genai-Healthcare">
                    Generative AI for healthcare industry
                  </h3>
                  <p className="genai-Health-Para">
                    Our generative AI consulting services help healthcare
                    providers enhance patient care and streamline operations. We
                    use machine learning and natural language processing to
                    analyze medical data and provide personalized treatment
                    recommendations. Our generative AI solutions for the
                    healthcare industry optimize processes and improve patient
                    outcomes through:
                  </p>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Diagnosis and treatment recommendation generation
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Patient monitoring and predictive analytics
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Medical image analysis and interpretation
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Healthcare fraud detection and prevention
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      {" "}
                      Drug discovery and development
                    </p>
                  </li>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <h3 className="genai-Healthcare">
                    Generative AI for manufacturing industry
                  </h3>
                  <p className="genai-Health-Para">
                    Our generative AI consulting services empower manufacturers to elevate product design, minimize waste, and optimize production procedures. We harness machine learning algorithms and generative design to streamline product development and expedite time-to-market. Our generative AI solutions for the manufacturing sector assist companies in data-informed decision-making and operational efficiency enhancements by:
                  </p>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      {" "}
                      Employing generative design for product development and optimization
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Utilizing machine learning to optimize manufacturing processes
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Reducing waste and optimizing material usage
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Implementing real-time quality control and defect detection
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Enabling intelligent automation in manufacturing processes
                    </p>
                  </li>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <h3 className="genai-Healthcare">
                    Generative AI for Retail
                  </h3>
                  <p className="genai-Health-Para">
                    Our generative AI consultancy empowers retailers to boost sales and enhance customer engagement by delivering tailored experiences and optimizing supply chain management. We leverage machine learning algorithms and generative models to offer personalized recommendations and streamline inventory control. Our generative AI solutions for the retail sector enable data-driven decision-making and elevate customer experiences through:

                  </p>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Personalized product recommendations and promotions
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Inventory management and supply chain optimization

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      In-store analytics to create personalized customer experiences

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Real-time demand forecasting and predictive analytics
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Implementing intelligent automation in retail processes
                    </p>
                  </li>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <h3 className="genai-Healthcare">
                    Supply Chain
                  </h3>
                  <p className="genai-Health-Para">
                    Our generative AI consulting services help supply chain and
                    logistics companies optimize operations and efficiency. We
                    use machine learning algorithms and predictive analytics to
                    optimize inventory management and distribution. Our
                    generative AI solutions for the supply chain industry help
                    businesses make data-driven decisions and improve customer
                    satisfaction through:
                  </p>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Optimizing supply chain operations and forecasting demand

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Enhancing inventory management and enabling predictive maintenance

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Real-time monitoring and tracking of shipments
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Implementing warehouse automation and efficient management

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Streamlining transportation and optimizing routes
                    </p>
                  </li>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-bank"
                  role="tabpanel"
                  aria-labelledby="v-pills-bank-tab"
                >
                  <h3 className="genai-Healthcare">
                    Generative AI for banking & finance industry
                  </h3>
                  <p className="genai-Health-Para">
                    Our generative AI consulting services help financial
                    institutions improve customer experiences and reduce risks.
                    We use machine learning algorithms and natural language
                    processing to analyze financial data and provide
                    personalized recommendations. Our generative AI solutions
                    for the finance industry help businesses make data-driven
                    decisions and improve compliance through:
                  </p>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Generating personalized financial advice and recommendations

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Conducting investment analysis and optimizing portfolios

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Implementing automated customer service and support

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Enhancing credit scoring and risk assessment

                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Detecting and preventing fraud
                    </p>
                  </li>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-insurance"
                  role="tabpanel"
                  aria-labelledby="v-pills-insurance-tab"
                >
                  <h3 className="genai-Healthcare">
                    Generative AI for insurance industry
                  </h3>
                  <p className="genai-Health-Para">
                    Our generative AI consulting services help insurance
                    companies optimize operations and improve customer
                    satisfaction. We use machine learning algorithms and
                    predictive analytics to automate underwriting and claims
                    processing. Our generative AI solutions for the insurance
                    industry help businesses make data-driven decisions and
                    improve compliance through:
                  </p>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Customer segmentation and personalized recommendations
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Automated underwriting and claims processing
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Implementing automated customer service and support
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Conducting real-time data analysis and forecasting
                    </p>
                  </li>
                  <li className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    ></i>
                    <p style={{ marginLeft: "5px" }}>
                      Enhancing risk assessment and detecting fraud
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Genai-main-car" style={{ background: "#0046E8" }}>
        <div className="container">
          <div>
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                {/* <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="row no-gutters-genai-1">
                    <div class="col-md-8">
                      <div>
                        <p
                          style={{
                            color: "white",
                            fontWeight: "700",
                            letterSpacing: "1px",
                          }}
                        >
                          <em>Success Stories</em>
                        </p>
                        <h5
                          class="card-title generative-genai1"
                          style={{ color: "white" }}
                        >
                          Generative AI solutions for better hardware schematics
                        </h5>
                        <p
                          class="card-text para-genai"
                          style={{ color: "white" }}
                        >
                          Simplifying Resume Screening for a Leading Staffing
                          Firm with Generative AI Our client, a well-established
                          talent acquisition company boasting decades of
                          experience, grappled with managing an extensive influx
                          of resumes and the challenge of pinpointing
                          specialized skills while ensuring an unbiased
                          approach. To tackle this, we engineered a generative
                          AI-powered resume pre-screening solution,
                          incorporating cutting-edge AI algorithms and the Power
                          Platform, which led to streamlined evaluations and
                          more informed decision-making.
                        </p>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "3px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p style={{ marginLeft: "5px" }}>
                            Automated Resume Analysis
                          </p>
                        </li>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "3px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p style={{ marginLeft: "5px" }}>
                            Accelerated Screening, Minimizing Bias
                          </p>
                        </li>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "3px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p style={{ marginLeft: "5px" }}>
                            Customizable Workflows
                          </p>
                        </li>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "3px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p style={{ marginLeft: "5px" }}>
                            Rapid Identification of Best-Fit Candidates
                          </p>
                        </li>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "3px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p style={{ marginLeft: "5px" }}>
                            Interactive Q&A Chatbot
                          </p>
                        </li>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "3px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p style={{ marginLeft: "5px" }}>
                            Skill Development Recommendations
                          </p>
                        </li>
                      </div>
                    </div>
                    <div
                      class="col-md-4"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="/images/G-AI-img2.webp1.png"
                        class="card-img-1"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row no-gutters-genai">
                    <div class="col-md-8">
                      <div>
                        <p
                          style={{
                            color: "white",
                            fontWeight: "700",
                            letterSpacing: "1px",
                          }}
                        >
                          <em>Success Stories</em>
                        </p>
                        <h5
                          class="card-title generative-genai1"
                          style={{ color: "white" }}
                        >
                          Revolutionizing Hardware Schematic Design with
                          Generative AI Solutions
                        </h5>
                        <p class="card-text" style={{ color: "white" }}>
                          <p>
                            In a quest to enhance their product quality and
                            expedite the design phase, a US-based OEM embarked
                            on a journey to optimize their processes. Leveraging
                            the proficiency of our AI consultants, we introduced
                            cutting-edge generative AI solutions. Drawing upon
                            our extensive knowledge of EAGLE files and hardware
                            schematic software.
                          </p>

                          <p>
                            We delivered the following invaluable advantages to
                            our client:
                          </p>
                        </p>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "0px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p
                            style={{
                              marginLeft: "5px",
                              fontSize: "12px",
                              letterSpacing: "0.2px",
                            }}
                          >
                            Elevated Design Precision: Our generative AI
                            solutions dramatically improved the accuracy of
                            their designs
                          </p>
                        </li>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "0px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p
                            style={{
                              marginLeft: "5px",
                              fontSize: "12px",
                              letterSpacing: "0.2px",
                            }}
                          >
                            Time and Cost Efficiency: By streamlining their
                            design process, we enabled substantial time and cost
                            savings.
                          </p>
                        </li>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "0px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p
                            style={{
                              marginLeft: "5px",
                              fontSize: "12px",
                              letterSpacing: "0.2px",
                            }}
                          >
                            Amplified Performance and Reliability: The resultant
                            designs exhibited enhanced performance and
                            reliability.
                          </p>
                        </li>
                        <li className="para-genai" style={{ color: "white" }}>
                          <i
                            class="fa fa-angle-double-right"
                            style={{ color: "white", marginTop: "0px" }}
                            aria-hidden="true"
                          >
                            {" "}
                          </i>
                          <p
                            style={{
                              marginLeft: "5px",
                              fontSize: "12px",
                              letterSpacing: "0.2px",
                            }}
                          >
                            Design Perfection: Through optimization, we achieved
                            designs that surpassed expectations in every aspect
                          </p>
                        </li>
                        <p style={{ color: "white", fontSize: "13px" }}>
                          These successes reflect the transformative power of AI
                          in revolutionizing hardware schematic design,
                          ultimately elevating product quality and
                          competitiveness.
                        </p>
                        <button className="Genai-Read-button"
                          style={{
                            display: "flex",
                            height: "61px",
                            maxWidth: "255px",
                            padding: "20px 46px 21px 48px",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "none",
                            marginTop: "27px",
                            borderRadius: "5px",
                          }}
                        >
                          <span className="READ-Genai-more"
                            style={{
                              color: "rgb(0, 70, 232)",
                              fontSize: "20px",
                              fontStyle: "normal",
                              fontWeight: "600",
                              lineHeight: "19px",
                              letterSpacing: "1px",
                            }}
                          >
                            Read More
                          </span>{" "}
                          <i
                            className="fa fa-arrow-circle-o-right READ-Genai-more"
                            style={{
                              width: "23px",
                              fontSize: "24px",
                              flexShrink: "0",
                              color: "rgb(0, 70, 232)",
                              marginLeft: "12px",
                            }}
                            aria-hidden="true"
                          ></i>
                        </button>
                      </div>
                    </div>
                    <div
                      class="col-md-4"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <img
                        src="/images/success-genai-2.png"
                        class="card-img-1"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev prev1"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next next1"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row Genai-OVERALL-Body">
          <div className="col-md-4 texthead-genai-framework">
            <h4 className="texthead1-genai">Frame Work</h4>
          </div>
          <div
            className="col-md-8"
            style={{ background: "#F8F8F8", padding: "20px" }}
          >
            <div className="row">
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/tensorflow.webp (1).png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/pytorch.webp (1).png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/Transformers (1).png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/hugging-face.webp (1).png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/LangChain.webp.png"
                  alt="..."
                  className="icon-genai"
                  style={{ marginTop: "13px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row Genai-OVERALL-Body mt-1">
          <div
            className="col-md-4 texthead-genai"
            style={{ background: "#062D89" }}
          >
            <h4 className="texthead1-genai">Language</h4>
          </div>
          <div className="col-md-8" style={{ background: "#D7D7D7" }}>
            <div className="row">
              <div className="col-md-3 genaiFramework" style={{ marginTop: "25px" }}>
                <img
                  src="/images/python.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row Genai-OVERALL-Body mt-1">
          <div className="col-md-4 texthead-genai">
            <h4 className="texthead1-genai">IDEs</h4>
          </div>

          <div className="col-md-8" style={{ background: "#F8F8F8" }}>
            <div className="row" style={{ marginTop: "25px" }}>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/pycharm.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/jupyter.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/vscode.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row Genai-OVERALL-Body mt-1">
          <div
            className="col-md-4 texthead-genai"
            style={{ background: "#062D89" }}
          >
            <h4 className="texthead1-genai">Deployments</h4>
          </div>
          <div className="col-md-8" style={{ background: "#D7D7D7" }}>
            <div className="row" style={{ marginTop: "25px" }}>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/azure1.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img src="/images/aws1.png" alt="..." className="icon-genai" />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/googlecloud1.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/ibmwatson.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row Genai-OVERALL-Body mt-1">
          <div className="col-md-4 texthead-genai-framework">
            <h4 className="texthead1-genai">Models</h4>
          </div>
          <div
            className="col-md-8"
            style={{ background: "#F8F8F8", padding: "20px" }}
          >
            <div className="row">
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/gpt3.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/gpt2.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/t5.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/lambda.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/bert.png"
                  alt="..."
                  className="icon-genai"
                  style={{ marginTop: "13px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row Genai-OVERALL-Body mt-1">
          <div
            className="col-md-4 texthead-genai"
            style={{ background: "#062D89" }}
          >
            <h4 className="texthead1-genai">Commerical platforms</h4>
          </div>
          <div className="col-md-8" style={{ background: "#D7D7D7" }}>
            <div className="row" style={{ marginTop: "25px" }}>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/openai.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img src="/images/openai1.png" alt="..." className="icon-genai" />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/vertexai.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
              <div className="col-md-3 genaiFramework">
                <img
                  src="/images/ibmwatson.png"
                  alt="..."
                  className="icon-genai"
                />
              </div>
            </div>
          </div>
        </div>



      </div>
      <div className="container" style={{ marginTop: "50px" }}>
        <h2 className="generative-genai1">
          Why choose DataObserve for your generative AI needs?
        </h2>
        <div class="row row-cols-1 row-cols-md-2">
          <div class="col mb-4">
            <div class="card GENAI-overall-bussiness">
              <div
                class="card-body Genai-One"
                style={{ height: "256px", background: "#F8F8F8" }}
              >
                <h5 class="generative-genai2">
                  Collaborate with a Business-Centric Approach
                </h5>
                <div>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      DataObserve comprehends your business objectives and
                      tailors AI solutions accordingly
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      Our proficiency is dedicated to fine-tuning AI solutions
                      to cater to your distinct requirements.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      Our AI solutions propel business expansion and triumph.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      We are dedicated to furnishing AI solutions that bring
                      value and maximize your return on investment (ROI).
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card GENAI-overall-bussiness">
              <div
                class="card-body Genai-One"
                style={{ height: "256px", background: "#F8F8F8" }}
              >
                <h5 class="generative-genai2">Boost Ecosystem Innovation</h5>
                <div>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      DataObserve harnesses cutting-edge AI technologies to
                      ignite innovation within your enterprise.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      Our AI solutions are meticulously crafted to revolutionize
                      your business processes and attain your objectives.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      We expedite the pace of innovation and position you at the
                      forefront of your competitive landscape.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      With our AI solutions, you can seize fresh prospects and
                      propel the growth of your business.
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card GENAI-overall-bussiness">
              <div
                class="card-body Genai-One"
                style={{ height: "256px", background: "#F8F8F8" }}
              >
                <h5 class="generative-genai2">
                  Elevate Responsible AI Practices
                </h5>
                <div>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      Softweb Solutions is committed to developing AI solutions
                      that are ethical, transparent, and responsible.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      We ensure that our AI solutions comply with regulatory and
                      industry standards.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      Our team of experts develops AI solutions that are secure,
                      trustworthy, and protect user privacy.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      We believe that responsible AI is critical to building
                      trust and achieving long-term success.
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="card GENAI-overall-bussiness">
              <div
                class="card-body Genai-One"
                style={{ height: "256px", background: "#F8F8F8" }}
              >
                <h5 class="generative-genai2">Expertise in generative AI</h5>
                <div>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      Softweb Solutions has unparalleled expertise in generative

                      AI technologies.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      Our team of experts develops innovative generative AI
                      solutions that help you stay ahead of the competition.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      We work closely with you to understand your unique needs
                      and deliver customized generative AI solutions.
                    </p>
                  </li>
                  <li style={{ fontSize: "13px" }} className="para-genai">
                    <i
                      class="fa fa-angle-double-right"
                      style={{ color: "blue", marginTop: "3px" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                    <p className="GenAI-Paragraph" style={{ marginLeft: "5px" }}>
                      Our generative AI solutions drive business growth, enable
                      creativity, and deliver exceptional results.
                    </p>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="recentworks">
        <div className="container">
          <h1 className="recentworkshead">Our most recent works</h1>
          <div className="cardclass">
            <div className="row">
              <div className="col-md-4 cardcol">
                <div className="recentworkimgclass">
                  {/* <div className="dummyclass"></div> */}
                  <div className="card therecentcard mobile-text">
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
          <div className="genaiviewrecentbutton">
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
      {/* <Faq /> */}
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
                      What is generative AI, and how does it differ from
                      traditional AI?
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
                <div
                  class="card-body"
                  style={{ textAlign: "left", listStyle: "none" }}
                >
                  Generative AI in the Insurance Industry:
                  <p>
                    {" "}
                    Our generative AI consultancy empowers insurance companies
                    to streamline operations and enhance customer satisfaction.
                    We harness machine learning algorithms and predictive
                    analytics to automate underwriting and claims processing.
                    Our generative AI solutions for the insurance sector enable
                    data-driven decision-making and bolster compliance through:{" "}
                  </p>
                  <li>
                    1. Customer segmentation and personalized recommendations{" "}
                  </li>
                  <li>2. Automated underwriting and claims processing</li>
                  <li>
                    {" "}
                    3. Implementing automated customer service and support
                  </li>
                  <li>4. Conducting real-time data analysis and forecasting</li>
                  <li>5. Enhancing risk assessment and detecting fraud.</li>
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
                      What are some real-world applications of generative AI?
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
                <div
                  class="card-body"
                  style={{ textAlign: "left", listStyle: "none" }}
                >
                  Generative AI in the Insurance Industry:{" "}
                  <p>
                    Our generative AI consultancy empowers insurance companies
                    to streamline operations and enhance customer satisfaction.
                    We harness machine learning algorithms and predictive
                    analytics to automate underwriting and claims processing.
                    Our generative AI solutions for the insurance sector enable
                    data-driven decision-making and bolster compliance through:
                  </p>
                  <li>
                    1. Customer segmentation and personalized recommendations{" "}
                  </li>
                  <li>2. Automated underwriting and claims processing</li>
                  <li>
                    {" "}
                    3. Implementing automated customer service and support
                  </li>
                  <li>4. Conducting real-time data analysis and forecasting</li>
                  <li>5. Enhancing risk assessment and detecting fraud.</li>
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
                      How does generative AI work, and what technologies are
                      used in its process?
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
                <div
                  class="card-body"
                  style={{ textAlign: "left", listStyle: "none" }}
                >
                  Generative AI in the Insurance Industry:
                  <p>
                    {" "}
                    Our generative AI consultancy empowers insurance companies
                    to streamline operations and enhance customer satisfaction.
                    We harness machine learning algorithms and predictive
                    analytics to automate underwriting and claims processing.
                    Our generative AI solutions for the insurance sector enable
                    data-driven decision-making and bolster compliance through:
                  </p>
                  <li>
                    1. Customer segmentation and personalized recommendations{" "}
                  </li>
                  <li>2. Automated underwriting and claims processing</li>
                  <li>
                    {" "}
                    3. Implementing automated customer service and support
                  </li>
                  <li>4. Conducting real-time data analysis and forecasting</li>
                  <li>5. Enhancing risk assessment and detecting fraud.</li>
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
                      How will generative AI benefit my business, and improve
                      operations?
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
                <div
                  class="card-body"
                  style={{ textAlign: "left", listStyle: "none" }}
                >
                  Generative AI in the Insurance Industry:
                  <p>
                    {" "}
                    Generative AI in the Insurance Industry: Our generative AI
                    consultancy empowers insurance companies to streamline
                    operations and enhance customer satisfaction. We harness
                    machine learning algorithms and predictive analytics to
                    automate underwriting and claims processing. Our generative
                    AI solutions for the insurance sector enable data-driven
                    decision-making and bolster compliance through:
                  </p>
                  <li>
                    1. Customer segmentation and personalized recommendations{" "}
                  </li>
                  <li>2. Automated underwriting and claims processing</li>
                  <li>
                    {" "}
                    3. Implementing automated customer service and support
                  </li>
                  <li>4. Conducting real-time data analysis and forecasting</li>
                  <li>5. Enhancing risk assessment and detecting fraud.</li>
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
                      How can generative AI help me better understand my
                      customers and their needs?
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
                <div
                  class="card-body"
                  style={{ textAlign: "left", listStyle: "none" }}
                >
                  Generative AI in the Insurance Industry:
                  <p>
                    {" "}
                    Generative AI in the Insurance Industry: Our generative AI
                    consultancy empowers insurance companies to streamline
                    operations and enhance customer satisfaction. We harness
                    machine learning algorithms and predictive analytics to
                    automate underwriting and claims processing. Our generative
                    AI solutions for the insurance sector enable data-driven
                    decision-making and bolster compliance through:
                  </p>
                  <li>
                    1. Customer segmentation and personalized recommendations{" "}
                  </li>
                  <li>2. Automated underwriting and claims processing</li>
                  <li>
                    {" "}
                    3. Implementing automated customer service and support
                  </li>
                  <li>4. Conducting real-time data analysis and forecasting</li>
                  <li>5. Enhancing risk assessment and detecting fraud.</li>
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
                      How does generative AI fit into my company’s overall AI
                      strategy, and what are the potential risks and rewards?
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
                <div
                  class="card-body"
                  style={{ textAlign: "left", listStyle: "none" }}
                >
                  Generative AI in the Insurance Industry:
                  <p>
                    {" "}
                    Generative AI in the Insurance Industry: Our generative AI
                    consultancy empowers insurance companies to streamline
                    operations and enhance customer satisfaction. We harness
                    machine learning algorithms and predictive analytics to
                    automate underwriting and claims processing. Our generative
                    AI solutions for the insurance sector enable data-driven
                    decision-making and bolster compliance through:
                  </p>
                  <li>
                    1. Customer segmentation and personalized recommendations{" "}
                  </li>
                  <li>2. Automated underwriting and claims processing</li>
                  <li>
                    {" "}
                    3. Implementing automated customer service and support
                  </li>
                  <li>4. Conducting real-time data analysis and forecasting</li>
                  <li>5. Enhancing risk assessment and detecting fraud.</li>
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
                      How much does it cost to implement generative AI, and what
                      factors should I consider?
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
                <div
                  class="card-body"
                  style={{ textAlign: "left", listStyle: "none" }}
                >
                  Generative AI in the Insurance Industry:
                  <p>
                    {" "}
                    Generative AI in the Insurance Industry: Our generative AI
                    consultancy empowers insurance companies to streamline
                    operations and enhance customer satisfaction. We harness
                    machine learning algorithms and predictive analytics to
                    automate underwriting and claims processing. Our generative
                    AI solutions for the insurance sector enable data-driven
                    decision-making and bolster compliance through:
                  </p>
                  <li>
                    1. Customer segmentation and personalized recommendations{" "}
                  </li>
                  <li>2. Automated underwriting and claims processing</li>
                  <li>
                    {" "}
                    3. Implementing automated customer service and support
                  </li>
                  <li>4. Conducting real-time data analysis and forecasting</li>
                  <li>5. Enhancing risk assessment and detecting fraud.</li>
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
                      How can I get started with generative AI, and what
                      resources or support are available to me?
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
                <div
                  class="card-body"
                  style={{ textAlign: "left", listStyle: "none" }}
                >
                  Generative AI in the Insurance Industry:
                  <p>
                    {" "}
                    Generative AI in the Insurance Industry: Our generative AI
                    consultancy empowers insurance companies to streamline
                    operations and enhance customer satisfaction. We harness
                    machine learning algorithms and predictive analytics to
                    automate underwriting and claims processing. Our generative
                    AI solutions for the insurance sector enable data-driven
                    decision-making and bolster compliance through:
                  </p>
                  <li>
                    1. Customer segmentation and personalized recommendations{" "}
                  </li>
                  <li>2. Automated underwriting and claims processing</li>
                  <li>
                    {" "}
                    3. Implementing automated customer service and support
                  </li>
                  <li>4. Conducting real-time data analysis and forecasting</li>
                  <li>5. Enhancing risk assessment and detecting fraud.</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Talktous /> */}

      <Footer />
    </div>
  );
}

export default Genai;
