import React from 'react';
import Navbar from '../navbar/navbar';
import PageHeader from '../page-header';
import About from './about-main-page';
import FunFact from './fun-fact';
import Team from './team';
import Event from '../event/event-page';
import Footer from '../footer/footer';
import Gallery from "./gallery";

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Biz haqimizda"  />
        <About sectionclass="pd-bottom-120" />
        <FunFact />
        <Team />
        <Gallery/>
        <Event />
        <Footer />
    </div>
}

export default AboutPage

