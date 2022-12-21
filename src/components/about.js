import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import About from './section-components/about-v2';
import FunFact from './section-components/fun-fact';
import Team from './section-components/team-v3';
import SpecialArea from './section-components/special-area';
import Testimonial from './section-components/testimonial-v4';
import Event from './section-components/upcoming-event';
import Footer from './global-components/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="About"  />
        <About sectionclass="pd-bottom-120" />
        <FunFact />
        <Team />
        <SpecialArea />
        <Testimonial />
        <Event />
        <Footer />
    </div>
}

export default AboutPage

