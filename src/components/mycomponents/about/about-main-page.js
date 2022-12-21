import React, {Component} from 'react';

const strategy = [
    [
        {
            count: '1',
            body: "1-Novbatda unversitetning nufuzini yuqori pog'onaga olib chiqish, O'zbekiston miqyosidagi nufuzli top-10 unversitetlar qatoriga kirish, QS World reytinggining top-1000 taligidan joy olish."
        },
        {
            count: '4',
            body: "Iqtidorli talaba yoshlarni, o'qtuvchi hamda professorlarni rivojlangan davlatlarda tahsil olishini ta'minlash va oliy-ta'lim sohasi hamda mamlakatni yetakchi va quyi pog'ona tashkilotlari uchun yangi bilimlarga ega yetuk kadrlarni tayyorlash"
        }
    ],

    [
        {
            count: '2',
            body: 'Xorijdagi taniqli unversitet va kompanyalar bilan mustahkam homkorlik aloqalarini amalga oshirish hamda xorijdagi hamkor unversitetlarimizdan 100 ga yaqin professor va doktorlarni ishga jalb qilish.'
        },
        {
            count: '5',
            body: "2024-yildan boshlab unversitet faolyatini yanada kengaytirish maqsadida \"Magistratura\" va \"daktarantura\" bosqichidagi talabalarni o'qitish uchun litsenziyani qo'lga kiritish, ularni xalq manfaatlari uchun xizmat qiladigan yetuk kadr etib tayyorlash."
        },
    ], [
        {
            count: '3',
            body: "Dunyodagi eng yetakchi unveristetlardagi professorlarni jalb qilishdan ko'zlangan maqsad, unversitetda 20 dan ortiq zamonaviy hamda ommabob yo'nalishlarni tashkillashtirish va jahon standartlariga mos labaratoryalar barpo etish."
        },
        {
            count: '6',
            body: "10000 sig'imga ega o'quv kampusi hamda barcha shart-shaoitlarga ega 1000 o'rinli talabalar turar-joy majmuasini barpo etish, bundan tashqari respublikamizning turli hududlari bo'ylab unversitet filiallarni bosqichma-bosqich ochish"
        }
    ],
]

class AboutMainPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        let SectionClass = this.props.sectionclass ? this.props.sectionclass : ''

        return <div className={"about-area pd-top-120 go-top " + SectionClass}>
            <div className="container">
                <div className="about-area-inner">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-thumb-wrap after-shape">
                                <img src={publicUrl + "assets/img/about/certificate.jpg"} alt="certificate"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-inner-wrap">
                                <div className="section-title mb-0">
                                    <h4 className="title">UNVERSITET STRATEGYASI</h4>
                                    <div className="row">
                                        {strategy.map((value, index) => (
                                            <>
                                                <div className="col-sm-6" key={index}>
                                                    <ul className="single-list-wrap">
                                                        <li className="single-list-inner style-check-box" style={{fontWeight:"bold"}}>
                                                            <i className="fa fa-check"/> {value[0].count}-STRATEGIYA
                                                            <p style={{fontSize: "10px",textTransform:"uppercase",fontWeight:"bold"}}
                                                               className="mt-1 ml-2">{value[0].body}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-sm-6" key={index}>
                                                    <ul className="single-list-wrap">
                                                        <li className="single-list-inner style-check-box" style={{fontWeight:"bold"}}>
                                                            <i className="fa fa-check"/> {value[1].count}-STRATEGIYA
                                                            <p style={{fontSize: "10px",textTransform:"uppercase",fontWeight:"bold"}}
                                                               className="mt-1 ml-2">{value[1].body}</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </>
                                        ))}
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

export default AboutMainPage
