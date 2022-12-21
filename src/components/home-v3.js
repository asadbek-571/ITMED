import React from 'react';
import Navbar from './global-components/navbar-v3';
import Banner from './section-components/banner-v3';
import Intro from './section-components/intro-v3';
import About from './section-components/about-v3';
import FeaturedCourse from './section-components/course-featured-v2';
import AboutV4 from './section-components/about-v4';
import Counter from './section-components/counter';
import AboutV5 from './section-components/about-v5';
import Testimonial from './section-components/testimonial-v3';
import Team from './section-components/team-v2';
import Faq from './section-components/faq';
import Client from './section-components/client-v2';
import LatestPost from './blog-components/latest-news-v2';
import Footer from './global-components/footer-v2';

const Home_V2 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Intro />
        <About />
        <FeaturedCourse />
        <AboutV4 />
        <Counter />
        <AboutV5 />
        <Testimonial />
        <Team />
        <Faq />
        <Client />
        <LatestPost />
        <Footer />
    </div>
}

export default Home_V2

