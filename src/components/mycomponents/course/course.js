import React from 'react';
import PageHeader from './global-components/page-header';
import Course from './section-components/course-page';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Courses"  />
        <Course />
        <Footer />
    </div>
}

export default AboutPage

