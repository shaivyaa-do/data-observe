import React from 'react'

const Footer = () => {
  return (
    <div class="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-3 footer-data">
          <div class="coll">
            <h1 className="footer-heading">Company</h1>
            <ul>
              <li>About Us</li>
              <li>People and Careers</li>
            </ul>
          </div>
        </div>
        <div className="col-md-3 footer-data">
          <div class="coll">
            <h1 className="footer-heading">Services</h1>
            <ul className='cloud'>
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

        <div className="col-md-3 footer-data">
          <div class="coll">
            <h1 className="footer-heading">Industries</h1>
            <ul>
              <li>Life sciences and Pharma</li>
              <li>Media & Entertainment</li>
              <li>Gaming and gambling</li>
            </ul>
            <h1 className="footer-heading">Products</h1>
            <ul>
              <li>Data Observability</li>
              <li>Health EM</li>
              <li>DataSense</li>
            </ul>
          </div>
        </div>

        <div className="col-md-3 footer-data">
          <div class="coll">
            <h1 className="footer-heading">Insights</h1>
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
  )
}

export default Footer
