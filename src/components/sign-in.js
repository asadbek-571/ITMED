import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import SignIn from './section-components/sign-in';
import Footer from './global-components/footer';

const SingInPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Kirish"  />
        <SignIn />
        <Footer />
    </div>
}

export default SingInPage

