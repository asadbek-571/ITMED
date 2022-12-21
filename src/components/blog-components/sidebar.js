import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
          <div className="col-lg-4 col-12">
            <div className="td-sidebar">
              <div className="widget widget_search">                                
                <form className="search-form">
                  <div className="form-group">
                    <input type="text" placeholder="Search" />
                  </div>
                  <button className="submit-btn" type="submit"><i className="fa fa-search" /></button>
                </form>
              </div> 
              <div className="widget widget_catagory">
                <h4 className="widget-title">Catagory</h4>                                 
                <ul className="catagory-items go-top">
                  <li><Link to="/blog">Tempor lorem interdum <i className="fa fa-caret-right" /></Link></li>
                  <li><Link to="/blog">Auctor mattis lacus  <i className="fa fa-caret-right" /></Link></li>
                  <li><Link to="/blog">Dolor proin  <i className="fa fa-caret-right" /></Link></li>
                  <li><Link to="/blog">Pharetra amet <i className="fa fa-caret-right" /></Link></li>
                </ul>
              </div>                  
              <div className="widget widget-recent-post">                            
                <h4 className="widget-title">Recent News</h4>
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src={publicUrl+"assets/img/widget/1.png"} alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5 className="title"><Link to="/blog-details">Integer at faucibus urna. Nullam condtum</Link></h5>
                        <div className="post-info"><i className="fa fa-calendar" /><span>15 October</span></div>                             
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src={publicUrl+"assets/img/widget/2.png"} alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5 className="title"><Link to="/blog-details">Custom Platform for an Audit Insurance</Link></h5>
                        <div className="post-info"><i className="fa fa-calendar" /><span>15 October</span></div>                             
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src={publicUrl+"assets/img/widget/3.png"} alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <h5 className="title"><Link to="/blog-details">Famous app Developers and Designer</Link></h5>
                        <div className="post-info"><i className="fa fa-calendar" /><span>15 October</span></div>                            
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget widget_price">
                <h4 className="widget-title">Price</h4> 
                <label className="single-checkbox">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                  Free Courses
                </label> 
                <label className="single-checkbox">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                  Paid Courses
                </label> 
                <label className="single-checkbox">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                  Only Subscription
                </label>  
              </div> 
              <div className="widget widget_level">
                <h4 className="widget-title">Level</h4> 
                <label className="single-checkbox">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                  Beginner
                </label> 
                <label className="single-checkbox">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                  Intermediate
                </label> 
                <label className="single-checkbox">
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                  Advanced
                </label>  
              </div> 
              <div className="widget widget_tags mb-0">
                <h4 className="widget-title">Tags</h4>
                <div className="tagcloud go-top">
                  <Link to="/blog">Art</Link>
                  <Link to="/blog">Creative</Link>
                  <Link to="/blog">Article</Link>
                  <Link to="/blog">Designer</Link>
                  <Link to="/blog">Portfolio</Link>
                  <Link to="/blog">Project</Link>
                  <Link to="/blog">Personal</Link>
                  <Link to="/blog">Landing</Link>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default Sidebar;
