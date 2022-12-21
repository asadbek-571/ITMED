import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
class BlogDetails extends Component {

componentDidMount() {

    const $ = window.$;

     $( '.footer-area.style-two' ).removeClass( 'mg-top-100' );

   }
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

    return (
		<div className="blog-area pd-top-120 pd-bottom-120">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="blog-details-page-content">
		          <div className="single-blog-inner">
		            <div className="thumb">
		              <img src={publicUrl+"assets/img/blog/4.png"} alt="img" />
		            </div>
		            <div className="details">
		              <ul className="blog-meta">
		                <li><i className="fa fa-user" /> BY ADMIN</li>
		                <li><i className="fa fa-calendar-check-o" /> 28 JANUARY, 2020</li>
		              </ul>
		              <h3 className="title">Flock by when MTV ax quiz prog quiz graced</h3>
		              <p>Lorem ipsum dolor sit amet, elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
		              <blockquote>
		                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam. 
		                <h6 className="mb-0 mt-2">Marilyn Gilbert</h6>
		              </blockquote>
		              <p>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
		              <div className="thumb mb-4">
		                <img src={publicUrl+"assets/img/blog/single.png"} alt="img" />
		              </div>
		              <h5>AMC Entertainment sparks calls for scrutiny</h5>
		              <p>labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam</p>
		              <ul className="single-list-wrap">
		                <li className="single-list-inner style-check">
		                  <i className="fa fa-check" />  Stet clita kasd gubergren, no sea takimata sanctus
		                </li>
		                <li className="single-list-inner style-check">
		                  <i className="fa fa-check" /> Ligula cur maecenas no sea takimata
		                </li>
		                <li className="single-list-inner style-check">
		                  <i className="fa fa-check" /> Fringilla nulla maecenas
		                </li>
		              </ul>
		            </div>
		          </div>
		          <div className="tag-and-share">
		            <div className="row">
		              <div className="col-sm-6">
		                <h6>Related Tags :</h6>
		                <div className="tags">
		                  <a href="#">Treands, </a>
		                  <a href="#">Inttero, </a>
		                  <a href="#">Estario</a>
		                </div>
		              </div>
		              <div className="col-sm-6 text-sm-right">
		                <div className="blog-share">
		                  <h6>Share :</h6>
		                  <ul>
		                    <li><a href="#"><i className="fa fa-facebook-f" aria-hidden="true" /></a></li>
		                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
		                    <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
		                    <li><a href="#"><i className="fa fa-behance" aria-hidden="true" /></a></li>
		                  </ul>
		                </div>
		              </div>  
		            </div>
		          </div>
		          <div className="blog-comment">
		            <div className="section-title style-small">
		              <h3>Comments</h3>
		            </div>
		            <div className="media">
		              <a href="#">
		                <img src={publicUrl+"assets/img/team/1.png"} alt="comment" />
		              </a>
		              <div className="media-body">
		                <h5>
		                  <a href="#">Aaron Holmes</a>
		                  <span className="date">25 July 2020</span>
		                </h5>
		                <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies</p>
		                <a href="#">REPLY</a>
		              </div>
		            </div>
		            <div className="media nesting">
		              <a href="#">
		                <img src={publicUrl+"assets/img/team/2.png"} alt="comment" />
		              </a>
		              <div className="media-body">
		                <h5>
		                  <a href="#">Aaron Holmes</a>
		                  <span className="date">25 July 2020</span>
		                </h5>
		                <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus</p>
		                <a href="#">REPLY</a>
		              </div>
		            </div>
		            <div className="media border-0">
		              <a href="#">
		                <img src={publicUrl+"assets/img/team/3.png"} alt="comment" />
		              </a>
		              <div className="media-body">
		                <h5>
		                  <a href="#">Aaron Holmes</a>
		                  <span className="date">25 July 2020</span>
		                </h5>
		                <p>Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies</p>
		                <a href="#">REPLY</a>
		              </div>
		            </div>
		          </div> 
		          <form className="blog-comment-form">
		            <div className="mb-3">
		              <h3 className="mb-0">Leave a Reply</h3>
		            </div>
		            <div className="row">
		              <div className="col-md-6">
		                <div className="single-input-inner style-bg-border">
		                  <input type="text" placeholder="Name" />
		                </div>
		              </div>
		              <div className="col-md-6">
		                <div className="single-input-inner style-bg-border">
		                  <input type="text" placeholder="Email" />
		                </div>
		              </div>
		              <div className="col-12">
		                <div className="single-input-inner style-bg-border">
		                  <textarea placeholder="Message" defaultValue={""} />
		                </div>
		              </div>
		              <div className="col-12">
		                <button className="btn btn-base">Post Comment</button>
		              </div>
		            </div>
		          </form> 
		        </div>
		      </div>
		       <Sidebar />
		    </div>
		  </div>
		</div>


    )
  }
}

export default BlogDetails;
