import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-3 bg-black go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-5 col-md-10">
			        <div className="thumb b-animate-thumb">
			          <img src={publicUrl+"assets/img/banner/3.png"} alt="img" />
			        </div>
			      </div>
			      <div className="col-lg-7 align-self-center mt-5 mt-lg-0">
			        <div className="banner-inner style-white text-center text-lg-left">
			          <h6 className="b-animate-1 banner-btn">PLACE TO GROW</h6>
			          <h1 className="b-animate-2 title">We creating leaders for tomorrow</h1>
			          <Link className="btn btn-base b-animate-3 mr-sm-3 mr-2" to="/blog">Get A Quote</Link>
			          <Link className="btn btn-border-white b-animate-3" to="/blog">Read More</Link>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default BannerV3