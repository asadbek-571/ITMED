import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';

const directionsBachelor = [
    [
        {
            name: "Pedagogika va psixologiya",
            code: "60110100",
            daytimePrice: "11 000 000",
            eveningPrice: "12 000 000"
        }, {
        name: "Maktabgacha ta'lim",
        code: "60110200",
        daytimePrice: "11 000 000",
        eveningPrice: "12 000 000"
    }, {
        name: "Boshlang‘ich ta'lim",
        code: "60110500",
        daytimePrice: "11 000 000",
        eveningPrice: "12 000 000"
    },
    ], [
        {
            name: "Defektologiya (faoliyat turlari bo‘yicha)",
            code: "60110400",
            daytimePrice: "11 000 000",
            eveningPrice: "12 000 000"
        }, {
            name: "Sport faoliyati (faoliyat turlari bo‘yicha)",
            code: "61010300",
            daytimePrice: "11 000 000",
            eveningPrice: "12 000 000"
        }, {
            name: "Xorijiy til va adabiyoti (tillar bo‘yicha)",
            code: "60111800",
            daytimePrice: "13 000 000",
            eveningPrice: null
        },
    ], [
        {
            name: "Matematika va informatika",
            code: "60110600",
            daytimePrice: "12 000 000",
            eveningPrice: "12 000 000"
        }, {
            name: "Biologiya",
            code: "60110900",
            daytimePrice: "12 000 000",
            eveningPrice: null
        }, {
            name: "Kimyo",
            code: "60110800",
            daytimePrice: "11 000 000",
            eveningPrice: null
        },
    ], [
        {
            name: "Xalqaro iqtisodiy munosabatlar",
            code: "60310800",
            daytimePrice: "15 000 000",
            eveningPrice: "16 000 000"
        }, {
            name: "Moliya va moliyaviy texnologiyalar",
            code: "60410400",
            daytimePrice: "13 000 000",
            eveningPrice: "16 000 000"
        }, {
            name: "Logistika (yo‘nalishlar bo‘yicha)",
            code: "60411700",
            daytimePrice: "13 000 000",
            eveningPrice: "16 000 000"
        },
    ], [
        {
            name: "Dizayn (turlari bo‘yicha)",
            code: "60210400",
            daytimePrice: "14 000 000",
            eveningPrice: "16 000 000"
        }, {
            name: "Komp'yuter ilmlari va dasturlash texnologiyalari (yo‘nalishlar bo‘yicha)",
            code: "60610100",
            daytimePrice: "14 000 000",
            eveningPrice: "16 000 000"
        }, {
            name: "Axborot tizimlari va texnologiyalari (tarmoqlar va sohalar bo‘yicha)",
            code: "60610200",
            daytimePrice: "14 000 000",
            eveningPrice: "16 000 000"
        },
    ], [
        {
            name: "Axborot xavfsizligi (sohalar bo‘yicha)",
            code: "60610300",
            daytimePrice: "14 000 000",
            eveningPrice: "16 000 000"
        }, {
            name: "Sun'iy intellekt",
            code: "60610700",
            daytimePrice: "14 000 000",
            eveningPrice: "16 000 000"
        }, {
            name: "Stomatologiya (yo‘nalishlar bo‘yicha)",
            code: "60910100",
            daytimePrice: "22 000 000",
            eveningPrice: null
        },
    ], [
        {
            name: "Davolash ishi",
            code: "60910200",
            daytimePrice: "22 000 000",
            eveningPrice: null
        }, {
            name: "Pediatriya ishi",
            code: "60910300",
            daytimePrice: "22 000 000",
            eveningPrice: null
        }, {
            name: "Farmasiya (turlari bo‘yicha)",
            code: "60910700",
            daytimePrice: "20 000 000",
            eveningPrice: null
        },
    ], [
        {
            name: "Jurnalistika (faoliyat turlari bo‘yicha)",
            code: "60320100",
            daytimePrice: "12 000 000",
            eveningPrice: null
        }
    ],
]

const directionsMaster = [
    [
        {
            name: "Lingvistika (tillar bo‘yicha)",
            code: "70230101",
            daytimePrice: "20 000 000",
            eveningPrice: null
        }, {
        name: "Axborot xavfsizligini boshqarish",
        code: "70610401",
        daytimePrice: "20 000 000",
        eveningPrice: null
    }, {
        name: "Biznesni boshqarish (Master of Business Administration — MBA)",
        code: "70411302",
        daytimePrice: "20 000 000",
        eveningPrice: null
    },
    ]
]

class DirectionsPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="pricing-area pd-top-120 pd-bottom-90">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                        <div className="section-title text-center">
                            <h6 className="sub-title double-line">BAKALAVR MUTAXASSISLIKLARI YO‘NALISHI</h6>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        directionsBachelor.map((value, index) => (
                            <>
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-pricing-inner-wrap">
                                        <div className="single-pricing-inner">
                                            <h6 className="title">{value[0].name}</h6>
                                            <div className="price-area">
                                                {/*    /!*<span>$59 </span>*!/*/}
                                                {/*    / Ta'lim kodi: {value[0].code}*/}
                                            </div>
                                            <ul className="pricing-list">
                                                <li><i className="fa fa-check"/>Ta'lim kodi: {value[0].code}</li>
                                                <li><i className="fa fa-check"/>Kunduzgi ta'lim
                                                    kontrakti: {value[0].daytimePrice} so'm
                                                </li>
                                                {
                                                    value[0].eveningPrice === null
                                                        ?
                                                        <li className="unable"><i className="fa fa-times"/>Sirtqi ta'lim
                                                            kontrakti: </li>
                                                        :
                                                        <li><i className="fa fa-check"/>Sirtqi ta'lim
                                                            kontrakti: {value[0].eveningPrice} so'm</li>
                                                }
                                            </ul>
                                            <Link className="btn btn-base btn-radius w-100" to="#">Ariza
                                                qoldirish</Link>
                                        </div>
                                    </div>
                                </div>
                                {
                                    value[1]!=null&&
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="single-pricing-inner-wrap">
                                                <div className="single-pricing-inner">
                                                    <h6 className="title">{value[1].name}</h6>
                                                    <div className="price-area">
                                                        {/*    /!*<span>$59 </span>*!/*/}
                                                        {/*    / Ta'lim kodi: {value[0].code}*/}
                                                    </div>
                                                    <ul className="pricing-list">
                                                        <li><i className="fa fa-check"/>Ta'lim kodi: {value[1].code}</li>
                                                        <li><i className="fa fa-check"/>Kunduzgi ta'lim
                                                            kontrakti: {value[1].daytimePrice} so'm
                                                        </li>
                                                        {
                                                            value[1].eveningPrice === null
                                                                ?
                                                                <li className="unable"><i className="fa fa-times"/>Sirtqi ta'lim
                                                                    kontrakti: </li>
                                                                :
                                                                <li><i className="fa fa-check"/>Sirtqi ta'lim
                                                                    kontrakti: {value[1].eveningPrice} so'm</li>
                                                        }
                                                    </ul>
                                                    <Link className="btn btn-base btn-radius w-100" to="#">Ariza
                                                        qoldirish</Link>
                                                </div>
                                            </div>
                                        </div>
                                }               {
                                    value[2]!=null&&
                                        <div className="col-lg-4 col-md-6" key={index}>
                                            <div className="single-pricing-inner-wrap">
                                                <div className="single-pricing-inner">
                                                    <h6 className="title">{value[2].name}</h6>
                                                    <div className="price-area">
                                                        {/*    /!*<span>$59 </span>*!/*/}
                                                        {/*    / Ta'lim kodi: {value[0].code}*/}
                                                    </div>
                                                    <ul className="pricing-list">
                                                        <li><i className="fa fa-check"/>Ta'lim kodi: {value[2].code}</li>
                                                        <li><i className="fa fa-check"/>Kunduzgi ta'lim
                                                            kontrakti: {value[2].daytimePrice} so'm
                                                        </li>
                                                        {
                                                            value[2].eveningPrice === null
                                                                ?
                                                                <li className="unable"><i className="fa fa-times"/>Sirtqi ta'lim
                                                                    kontrakti: </li>
                                                                :
                                                                <li><i className="fa fa-check"/>Sirtqi ta'lim
                                                                    kontrakti: {value[2].eveningPrice} so'm</li>
                                                        }
                                                    </ul>
                                                    <Link className="btn btn-base btn-radius w-100" to="#">Ariza
                                                        qoldirish</Link>
                                                </div>
                                            </div>
                                        </div>
                                }
                            </>
                        ))
                    }

                </div>
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-11">
                        <div className="section-title text-center">
                            <h6 className="sub-title double-line">MAGISTRATURA MUTAXASSISLIKLARI YO‘NALISHI</h6>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {
                        directionsMaster.map((value, index) => (
                            <>
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-pricing-inner-wrap">
                                        <div className="single-pricing-inner">
                                            <h6 className="title">{value[0].name}</h6>
                                            <div className="price-area">
                                                {/*    /!*<span>$59 </span>*!/*/}
                                                {/*    / Ta'lim kodi: {value[0].code}*/}
                                            </div>
                                            <ul className="pricing-list">
                                                <li><i className="fa fa-check"/>Ta'lim kodi: {value[0].code}</li>
                                                <li><i className="fa fa-check"/>Kunduzgi ta'lim
                                                    kontrakti: {value[0].daytimePrice} so'm
                                                </li>
                                                {
                                                    value[0].eveningPrice === null
                                                        ?
                                                        <li className="unable"><i className="fa fa-times"/>Sirtqi ta'lim
                                                            kontrakti: </li>
                                                        :
                                                        <li><i className="fa fa-check"/>Sirtqi ta'lim
                                                            kontrakti: {value[0].eveningPrice} so'm</li>
                                                }
                                            </ul>
                                            <Link className="btn btn-base btn-radius w-100" to="#">Ariza
                                                qoldirish</Link>
                                        </div>
                                    </div>
                                </div>
                                {
                                    value[1]!=null&&
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="single-pricing-inner-wrap">
                                            <div className="single-pricing-inner">
                                                <h6 className="title">{value[1].name}</h6>
                                                <div className="price-area">
                                                    {/*    /!*<span>$59 </span>*!/*/}
                                                    {/*    / Ta'lim kodi: {value[0].code}*/}
                                                </div>
                                                <ul className="pricing-list">
                                                    <li><i className="fa fa-check"/>Ta'lim kodi: {value[1].code}</li>
                                                    <li><i className="fa fa-check"/>Kunduzgi ta'lim
                                                        kontrakti: {value[1].daytimePrice} so'm
                                                    </li>
                                                    {
                                                        value[1].eveningPrice === null
                                                            ?
                                                            <li className="unable"><i className="fa fa-times"/>Sirtqi ta'lim
                                                                kontrakti: </li>
                                                            :
                                                            <li><i className="fa fa-check"/>Sirtqi ta'lim
                                                                kontrakti: {value[1].eveningPrice} so'm</li>
                                                    }
                                                </ul>
                                                <Link className="btn btn-base btn-radius w-100" to="#">Ariza
                                                    qoldirish</Link>
                                            </div>
                                        </div>
                                    </div>
                                }               {
                                value[2]!=null&&
                                <div className="col-lg-4 col-md-6" key={index}>
                                    <div className="single-pricing-inner-wrap">
                                        <div className="single-pricing-inner">
                                            <h6 className="title">{value[2].name}</h6>
                                            <div className="price-area">
                                                {/*    /!*<span>$59 </span>*!/*/}
                                                {/*    / Ta'lim kodi: {value[0].code}*/}
                                            </div>
                                            <ul className="pricing-list">
                                                <li><i className="fa fa-check"/>Ta'lim kodi: {value[2].code}</li>
                                                <li><i className="fa fa-check"/>Kunduzgi ta'lim
                                                    kontrakti: {value[2].daytimePrice} so'm
                                                </li>
                                                {
                                                    value[2].eveningPrice === null
                                                        ?
                                                        <li className="unable"><i className="fa fa-times"/>Sirtqi ta'lim
                                                            kontrakti: </li>
                                                        :
                                                        <li><i className="fa fa-check"/>Sirtqi ta'lim
                                                            kontrakti: {value[2].eveningPrice} so'm</li>
                                                }
                                            </ul>
                                            <Link className="btn btn-base btn-radius w-100" to="#">Ariza
                                                qoldirish</Link>
                                        </div>
                                    </div>
                                </div>
                            }
                            </>
                        ))
                    }

                </div>
            </div>
        </div>

    }
}

export default DirectionsPage
