import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class IntroV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="intro-area intro-area--top go-top">
			  <div className="container">
			    <div className="intro-slider owl-carousel">
			      <div className="item">
			        <div className="single-intro-inner style-white bg-green text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/intro/7.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h5>Postgraduate</h5>
			            <Link className="read-more" to="/blog-details"><i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-intro-inner style-white bg-yellow text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/intro/8.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h5>Postgraduate</h5>
			            <Link className="read-more" to="/blog-details"><i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-intro-inner style-white bg-blue text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/intro/9.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h5>Postgraduate</h5>
			            <Link className="read-more" to="/blog-details"><i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-intro-inner style-white bg-red text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/intro/10.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h5>Postgraduate</h5>
			            <Link className="read-more" to="/blog-details"><i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-intro-inner style-white bg-deep-green text-center">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/intro/7.png"} alt="img" />
			          </div>
			          <div className="details">
			            <h5>Postgraduate</h5>
			            <Link className="read-more" to="/blog-details"><i className="fa fa-angle-right" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default IntroV3