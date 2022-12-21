import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

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
							<div className="col-lg-4 col-md-6">
								<div className="widget widget_about text-center">
									<a href="index.html"><img src={publicUrl + "assets/img/logoITMED.png"} alt="img" /></a>
									<div className="details">
										<p>Bizning ijtimoiy sahifalar</p>
										<ul className="social-media">
											<li><a href="https://www.facebook.com/solverwp/"><i className="fa fa-facebook" /></a></li>
											<li><a href="https://www.twitter.com/solverwp"><i className="fa fa-twitter" /></a></li>
											<li><a href="https://www.youtube.com/solverwp/"><i className="fa fa-instagram" /></a></li>
											<li><a href="https://www.pinterest.com/solverwp/"><i className="fa fa-pinterest" /></a></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-4 col-md-6">
								<div className="widget widget_contact">
									<h4 className="widget-title">Bog'lanish</h4>
									<ul className="details">
										<li><i className="fa fa-map-marker" />Manzil</li>
										<li><i className="fa fa-envelope" />imun@gmail.com</li>
										<li><i className="fa fa-phone" />+9989 (99) 999-99-99</li>
									</ul>
								</div>
							</div>

							<div className="col-lg-4 col-md-6">
								<div className="widget widget_nav_menu">
									<h4 className="widget-title">Fakultetlar</h4>
									<ul className="go-top">
										<li><Link to="/blog">Tibbiyot</Link></li>
										<li><Link to="/blog">Axborot texnalogyalari</Link></li>
										<li><Link to="/blog">Pedagogika</Link></li>
										<li><Link to="/blog">Iqtisodiyot</Link></li>
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
								<p>Copyright  2022 by imun.uz</p>
							</div>
							<div className="col-md-7 text-md-right align-self-center mt-md-0 mt-2">
								<div className="widget_nav_menu">
									<ul className="go-top">
										<li><Link to="/">Bosh sahifa</Link></li>
										<li><Link to="/about">Biz haqimizda</Link></li>
										<li><Link to="/blog">Universitet</Link></li>
										<li><Link to="/pricing">Yangiliklar</Link></li>
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


export default Footer
