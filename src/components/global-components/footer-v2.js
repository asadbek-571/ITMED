import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<footer className="footer-area footer-area-2 bg-gray">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_about text-center">
									<a href="index.html"><img src={publicUrl + "assets/img/logo-3.png"} alt="img" /></a>
									<div className="details">
										<p>Edumint tetur sadipscing elitr tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
										<ul className="social-media">
											<li><a href="https://www.facebook.com/solverwp/"><i className="fa fa-facebook" /></a></li>
											<li><a href="https://www.twitter.com/solverwp"><i className="fa fa-twitter" /></a></li>
											<li><a href="https://www.youtube.com/solverwp/"><i className="fa fa-instagram" /></a></li>
											<li><a href="https://www.pinterest.com/solverwp/"><i className="fa fa-pinterest" /></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_contact">
									<h4 className="widget-title">Contact Us</h4>
									<ul className="details">
										<li><i className="fa fa-map-marker" /> 420 Love Sreet 133/2 Street NewYork</li>
										<li><i className="fa fa-envelope" /> info.contact@gmail.com</li>
										<li><i className="fa fa-phone" /> 012 345 678 9101</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_blog_list">
									<h4 className="widget-title">News &amp; Blog</h4>
									<ul>
										<li>
											<h6><Link to="/blog-details">Big Ideas Of Business Branding Info.</Link></h6>
											<span className="date"><i className="fa fa-calendar" />December 7, 2021</span>
										</li>
										<li>
											<h6><Link to="/blog-details">Ui/Ux Ideas Of Business Branding Info.</Link></h6>
											<span className="date"><i className="fa fa-calendar" />December 7, 2021</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-lg-3 col-md-6">
								<div className="widget widget_nav_menu">
									<h4 className="widget-title">Course</h4>
									<ul className="go-top">
										<li><Link to="/blog">Branding design</Link></li>
										<li><Link to="/blog">Ui/Ux designing </Link></li>
										<li><Link to="/blog">Make Elements</Link></li>
										<li><Link to="/blog">Business</Link></li>
										<li><Link to="/blog">Graphics design</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-bottom">
					<div className="container">
						<div className="row">
							<div className="col-md-5 align-self-center">
								<p>Copyright 2022 by solverwp.com</p>
							</div>
							<div className="col-md-7 text-md-right align-self-center mt-md-0 mt-2">
								<div className="widget_nav_menu">
									<ul className="go-top">
										<li><Link to="/">Home</Link></li>
										<li><Link to="/about">About Us</Link></li>
										<li><Link to="/pricing">Our Pricing</Link></li>
										<li><Link to="/blog">blog</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>

		)
	}
}


export default Footer_v2
