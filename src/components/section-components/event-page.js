import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class EventPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="eventPage-area pd-top-120 pd-bottom-120 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="media single-eventPage-inner">
			          <div className="media-left date">
			            <span>JAN</span><br/>
			            12
			          </div>
			          <div className="media-body details">
			            <ul className="blog-meta">
			              <li><i className="fa fa-clock-o" /> 12:00 AM  To 11:59 PM</li>
			              <li><i className="fa fa-map-marker" /> Melbourne, Australia</li>
			            </ul>
			            <h5><Link to="/eventPage-details">The quick, brown fox jumps over a lazy by when MTV ax</Link></h5>
			            <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="media single-eventPage-inner">
			          <div className="media-left date">
			            <span>JAN</span><br/>
			            23
			          </div>
			          <div className="media-body details">
			            <ul className="blog-meta">
			              <li><i className="fa fa-clock-o" /> 12:00 AM  To 11:59 PM</li>
			              <li><i className="fa fa-map-marker" /> Melbourne, Australia</li>
			            </ul>
			            <h5><Link to="/eventPage-details">jumps over a lazy by The quick, brown fox when MTV ax</Link></h5>
			            <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="media single-eventPage-inner">
			          <div className="media-left date">
			            <span>JAN</span><br/>
			            26
			          </div>
			          <div className="media-body details">
			            <ul className="blog-meta">
			              <li><i className="fa fa-clock-o" /> 12:00 AM  To 11:59 PM</li>
			              <li><i className="fa fa-map-marker" /> Melbourne, Australia</li>
			            </ul>
			            <h5><Link to="/eventPage-details">when MTV ax The quick, brown fox jumps over a lazy by</Link></h5>
			            <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="media single-eventPage-inner">
			          <div className="media-left date">
			            <span>JAN</span><br/>
			            30
			          </div>
			          <div className="media-body details">
			            <ul className="blog-meta">
			              <li><i className="fa fa-clock-o" /> 12:00 AM  To 11:59 PM</li>
			              <li><i className="fa fa-map-marker" /> Melbourne, Australia</li>
			            </ul>
			            <h5><Link to="/eventPage-details">Fox nymphs grab fox jumps over a lazy by when MTV ax</Link></h5>
			            <p>The quick, brown quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="media single-eventPage-inner">
			          <div className="media-left date">
			            <span>FEB</span><br/>
			            22
			          </div>
			          <div className="media-body details">
			            <ul className="blog-meta">
			              <li><i className="fa fa-clock-o" /> 12:00 AM  To 11:59 PM</li>
			              <li><i className="fa fa-map-marker" /> Melbourne, Australia</li>
			            </ul>
			            <h5><Link to="/eventPage-details">Melbourne brown fox jumps over a lazy by when MTV ax</Link></h5>
			            <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="media single-eventPage-inner">
			          <div className="media-left date">
			            <span>FEB</span><br/>
			            25
			          </div>
			          <div className="media-body details">
			            <ul className="blog-meta">
			              <li><i className="fa fa-clock-o" /> 12:00 AM  To 11:59 PM</li>
			              <li><i className="fa fa-map-marker" /> Melbourne, Australia</li>
			            </ul>
			            <h5><Link to="/eventPage-details">The quick, brown fox jumps over a lazy by when MTV ax</Link></h5>
			            <p>Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-12">
			        <nav className="td-page-navigation text-center">
			          <ul className="pagination">
			            <li className="pagination-arrow"><Link to="#"><i className="fa fa-angle-double-left" /></Link></li>
			            <li><Link to="#">1</Link></li>
			            <li><Link className="active" to="#">2</Link></li>
			            <li><Link to="#">...</Link></li>
			            <li><Link to="#">3</Link></li>
			            <li className="pagination-arrow"><Link to="#"><i className="fa fa-angle-double-right" /></Link></li>
			          </ul>
			        </nav>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default EventPage
