import React from 'react';
import Navbar from '../../navbar/navbar';
import PageHeader from '../../page-header';
import Instructor from './instructor-page';
import Footer from '../../footer/footer';

const InstructorPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="O'qtuvchi ma'lumotlari"  />
        <Instructor />
        <Footer />
    </div>
}

export default InstructorPage

