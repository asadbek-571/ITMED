import React from 'react';
import Navbar from '../navbar/navbar';
import PageHeader from '../page-header';
import Event from './event-page';
import Footer from '../footer/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tadbirlar"  />
        <Event />
        <Footer />
    </div>
}

export default AboutPage

