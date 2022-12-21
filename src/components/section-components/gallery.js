import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Gallery extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="team-area pd-top-120 pd-bottom-90 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/gallery/1.png"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>Consetetur Sadipscing</span>
			            <h4><Link to="/blog-details">Furus fermentum </Link></h4>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/gallery/2.png"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>Consetetur Sadipscing</span>
			            <h4><Link to="/blog-details">Sadip fermentum</Link></h4>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/gallery/3.png"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>Consetetur Sadipscing</span>
			            <h4><Link to="/blog-details">Furus fermentum</Link></h4>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/gallery/4.png"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>Consetetur Sadipscing</span>
			            <h4><Link to="/blog-details">Fermentum Cons</Link></h4>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/gallery/5.png"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>Consetetur Sadipscing</span>
			            <h4><Link to="/blog-details">Furus fermentum</Link></h4>
			          </div>  
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-gallery-inner">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/gallery/6.png"} alt="img" />
			          </div>
			          <div className="details"> 
			            <span>Consetetur Sadipscing</span>
			            <h4><Link to="/blog-details">Pscing fermentum </Link></h4>
			          </div>  
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Gallery