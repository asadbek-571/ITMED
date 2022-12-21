import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Counter extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="counter-area mg-top--50">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-4">
			        <div className="single-list-inner style-box-bg">
			          <div className="media">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/icon/28.png"} alt="img" />
			            </div>
			            <div className="media-body align-self-center">
			              <h5><span className="counter">1200</span>+</h5>
			              <p>Learners &amp; counting</p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="single-list-inner style-box-bg">
			          <div className="media">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/icon/29.png"} alt="img" />
			            </div>
			            <div className="media-body align-self-center">
			              <h5><span className="counter">320</span>+</h5>
			              <p>Total courses</p>
			            </div>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <div className="single-list-inner style-box-bg">
			          <div className="media">
			            <div className="media-left">
			              <img src={publicUrl+"assets/img/icon/30.png"} alt="img" />
			            </div>
			            <div className="media-body align-self-center">
			              <h5><span className="counter">1340</span>+</h5>
			              <p>Successful students</p>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Counter