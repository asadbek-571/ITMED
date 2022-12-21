import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
class Blog extends Component {


  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
		<div className="blog-area pd-top-120 pd-bottom-120 go-top">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8">
		        <div className="single-blog-inner style-border">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/4.png"} alt="img" />
		          </div>
		          <div className="details">
		            <ul className="blog-meta">
		              <li><i className="fa fa-user" /> BY ADMIN</li>
		              <li><i className="fa fa-calendar-check-o" /> 28 JANUARY, 2020</li>
		            </ul>
		            <h3 className="title"><Link to="/blog-details">Flock by when MTV ax quiz prog quiz graced</Link></h3>
		            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
		            <a className="read-more-text" to="/blog-details">READ MORE <i className="fa fa-angle-right" /></a>
		          </div>
		        </div>
		        <div className="single-blog-inner style-border">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/5.png"} alt="img" />
		          </div>
		          <div className="details">
		            <ul className="blog-meta">
		              <li><i className="fa fa-user" /> BY ADMIN</li>
		              <li><i className="fa fa-calendar-check-o" /> 28 JANUARY, 2020</li>
		            </ul>
		            <h3 className="title"><Link to="/blog-details">Quisque suscipit ipsum est, eu venen leo</Link></h3>
		            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
		            <a className="read-more-text" to="/blog-details">READ MORE <i className="fa fa-angle-right" /></a>
		          </div>
		        </div>
		        <div className="single-blog-inner style-border">
		          <div className="thumb">
		            <img src={publicUrl+"assets/img/blog/6.png"} alt="img" />
		          </div>
		          <div className="details">
		            <ul className="blog-meta">
		              <li><i className="fa fa-user" /> BY ADMIN</li>
		              <li><i className="fa fa-calendar-check-o" /> 28 JANUARY, 2020</li>
		            </ul>
		            <h3 className="title"><Link to="/blog-details">When MTV ax quiz prog Flock by graced</Link></h3>
		            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
		            <a className="read-more-text" to="/blog-details">READ MORE <i className="fa fa-angle-right" /></a>
		          </div>
		        </div>
		        <nav className="td-page-navigation">
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
		      <Sidebar />
		    </div>
		  </div>
		</div>

    )
  }
}

export default Blog;
