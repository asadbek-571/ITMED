import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-1 bg-gray go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-5 col-md-8 order-lg-12 align-self-center">
			        <div className="thumb b-animate-thumb">
			          <img src={publicUrl+"assets/img/bg/1.png"} alt="img" />
			        </div>
			      </div>
			      <div className="col-lg-7 order-lg-1 align-self-center">
			        <div className="banner-inner text-center text-lg-left mt-5 mt-lg-0">
			          <h6 className="b-animate-1 sub-title">DISCOVER RESEARCH</h6>
			          <h1 className="b-animate-2 title">A better learning future starts here</h1>
			          <Link className="btn btn-base b-animate-3 mr-sm-3 mr-2" to="/contact">Get A Quote</Link>
			          <Link className="btn btn-border-black b-animate-3" to="/blog-details">Read More</Link>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default Banner
