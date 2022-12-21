import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Funfact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="counter-area bg-gray">
			  <div className="container">
			    <div className="counter-area-inner pd-top-120 pd-bottom-120" style={{backgroundImage: 'url("'+publicUrl+'assets/img/other/1.png")'}}>
			      <div className="row">
			        <div className="col-lg-8 mb-5 mb-lg-0">
			          <div className="section-title mb-0">
			            <h6 className="sub-title right-line">Funfact</h6>
			            <h2 className="title">Strength in Numbers</h2>
			            <p className="content pb-3">The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy</p>
			            <div className="btn-counter bg-base mt-4">
			              <h3 className="left-val align-self-center"><span className="counter">2.4</span>k+</h3>
			              <div className="right-val align-self-center">
			                Successful <br /> students
			              </div>
			            </div>
			          </div>
			        </div>
			        <div className="col-lg-4 align-self-center">
			          <ul className="single-list-wrap">
			            <li className="single-list-inner style-box-bg">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/1.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5><span className="counter">1200</span>+</h5>
			                  <p>Learners &amp; counting</p>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-box-bg">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/2.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5><span className="counter">320</span>+</h5>
			                  <p>Total courses</p>
			                </div>
			              </div>
			            </li>
			            <li className="single-list-inner style-box-bg">
			              <div className="media">
			                <div className="media-left">
			                  <img src={publicUrl+"assets/img/icon/3.png"} alt="img" />
			                </div>
			                <div className="media-body align-self-center">
			                  <h5><span className="counter">1340</span>+</h5>
			                  <p>Successful students</p>
			                </div>
			              </div>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Funfact