import React, {Component} from 'react';

class CourseDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="course-single-area pd-top-120 pd-bottom-90">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-8">
			        <div className="course-course-detaila-inner">
			          <div className="details-inner">
			            <div className="emt-user">
			              <span className="u-thumb"><img src={publicUrl+"assets/img/author/1.png"} alt="img" /></span>
			              <span className="align-self-center">Kurs nomi</span>
			            </div>
			            <h3 className="title"><a href="course-details.html">Kurs haqida qisqacha ma'lumot</a></h3>
			          </div>
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/course/9.png"} alt="img" />
			          </div>
			          <div className="course-details-nav-tab text-center">
			            <ul className="nav nav-tabs" id="myTab" role="tablist">
			              <li className="nav-item">
			                <a className="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">Ma'lumot</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">O'quv dasturi</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" id="tab3-tab" data-toggle="tab" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Savol javob</a>
			              </li>
			              <li className="nav-item">
			                <a className="nav-link" id="tab4-tab" data-toggle="tab" href="#tab4" role="tab" aria-controls="tab4" aria-selected="false">Ko'rib chiqish</a>
			              </li>
			            </ul>
			          </div>
			          <div className="tab-content" id="myTabContent">
			            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
			              <div className="course-details-content">
			                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aut commodi fugiat illo illum impedit inventore ipsam labore porro provident ratione reprehenderit sit tempore vero, vitae. Architecto asperiores blanditiis doloribus ducimus ea earum eveniet ex expedita fugit harum, ipsam libero maxime, non numquam perferendis porro, quas quia quidem temporibus voluptatum!</p>
			                <div className="row pt-4">
			                  <div className="col-sm-6">
			                    <ul className="single-list-wrap">
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" />Qo'shimchalar
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" />Qo'shimchalar
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" />Qo'shimchalar
			                      </li>
			                    </ul>
			                  </div>
			                  <div className="col-sm-6 mt-3 mt-sm-0">
			                    <ul className="single-list-wrap">
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" />Qo'shimchalar
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" />Qo'shimchalar
			                      </li>
			                      <li className="single-list-inner style-check-box">
			                        <i className="fa fa-check" />Qo'shimchalar
			                      </li>
			                    </ul>
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
			              <div className="course-details-content">
			                <h4 className="title">Umumiy koʻrinish</h4>
			                <p>Qisqa ma'lumot</p>
			                <div id="accordion" className="accordion-area mt-4">
			                  <div className="card single-faq-inner style-no-border">
			                    <div className="card-header" id="ff-one">
			                      <h5 className="mb-0">
			                        <button className="btn-link" data-toggle="collapse" data-target="#f-one" aria-expanded="true" aria-controls="f-one">
			                          01.  Savol?
			                          <i className="fa fa-eye" />
			                        </button>
			                      </h5>
			                    </div>
			                    <div id="f-one" className="show collapse" aria-labelledby="ff-one" data-parent="#accordion">
			                      <div className="card-body">
			                        Javob.
			                      </div>
			                    </div>
			                  </div>
			                  <div className="card single-faq-inner style-no-border">
			                    <div className="card-header" id="ff-two">
			                      <h5 className="mb-0">
			                        <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-two" aria-expanded="true" aria-controls="f-two">
			                          02.  Savol ?
			                          <i className="fa fa-eye" />
			                        </button>
			                      </h5>
			                    </div>
			                    <div id="f-two" className="collapse" aria-labelledby="ff-two" data-parent="#accordion">
			                      <div className="card-body">
			                       Javob.
			                      </div>
			                    </div>
			                  </div>
			                  <div className="card single-faq-inner style-no-border">
			                    <div className="card-header" id="ff-three">
			                      <h5 className="mb-0">
			                        <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-three" aria-expanded="true" aria-controls="f-three">
			                          03. Savol?
			                          <i className="fa fa-eye" />
			                        </button>
			                      </h5>
			                    </div>
			                    <div id="f-three" className="collapse" aria-labelledby="ff-three" data-parent="#accordion">
			                      <div className="card-body">
			                       Javob
			                      </div>
			                    </div>
			                  </div>
			                  <div className="card single-faq-inner style-no-border">
			                    <div className="card-header" id="ff-four">
			                      <h5 className="mb-0">
			                        <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-four" aria-expanded="true" aria-controls="f-four">
			                          04. Savol?
			                          <i className="fa fa-eye" />
			                        </button>
			                      </h5>
			                    </div>
			                    <div id="f-four" className="collapse" aria-labelledby="ff-four" data-parent="#accordion">
			                      <div className="card-body">
			                        Javob
			                      </div>
			                    </div>
			                  </div>
			                </div>
			              </div>
			            </div>
						  <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab3-tab">
							  <div className="course-details-content">
								  <h4 className="title">Umumiy koʻrinish</h4>
								  <p>Qisqa ma'lumot</p>
								  <div id="accordion" className="accordion-area mt-4">
									  <div className="card single-faq-inner style-no-border">
										  <div className="card-header" id="ff-one">
											  <h5 className="mb-0">
												  <button className="btn-link" data-toggle="collapse" data-target="#f-one" aria-expanded="true" aria-controls="f-one">
													  01.  Savol?
													  <i className="fa fa-eye" />
												  </button>
											  </h5>
										  </div>
										  <div id="f-one" className="show collapse" aria-labelledby="ff-one" data-parent="#accordion">
											  <div className="card-body">
												  Javob.
											  </div>
										  </div>
									  </div>
									  <div className="card single-faq-inner style-no-border">
										  <div className="card-header" id="ff-two">
											  <h5 className="mb-0">
												  <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-two" aria-expanded="true" aria-controls="f-two">
													  02.  Savol ?
													  <i className="fa fa-eye" />
												  </button>
											  </h5>
										  </div>
										  <div id="f-two" className="collapse" aria-labelledby="ff-two" data-parent="#accordion">
											  <div className="card-body">
												  Javob.
											  </div>
										  </div>
									  </div>
									  <div className="card single-faq-inner style-no-border">
										  <div className="card-header" id="ff-three">
											  <h5 className="mb-0">
												  <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-three" aria-expanded="true" aria-controls="f-three">
													  03. Savol?
													  <i className="fa fa-eye" />
												  </button>
											  </h5>
										  </div>
										  <div id="f-three" className="collapse" aria-labelledby="ff-three" data-parent="#accordion">
											  <div className="card-body">
												  Javob
											  </div>
										  </div>
									  </div>
									  <div className="card single-faq-inner style-no-border">
										  <div className="card-header" id="ff-four">
											  <h5 className="mb-0">
												  <button className="btn-link collapsed" data-toggle="collapse" data-target="#f-four" aria-expanded="true" aria-controls="f-four">
													  04. Savol?
													  <i className="fa fa-eye" />
												  </button>
											  </h5>
										  </div>
										  <div id="f-four" className="collapse" aria-labelledby="ff-four" data-parent="#accordion">
											  <div className="card-body">
												  Javob
											  </div>
										  </div>
									  </div>
								  </div>
							  </div>
						  </div>
			            <div className="tab-pane fade" id="tab4" role="tabpanel" aria-labelledby="tab4-tab">
			              <div className="ratings-list-inner mb-4">
			                <div className="row">
			                  <div className="col-md-4 align-self-center text-center">
			                    <div className="total-avarage-rating">
			                      <h2>5.0</h2>
			                      <div className="rating-inner">
			                        <i className="fa fa-star" />
			                        <i className="fa fa-star" />
			                        <i className="fa fa-star" />
			                        <i className="fa fa-star" />
			                        <i className="fa fa-star" />
			                      </div>
			                      <p>3 bahodan 5 ball</p>
			                    </div>
			                  </div>
			                  <div className="col-md-8">
			                    <ul>
			                      <li>
			                        <a href="#">
			                          <span className="counter-label"><i className="fa fa-star" />5</span>
			                          <span className="progress-bar-inner">
			                            <span className="progress">
			                              <span className="progress-bar" role="progressbar" aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} style={{width: '100%'}} />
			                            </span>
			                          </span>
			                          <span className="counter-count">100%</span>
			                        </a>
			                      </li>
			                      <li>
			                        <a href="#">
			                          <span className="counter-label"><i className="fa fa-star" />4</span>
			                          <span className="progress-bar-inner">
			                            <span className="progress">
			                              <span className="progress-bar" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}} />
			                            </span>
			                          </span>
			                          <span className="counter-count">0%</span>
			                        </a>
			                      </li>
			                      <li>
			                        <a href="#">
			                          <span className="counter-label"><i className="fa fa-star" />3</span>
			                          <span className="progress-bar-inner">
			                            <span className="progress">
			                              <span className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}} />
			                            </span>
			                          </span>
			                          <span className="counter-count">0%</span>
			                        </a>
			                      </li>
			                      <li>
			                        <a href="#">
			                          <span className="counter-label"><i className="fa fa-star" />2</span>
			                          <span className="progress-bar-inner">
			                            <span className="progress">
			                              <span className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}} />
			                            </span>
			                          </span>
			                          <span className="counter-count">0%</span>
			                        </a>
			                      </li>
			                      <li>
			                        <a href="#">
			                          <span className="counter-label"><i className="fa fa-star" />1</span>
			                          <span className="progress-bar-inner">
			                            <span className="progress">
			                              <span className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100} style={{width: '0%'}} />
			                            </span>
			                          </span>
			                          <span className="counter-count">0%</span>
			                        </a>
			                      </li>
			                    </ul>
			                  </div>
			                </div>
			              </div> 
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="td-sidebar">
			          <div className="widget widget_feature">
			            <h4 className="widget-title">Course Features</h4>                                 
			            <ul>
			              <li><i className="fa fa-user" /><span>Obuna bo'lganlar :</span> 200 o'quvchi</li>
			              <li><i className="fa fa-clock-o" /><span>Davomiyligi :</span> 20 soat</li>
			              <li><i className="fa fa-clipboard" /><span>Ma'ruzalar :</span> 8</li>
			              <li><i className="fa fa-clone" /><span>Bo'lim:</span> Tehnalogyalar</li>
			              <li><i className="fa fa-tags" /><span>Teglar:</span> Android, JavaScript</li>
			              <li><i className="fa fa-clipboard" /><span>O'qtuvchi:</span>O'qtuvchi ismi</li>
			            </ul>
			            <div className="price-wrap text-center">
			              <h5>Price:<span>$54.00</span></h5>
			              <a className="btn btn-base btn-radius" to="/course-details">Ro'yhatdan o'tish</a>
			            </div>
			          </div>
			          <div className="widget widget_catagory">
			            <h4 className="widget-title">Dasturlash kursi</h4>
			            <div className="single-course-inner">
			              <div className="thumb">
			                <img src={publicUrl+"assets/img/course/1.png"} alt="img" />
			              </div>
			              <div className="details">
			                <div className="details-inner">
			                  <div className="emt-user">
			                    <span className="u-thumb"><img src={publicUrl+"assets/img/author/1.png"} alt="img" /></span>
			                    <span className="align-self-center">Kurs nomi</span>
			                  </div>
			                  <h6><a href="course-details.html">Qisqacha ma'lumot</a></h6>
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
			                        Narxi: <span>500 000 so'm</span>
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
			    {/*// <div className="row justify-content-center pd-top-100">*/}
			    {/*//   <div className="col-lg-4 col-md-6">*/}
			    {/*//     <div className="single-course-inner">*/}
			    {/*//       <div className="thumb">*/}
			    {/*//         <img src={publicUrl+"assets/img/course/1.png"} alt="img" />*/}
			    {/*//       </div>*/}
			    {/*//       <div className="details">*/}
			    {/*//         <div className="details-inner">*/}
			    {/*//           <div className="emt-user">*/}
			    {/*//             <span className="u-thumb"><img src={publicUrl+"assets/img/author/1.png"} alt="img" /></span>*/}
			    {/*//             <span className="align-self-center">Nancy Reyes</span>*/}
			    {/*//           </div>*/}
			    {/*//           <h6><Link to="/course-details">Fox nymphs grab quick-jived waltz. Brick quiz whangs</Link></h6>*/}
			    {/*//         </div>*/}
			    {/*//         <div className="emt-course-meta">*/}
			    {/*//           <div className="row">*/}
			    {/*//             <div className="col-6">*/}
			    {/*//               <div className="rating">*/}
			    {/*//                 <i className="fa fa-star" /> 4.3*/}
			    {/*//                 <span>(23)</span>*/}
			    {/*//               </div>*/}
			    {/*//             </div>*/}
			    {/*//             <div className="col-6">*/}
			    {/*//               <div className="price text-right">*/}
			    {/*//                 Price: <span>$54.00</span>*/}
			    {/*//               </div>*/}
			    {/*//             </div>*/}
			    {/*//           </div>*/}
			    {/*//         </div>*/}
			    {/*//       </div>*/}
			    {/*//     </div>*/}
			    {/*//   </div>*/}
			    {/*//   <div className="col-lg-4 col-md-6">*/}
			    {/*//     <div className="single-course-inner">*/}
			    {/*//       <div className="thumb">*/}
			    {/*//         <img src={publicUrl+"assets/img/course/2.png"} alt="img" />*/}
			    {/*//       </div>*/}
			    {/*//       <div className="details">*/}
			    {/*//         <div className="details-inner">*/}
			    {/*//           <div className="emt-user">*/}
			    {/*//             <span className="u-thumb"><img src={publicUrl+"assets/img/author/2.png"} alt="img" /></span>*/}
			    {/*//             <span className="align-self-center">Joe Powell</span>*/}
			    {/*//           </div>*/}
			    {/*//           <h6><Link to="/course-details">Aenean sed nibh a magna posuere tempo faucib</Link></h6>*/}
			    {/*//         </div>*/}
			    {/*//         <div className="emt-course-meta">*/}
			    {/*//           <div className="row">*/}
			    {/*//             <div className="col-6">*/}
			    {/*//               <div className="rating">*/}
			    {/*//                 <i className="fa fa-star" /> 4.3*/}
			    {/*//                 <span>(23)</span>*/}
			    {/*//               </div>*/}
			    {/*//             </div>*/}
			    {/*//             <div className="col-6">*/}
			    {/*//               <div className="price text-right">*/}
			    {/*//                 Price: <span>$54.00</span>*/}
			    {/*//               </div>*/}
			    {/*//             </div>*/}
			    {/*//           </div>*/}
			    {/*//         </div>*/}
			    {/*//       </div>*/}
			    {/*//     </div>*/}
			    {/*//   </div>*/}
			    {/*//   <div className="col-lg-4 col-md-6">*/}
			    {/*//     <div className="single-course-inner">*/}
			    {/*//       <div className="thumb">*/}
			    {/*//         <img src={publicUrl+"assets/img/course/3.png"} alt="img" />*/}
			    {/*//       </div>*/}
			    {/*//       <div className="details">*/}
			    {/*//         <div className="details-inner">*/}
			    {/*//           <div className="emt-user">*/}
			    {/*//             <span className="u-thumb"><img src={publicUrl+"assets/img/author/3.png"} alt="img" /></span>*/}
			    {/*//             <span className="align-self-center">Timothy Willis</span>*/}
			    {/*//           </div>*/}
			    {/*//           <h6><Link to="/course-details">Praesent eu dolor eu orci vehicula euismod</Link></h6>*/}
			    {/*//         </div>*/}
			    {/*//         <div className="emt-course-meta">*/}
			    {/*//           <div className="row">*/}
			    {/*//             <div className="col-6">*/}
			    {/*//               <div className="rating">*/}
			    {/*//                 <i className="fa fa-star" /> 4.9*/}
			    {/*//                 <span>(73)</span>*/}
			    {/*//               </div>*/}
			    {/*//             </div>*/}
			    {/*//             <div className="col-lg-6">*/}
			    {/*//               <div className="price text-right">*/}
			    {/*//                 Price: <span>$74.00</span>*/}
			    {/*//               </div>*/}
			    {/*            </div>*/}
			    {/*          </div>*/}
			    {/*        </div>*/}
			    {/*      </div>*/}
			    {/*    </div>*/}
			    {/*  </div>*/}
			    {/*</div>*/}
			  </div>
			</div>

        }
}

export default CourseDetails
