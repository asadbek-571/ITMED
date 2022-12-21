import React from 'react';
import Navbar from '../navbar/navbar';
import PageHeader from '../page-header';
import EventDetailsPage from './event-details-page';
import Footer from '../footer/footer';

const EventDetails = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tadbir haqida batafsil"  />
        <EventDetailsPage />
        <Footer />
    </div>
}

export default EventDetails

