import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class HowToWork extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="work-area pd-top-110 go-top">
			  <div className="container">
			    <div className="section-title">
			      <div className="row">
			        <div className="col-lg-6 align-self-center">
			          <h6 className="sub-title right-line">What we do</h6>
			          <h2 className="title">How it works?</h2>
			        </div>
			        <div className="col-lg-6 align-self-center">
			          <p className="content mt-lg-0">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs when MTV ax quiz</p>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/12.png"} alt="img" />
			            <div className="intro-count">1</div>
			          </div>
			          <div className="details">
			            <h5>Sign up</h5>
			            <p>Ipsum yorem dolor amet sit  elit. Duis at est id leosco for it</p>
			            <Link className="read-more-text" to="/course-details">Read More <i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/13.png"} alt="img" />
			            <div className="intro-count">2</div>
			          </div>
			          <div className="details">
			            <h5>Select course</h5>
			            <p>Ipsum yorem dolor amet sit  elit. Duis at est id leosco for it</p>
			            <Link className="read-more-text" to="/course-details">Read More <i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/14.png"} alt="img" />
			            <div className="intro-count">3</div>
			          </div>
			          <div className="details">
			            <h5>Start Learning</h5>
			            <p>Ipsum yorem dolor amet sit  elit. Duis at est id leosco for it</p>
			            <Link className="read-more-text" to="/course-details">Read More <i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-6">
			        <div className="single-intro-inner style-icon-bg bg-gray text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/icon/15.png"} alt="img" />
			            <div className="intro-count">4</div>
			          </div>
			          <div className="details">
			            <h5>Get Certificate</h5>
			            <p>Ipsum yorem dolor amet sit  elit. Duis at est id leosco for it</p>
			            <Link className="read-more-text" to="/course-details">Read More <i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default HowToWork