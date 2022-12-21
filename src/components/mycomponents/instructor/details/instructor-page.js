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
			            <h3>O'qtuvchi ismi</h3>
			            <span className="designation">Lavozimi</span>
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
			            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At cum eaque esse libero nemo nobis optio quaerat quidem voluptatem, voluptatibus?</span>
			            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aspernatur culpa cum dicta distinctio ea eligendi, eveniet fugit perspiciatis quia sed similique sint veritatis? Aspernatur cumque exercitationem molestiae provident suscipit?</p>
			          </div>
			        </div>
			      </div>
			      <div className="details-inner mt-4 pt-xl-3">
			        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex fuga maiores nam necessitatibus numquam obcaecati, officiis similique suscipit veniam?</span>
			        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A corporis debitis delectus, dolor doloremque earum eius eligendi eos fugiat impedit ipsa laboriosam optio porro repellat rerum, sit tempora vitae voluptatibus!</p>
			      </div>
			    </div>
			    <div className="course-area pd-top-90">
			      <h4 className="mb-4">O'qtuvchi kurslari</h4>
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
			                  <span className="align-self-center">Kurs nomi</span>
			                </div>
			                <h6 className="go-top"><Link to="/course-details">Kurs haqida ma'lumot</Link></h6>
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
			                      Narxi: <span>200 000 so'm</span>
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
			                  <span className="align-self-center">Kurs nomi</span>
			                </div>
			                <h6 className="go-top"><Link to="/course-details">Kurs haqida ma'lumot</Link></h6>
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
			                      Narxi: <span>400 000 so'm</span>
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
			                  <span className="align-self-center">Kurs nomi</span>
			                </div>
			                <h6 className="go-top"><Link to="/course-details">Kurs haqida ma'lumot</Link></h6>
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
			                      Narxi: <span>300 000 so'm</span>
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
