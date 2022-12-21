import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';


class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="banner-area banner-area-2"
                    style={{backgroundImage: 'url("' + publicUrl + 'assets/img/bg/pricing-bg.png")'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 align-self-center">
                        <div className="banner-inner style-white text-center text-lg-left">
                            <br/><br/>
                            <h6 className="b-animate-1 sub-title">2022 - 2023 -yil uchun qabul</h6>
                            <h1 className="b-animate-2 title">IT MED University</h1>

                            <Link className="m-3 btn btn-base b-animate-3 mr-sm-3 mr-2" to="/sign-up">
                                <div style={{width:"250px"}}>Ro'yxatdan o'tish</div>
                            </Link>
                            <Link className="btn btn-border-white b-animate-3 mr-2" to="/contact">
                                <div style={{width:"250px"}}>Biz bilan bog'lanish</div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    }
}

export default BannerV2
