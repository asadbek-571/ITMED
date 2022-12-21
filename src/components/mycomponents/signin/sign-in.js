import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import PageHeader from "../page-header";
import SignIn from './sign-in-page';

const SingInPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Kirish"  />
        <SignIn />
        <Footer />
    </div>
}

export default SingInPage

