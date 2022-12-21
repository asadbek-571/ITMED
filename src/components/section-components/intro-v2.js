import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const faculty = [
    {
        name: "Tibbiyot",
        img: "assets/img/intro/medical.png",
        link: "#"
    }, {
        name: "Axborot texnologiyalari",
        img: "assets/img/intro/programmer.png",
        link: "#"
    }, {
        name: "Pedagogika",
        img: "assets/img/intro/teach.png",
        link: "#"
    }, {
        name: "Pedagogika",
        img: "assets/img/intro/economy.png",
        link: "#"
    },
]

class IntroFaculty extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="intro-area intro-area--top">
            <div className="container">
                <div className="intro-area-inner-2">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="section-title text-center">
                                <h4 className="sub-title double-line">FAKULTETLAR</h4>
                                {/*<h2 className="title">Pedagogika fakultetlari<br /></h2>*/}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {faculty.map((value, index) => (
                            <div className="col-md-3" key={index}>
                                <div className="single-intro-inner style-thumb text-center">
                                    <div className="thumb"
                                         style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                        <img width={150} height={150} src={publicUrl + value.img}
                                             alt="img"/>
                                    </div>
                                    <Link to={value.link}>
                                        <div className="details">
                                            <h5>{value.name}</h5>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="intro-footer bg-base">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="single-list-inner">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={publicUrl + "assets/img/icon/19.png"} alt="img"/>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5>Engineering</h5>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-list-inner">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={publicUrl + "assets/img/icon/20.png"} alt="img"/>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5>PHD Scholarship</h5>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="single-list-inner">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={publicUrl + "assets/img/icon/21.png"} alt="img"/>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5>Accounting</h5>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default IntroFaculty
