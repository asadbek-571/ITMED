import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Gallery extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="team-area pd-top-120 pd-bottom-90 go-top">
			  <div className="container">
				  <div className="row justify-content-center">
					  <div className="col-xl-6 col-lg-7">
						  <div className="section-title text-center">
							  <h6 className="sub-title double-line">UNVERSITET HAYOTI</h6>
							  {/*<h2 className="title">Our Creative Team</h2>*/}
						  </div>
					  </div>
				  </div>			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/about/room.jpg"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>IT MED University</span>
			            {/*<h4><Link to="/about">Furus fermentum </Link></h4>*/}
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/about/room2.jpg"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>IT MED University</span>
			            {/*<h4><Link to="/about">Sadip fermentum</Link></h4>*/}
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/about/room3.jpg"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>IT MED University</span>
			            {/*<h4><Link to="/about">Furus fermentum</Link></h4>*/}
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/about/room4.jpg"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>IT MED University</span>
			            {/*<h4><Link to="/about">Fermentum Cons</Link></h4>*/}
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/about/room5.jpg"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>IT MED University</span>
			            {/*<h4><Link to="/about">Furus fermentum</Link></h4>*/}
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/about/university.jpg"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>IT MED University</span>
			            {/*<h4><Link to="/about">Pscing fermentum </Link></h4>*/}
			          </div>  
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Gallery
