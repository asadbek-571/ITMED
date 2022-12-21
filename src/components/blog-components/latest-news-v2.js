import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class LatestNewsV2 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
		<div className="blog-area pd-top-110 pd-bottom-90 go-top">
		  <div className="container">
		    <div className="row justify-content-center">
		      <div className="col-xl-6 col-lg-7">
		        <div className="section-title text-center">
		          <h6 className="sub-title double-line">Latest News</h6>
		          <h2 className="title">Our Insights &amp; Articles</h2>
		        </div>
		      </div>
		    </div>
		    <div className="row justify-content-center">
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/1.png"} alt="img" />
		            <span className="date">28 JANUARY, 2020</span>
		          </div>
		          <div className="details">
		            <ul className="blog-meta">
		              <li><i className="fa fa-user" /> BY ADMIN</li>
		              <li><i className="fa fa-folder-open-o" /> Air transport</li>
		            </ul>
		            <h5><Link to="/blog-details">Quisque suscipit ipsum est, eu venenatis leo</Link></h5>
		            <Link className="read-more-text" to="/blog-details">READ MORE <i className="fa fa-angle-right" /></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2.png"} alt="img" />
		            <span className="date">28 JANUARY, 2020</span>
		          </div>
		          <div className="details">
		            <ul className="blog-meta">
		              <li><i className="fa fa-user" /> BY ADMIN</li>
		              <li><i className="fa fa-folder-open-o" /> Air transport</li>
		            </ul>
		            <h5><Link to="/blog-details">Maecenas interdum lorem eleifend orci aliquam</Link></h5>
		            <Link className="read-more-text" to="/blog-details">READ MORE <i className="fa fa-angle-right" /></Link>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-4 col-md-6">
		        <div className="single-blog-inner">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/2.png"} alt="img" />
		            <span className="date">28 JANUARY, 2020</span>
		          </div>
		          <div className="details">
		            <ul className="blog-meta">
		              <li><i className="fa fa-user" /> BY ADMIN</li>
		              <li><i className="fa fa-folder-open-o" /> Air transport</li>
		            </ul>
		            <h5><Link to="/blog-details">Maecenas interdum lorem eleifend orci aliquam</Link></h5>
		            <Link className="read-more-text" to="/blog-details">READ MORE <i className="fa fa-angle-right" /></Link>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
    )
  }
}

export default LatestNewsV2;
