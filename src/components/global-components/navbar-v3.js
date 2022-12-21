import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV3 extends Component {

 componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'home-3' );

 }
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
			<div className="navbar-area">
			  <nav className="navbar navbar-area-3 navbar-area navbar-expand-lg">
			    <div className="container nav-container">
			      <div className="responsive-mobile-menu">
			        <button className="menu toggle-btn d-block d-lg-none" data-target="#edumint_main_menu" aria-expanded="false" aria-label="Toggle navigation">
			          <span className="icon-left" />
			          <span className="icon-right" />
			        </button>
			      </div>
			      <div className="logo">
			        <Link to="/"><img src={publicUrl+"assets/img/logo-2.png"} alt="img" /></Link>
			      </div>
			      <div className="nav-right-part nav-right-part-mobile">
			        <Link className="btn btn-base" to="/sign-up">Sign Up</Link>
			      </div>
			      <div className="collapse navbar-collapse go-top" id="edumint_main_menu">
			        <ul className="navbar-nav menu-open">
			          <li className="menu-item-has-children current-menu-item">
			            <Link to="/">Home</Link>
			            <ul className="sub-menu">
				            <li><Link to="/">Home 01</Link></li>
	                        <li><Link to="/home-v2">Home 02</Link></li>
	                        <li><Link to="/home-v3">Home 03</Link></li>
			            </ul>
			          </li>
			          <li className="menu-item-has-children">
			            <Link to="/course">Course</Link>
			            <ul className="sub-menu">
			              <li><Link to="/course">Course</Link></li>
                          <li><Link to="/course-details">Course Single</Link></li>
			            </ul>
			          </li>
			          <li className="menu-item-has-children">
			            <a href="#">Pages</a>
			            <ul className="sub-menu">
				            <li><Link to="/about">About Us</Link></li>
	                        <li><Link to="/eventPage">Event</Link></li>
	                        <li><Link to="/eventPage-details">Event Details</Link></li>
	                        <li><Link to="/instructor">Instructor</Link></li>
	                        <li><Link to="/instructor-details">Instructor Details</Link></li>
	                        <li><Link to="/pricing">Pricing</Link></li>
	                        <li><Link to="/gallery">Gallery</Link></li>
	                        <li><Link to="/sign-in">Sign In</Link></li>
	                        <li><Link to="/sign-up">Sign Up</Link></li>
			            </ul>
			          </li>
			          <li className="menu-item-has-children">
			            <Link to="/blog">Blog</Link>
			            <ul className="sub-menu">
				           <li><Link to="/blog">Blog</Link></li>
	                       <li><Link to="/blog-details">Blog Details</Link></li>
			            </ul>
			          </li>
			          <li><Link to="/contact">Contact Us</Link></li>
			        </ul>
			      </div>
			      <div className="nav-right-part nav-right-part-desktop style-black">
			        <div className="emt-phone-wrap">
			          <div className="emt-phone">
			            <i className="fa fa-phone" />
			            <div className="phone-number align-self-center">
			              Call Us <br />
			              <span>860 -272 -9738</span>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </nav>
			</div>
        )
    }
}


export default NavbarV3
