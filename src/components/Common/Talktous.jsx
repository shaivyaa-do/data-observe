import React from 'react'
import "./talktous.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Talktous() {
  return (
    <div className='bg-color'>
         <div className="container">
          <div className="row bg-white">
            <div className="col-md-6 rounded">
              <div className="ttuclass">
                <div className="card">
                  <div
                    class="card-body footercardbody"
                    style={{
                      borderTopLeftRadius: "25px",
                      borderTopRightRadius: "25px",
                    }}
                  >
                    <h5 class="card-title title">Talk to Us</h5>
                    {/* {/ <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> /} */}
                    <p className="card-text question">
                      Got a question? Dont a hesitate to give us a call today or
                      shoot us an email
                    </p>
                    <i class="fa fa-envelope" aria-hidden="true" style={{fontSize:"14px"}}>
                      <span classname="hello" style={{ marginLeft: "10px" ,fontSize:"14px"}}>
                        hello@dataobserve.io
                      </span>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div>
               <div>
                <div>
                  <form>
                    <div className="form-group">
                      <label className="required">Full Name</label>
                      <input type="text" className="form-control name" />
                      <label className="required">Work Email</label>
                      <input type="text" className="form-control name" />
                      <label>Contact Number</label>
                      <input type="text" className="form-control name" />
                      
                      <Link to="/contact" className="c-t">
                        <button className="contact-us-2">Contact Us</button>
                      </Link>
                      
                      
                    </div>
                  </form>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Talktous