import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class UpcomingEvent extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="events-area pd-top-110 pd-bottom-120 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-7 col-md-11">
			        <div className="section-title text-center">
			          <h6 className="sub-title double-line">EVENTS</h6>
			          <h2 className="title">Upcoming Events</h2>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-8">
			        <ul className="single-blog-list-wrap style-white" style={{backgroundColor: 'var(--heading-color)'}}>
			          <li>
			            <div className="media single-blog-list-inner style-white">
			              <div className="media-left date">
			                <span>JAN</span><br/>
			                20
			              </div>
			              <div className="media-body details">
			                <ul className="blog-meta">
			                  <li><i className="fa fa-user" /> BY ADMIN</li>
			                  <li><i className="fa fa-folder-open-o" /> Air transport</li>
			                </ul>
			                <h5><Link to="/blog-details">Clone sit amet, consec tetur elit</Link></h5>
			              </div>
			            </div>
			          </li>
			          <li>
			            <div className="media single-blog-list-inner">
			              <div className="media-left date">
			                <span>FEB</span><br/>
			                26
			              </div>
			              <div className="media-body details">
			                <ul className="blog-meta">
			                  <li><i className="fa fa-user" /> BY ADMIN</li>
			                  <li><i className="fa fa-folder-open-o" /> Air transport</li>
			                </ul>
			                <h5><Link to="/blog-details">Maecenas interdum lorem eleifend</Link></h5>
			              </div>
			            </div>
			          </li>
			          <li>
			            <div className="media single-blog-list-inner">
			              <div className="media-left date">
			                <span>JAN</span><br/>
			                28
			              </div>
			              <div className="media-body details">
			                <ul className="blog-meta">
			                  <li><i className="fa fa-user" /> BY ADMIN</li>
			                  <li><i className="fa fa-folder-open-o" /> Air transport</li>
			                </ul>
			                <h5><Link to="/blog-details">Nunc scelerisque tincidunt elit. </Link></h5>
			              </div>
			            </div>
			          </li>
			        </ul>
			      </div>
			      <div className="col-lg-4 align-self-center">
			        <div className="eventPage-thumb">
			          <img src={publicUrl+"assets/img/other/events.png"} alt="img" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default UpcomingEvent
