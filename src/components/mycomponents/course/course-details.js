import React from 'react';

import PageHeader from '../page-header';
import CourseDetails from './course-details-page';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Kurs ma'lumotlari"  />
        <CourseDetails />
        <Footer />
    </div>
}

export default AboutPage

