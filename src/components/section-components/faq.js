import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Faq extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="faq-area pd-top-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-5">
			        <div className="about-area-inner">
			          <div className="section-title mb-0">
			            <h2 className="title mt-0">Do You Have Any Questions</h2>
			            <p className="content">Have ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo et ea rebum.</p>
			            <div className="row">
			              <div className="col-sm-6">
			                <ul className="single-list-wrap">
			                  <li className="single-list-inner style-check-box bg-light-green p-3 b-radius-5">
			                    <div className="media">
			                      <div className="media-left mr-0">
			                        <i className="fa fa-check" />
			                      </div>
			                      <div className="media-body">
			                        <h5>1200+</h5>
			                        <p>Learners &amp; counting</p>
			                      </div>
			                    </div>
			                  </li>
			                </ul>
			              </div>
			              <div className="col-sm-6">
			                <ul className="single-list-wrap">
			                  <li className="single-list-inner style-check-box bg-light-green p-3 b-radius-5">
			                    <div className="media">
			                      <div className="media-left mr-0">
			                        <i className="fa fa-check" />
			                      </div>
			                      <div className="media-body">
			                        <h5>350+</h5>
			                        <p>Learners &amp; counting</p>
			                      </div>
			                    </div>
			                  </li>
			                </ul>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-7 mt-5 mt-lg-0">
			        <div id="accordion" className="accordion-area">
			          <div className="card single-faq-inner">
			            <div className="card-header" id="ff-one">
			              <h5 className="mb-0">
			                <button className="btn-link" data-toggle="collapse" data-target="#f-one" aria-expanded="true" aria-controls="f-one">
			                  01.  What does you simply dummy in do ?
			                  <i className="fa fa-eye" />
			                </button>
			              </h5>
			            </div>
			            <div id="f-one" className="show collapse" aria-labelledby="ff-one" data-parent="#accordion">
			              <div className="card-body">
			                What does you dummy text of free available in market printing has industry been industry's standard dummy text ever.
			              </div>
			            </div>
			          </div>
			          <div className="card single-faq-inner">
			            <div className="card-header" id="ff-two">
			              <h5 className="mb-0">
			                <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-two" aria-expanded="true" aria-controls="f-two">
			                  02.  What graphics dummy of free  design ?
			                  <i className="fa fa-eye" />
			                </button>
			              </h5>
			            </div>
			            <div id="f-two" className="collapse" aria-labelledby="ff-two" data-parent="#accordion">
			              <div className="card-body">
			                What graphics simply dummy text of free available in market printing industry has been industry's standard dummy text ever.
			              </div>
			            </div>
			          </div>
			          <div className="card single-faq-inner">
			            <div className="card-header" id="ff-three">
			              <h5 className="mb-0">
			                <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-three" aria-expanded="true" aria-controls="f-three">
			                  03.  Why we are the best ?
			                  <i className="fa fa-eye" />
			                </button>
			              </h5>
			            </div>
			            <div id="f-three" className="collapse" aria-labelledby="ff-three" data-parent="#accordion">
			              <div className="card-body">
			                Why we are dummy text of free available in market printing industry has been industry's standard dummy text ever.
			              </div>
			            </div>
			          </div>
			          <div className="card single-faq-inner">
			            <div className="card-header" id="ff-four">
			              <h5 className="mb-0">
			                <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-four" aria-expanded="true" aria-controls="f-four">
			                  04.  What industries dummy covered ?
			                  <i className="fa fa-eye" />
			                </button>
			              </h5>
			            </div>
			            <div id="f-four" className="collapse" aria-labelledby="ff-four" data-parent="#accordion">
			              <div className="card-body">
			                What industries text of free available in market printing industry has been industry's standard dummy text ever.
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Faq