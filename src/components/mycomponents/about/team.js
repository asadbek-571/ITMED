import React, {Component} from 'react';
import parse from 'html-react-parser';
import {Link} from 'react-router-dom';

const team = [
    {
        fio: "Xodjayeva Muborak Fatxiddinovna",
        img: "rector.jpg",
        staff:"Rektor",
        url:"#"
    },    {
        fio: "Xodjayeva Muborak Fatxiddinovna",
        img: "rector.jpg",
        staff:"Rektor",
        url:"#"
    },    {
        fio: "Xodjayeva Muborak Fatxiddinovna",
        img: "rector.jpg",
        staff:"Rektor",
        url:"#"
    },
]

class Team extends Component {


    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'


        return <div className="team-area pd-top-120 pd-bottom-90 go-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title text-center">
                            <h6 className="sub-title double-line">BIZNING JAMOAIMZ</h6>
                            {/*<h2 className="title">Our Creative Team</h2>*/}
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        team.map((value, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-team-inner">
                                    <div className="thumb">
                                        <img src={publicUrl + "assets/img/team/"+value.img} alt="img"/>
                                        <div className="social-wrap">
                                            <div className="social-wrap-inner">
                                                <a className="social-share" href="#"><i className="fa fa-share-alt"/></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4><Link to="/instructor-details">{value.fio}</Link></h4>
                                        <span>{value.staff}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    }
}

export default Team
