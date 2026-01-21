import React from "react";
import "./People.css";
import Faq from "../components/Common/Faq";
import Navbar from "../components/Layout/Navbar";
import careers from "../assets/videos/footerland.mp4";
import Footer from "../components/Layout/Footer";
import Talktous from "../components/Common/Talktous";

function People() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="People-Careers-Main">
          <video className="people-careers-video" autoPlay loop muted>
            <source
              src={careers}
              type="video/mp4"
            />
          </video>
          <div className="background">
            <div className="container people-data-observe">
              <div className="row">
                <div className="col-md-8">
                  <h1 className="people-career">People & Careers</h1>
                  <p className="data-observe">
                    At DataObserve, our aim is to unite technology innovators and creative problem solvers. Consider joining our continuously expanding team for a fulfilling and enduring career.


                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-cta-section">
        <div className="container">
          <div className="careers-cta-content">
            <h2 className="careers-cta-text">
              JOIN A GROUP OF PASSIONATE, TALENTED INDIVIDUALS PIONEERING THE FUTURE OF DATA.
            </h2>
            <button className="careers-cta-btn">View open positions</button>
          </div>
        </div>
      </section>

      <section className="why-join-section">
        <div className="container">
          <h2 className="why-join-main-heading">WHY JOIN DATAOBSERVE?</h2>

          <div className="why-join-grid">
            <div className="why-join-item">
              <h3 className="why-join-heading">MULTICULTURAL ATMOSPHERE</h3>
              <p className="why-join-desc">
                Work with the best from all over the globe, and get input from different cultures and mindsets—from sunny Singapore to colorful Turkey and lush Denmark.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">LONG-TERM VISION, SHORT-TERM EXECUTION</h3>
              <p className="why-join-desc">
                Your work will have a long-term focus. The luxury of long-term thinking is possible because we also love short-term execution. Simply put, we get stuff done.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">YOUR WORK DOES THE TALKING</h3>
              <p className="why-join-desc">
                Unlike many other work environments, superficial stuff—such as your stature, clothes or car — has zero impact on our perception of you. We judge you on your results alone.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">INTROVERTS ARE WELCOME, TOO</h3>
              <p className="why-join-desc">
                You’ll join a result- oriented, diversity- focused company. You’ll thrive if you’re an introvert—just like your extroverted colleagues also do.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">STATE-OF-THE-ART COLLABORATION TOOLS</h3>
              <p className="why-join-desc">
                You’ll use state-of-the- art online tools to facilitate smooth and enjoyable teamwork with your colleagues.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">PAID, COMPLETELY FLEXIBLE HOLIDAYS</h3>
              <p className="why-join-desc">
                You’ll have paid holidays and can take them whenever you’d like. No complicated internal procedures or approval processes.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">GREAT GENDER INCLUSIVITY</h3>
              <p className="why-join-desc">
                Brilliant ideas don’t have a gender. We take gender inclusivity seriously and are proud of our diverse and accepting team.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">AMBITIOUS COLLEAGUES</h3>
              <p className="why-join-desc">
                You’ll have colleagues with incredible ambitions and intelligence—but without the elbows. That’s because we only work with team mates who combine professional ambitions with the ability to work in a team.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">A REFINED DESIGN PROCESS</h3>
              <p className="why-join-desc">
                We continually re-design and re-invent our organization and platform through a solid in-house design process —mixing agile and user- centered design.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">UNINTERRUPTED CONCENTRATION TIME</h3>
              <p className="why-join-desc">
                You avoid working in an open office space with constant interruptions. Instead, you can immerse yourself in your work, deliver great results fast, and expand your skills.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">WE TRUST YOU TO DELIVER RESULTS</h3>
              <p className="why-join-desc">
                You’ll work remotely and have autonomy and freedom. No manager or colleague will look over your shoulder as long as you live up to that responsibility.
              </p>
            </div>

            <div className="why-join-item">
              <h3 className="why-join-heading">SOCIAL, BUT NOT INTRUSIVE, ATMOSPHERE</h3>
              <p className="why-join-desc">
                Working remotely strikes the perfect balance between being inspired and social but not getting interrupted.
              </p>
            </div>
          </div>

          <div className="why-join-center-row">
            <div className="why-join-item centered-item">
              <h3 className="why-join-heading">ZERO BUREAUCRACY</h3>
              <p className="why-join-desc">
                You’ll have absolutely zero bureaucracy and the power to make your own decisions and hold expenses.
              </p>
            </div>
          </div>

        </div>
      </section>



      <section className="open-positions-section">
        <div className="container">
          <div className="open-positions-content-wrapper">
            <h2 className="open-positions-main-heading">Open Positions</h2>
            <p className="open-positions-desc">
              Even when we’re not actively hiring, we’re always eager to meet
              passionate, driven individuals.
            </p>

            <div className="open-positions-categories">
              <div className="position-category">
                <h3 className="category-heading">Development</h3>
                <ul className="positions-list">
                  <li className="position-item">Senior PHP (Laravel) Developer</li>
                  <li className="position-item">Lead Front-End/UI Developer</li>
                </ul>
              </div>

              <div className="position-category">
                <h3 className="category-heading">Design</h3>
                <ul className="positions-list">
                  <li className="position-item">Graphic & Motion Designer</li>
                  <li className="position-item">UI/UX Designer</li>
                </ul>
              </div>

              <div className="position-category">
                <h3 className="category-heading">Support and Operations</h3>
                <ul className="positions-list">
                  <li className="position-item">Admin and Support Specialist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default People;
