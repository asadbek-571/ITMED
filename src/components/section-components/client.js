import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Client extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-area bg-base pd-top-60 pd-bottom-70" style={{backgroundImage: 'url('+publicUrl+'assets/img/institute/bg.png)'}}>
			  <div className="container">
				  <div className="row justify-content-center">
					  <div className="col-lg-6">
						  <div className="section-title text-center">
							  <h6 className="sub-title double-line">HAMKORLAR</h6>
						  </div>
					  </div>
				  </div>
			    <div className="row justify-content-center"  >
			      <div className="col-lg-12">
			        <div className="institute-slider owl-carousel">
			          <div className="item">
			            <img src={publicUrl+"assets/img/institute/1.png"} alt="img" />
			          </div>
			          <div className="item">
			            <img src={publicUrl+"assets/img/institute/2.png"} alt="img" />
			          </div>
			          <div className="item">
			            <img src={publicUrl+"assets/img/institute/3.png"} alt="img" />
			          </div>
			          <div className="item">
			            <img src={publicUrl+"assets/img/institute/4.png"} alt="img" />
			          </div>
			          <div className="item">
			            <img src={publicUrl+"assets/img/institute/5.png"} alt="img" />
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default Client
