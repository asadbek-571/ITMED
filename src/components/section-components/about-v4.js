import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="about-area pd-top-100 pd-bottom-100" style={{backgroundImage: 'url("'+publicUrl+'assets/img/bg/2.png")'}}>
			  <div className="container">
			    <div className="about-area-inner">
			      <div className="row">
			        <div className="col-lg-6 order-lg-12 align-self-center">
			          <img src={publicUrl+"assets/img/about/4.png"} alt="img" />
			        </div>
			        <div className="col-lg-6 order-lg-1 align-self-center mt-4 mt-lg-0">
			          <div className="about-inner-wrap">  
			            <div className="section-title mb-0">
			              <h6 className="sub-title style-btn">ABOUT US</h6>
			              <h2 className="title">1230+ Courses Online from Best Tutors</h2>
			              <p className="content">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad</p>
			            </div>
			            <ul className="single-progress-inner mt-4 pt-2">
			              <li className="progress-item" id="progress-running-1">
			                <h6>Nullam est</h6>
			                <div className="progress-bg">
			                  <div id="progress-1" className="progress-rate" data-value={78}>
			                    <div className="progress-count-wrap">
			                      <span className="progress-count counting" data-count={78}>0</span>
			                      <span className="counting-icons">%</span>
			                    </div>
			                  </div>
			                </div>
			              </li>
			              <li className="progress-item" id="progress-running-2">
			                <h6>Mattis dictum nunc</h6>
			                <div className="progress-bg">
			                  <div id="progress-2" className="progress-rate" data-value={60}>
			                    <div className="progress-count-wrap">
			                      <span className="progress-count counting" data-count={60}>0</span>
			                      <span className="counting-icons">%</span>
			                    </div>
			                  </div>
			                </div>
			              </li>
			              <li className="progress-item" id="progress-running-3">
			                <h6>Malesuada dictum</h6>
			                <div className="progress-bg">
			                  <div id="progress-3" className="progress-rate" data-value={86}>
			                    <div className="progress-count-wrap">
			                      <span className="progress-count counting" data-count={86}>0</span>
			                      <span className="counting-icons">%</span>
			                    </div>
			                  </div>
			                </div>
			              </li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV4