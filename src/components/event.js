import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Event from './section-components/eventPage-page';
import Footer from './global-components/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Event"  />
        <Event />
        <Footer />
    </div>
}

export default AboutPage

