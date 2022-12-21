import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import parse from 'html-react-parser';

class SignUP extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL + '/'

        return <div className="signup-page-area pd-top-120 pd-bottom-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-12 col-lg-10">
                        <form className="signin-inner">
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Ism"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Familya"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Sharf"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Telefon raqam"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Qo'shimcha telefon raqam"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Passport serya raqami"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="date" placeholder="Tug'ulgan sana"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <select  placeholder="Viloyat">
                                            <option>Toshkent</option>
                                            <option>Farg'ona</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <select placeholder="Tuman">
                                            <option>Chilanzor</option>
                                            <option>Uchko'pirik</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <select placeholder="Ma'lumotingiz">
                                            <option>Chilanzor</option>
                                            <option>Uchko'pirik</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Tamomlagan yilinggiz"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Attestat / Diplom"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Fakultet"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Yo'nalish"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Ta'lim turi"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Ta'lim tili"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12">
                                    <div className="single-input-inner style-bg-border">
                                        <input type="text" placeholder="Filial"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-12"/>
                                <div className="col-lg-4 col-md-12"/>
                                <div className="col-lg-4 col-md-12"/>
                                <div className="col-lg-4 col-md-12 mb-4">
                                <div className="col-lg-12 col-md-12 ">
                                    <button className="btn btn-base w-100">Ro'yhatdan o'tish</button>
                                </div>
                                </div>
                                <div className="col-lg-10 col-md-12">
                                    <span>Shaxsiy kabinetga</span>
                                    <a className="ml-2" href="signin.html"><strong>Kirish</strong></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SignUP
