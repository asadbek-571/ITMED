import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';

const funFact = [
    {
        count: "4",
        name: "Fakultetlar",
        img: ""
    },   {
        count: "20",
        name: "Yo'nalishlar",
        img: ""
    },   {
        count: "1500",
        name: "Talabalar",
        img: ""
    },   {
        count: "100",
        name: "O'qtuvchilar",
        img: ""
    },   {
        count: "10",
        name: "Hamkorlar",
        img: ""
    },
]

class FunFact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="counter-area bg-gray">
            <div className="container">
                <div className="counter-area-inner pd-top-120 pd-bottom-120"
                     style={{backgroundImage: 'url("' + publicUrl + 'assets/img/other/1.png")'}}>
                    <div className="row">
                        <div className="col-lg-8 mb-5 mb-lg-0">
                            <div className="section-title mb-0">
                                <h6 className="sub-title right-line">STATISTIKA</h6>
                                {/*<h2 className="title">Statistika</h2>*/}
                                <p className="content pb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Autem exercitationem fuga hic libero magni obcaecati quo sapiente tenetur voluptas
                                    voluptatibus.</p>
                                <div className="btn-counter bg-base mt-4">
                                    <h3 className="left-val align-self-center"><span className="counter">2.4</span>k+
                                    </h3>
                                    <div className="right-val align-self-center">
                                        Muoffaqyatli <br/> bitiruvchilarimiz
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 align-self-center">
                            <ul className="single-list-wrap">
                                <li className="single-list-inner style-box-bg">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={publicUrl + "assets/img/icon/1.png"} alt="img"/>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5><span className="counter">4</span>+</h5>
                                            <p>Fakultetlar</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list-inner style-box-bg">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={publicUrl + "assets/img/icon/2.png"} alt="img"/>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5><span className="counter">20</span>+</h5>
                                            <p>Yo'nalishlar</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list-inner style-box-bg">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={publicUrl + "assets/img/icon/3.png"} alt="img"/>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5><span className="counter">1340</span>+</h5>
                                            <p>Talabalar</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="single-list-inner style-box-bg">
                                    <div className="media">
                                        <div className="media-left">
                                            <img src={publicUrl + "assets/img/icon/3.png"} alt="img"/>
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h5><span className="counter">1340</span>+</h5>
                                            <p>O'qtuvchilar</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default FunFact
