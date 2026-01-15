/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Talktous from "../../components/Common/Talktous";

import "./Doprompt.css";

function Doprompt() {
  return (
    <>
      <Navbar />

      <div>
        <section className='doprompt-back'>
          <img
            src="images/DOPrompt-bnr.png"
            alt="#"
            className="dopromptvideo" />

          <div className="dopromptheader">
            <div className="container">
              <h1 className="col-md-6" style={{ color: "#FFF", fontSize: "20px", fontWeight: "700", marginBottom: "20px" }}>DO Prompt</h1>

              <h1 className="dopromptheading-pro col-md-6 mb-0">
                Get ahead in Generative AI with an advanced prompt engineering platform for teams
              </h1>
              <p className="dopromptheaderpara col-md-4">
                Meet DO Insights, Business Intelligence Tool built for everyone on
                your team.
              </p>
              <input
                placeholder="Businees Email"
                className="col-md-4 emailClass"
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
                <button className="demoClass new-point">Get a demo</button>
              </div>
            </div>
            <div className="dopromptvideoClass col-md-8">

              <img
                src="images/dptn1.png"
                alt="#"
                className="playClass"
              />
            </div>
          </div>
        </section>


        <section className="promptsection2">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="generative">
                  <div className="feedback-disv1 d-flex">
                    <img
                      className="text-img"
                      src="./images/arcticons_simple.png"
                      style={{ width: "50px" }}
                    />
                    <h1 className="generative-h1">Generative AI Playground</h1>
                  </div>
                  <p className="generative-para">
                    Create new prompts, make changes, and keep track of
                    different versions without any hassle. Use prompt templates
                    with parameters to create a prompt once, then reuse it
                    effortlessly with different data
                  </p>
                </div>

                <div className="feedback-loop">
                  <div className="feedback-div2 d-flex">
                    <img
                      className="text-img"
                      src="./images/hsk.png"
                      width={"50px"}
                    />
                    <h1 className="generative-h1">
                      Feedback Loop & Interations
                    </h1>
                  </div>
                  <p className="generative-para">
                    With our Prompt API, say goodbye to the bottleneck of
                    developer-only modifications. Developers just integrate the
                    Prompt API once, enabling prompt engineers to effortlessly
                    tune prompts in parallel and in real-time using a
                    user-friendly interface.
                  </p>
                </div>
              </div>

              <div className="col-md-6 DO-Prompt-lib-image">
                <div className="prompt-library">
                  <img
                    src="./images/prompt_library_1x.webp.png"
                    width={"70%"}
                  />
                  <div>
                    <img className="applygai" src="./images/applygai.png" />
                  </div>
                  <div>
                    <img className="reuse" src="./images/reuse.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="promptsection3 mb-4">
          <div className="container">
            <div className="row pro-available">
              <div className="col-md-6">
                <h1 className="available-h1">
                  Built for Enterprises, Available to Everyone
                </h1>
                <p className="available-p">
                  Meet your enterprise needs with an ever-growing bundle of
                  add-ons & features.
                </p>
                <div className="doprompt-available   d-flex">
                  <img
                    src="./images/dopromptcall.png"
                    width={"24"}
                    height={"24"}
                  />
                  <h2 className="available-heads">
                    Dedicated founder-led support
                  </h2>
                </div>
                <div className="doprompt-available   d-flex">
                  <img
                    src="./images/bluecloud.png"
                    width={"24"}
                    height={"24"}
                  />
                  <h2 className="available-heads">
                    Self-hosted or in the cloud
                  </h2>
                </div>
                <div className="doprompt-available   d-flex">
                  <img
                    src="./images/bluenotepad.png"
                    width={"24"}
                    height={"24"}
                  />
                  <h2 className="available-heads">
                    Individual contracts & NDA
                  </h2>
                </div>
                <div className="doprompt-available   d-flex">
                  <img src="./images/bluetick.png" width={"24"} height={"24"} />
                  <h2 className="available-heads">Guaranteed uptime 99.9%</h2>
                </div>
              </div>
              <div className="available-div2 col-md-6">
                <img
                  className="systemoperational"
                  src="./images/allsystemsoperational.png"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="promptsection4">
          <div className="">
            <div className=" container benfits-full-div ">
              <div className="benfits-full-head">
                <div>
                  <h1 className="benfits-head">Your Benefits</h1>
                </div>
                <div>
                  <p className="benfits-head-para">
                    Instantly available functionality for prompts engineers
                  </p>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-md-4 benfit-divs">
                    <img src="./images/promptmanagement.png" width={"50px"} />
                    <h1 className="benfits-h1">
                      Prompt management and versioning
                    </h1>
                    <p className="benfits-para-prompt">
                      Simple workflow from development to staging and
                      production.
                    </p>
                  </div>
                  <div className="col-md-4 benfit-divs">
                    <img src="./images/prompt-templates.png" width={"50px"} />
                    <h1 className="benfits-Prompt">Prompt templates</h1>
                    <p className="benfits-para-prompt">
                      Placeholders and parameters, revision history and
                      collaboration.
                    </p>
                  </div>
                  <div className="col-md-4 benfit-divs">
                    <img src="./images/integrate.png" width={"50px"} />
                    <h1 className="benfits-h1">Integrate Prompt</h1>
                    <p className="benfits-para-prompt">
                      {" "}
                      API and then instantly change & improve published prompts
                      without redeploying your app.
                    </p>
                  </div>
                </div>

                <div className="row benfit-divs2ndrow">
                  <div className="col-md-4 benfit-divs">
                    <img src="./images/logging.png" width={"50px"} />
                    <h1 className="benfits-h1">
                      Prompt logging and monitoring
                    </h1>
                    <p className="benfits-para-prompt">
                      Search usage history and stay up-to-date with responses
                      generated from your prompts
                    </p>
                  </div>
                  <div className="col-md-4 benfit-divs">
                    <img src="./images/dptn2.png" width={"50px"} />
                    <h1 className="benfits-h1">Performance tracking</h1>
                    <p className="benfits-para-prompt">
                      Make sure your clients are delighted.
                    </p>
                  </div>
                  <div className="col-md-4 benfit-divs">
                    <img src="./images/outlined.png" width={"50px"} />
                    <h1 className="benfits-h1">Vendor independence</h1>
                    <p className="benfits-para-prompt">
                      Built-in adapter layer to stay independent from particular
                      vendor like OpenAI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="promptsection5 mt-5">
          <div className="translate-full-div">
            <div className="container">
              <div className="row pro-available">
                <div className="col-md-6" style={{ margin: "auto" }}>
                  <img src="./images/translate.png" width={"100%"} />
                </div>

                <div className="col-md-6">
                  <h1 className="translate-h1">Prompt Forms</h1>
                  <p className="translate-p">
                    Share prompts with your clients while keeping th contents of
                    the prompts undisclosed.
                  </p>
                  <div className="doprompt-translate   d-flex">
                    <img
                      src="./images/dopromptcall.png"
                      width={"30px"}
                      height={"30px"}
                      mt-15
                    />
                    <h2 className="translate-heads">
                      Add Generative AI to your portfolio. Offer self-serve
                      forms for text generation.
                    </h2>
                  </div>
                  <div className="doprompt-translate   d-flex">
                    <img
                      src="./images/bluecloud.png"
                      width={"30px"}
                      height={"30px"}
                      mt-15
                    />
                    <h2 className="translate-heads">
                      Let your clients generate high quality outputs from
                      various AI streams and increase profits.
                    </h2>
                  </div>
                  <div className="doprompt-translate   d-flex">
                    <img
                      src="./images/bluenotepad.png"
                      width={"30px"}
                      height={"30px"}
                      mt-15
                    />
                    <h2 className="translate-heads">
                      Monetize and sell prompts. Generate additional revenue
                      streams and increase profits.
                    </h2>
                  </div>
                  <div className="doprompt-translate   d-flex">
                    <img
                      src="./images/bluetick.png"
                      width={"30px"}
                      height={"30px"}
                      mt-15
                    />
                    <h2 className="translate-heads">
                      Serve a larger number of clients without sacrificing
                      quality orefficiency.
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="promptsection6 mt-4">
          <div className="container prompT-section-6">
            <h1 className="library-head">Prompt Engineering Library</h1>
            <p className="library-head-para">
              From enhanced functionality to streamlined operations, the prompt{" "}
              <br /> engineering library can help take your product to the next
              level.
            </p>
            <div className="library-img-div">
              <img src="./images/dptn3.png" width={"50%"} />
            </div>

            <div className="row">
              <div className="col-md-4 library-divs">
                <img src="./images/lbd1.png" width={"50px"} />
                {/* <h1 className='library-h1'>Prompt management and versioning</h1> */}
                <p className="library-para">
                  Easily track the performance of your prompts and make
                  data-driven decisions to optimize their impact.
                </p>
              </div>
              <div className="col-md-4 library-divs">
                <img src="./images/lbd2.png" width={"50px"} />
                {/* <h1 className='library-h1'>Prompt templates</h1> */}
                <p className="library-para">
                  Analyze user behavior and test different prompts, so that you
                  can improve the effectiveness of your prompts over time.
                </p>
              </div>
              <div className="col-md-4 library-divs">
                <img src="./images/lbd3.png" width={"50px"} />
                {/* <h1 className='library-h1'>Integrate Prompt</h1> */}
                <p className="library-para">
                  Create prompts that are tailored to specific user needs,
                  improving the user experience and increasing customer
                  satisfaction.
                </p>
              </div>
            </div>

            <div className="row library-rowdiv2">
              <div className="col-md-4 library-divs">
                <img src="./images/lbd4.png" width={"50px"} />
                {/* <h1 className='library-h1'>Prompt management and versioning</h1> */}
                <p className="library-para">
                  Adjust prompts via prompt versions. Replace the prompt
                  versions on the fly without having to write code or redeploy
                  your product. Ensure that everyone is working with the
                  latestversion and prevent version control issues.
                </p>
              </div>
              <div className="col-md-4 library-divs">
                <img src="./images/lbd5.png" width={"50px"} />
                {/* <h1 className='library-h1'>Integrate Prompt</h1> */}
                <p className="library-para">
                  Manage prompts across multiple sections of your product,
                  making it easier to scale your operations.
                </p>
              </div>
              <div className="col-md-4 library-divs">
                <img src="./images/lbd6.png" width={"50px"} />
                {/* <h1 className='library-h1'>Integrate Prompt</h1> */}
                <p className="library-para">
                  Let team members work together on prompts, making changes and
                  providing feedback as needed. Speed up the editorial process,
                  while ensuring that everyone is on the same page.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="promptsection7 mt-4">
          <div className="container prompT-SECTION-7">
            <div className="row">
              <div className="col-md-6">
                <h1 className="everyone-h1">
                  Built for Enterprises, Available to Everyone
                </h1>
                <p className="everyone-p">
                  Visual building blocks make it simple to create custom AI
                  workflows tailored to your needs.
                </p>
                <div className="doprompt-everyone   d-flex">
                  <img
                    src="./images/dopromptcall.png"
                    width={"30px"}
                    height={"30px"}
                  />
                  <h2 className="everyone-heads">
                    Go beyond prompt engineering and embed memory and other
                    components to improve AI quality.
                  </h2>
                </div>
                <div className="doprompt-everyone   d-flex">
                  <img
                    src="./images/bluecloud.png"
                    width={"30px"}
                    height={"30px"}
                  />
                  <h2 className="everyone-heads">
                    Build intuitively. Your AI app can be complex, but our
                    workflow editor lets you build and visualize that
                    complexityin an intuitive drag and drop interface.
                  </h2>
                </div>
                <div className="doprompt-everyone   d-flex">
                  <img
                    src="./images/bluenotepad.png"
                    width={"30px"}
                    height={"30px"}
                  />
                  <h2 className="everyone-heads">
                    No-Code first. Enables creation of advanced AI workflows
                    without needing to know how to program.
                  </h2>
                </div>
                <div className="doprompt-everyone   d-flex">
                  <img
                    src="./images/bluetick.png"
                    width={"30px"}
                    height={"30px"}
                  />
                  <h2 className="everyone-heads">
                    with the prompt engineering platformStay ahead of the
                    competition and streamline your Generative AI solutions for
                    maximum efficiency.
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src="./images/ppt-enterprises.png"
                  width={"100%"}
                  height={"100%"}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="promptsection8 mt-4">
          <div className="container">
            <div>
              <h1 className="ppt-api-h1">Prompt Engineering API</h1>
              <p className="container col-md-5 ppt-api-para">
                Meet your enterprise needs with an ever-growing & bundle of
                add-ons & features.
              </p>
            </div>
            <div className="ppt-api-img">
              <img src="./images/dptn4.png" width={"50%"} />
            </div>

            <div className="row">
              <div className="col-md-4 ppt-api-divs">
                <img src="./images/sec8.png" width={"50px"} />
                {/* <h1 className='library-h1'>Prompt management and versioning</h1> */}
                <p className="ppt-api-para">
                  Create API endpoints based on a prompt. Replace prompt
                  versions and instantly publish changes without redeploying
                  your app
                </p>
              </div>
              <div className="col-md-4 ppt-api-divs">
                <img src="./images/sec8.png" width={"50px"} />
                {/* <h1 className='library-h1'>Prompt templates</h1> */}
                <p className="ppt-api-para">
                  check_circleReduce Code Boilerplate. Leverage the prompt
                  management layer that we've built.
                </p>
              </div>
              <div className="col-md-4 ppt-api-divs">
                <img src="./images/sec8.png" width={"50px"} />
                {/* <h1 className='library-h1'>Integrate Prompt</h1> */}
                <p className="ppt-api-para">
                  check_circleSpeed up development and get your AI features to
                  market faster.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 ppt-api-divs">
                <img src="./images/sec8.png" width={"50px"} />
                {/* <h1 className='library-h1'>Prompt management and versioning</h1> */}
                <p className="ppt-api-para">
                  check_circleLogging and monitoring of upstream AI services.
                </p>
              </div>
              <div className="col-md-4 ppt-api-divs">
                <img src="./images/sec8.png" width={"50px"} />
                {/* <h1 className='library-h1'>Prompt templates</h1> */}
                <p className="ppt-api-para">
                  check_circleVendor independence. Use this API layer to stay
                  independent from particular vendor like OpenAI.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <Talktous /> */}

      <Footer />
    </>
  );
}

export default Doprompt;
