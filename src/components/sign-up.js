import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import SignUp from './section-components/sign-up';
import Footer from './global-components/footer';

const SingUpPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Ro'yhatdan o'tish"  />
        <SignUp />
        <Footer />
    </div>
}

export default SingUpPage

