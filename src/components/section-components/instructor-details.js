import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class InstructorDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="main-blog-area pd-top-120 pd-bottom-90">
			  <div className="container">
			    <div className="team-details-page">
			      <div className="row">
			        <div className="col-lg-5">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/6.png"} alt="img" />
			          </div>
			        </div>
			        <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			          <div className="details">
			            <h3>Christine Pearson</h3>
			            <span className="designation">Design Expert</span>
			            <ul className="social-media style-base pt-2 mb-4">
			              <li>
			                <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>
			              </li>
			              <li>
			                <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>
			              </li>
			              <li>
			                <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>
			              </li>
			              <li>
			                <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>
			              </li>
			              <li>
			                <a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a>
			              </li>
			            </ul>
			            <span>Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt</span>
			            <p className="mt-4">Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox </p>
			          </div>
			        </div>
			      </div>
			      <div className="details-inner mt-4 pt-xl-3">
			        <span>Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt</span>
			        <p className="mt-3">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew </p>
			      </div>
			    </div>
			    <div className="course-area pd-top-90">
			      <h4 className="mb-4">Instructor Course</h4>
			      <div className="row">
			        <div className="col-lg-4 col-md-6">
			          <div className="single-course-inner">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			            </div>
			            <div className="details">
			              <div className="details-inner">
			                <div className="emt-user">
			                  <span className="u-thumb"><img src={publicUrl+"assets/img/author/1.png"} alt="img" /></span>
			                  <span className="align-self-center">Nancy Reyes</span>
			                </div>
			                <h6 className="go-top"><Link to="/course-details">Fox nymphs grab quick-jived waltz. Brick quiz whangs</Link></h6>
			              </div>
			              <div className="emt-course-meta">
			                <div className="row">
			                  <div className="col-6">
			                    <div className="rating">
			                      <i className="fa fa-star" /> 4.3
			                      <span>(23)</span>
			                    </div>
			                  </div>
			                  <div className="col-6">
			                    <div className="price text-right">
			                      Price: <span>$54.00</span>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-6">
			          <div className="single-course-inner">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/course/2.png"} alt="img" />
			            </div>
			            <div className="details">
			              <div className="details-inner">
			                <div className="emt-user">
			                  <span className="u-thumb"><img src={publicUrl+"assets/img/author/2.png"} alt="img" /></span>
			                  <span className="align-self-center">Joe Powell</span>
			                </div>
			                <h6 className="go-top"><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
			              </div>
			              <div className="emt-course-meta">
			                <div className="row">
			                  <div className="col-6">
			                    <div className="rating">
			                      <i className="fa fa-star" /> 4.3
			                      <span>(23)</span>
			                    </div>
			                  </div>
			                  <div className="col-6">
			                    <div className="price text-right">
			                      Price: <span>$54.00</span>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4 col-md-6">
			          <div className="single-course-inner">
			            <div className="thumb">
			              <img src={publicUrl+"assets/img/course/3.png"} alt="img" />
			            </div>
			            <div className="details">
			              <div className="details-inner">
			                <div className="emt-user">
			                  <span className="u-thumb"><img src={publicUrl+"assets/img/author/3.png"} alt="img" /></span>
			                  <span className="align-self-center">Timothy Willis</span>
			                </div>
			                <h6 className="go-top"><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			              </div>
			              <div className="emt-course-meta">
			                <div className="row">
			                  <div className="col-6">
			                    <div className="rating">
			                      <i className="fa fa-star" /> 4.9
			                      <span>(73)</span>
			                    </div>
			                  </div>
			                  <div className="col-lg-6">
			                    <div className="price text-right">
			                      Price: <span>$74.00</span>
			                    </div>
			                  </div>
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

export default InstructorDetails