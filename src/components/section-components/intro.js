import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Intro extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="intro-area intro-area--top">
			  <div className="container">
			    <div className="intro-area-inner intro-home-1 bg-black">
			      <div className="row no-gutters">
			        <div className="col-lg-4 text-lg-left text-center">
			          <div className="intro-title">
			            <h3>Vivamus maximus </h3>
			            <p>Lorem ipsum dolor sadipscing elitr, sed diam nonum</p>
			            <ul>
			              <li><i className="fa fa-check" /> Nullam est </li>
			              <li><i className="fa fa-check" /> Mattis dictum nunc</li>
			            </ul>
			          </div>
			        </div>
			        <div className="col-lg-8 align-self-center">
			          <ul className="row no-gutters">
			            <li className="col-md-4">
			              <div className="single-intro-inner style-white text-center">
			                <div className="thumb">
			                  <img src={publicUrl+"assets/img/intro/1.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h5>Postgraduate</h5>
			                  <p>Lorem ipsum dolor</p>
			                </div>
			              </div>
			            </li>
			            <li className="col-md-4">
			              <div className="single-intro-inner style-white text-center">
			                <div className="thumb">
			                  <img src={publicUrl+"assets/img/intro/2.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h5>Engineering</h5>
			                  <p>Lorem ipsum dolor</p>
			                </div>
			              </div>
			            </li>
			            <li className="col-md-4">
			              <div className="single-intro-inner style-white text-center">
			                <div className="thumb">
			                  <img src={publicUrl+"assets/img/intro/3.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h5>Accounting</h5>
			                  <p>Lorem ipsum dolor</p>
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

export default Intro