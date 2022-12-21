import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactPlayer from "react-player";

const faculty = [
    {
        name: "Tibbiyot",
        img: "assets/img/intro/medical.png",
        link: "/pricing"
    }, {
        name: "Axborot texnologiyalari",
        img: "assets/img/intro/programmer.png",
        link: "/pricing"
    }, {
        name: "Pedagogika",
        img: "assets/img/intro/teach.png",
        link: "/pricing"
    }, {
        name: "Iqtisodiyot",
        img: "assets/img/intro/economy.png",
        link: "/pricing"
    },
]

class IntroVideo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'
        return <div className="intro-area intro-area--top">
            <div className="container">
                <div className="intro-area-inner-2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="single-intro-inner style-thumb text-center">
                                <ReactPlayer
                                    // Disable download button
                                    config={{file: {attributes: {controlsList: 'nodownload'}}}}

                                    // Disable right click
                                    onContextMenu={e => e.preventDefault()}

                                    // Your props
                                    url={publicUrl + 'assets/video/video.mp4'}
                                    className="react-player"
                                    controls
                                    onPlay
                                    width="100%"
                                    height="100%"
                                />
                                <div className="row justify-content-center">
                                    <div className="col-lg-6">
                                        <div className="section-title text-center">
                                            <h6 className="sub-title double-line">TA'LIM</h6>
                                            <h2 className="title">Fakultetlar</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    {faculty.map((value, index) => (
                                        <div className="col-md-3" key={index}>
                                            <div className="single-intro-inner style-thumb text-center">
                                                <div className="thumb"
                                                     style={{
                                                         display: "flex",
                                                         justifyContent: "center",
                                                         alignItems: "center"
                                                     }}>
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
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    }
}

export default IntroVideo
