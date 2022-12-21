import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import Pricing from './section-components/pricing';
import Footer from './global-components/footer';

const PricingPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Pricing"  />
        <Pricing />
        <Footer />
    </div>
}

export default PricingPage

