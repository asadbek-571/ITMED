import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Gallery from './section-components/gallery';
import Footer from './global-components/footer';

const GalleryPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery"  />
        <Gallery />
        <Footer />
    </div>
}

export default GalleryPage

