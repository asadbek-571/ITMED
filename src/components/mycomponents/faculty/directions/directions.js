import React from 'react';
import Navbar from '../../navbar/navbar';
import PageHeader from '../../page-header';
import DirectionsPage from './directions-page';
import Footer from '../../footer/footer';

const Directions = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle={"Yo'nalishlar"}  />
        <DirectionsPage />
        <Footer />
    </div>
}

export default Directions

