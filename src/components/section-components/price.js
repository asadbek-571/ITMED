import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Price extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="pricing-area pd-top-280 pd-bottom-90 text-center" style={{backgroundImage: 'url('+publicUrl+'assets/img/bg/pricing-bg.png)'}}>
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-7 col-md-11">
			        <div className="section-title">
			          <h6 className="sub-title double-line">LET’S WORK</h6>
			          <h2 className="title">Pricing Plans</h2>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-pricing-inner-wrap">
			          <div className="single-pricing-inner">
			            <h6 className="title">BASIC</h6>
			            <div className="price-area">
			              <span>$59 </span>
			              / month
			            </div>
			            <ul className="pricing-list">
			              <li><i className="fa fa-check" />Branding graphics design</li>
			              <li><i className="fa fa-check" />Lifetime free support</li>
			              <li><i className="fa fa-check" />Web devolopment course</li>
			              <li><i className="fa fa-check" />Unlimited free revision </li>
			              <li className="unable"><i className="fa fa-times" />Lifetime devolopment</li>
			              <li className="unable"><i className="fa fa-times" />Unlimited free revision </li>
			            </ul>
			            <Link className="btn btn-base btn-radius w-100" to="#">GET STARTED</Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-pricing-inner-wrap">
			          <div className="single-pricing-inner">
			            <h6 className="title">STANDARD</h6>
			            <div className="price-area">
			              <span>$99 </span>
			              / month
			            </div>
			            <ul className="pricing-list">
			              <li><i className="fa fa-check" />Branding graphics design</li>
			              <li><i className="fa fa-check" />Lifetime free support</li>
			              <li><i className="fa fa-check" />Web devolopment course</li>
			              <li><i className="fa fa-check" />Unlimited free revision </li>
			              <li className="unable"><i className="fa fa-times" />Lifetime devolopment</li>
			              <li className="unable"><i className="fa fa-times" />Unlimited free revision </li>
			            </ul>
			            <Link className="btn btn-base btn-radius w-100" to="#">GET STARTED</Link>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-pricing-inner-wrap">
			          <div className="single-pricing-inner">
			            <h6 className="title">PLATINUM</h6>
			            <div className="price-area">
			              <span>$211</span>
			              / month
			            </div>
			            <ul className="pricing-list">
			              <li><i className="fa fa-check" />Branding graphics design</li>
			              <li><i className="fa fa-check" />Lifetime free support</li>
			              <li><i className="fa fa-check" />Web devolopment course</li>
			              <li><i className="fa fa-check" />Unlimited free revision </li>
			              <li className="unable"><i className="fa fa-times" />Lifetime devolopment</li>
			              <li className="unable"><i className="fa fa-times" />Unlimited free revision </li>
			            </ul>
			            <Link className="btn btn-base btn-radius w-100" to="#">GET STARTED</Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Price