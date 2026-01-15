import React from 'react';
import "./Ebooks.css";
import Navbar from "../products/Navbar"

function Ebooks() {
  return (
    <div id='ebooks'>
      <Navbar />

      <section>
        <div className="container">
          <a href='/allinsights'>
          <button className="previousButton">Back</button>
          </a>
        </div>
      </section>
      <section className="ebooksheader">
        <div className="container ebooksmatter">
          {/* <h3 className="ebooktitle1">Ebooks</h3> */}
          <h1 className="ebooktitle2 col-md-10">
          AWS FOR APPLICATION MODERNIZATION: UPDATING YOUR LEGACY SYSTEMS FOR THE CLOUD
          </h1>
          <button className="domainbuttonclass">Cloud Migration</button>
          {/* <p className='ebooktitle3'>Learn the key differences between generative AI and traditional AI, and how they are transforming our world.</p> */}
        </div>
      </section>
      <div className='container' style={{ marginTop: "100px" }}>
        <div className='row'>
          <div className='col-md-8'>
            <p className='insights'>Whitepaper</p>
            <h1 className='ebooktitle4'>AWS for application modernization: Updating your legacy systems for the cloud</h1>
            <p className='ebooktitle5'>Is your business growth being hampered by outdated legacy systems? Delay no further – it's time to embark on the journey of modernization and cloud migration with Amazon Web Services (AWS). In today's ever-evolving digital landscape, staying abreast of changes is not just a choice but a vital requirement. Take action now to maintain your competitive edge!</p>
            <div className='jeffBezos'>
              <p>“A recent In today's era of volatility, there is no other way but to re-
                invent. The only sustainable advantage you can have over others is
                agility, that's it. Because nothing else is sustainable, everything else you
                create, somebody else will replicate.</p>
              <p className='eb-text-end'>– Jeff Bezos </p>
            </div>
            <p className='ebooktitle5'>Our whitepaper thoroughly explores the essential imperative of modernizing legacy systems and underscores the advantages of transitioning to the cloud. Don't pass up the opportunity to delve into the diverse migration options at your disposal. Act promptly, and secure your download of our whitepaper today to initiate the initial stride in reshaping your business with AWS.</p>
            <div>
              <h2 className='papercover'>This whitepaper covers:</h2>

              <li className='listyle' style={{ color: "blue" }}><span style={{ color: "black" }}>Overview of application modernization</span></li>
              <li className='listyle' style={{ color: "blue" }}><span style={{ color: "black" }}>Benefits of updating legacy systems</span></li>
              <li className='listyle' style={{ color: "blue" }}><span style={{ color: "black" }}>Various migration paths for updating legacy systems</span></li>
              <li className='listyle' style={{ color: "blue" }}><span style={{ color: "black" }}>AWS cost optimization strategies for modernization</span></li>
              <li className='listyle' style={{ color: "blue" }}><span style={{ color: "black" }}>Overview of AWS services for application modernization</span></li>
              <li className='listyle' style={{ color: "blue" }}><span style={{ color: "black" }}>Case studies</span></li>
              <li className='listyle' style={{ color: "blue" }}><span style={{ color: "black" }}>How we can help you navigate your legacy system</span></li>


            </div>
          </div>
          <div className='col-md-4'>
            <div className='ebooks-long-bg-card'>

              <div className='container'>
                <div>
                  <p  className='freecopy'>Get your Free Copy</p>
                </div>
                <div className='ebooks-bg-img'>

                  <img className='eb-img-style' src='./images/ebooks-aws.png' />
                </div>
                <div className='eb-form'>
                  <form>
                    <div className='form-group'>
                      <label className='eb-formnames' for="firstName">First Name:</label> <br />
                      <input type="text" id="firstName" name="firstName" className='form-control' required />
                    </div>
                    <div className='form-group'>
                      <label className='eb-formnames' for="lastName">Last Name:</label><br />
                      <input type="text" id="lastName" name="lastName" className='form-control' required />
                    </div>
                    <div className='form-group'>
                      <label className='eb-formnames' for="workEmail">Work Email:</label><br />
                      <input type="email" id="workEmail" name="workEmail" className='form-control' required />
                    </div>
                    <div className='form-group'>
                      <label className='eb-formnames' for="phone">Phone:</label><br />
                      <input type="tel" id="phone" name="phone" required className='form-control' />
                    </div>
                    <div className='form-group d-flex'>

                      <input className='ebooks-checkbox' type="checkbox" id="marketing-emails" name="marketing-emails" value="yes"></input>
                      <label className='eb-label' for="marketing-emails">I Agree to Receive Marketing Emails</label>
                    </div>
                    <button className='ebook-btn' type="submit">Submit</button>
                  </form>
                  <div className='eb-form-dw-pr'>
                    <p>by submitting this form you agree with the terms and <a className='privacy-policy' href='#'>privacy policy</a>   of Softweb Solutions Inc </p>
                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Company
                  </h1>
                  <ul>
                    <li>About Us</li>
                    <li>People and Careers</li>
                  </ul>
                </div>
              </div>
              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Services
                  </h1>
                  <ul>
                    <li>Cloud transformation</li>
                    <li>Data Engineering</li>
                    <li>Data Analytics and BI</li>
                    <li>AI & Machine Learning</li>
                    <li>evOps-as-a-service</li>
                    <li>Application Modernization</li>
                    <li>Talent as a Service</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Industries
                  </h1>
                  <ul>
                    <li>Life sciences and Pharma</li>
                    <li>Media & Entertainment</li>
                    <li>Gaming and gambling</li>
                  </ul>
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Products
                  </h1>
                  <ul>
                    <li>
                      DO{" "}
                      <span
                        style={{
                          color: "rgba(255, 255, 255, 0.70)",
                          fontSize: "15px",
                          fontWeight: "700",
                          lineHeight: "22.5px",
                          letterSpacing: "-0.32px",
                        }}
                      >
                        360
                      </span>
                    </li>
                    {/* <li>Health EM</li> */}
                    <li>DOInsights</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3">
                <div class="col">
                  <h1 className="footer-heading" style={{ color: "#1A4AB9" }}>
                    Insights
                  </h1>
                  <ul>
                    <li>Case Studies</li>
                    <li>Blogs</li>
                    <li>Ebooks</li>
                    <li>Webinars & Videos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="contain">
            <div class="clearfix"></div>
          </div>
        </div>
    </div>
  )
}

export default Ebooks;