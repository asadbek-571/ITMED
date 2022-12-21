import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV4 extends Component {

    componentDidMount() {

        const $ = window.$;

        $( 'body' ).removeClass( 'home-3' );

    }

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
            <div className="navbar-area">
                {/*<div className="navbar-top">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-8 text-md-left text-center">*/}
                {/*                <ul>*/}
                {/*                    <li><p><i className="fa fa-map-marker" /> 2072 Pinnickinick Street, WA 98370</p></li>*/}
                {/*                    <li><p><i className="fa fa-envelope-o" />  info@website.com</p></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*            <div className="col-md-4">*/}
                {/*                <ul className="topbar-right text-md-right text-center">*/}
                {/*//                     <li className="social-area">*/}
                {/*//                         <a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a>*/}
                {/*                        <a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a>*/}
                {/*                        <a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a>*/}
                {/*                        <a href="#"><i className="fa fa-pinterest" aria-hidden="true" /></a>*/}
                {/*                    </li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <nav className="navbar bg-white navbar-area-1 navbar-area navbar-expand-lg go-top">
                    <div className="container nav-container">
                        <div className="responsive-mobile-menu">
                            <button className="menu toggle-btn d-block d-lg-none" data-target="#edumint_main_menu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-left" />
                                <span className="icon-right" />
                            </button>
                        </div>
                        <div className="logo">
                            <Link to="/"><img src={publicUrl+"assets/img/logoITMED.png"} alt="img" /></Link>
                        </div>
                        <div className="nav-right-part nav-right-part-mobile">
                            <Link className="signin-btn" to="/sign-in">Sign In</Link>
                            <Link className="btn btn-base" to="/sign-up">Sign Up</Link>
                            <a className="search-bar" href="#"><i className="fa fa-search" /></a>
                        </div>
                        <div className="collapse navbar-collapse" id="edumint_main_menu">
                            <ul className="navbar-nav menu-open">
                                <li className=" current-menu-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li >
                                    <Link to="/about">Unversitet</Link>
                                </li>
                                <li className="menu-item-has-children">
                                    <a href="#">Sahifalar</a>
                                    <ul className="sub-menu">
                                        <li><Link to="/leabary">Biz haqimizda</Link></li>
                                        <li><Link to="/eventPage">Tadbirlar</Link></li>
                                        <li><Link to="/instructor">O'qtuvchilar</Link></li>
                                        <li><Link to="/sign-in">Kirish</Link></li>
                                        <li><Link to="/sign-up">Ro'yhatdan o'tish</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/contact">Bog'lanish</Link></li>
                            </ul>
                        </div>
                        <div className="nav-right-part nav-right-part-desktop">
                            <Link className="signin-btn" to="/sign-in">Kirish</Link>
                            <Link className="btn btn-base" to="/sign-up">Ro'yhatdan o'tish</Link>
                            <a className="search-bar" href="#"><i className="fa fa-search" /></a>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}


export default NavbarV4
