import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Pricing extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="pricing-area pd-top-120 pd-bottom-90">
			  <div className="container">
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
			              <span>$211 </span>
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

export default Pricing