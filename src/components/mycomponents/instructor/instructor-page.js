import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';

const instructorPage = [

        {
            fio: "Doris Jordan",
            staff: "Design Expert",
            img: "1.png",
            url: "#"
        },  {
            fio: "Doris Jordan",
            staff: "Design Expert",
            img: "1.png",
            url: "#"
        },  {
            fio: "Doris Jordan",
            staff: "Design Expert",
            img: "1.png",
            url: "#"
        },

        {
            fio: "Doris Jordan",
            staff: "Design Expert",
            img: "1.png",
            url: "#"
        },  {
            fio: "Doris Jordan",
            staff: "Design Expert",
            img: "1.png",
            url: "#"
        },  {
            fio: "Doris Jordan",
            staff: "Design Expert",
            img: "1.png",
            url: "#"
        }

]

class InstructorPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="team-area pd-top-120 pd-bottom-70 go-top">
            <div className="container">
                <div className="row justify-content-center">
                    {
                        instructorPage.map((value, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="single-team-inner">
                                    <div className="thumb">
                                        <img src={publicUrl + "assets/img/team/"+value.img} alt="img"/>
                                        <div className="social-wrap">
                                            <div className="social-wrap-inner">
                                                <a className="social-share" href="#"><i className="fa fa-share-alt"/></a>
                                                <ul>
                                                    <li><a href="#"><i className="fa fa-facebook"/></a></li>
                                                    <li><a href="#"><i className="fa fa-twitter"/></a></li>
                                                    <li><a href="#"><i className="fa fa-pinterest"/></a></li>
                                                    <li><a href="#"><i className="fa fa-linkedin"/></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details">
                                        <h4><Link to={value.url}>{value.fio}</Link></h4>
                                        <span>{value.staff}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            &lt;
        </div>
    }
}

export default InstructorPage
