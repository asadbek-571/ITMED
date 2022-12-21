import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';
import client from "../../section-components/client";

const clientList = [
    {
        img: "Innovatsiya_vazirligi.png",
        link: "#"
    }, {
        img: "IT_park.png",
        link: "#"
    }, {
        img: "krasgmu.png",
        link: "#"
    }, {
        img: "Mkgacha_vazirlik.png",
        link: "#"
    }, {
        img: "namseoul_uni.png",
        link: "#"
    }, {
        img: "Oliy_ta_lim_vazirligi.png",
        link: "#"
    }, {
        img: "Pirogov_anatomy.png",
        link: "#"
    }, {
        img: "RTU_logo.png",
        link: "#"
    }, {
        img: "SQB_logo.png",
        link: "#"
    }, {
        img: "tashpmi_logo.png",
        link: "#"
    }, {
        img: "TTA_logo.png",
        link: "#"
    }, {
        img: "worlf_health.png",
        link: "#"
    },
]

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="client-area bg-base pd-top-60 pd-bottom-70"
                    style={{backgroundImage: 'url(' + publicUrl + 'assets/img/institute/bg.png)'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h6 className="sub-title double-line">HAMKORLAR</h6>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="institute-slider owl-carousel">
                            {
                                clientList.map((value, index) => (
                                    <div className="item" style={{
                                        width: "100px",
                                        height: "100px",
                                        backgroundImage: 'url("' + publicUrl + 'assets/img/institute/'+value.img+'")',
                                        backgroundSize:"cover"
                                    }}>
                                        {/*// < img width={'100%'} height={'100%'}  src={publicUrl + "assets/img/institute/" + value.img} alt="img"/>*/}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }
}

export default Client
