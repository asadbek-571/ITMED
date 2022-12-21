import React from 'react';
import Navbar from './mycomponents/navbar/navbar';
import PageHeader from './global-components/page-header';
import EventDetailsPage from './section-components/event-details';
import Footer from './mycomponents/footer/footer';

const EventDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tadbir haqida batafsil"  />
        <EventDetailsPage />
        <Footer />
    </div>
}

export default EventDetails

