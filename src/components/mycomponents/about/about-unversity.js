import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';

const aboutUniversity = [
    [
        {
            img: "assets/img/favicon.png",
            title: "Ta'lim granti (scholarship)",
            subTitle: "Stipendiya",
            body: "1) O'qish jarayonida yuqori ko'rsatkichlarni qayd etgan iqtidorli talablarga kafolatlangan grant (scholarship) taqdim etiladi. ",
            count: 1
        }, {
        img: "assets/img/favicon.png",
        title: "Yotoqxona bilan taminlash",
        subTitle: "Imtiyozlar",
        body: "2) Yotoqxonaga ehtiyoji bor hamda uzoq masofada istiqomat qiladigan talabalar,  barcha sharoitlarga ega shinam turar-joy majmuasi bilan ta'minlanadi.",
        count: 2
    }
    ],
    [
        {
            img: "assets/img/favicon.png",
            title: "Eektron kutibxonalar",
            subTitle: "Ta'lim",
            body: "3) Zamonaviy axborot resurs markazidagi mahalliy va xorijiy elektron jurnal, adabiyot va scopus bazasidagi manabalardan erkin foydalanadilar.",
            count: 3
        }, {
        img: "assets/img/favicon.png",
        title: "Ommaviy uchrashuvlar",
        subTitle: "Imtiyozlar",
        body: "4) Yoshlarning sohaga oid yurtimizdagi va chet eldagi muhim ahamiyatga ega uchrashuv, konferensiyalarda tog'ridan-tog'ri ishtirok etishi qo'llab-quvvatlanadi.",
        count: 4
    },
    ]

]

class AboutUniversity extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="testimonial-area pd-top-110 pd-bottom-120" >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7">
                        <div className="section-title text-center">
                            <h6 className="sub-title double-line">BIZ HAQIMIZDA</h6>
                            <h2 className="title">Nima uchun IT MED University?</h2>
                        </div>
                    </div>
                </div>
                {
                    aboutUniversity.map((value, index) => (
                        <div className="row" key={index}>
                            <div className="col-md-6 mb-4">
                                <div className="single-testimonial-inner m-0">
                                    <div className="media testimonial-author mb-4">
                                        <div className="media-left">
                                            <img src={publicUrl + value[0].img} alt="img"/>
                                            {/*<i className="fa fa-quote-left"/>*/}
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h6>{value[0].title}</h6>
                                            <p>{value[0].subTitle}</p>
                                        </div>
                                    </div>
                                    <span className="testimonial-quote"><i className="fa fa-quote-left"/></span>
                                    <p className="mb-0">{value[0].body}</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="single-testimonial-inner m-0">
                                    <div className="media testimonial-author mb-4">
                                        <div className="media-left">
                                            <img src={publicUrl + value[1].img} alt="img"/>
                                            {/*<i className="fa fa-quote-left"/>*/}
                                        </div>
                                        <div className="media-body align-self-center">
                                            <h6>{value[1].title}</h6>
                                            <p>{value[1].subTitle}</p>
                                        </div>
                                    </div>
                                    <span className="testimonial-quote"><i className="fa fa-quote-left"/></span>
                                    <p className="mb-0">{value[1].body}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    }
}

export default AboutUniversity
