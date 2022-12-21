import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import InstructorPage from './section-components/instructor';
import Funfact from './section-components/fun-fact';
import Testimonial from './section-components/testimonial-v5';
import Footer from './global-components/footer';

const Instructor = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Instructor"  />
        <InstructorPage />
        <Funfact />
        <Testimonial />
        <Footer />
    </div>
}

export default Instructor

