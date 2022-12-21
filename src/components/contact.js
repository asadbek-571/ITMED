import React from 'react';
import Navbar from './mycomponents/navbar/navbar';
import PageHeader from './mycomponents/page-header';
import ContactPage from './section-components/contact-page';
import Footer from './mycomponents/footer/footer';

const Contact = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Bog'lanish"  />
        <ContactPage />
        <Footer />
    </div>
}

export default Contact

