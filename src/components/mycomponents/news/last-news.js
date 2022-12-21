import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const lastNews = [
    [
        {
            img: "assets/img/NEWS.jpg",
            title: "Yangilik title",
            shortBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reprehenderit voluptates voluptatum.",
            data: "28 Dekabr, 2022"
        }, {
        img: "assets/img/NEWS.jpg",
        title: "Yangilik title",
        shortBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reprehenderit voluptates voluptatum.",
        data: "28 Dekabr, 2022"
    }, {
        img: "assets/img/NEWS.jpg",
        title: "Yangilik title",
        shortBody: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio reprehenderit voluptates voluptatum.",
        data: "28 Dekabr, 2022"
    },
    ]
]

class LastNews extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="course-area pd-top-10 pd-bottom-90 go-top">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="section-title text-center">
                            <h6 className="sub-title double-line">SO'NGI YANGILIKLAR</h6>
                        </div>
                    </div>
                </div>
                {
                    lastNews.map((value, index) => (
                        <div className="row justify-content-center" key={index}>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-blog-inner">
                                    <div className="thumb">
                                        <img src={publicUrl + "assets/img/blog/1.png"} alt="img"/>
                                        <span className="date">{value[0].data}</span>
                                    </div>
                                    <div className="details">
                                        <ul className="blog-meta">
                                            <li><i className="fa fa-user"/>Admin</li>
                                            <li><i className="fa fa-folder-open-o"/>Yangiliklar</li>
                                        </ul>
                                        <h5><Link to="#">{value[0].title}</Link>
                                        </h5>
                                        <Link className="read-more-text" to="#">Batafsil<i
                                            className="fa fa-angle-right"/></Link>
                                    </div>
                                </div>
                            </div>               <div className="col-lg-4 col-md-6">
                                <div className="single-blog-inner">
                                    <div className="thumb">
                                        <img src={publicUrl + "assets/img/blog/1.png"} alt="img"/>
                                        <span className="date">{value[1].data}</span>
                                    </div>
                                    <div className="details">
                                        <ul className="blog-meta">
                                            <li><i className="fa fa-user"/>Admin</li>
                                            <li><i className="fa fa-folder-open-o"/>Yangiliklar</li>
                                        </ul>
                                        <h5><Link to="#">{value[1].title}</Link>
                                        </h5>
                                        <Link className="read-more-text" to="#">Batafsil<i
                                            className="fa fa-angle-right"/></Link>
                                    </div>
                                </div>
                            </div>               <div className="col-lg-4 col-md-6">
                                <div className="single-blog-inner">
                                    <div className="thumb">
                                        <img src={publicUrl + "assets/img/blog/1.png"} alt="img"/>
                                        <span className="date">{value[2].data}</span>
                                    </div>
                                    <div className="details">
                                        <ul className="blog-meta">
                                            <li><i className="fa fa-user"/>Admin</li>
                                            <li><i className="fa fa-folder-open-o"/>Yangiliklar</li>
                                        </ul>
                                        <h5><Link to="#">{value[2].title}</Link>
                                        </h5>
                                        <Link className="read-more-text" to="#">Batafsil<i
                                            className="fa fa-angle-right"/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>

    }
}

export default LastNews
