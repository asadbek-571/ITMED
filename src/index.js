import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from "react-router-dom";
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import Course from './components/course';
import CourseDetails from './components/mycomponents/course/course-details';
import About from './components/mycomponents/about/about';
import Event from './components/mycomponents/event/event';
import EventDetails from './components/mycomponents/event/event-details';
import Instructor from './components/mycomponents/instructor/instructor';
import InstructorDetails from './components/mycomponents/instructor/details/instructor-details';
import Gallery from './components/gallery';
import SignIn from './components/mycomponents/signin/sign-in';
import SignUp from './components/mycomponents/signup/sign-up';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';
import Directions from "./components/mycomponents/faculty/directions/directions";


class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
                        <Route exact path="/" component={HomeV2} />
                        <Route path="/home-v2" component={HomeV2} />
                        <Route path="/home-v3" component={HomeV3} />
                        <Route path="/course" component={Course} />
                        <Route path="/course-details" component={CourseDetails} />
                        <Route path="/about" component={About} />
                        <Route path="/event" component={Event} />
                        <Route path="/event-details" component={EventDetails} />
                        <Route path="/instructor" component={Instructor} />
                        <Route path="/instructor-details" component={InstructorDetails} />
                        <Route path="/pricing" component={Directions} />
                        <Route path="/gallery" component={Gallery} />
                        <Route path="/sign-in" component={SignIn} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/blog" component={Blog} />
                        <Route path="/blog-details" component={BlogDetails} />

                        <Route path="/medical" component={BlogDetails} />
                        <Route path="/information/tech" component={BlogDetails} />
                        <Route path="/pedagogy" component={BlogDetails} />
                        <Route path="/economy" component={BlogDetails} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('edumint'));
