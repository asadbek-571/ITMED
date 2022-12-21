import React from 'react';
import Navbar from './mycomponents/navbar/navbar';
import Banner from './section-components/banner-v2';
import Client from './mycomponents/client/client';
import Event from './mycomponents/event/event-page';
import Footer from './mycomponents/footer/footer';
import AboutUniversity from "./mycomponents/about/about-unversity";
import LastNews from "./mycomponents/news/last-news";
import LastAdvertisement from "./mycomponents/advertisement/last-advertisement";
import IntroVideo from "./mycomponents/faculty/intro-video";

const Home_V2 = () => {
    return <div>
        <Navbar />
        <Banner />
        <IntroVideo />
        {/*<IntroFaculty />*/}
        <AboutUniversity />
        <LastNews />
        <LastAdvertisement />
        {/*<SpecialArea />*/}
        {/*<Price />*/}
        <Client />
        <Event />
        {/*<Testimonial />*/}
        {/*<LatestPost />*/}
        <Footer />
    </div>
}

export default Home_V2

