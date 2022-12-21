import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Instructor extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="team-area pd-top-120 pd-bottom-70 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/1.png"} alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" href="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Doris Jordan</Link></h4>
			            <span>Design Expert</span>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/2.png" }alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" href="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Eugen Freman</Link></h4>
			            <span>Executive</span>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/3.png"} alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" href="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Jaction Leo</Link></h4>
			            <span>Developer</span>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/4.png"} alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" href="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Doris Jordan</Link></h4>
			            <span>Design Expert</span>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/5.png"} alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" to="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Eugen Freman</Link></h4>
			            <span>Executive</span>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-team-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/team/6.png"} alt="img" />
			            <div className="social-wrap">  
			              <div className="social-wrap-inner">
			                <a className="social-share" href="#"><i className="fa fa-share-alt" /></a>
			                <ul>
			                  <li><a href="#"><i className="fa fa-facebook" /></a></li>
			                  <li><a href="#"><i className="fa fa-twitter" /></a></li>
			                  <li><a href="#"><i className="fa fa-pinterest" /></a></li>
			                  <li><a href="#"><i className="fa fa-linkedin" /></a></li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          <div className="details"> 
			            <h4><Link to="/instructor-details">Jaction Leo</Link></h4>
			            <span>Developer</span>
			          </div>  
			        </div>
			      </div>
			    </div>
			  </div>
			  &lt;
			</div>
        }
}

export default Instructor