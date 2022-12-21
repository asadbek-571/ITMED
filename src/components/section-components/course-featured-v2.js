import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturedCourseV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="course-area pd-top-110 pd-bottom-90 go-top">
			  <div className="container">
			    <div className="section-title">
			      <div className="row">
			        <div className="col-md-8 align-self-center">
			          <h2 className="title mt-0">Top Featured Courses</h2>
			        </div>
			        <div className="col-md-4 text-md-right mt-3 mt-md-0">
			          <Link className="btn btn-base mt-0" to="/course">View All</Link>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-md-6">
			        <div className="single-course-inner style-bottom-thumb">
			          <div className="details">
			            <div className="details-inner">
			              <div className="emt-user">
			                <span className="u-thumb"><img src={publicUrl+"assets/img/author/3.png"} alt="img" /></span>
			                <span className="align-self-center">Timothy Willis</span>
			              </div>
			              <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			            </div>
			            <div className="emt-course-meta">
			              <div className="row">
			                <div className="col-6">
			                  <div className="price">$74.00</div>
			                </div>
			                <div className="col-6">
			                  <div className="rating text-right">
			                    <i className="fa fa-star" /> 4.9
			                    <span>(73)</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/3.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-course-inner style-bottom-thumb">
			          <div className="details">
			            <div className="details-inner">
			              <div className="emt-user">
			                <span className="u-thumb"><img src={publicUrl+"assets/img/author/6.png"} alt="img" /></span>
			                <span className="align-self-center">Randy Hart</span>
			              </div>
			              <h6><Link to="/course-details">Duis rhoncus dui venenatis consequat porttito</Link></h6>
			            </div>
			            <div className="emt-course-meta">
			              <div className="row">
			                <div className="col-6">
			                  <div className="price">$74.00</div>
			                </div>
			                <div className="col-6">
			                  <div className="rating text-right">
			                    <i className="fa fa-star" /> 4.9
			                    <span>(73)</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-course-inner style-bottom-thumb">
			          <div className="details">
			            <div className="details-inner">
			              <div className="emt-user">
			                <span className="u-thumb"><img src={publicUrl+"assets/img/author/4.png"} alt="img" /></span>
			                <span className="align-self-center">Walter Griffin</span>
			              </div>
			              <h6><Link to="/course-details">Duis vestibulum elit vel neque pharetra vulputate</Link></h6>
			            </div>
			            <div className="emt-course-meta">
			              <div className="row">
			                <div className="col-6">
			                  <div className="price">$74.00</div>
			                </div>
			                <div className="col-6">
			                  <div className="rating text-right">
			                    <i className="fa fa-star" /> 4.9
			                    <span>(73)</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-course-inner style-bottom-thumb">
			          <div className="details">
			            <div className="details-inner">
			              <div className="emt-user">
			                <span className="u-thumb"><img src={publicUrl+"assets/img/author/1.png"} alt="img" /></span>
			                <span className="align-self-center">Nancy Reyes</span>
			              </div>
			              <h6><Link to="/course-details">Fox nymphs grab quick-jived waltz. Brick quiz whangs</Link></h6>
			            </div>
			            <div className="emt-course-meta">
			              <div className="row">
			                <div className="col-6">
			                  <div className="price">$74.00</div>
			                </div>
			                <div className="col-6">
			                  <div className="rating text-right">
			                    <i className="fa fa-star" /> 4.9
			                    <span>(73)</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-course-inner style-bottom-thumb">
			          <div className="details">
			            <div className="details-inner">
			              <div className="emt-user">
			                <span className="u-thumb"><img src={publicUrl+"assets/img/author/5.png"} alt="img" /></span>
			                <span className="align-self-center">Aaron Powell</span>
			              </div>
			              <h6><Link to="/course-details">Quisque suscipit ipsum est, eu venenatis leo ornare eget</Link></h6>
			            </div>
			            <div className="emt-course-meta">
			              <div className="row">
			                <div className="col-6">
			                  <div className="price">$74.00</div>
			                </div>
			                <div className="col-6">
			                  <div className="rating text-right">
			                    <i className="fa fa-star" /> 4.9
			                    <span>(73)</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-course-inner style-bottom-thumb">
			          <div className="details">
			            <div className="details-inner">
			              <div className="emt-user">
			                <span className="u-thumb"><img src={publicUrl+"assets/img/author/2.png"} alt="img" /></span>
			                <span className="align-self-center">Joe Powell</span>
			              </div>
			              <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
			            </div>
			            <div className="emt-course-meta">
			              <div className="row">
			                <div className="col-6">
			                  <div className="price">$74.00</div>
			                </div>
			                <div className="col-6">
			                  <div className="rating text-right">
			                    <i className="fa fa-star" /> 4.9
			                    <span>(73)</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/2.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-course-inner style-bottom-thumb">
			          <div className="details">
			            <div className="details-inner">
			              <div className="emt-user">
			                <span className="u-thumb"><img src={publicUrl+"assets/img/author/7.png"} alt="img" /></span>
			                <span className="align-self-center">Randy Hart</span>
			              </div>
			              <h6><Link to="/course-details">Duis rhoncus dui venenatis consequat porttito</Link></h6>
			            </div>
			            <div className="emt-course-meta">
			              <div className="row">
			                <div className="col-6">
			                  <div className="price">$74.00</div>
			                </div>
			                <div className="col-6">
			                  <div className="rating text-right">
			                    <i className="fa fa-star" /> 4.9
			                    <span>(73)</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/7.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-course-inner style-bottom-thumb">
			          <div className="details">
			            <div className="details-inner">
			              <div className="emt-user">
			                <span className="u-thumb"><img src={publicUrl+"assets/img/author/2.png"} alt="img" /></span>
			                <span className="align-self-center">Walter Griffin</span>
			              </div>
			              <h6><Link to="/course-details">Duis vestibulum elit vel neque pharetra vulputate</Link></h6>
			            </div>
			            <div className="emt-course-meta">
			              <div className="row">
			                <div className="col-6">
			                  <div className="price">$74.00</div>
			                </div>
			                <div className="col-6">
			                  <div className="rating text-right">
			                    <i className="fa fa-star" /> 4.9
			                    <span>(73)</span>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/8.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default FeaturedCourseV2