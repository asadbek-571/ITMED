import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ClientV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="client-area pd-top-100">
			  <div className="container">
			    <div className="row justify-content-center">
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

export default ClientV2