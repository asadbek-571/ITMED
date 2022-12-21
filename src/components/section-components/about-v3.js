import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="about-area pd-top-120">
			  <div className="container">
			    <div className="about-area-inner">
			      <div className="row">
			        <div className="col-lg-6 col-md-10">
			          <div className="about-thumb-wrap style-two" style={{backgroundImage: 'url("'+publicUrl+'assets/img/about/3.png")'}}>
			          </div>
			        </div>
			        <div className="col-lg-6">
			          <div className="about-inner-wrap">  
			            <div className="section-title mb-0">
			              <h6 className="sub-title style-btn">ABOUT US</h6>
			              <h2 className="title">1230+ Courses Online from Best Tutors</h2>
			              <p className="content">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad</p>
			              <ul className="single-list-wrap">
			                <li className="single-list-inner style-box-2">
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/icon/23.png"} alt="img" />
			                    </div>
			                    <div className="media-body align-self-center">
			                      <h5 className="mb-2">Project Reporting</h5>
			                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun</p>
			                    </div>
			                  </div>
			                </li>
			                <li className="single-list-inner style-box-2">
			                  <div className="media">
			                    <div className="media-left">
			                      <img src={publicUrl+"assets/img/icon/24.png"} alt="img" />
			                    </div>
			                    <div className="media-body align-self-center">
			                      <h5 className="mb-2">Data Tracking</h5>
			                      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidun</p>
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
			</div>
        }
}

export default AboutV3