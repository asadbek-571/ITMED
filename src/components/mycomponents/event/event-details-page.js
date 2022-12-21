import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class EventDetailsPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="course-single-area pd-top-120 pd-bottom-110">
		  <div className="container">
		    <div className="row">
		      <div className="col-lg-8 order-lg-12">
		        <div className="eventPage-detaila-inner">
		          <div className="thumb mb-4">
		            <img src={publicUrl+"assets/img/other/5.png"} alt="img" />
		          </div>
		          <ul className="eventPage-meta">
		            {/*<li><i className="fa fa-clock-o" /> 12:00 AM  To 11:59 PM</li>*/}
		            {/*<li><i className="fa fa-map-marker" /> Melbourne, Australia</li>*/}
		          </ul>
		          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</p>
		          {/*<div className="row pt-4 pb-4">*/}
		          {/*  <div className="col-lg-5">*/}
		          {/*    <div className="thumb mb-3 mb-lg-0">*/}
		          {/*      <img src={publicUrl+"assets/img/other/6.png"} alt="img" />*/}
		          {/*    </div>*/}
		          {/*  </div>*/}
		          {/*  <div className="col-lg-7 align-self-center">*/}
		          {/*    <h6>Quality Control System</h6>*/}
		          {/*    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>*/}
		          {/*    <h6>Highly Professional Staff</h6>*/}
		          {/*    <p className="mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</p>*/}
		          {/*  </div>*/}
		          {/*</div>*/}
		         </div>
		      </div>
		      <div className="col-lg-4 order-lg-1">
		        <div className="td-sidebar">
		          <div className="widget widget_event">
		            <h4 className="widget-title text-white">Manzil va vaqti:</h4>
		            <ul>
						{/*<li><i className="fa fa-calendar" />Tugash vaqti: April 04</li>*/}
						<li><i className="fa fa-calendar" />Kuni: Yanvar 08</li>
						<li><i className="fa fa-clock-o" />Boshlanish vaqti: 12:00</li>
						<li><i className="fa fa-clock-o" />Tugash vaqti: 14:00</li>
						<li><i className="fa fa-ticket" />Qolgan o'rinlar soni: 10 ta</li>
		              <li><i className="fa fa-map-marker" />Manizil</li>
		            </ul>
		          </div>
		          <div className="widget widget-contact">
		            <h4 className="widget-title">So'rovnoma qoldirish</h4>
		            <div className="single-input-inner style-right-icon">
		              <input type="text" placeholder="F.I.O" />
		              <img src={publicUrl+"assets/img/icon/25.png"} alt="img" />
		            </div>
		            <div className="single-input-inner style-right-icon">
		              <input type="phone" placeholder="Telefon raqam" />
		              <img src={publicUrl+"assets/img/icon/26.png"} alt="img" />
		            </div>
		            <button className="btn btn-base" >Yuborish</button>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>

        }
}

export default EventDetailsPage
