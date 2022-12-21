import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class AboutUniversityStrategy extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

           let SectionClass = this.props.sectionclass ? this.props.sectionclass : ''

    return <div className={"about-area pd-top-120 go-top "+SectionClass}>
			  <div className="container">
			    <div className="about-area-inner">
			      <div className="row">
			        <div className="col-lg-6 col-md-10">
			          <div className="about-thumb-wrap after-shape" style={{backgroundImage: 'url("'+publicUrl+'assets/img/about/university.jpg")'}}>
			          </div>
			        </div>
			        <div className="col-lg-6">
			          <div className="about-inner-wrap">  
			            <div className="section-title mb-0">
			              <h6 className="sub-title right-line">UNIVERSITET STRATEGIYASI</h6>
			              {/*<h5 className="title">Universitet strategiyasi</h5>*/}
			              <div className="row">
			                <div className="col-sm-6">
			                  <ul className="single-list-wrap">
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> 1-STRATEGIYA
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> 2-STRATEGIYA
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> 3-STRATEGIYA
			                    </li>
			                  </ul>
			                </div>
			                <div className="col-sm-6">
			                  <ul className="single-list-wrap">
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> 4-STRATEGIYA
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> 5-STRATEGIYA
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> 6-STRATEGIYA
			                    </li>
			                  </ul>
			                </div>
			              </div>
			              <Link className="btn btn-border-black " to="/about">Ko'proq</Link>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutUniversityStrategy
