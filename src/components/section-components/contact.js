import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="contact-area bg-overlay mt-200 pd-bottom-90" style={{backgroundImage: 'url("'+publicUrl+'assets/img/banner/2.png")'}}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-8">
			        <form className="contact-form-inner mt-mn-200 style-shadow">
			          <div className="section-title">
			            <h2 className="title">Request A Quote</h2>
			            <p>We will be happy to answer your questions.</p>
			          </div>
			          <div className="row">
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Full name" />
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Phone Number" />
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Email Address" />
			              </div>
			            </div>
			            <div className="col-md-6">
			              <div className="single-input-inner">
			                <input type="text" placeholder="Subject" />
			              </div>
			            </div>
			            <div className="col-12">
			              <div className="single-input-inner">
			                <textarea placeholder="Your Message" defaultValue={""} />
			              </div>
			            </div>
			            <div className="col-sm-6 align-self-center">
			              <div className="single-input-inner style-checkbox">
			                <input type="checkbox" />
			                Also subscribe us
			              </div>
			            </div>
			            <div className="col-sm-6 text-sm-right">
			              <a className="btn btn-base" href="#">Send Message</a>
			            </div>
			          </div>
			        </form>
			      </div>
			      <div className="col-lg-4 align-self-end">
			        <div className="mt-5 mt-lg-0">
			          <ul className="single-list-wrap">
			            <li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/16.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5>Our Address</h5>
			                  <p>PSD Building, 2 AlBahr</p>
			                  <p>St, Loskia sripur</p>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/17.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5>Our Phone</h5>
			                  <p>+0029129102320</p>
			                  <p>+000 2324 39493</p>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-white style-check-box-grid-2">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/18.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5>Our Email</h5>
			                  <p>name@website.com</p>
			                  <p>Info@orex.com</p>
			                </div>
			              </div>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Contact