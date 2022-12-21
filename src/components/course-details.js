import React from 'react';
import Navbar from './mycomponents/navbar/navbar';
import PageHeader from './global-components/page-header';
import CourseDetails from './section-components/course-details';
import Footer from './mycomponents/footer/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Courses Details"  />
        <CourseDetails />
        <Footer />
    </div>
}

export default AboutPage

