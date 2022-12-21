import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import PageHeader from '../page-header';
import InstructorPage from './instructor-page';

const Instructor = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="O'qtuvchilar"  />
        <InstructorPage />
        <Footer />
    </div>
}

export default Instructor

