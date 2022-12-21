import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="testimonial-area pd-top-90 pd-bottom-110">
			  <div className="container">
			    <div className="testimonial-slider-3 owl-carousel">
			      <div className="item">
			        <div className="single-testimonial-inner">
			          <div className="media testimonial-author mb-4">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/author/1.png"} alt="img" />
			              <i className="fa fa-quote-left" />
			            </div>
			            <div className="media-body align-self-center">
			              <h6>Eugene Freeman</h6>
			              <p>Tincidunt</p>
			            </div>
			          </div>
			          <span className="testimonial-quote"><i className="fa fa-quote-left" /></span>
			          <p className="mb-0">Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
			        </div>
			      </div>
			      <div className="item">
			        <div className="single-testimonial-inner">
			          <div className="media testimonial-author mb-4">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/author/2.png"} alt="img" />
			              <i className="fa fa-quote-left" />
			            </div>
			            <div className="media-body align-self-center">
			              <h6>Freeman Ugene</h6>
			              <p>Tincidunt</p>
			            </div>
			          </div>
			          <span className="testimonial-quote"><i className="fa fa-quote-left" /></span>
			          <p className="mb-0">Lorem ipsum dolor sit amet, elitr, sed diam volu sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default TestimonialV3