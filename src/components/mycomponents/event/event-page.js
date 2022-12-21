import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
const eventPage=[
	{
	topic:"Tadbir mavzusi",
	month:"Yanvar",
	day:"2"
},	{
	topic:"Tadbir mavzusi",
	month:"Yanvar",
	day:"2"
},	{
	topic:"Tadbir mavzusi",
	month:"Yanvar",
	day:"2"
},
]
class Event extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="events-area pd-top-110 pd-bottom-120 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-xl-6 col-lg-7 col-md-11">
			        <div className="section-title text-center">
			          <h6 className="sub-title double-line">TADBIRLAR</h6>
			        </div>
			      </div>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-8">
			        <ul className="single-blog-list-wrap style-white" style={{backgroundColor: 'var(--heading-color)'}}>
						{eventPage.map((value, index) => (
							<li key={index}>
								<div className="media single-blog-list-inner style-white">
									<div className="media-left date">
										<span>{value.month}</span><br/>
										{value.day}
									</div>
									<div className="media-body details">
										<ul className="blog-meta">
											<li><i className="fa fa-user" />Admin</li>
											<li><i className="fa fa-folder-open-o" />Tadbirlar</li>
										</ul>
										<h5><Link to="/event-details">{value.topic}</Link></h5>
									</div>
								</div>
							</li>
						))}
			        </ul>
			      </div>
			      <div className="col-lg-4 align-self-center">
			        <div className="event-thumb">
			          <img src={publicUrl+"assets/img/other/events.png"} alt="img" />
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Event
