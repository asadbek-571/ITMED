import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CourseFilter extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="course-area pd-top-100 pd-bottom-90">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-8 col-lg-10 col-md-11">
			        <div className="section-title style-white text-center">
			          <h2 className="title">Top Featured Courses</h2>
			        </div>
			      </div>
			    </div>
			    <div className="edmt-nav-tab style-white text-center">
			      <ul className="nav nav-tabs" id="myTab" role="tablist">
			        <li className="nav-item">
			          <a className="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Graphics &amp; Design</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Digital Marketing</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Writing &amp; Translation</a>
			        </li>
			        <li className="nav-item">
			          <a className="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Music &amp; Audio</a>
			        </li>
			      </ul>
			    </div>
			    <div className="tab-content go-top" id="myTabContent">
			      <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
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
			                  <h6><Link to="/course-details">Fox nymphs grab quick-jived waltz. Brick quiz whangs</Link></h6>
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
			                  <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
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
			                  <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
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
			          <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.8
			                        <span>(53)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$64.00</span>
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
			                <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.5
			                        <span>(21)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$34.00</span>
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
			                <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.4
			                        <span>(20)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$55.00</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
			        <div className="row">
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
			                  <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.9
			                        <span>(73)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$74.00</span>
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
			                <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.8
			                        <span>(53)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$64.00</span>
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
			                <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.5
			                        <span>(21)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$34.00</span>
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
			                <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.4
			                        <span>(20)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$55.00</span>
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
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
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
			                  <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
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
			        </div>
			      </div>
			      <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
			        <div className="row">
			          <div className="col-lg-4 col-md-6">
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.8
			                        <span>(53)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$64.00</span>
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
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
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
			                <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.5
			                        <span>(21)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$34.00</span>
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
			                  <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
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
			                  <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.9
			                        <span>(73)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$74.00</span>
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
			                <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.4
			                        <span>(20)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$55.00</span>
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
			        <div className="row">
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
			                  <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>
			                </div>
			                <div className="emt-course-meta">
			                  <div className="row">
			                    <div className="col-6">
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.9
			                        <span>(73)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$74.00</span>
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
			                <img src={publicUrl+"assets/img/course/6.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.4
			                        <span>(20)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$55.00</span>
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
			                <img src={publicUrl+"assets/img/course/4.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.8
			                        <span>(53)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$64.00</span>
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
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
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
			                <img src={publicUrl+"assets/img/course/5.png"} alt="img" />
			              </div>
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
			                      <div className="rating">
			                        <i className="fa fa-star" /> 4.5
			                        <span>(21)</span>
			                      </div>
			                    </div>
			                    <div className="col-6">
			                      <div className="price text-right">
			                        Price: <span>$34.00</span>
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
			                  <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>
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
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default CourseFilter