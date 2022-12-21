import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturedCourse extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="course-area pd-top-110 pd-bottom-90 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-6">
			        <div className="section-title text-center">
			          <h6 className="sub-title double-line">OUR COURSES</h6>
			          <h2 className="title">Top Featured Courses</h2>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-course-inner style-two">
			          <div className="emt-thumb-icon">
			            <img src={publicUrl+"assets/img/icon/6.png"} alt="img" />
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="emt-course-meta border-0">
			              <div className="row">
			                <div className="col-10">
			                  <h6><Link to="/course-details">Creative resilience</Link></h6>
			                </div>
			                <div className="col-2 text-right">
			                  <Link className="arrow-right" to="/course-details"><img src={publicUrl+"assets/img/icon/5.png"} alt="img" /></Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-course-inner style-two">
			          <div className="emt-thumb-icon">
			            <img src={publicUrl+"assets/img/icon/7.png"} alt="img" />
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/2.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="emt-course-meta border-0">
			              <div className="row">
			                <div className="col-10">
			                  <h6><Link to="/course-details">Adaptability</Link></h6>
			                </div>
			                <div className="col-2 text-right">
			                  <Link className="arrow-right" to="/course-details"><img src={publicUrl+"assets/img/icon/5.png"} alt="img" /></Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-course-inner style-two">
			          <div className="emt-thumb-icon">
			            <img src={publicUrl+"assets/img/icon/8.png"} alt="img" />
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/3.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="emt-course-meta border-0">
			              <div className="row">
			                <div className="col-10">
			                  <h6><Link to="/course-details">Project management</Link></h6>
			                </div>
			                <div className="col-2 text-right">
			                  <Link className="arrow-right" to="/course-details"><img src={publicUrl+"assets/img/icon/5.png"} alt="img" /></Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-course-inner style-two">
			          <div className="emt-thumb-icon">
			            <img src={publicUrl+"assets/img/icon/9.png"} alt="img" />
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="emt-course-meta border-0">
			              <div className="row">
			                <div className="col-10">
			                  <h6><Link to="/course-details">User Interface</Link></h6>
			                </div>
			                <div className="col-2 text-right">
			                  <Link className="arrow-right" to="/course-details"><img src={publicUrl+"assets/img/icon/5.png"} alt="img" /></Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-course-inner style-two">
			          <div className="emt-thumb-icon">
			            <img src={publicUrl+"assets/img/icon/10.png"} alt="img" />
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="emt-course-meta border-0">
			              <div className="row">
			                <div className="col-10">
			                  <h6><Link to="/course-details">Data Tracking</Link></h6>
			                </div>
			                <div className="col-2 text-right">
			                  <Link className="arrow-right" to="/course-details"><img src={publicUrl+"assets/img/icon/5.png"} alt="img" /></Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-course-inner style-two">
			          <div className="emt-thumb-icon">
			            <img src={publicUrl+"assets/img/icon/11.png"} alt="img" />
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			          </div>
			          <div className="details">
			            <div className="emt-course-meta border-0">
			              <div className="row">
			                <div className="col-10">
			                  <h6><Link to="/course-details">Creative resilience</Link></h6>
			                </div>
			                <div className="col-2 text-right">
			                  <Link className="arrow-right" to="/course-details"><img src={publicUrl+"assets/img/icon/5.png"} alt="img" /></Link>
			                </div>
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

export default FeaturedCourse
