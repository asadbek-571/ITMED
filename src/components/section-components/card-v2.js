import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CardV2 extends Component {

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
			              <h5 className="title">TARAQQIYOTNING TAMAL TOSHI HAM, MAMLAKATNI QUDRATLI MILLATNI BUYUK QILADIGAN KUCH HAM ILM-FAN, TA'LIM VA TARBIYADIR</h5>
			              <p className="content text-lg-right">Shavkat Mirziyoyev</p>
			              <div className="row">
			                <div className="col-sm-6">
			                  <ul className="single-list-wrap">
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Metus interdum metus
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Ligula cur maecenas
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Fringilla nulla
			                    </li>
			                  </ul>
			                </div>
			                <div className="col-sm-6">
			                  <ul className="single-list-wrap">
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Metus interdum metus
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Ligula cur maecenas
			                    </li>
			                    <li className="single-list-inner style-check-box">
			                      <i className="fa fa-check" /> Fringilla nulla
			                    </li>
			                  </ul>
			                </div>
			              </div>
			              <Link className="btn btn-border-black " to="/about">Read More</Link>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default CardV2
