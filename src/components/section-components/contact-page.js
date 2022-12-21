import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div>
			  <div className="contact-list pd-top-120 pd-bottom-90">
			    <div className="container">
			      <div className="row justify-content-center">
			        <div className="col-lg-4">
			          <div className="contact-list-inner">
			            <div className="media">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/icon/17.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h5>Telefon</h5>
			                <p>+998 (99) 999-99-99</p>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4">
			          <div className="contact-list-inner">
			            <div className="media">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/icon/18.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h5>Email</h5>
			                <p>imunuz@gmail.com</p>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4">
			          <div className="contact-list-inner">
			            <div className="media">
			              <div className="media-left">
			                <img src={publicUrl+"assets/img/icon/16.png"} alt="img" />
			              </div>
			              <div className="media-body align-self-center">
			                <h5>Manzil</h5>
			                <p>Manzil</p>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* counter area start */}
			  <div className="counter-area pd-bottom-120">
			    <div className="container">
			      <div className="row">
			        <div className="col-lg-4">
			          <div className="section-title mb-0">
			            <h6 className="sub-title right-line">Bog'lanish</h6>
			            <h4 className="title">Bizga Xabar Yozing</h4>
			            <p className="content pb-3">O'zinggizni qiziqtirgan savollaringgizni bizga yuboring</p>
			            <ul className="social-media style-base pt-3">
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
			                <a href="#"><i className="fa fa-telegram" aria-hidden="true" /></a>
			              </li>
			              <li>
			                <a href="#"><i className="fa fa-youtube" aria-hidden="true" /></a>
			              </li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-8 mt-5 mt-lg-0">
			          <form className="contact-form-inner  mt-5 mt-md-0">
			            <div className="row">
			              <div className="col-lg-6">
			                <div className="single-input-inner style-bg-border">
			                  <input type="text" placeholder="Ism" />
			                </div>
			              </div>
			              <div className="col-lg-6">
			                <div className="single-input-inner style-bg-border">
			                  <input type="text" placeholder="Familya" />
			                </div>
			              </div>
			              <div className="col-6">
			                <div className="single-input-inner style-bg-border">
			                  <input type="text" placeholder="Email" />
			                </div>
			              </div>
			              <div className="col-6">
			                <div className="single-input-inner style-bg-border">
			                  <input type="text" placeholder="Savol mavzusi" />
			                </div>
			              </div>
			              <div className="col-12">
			                <div className="single-input-inner style-bg-border">
			                  <textarea placeholder="Xabar" defaultValue={""} />
			                </div>
			              </div>
			              <div className="col-12">
			                <button className="btn btn-base">Xabarni yuborish</button>
			              </div>
			            </div>
			          </form>
			        </div>
			      </div>
			    </div>
			  </div>
			  {/* counter area end */}
			  {/* contact area start */}
			  <div className="contact-g-map">
			    <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd" />
			  </div>
			</div>

        }
}

export default ContactPage
