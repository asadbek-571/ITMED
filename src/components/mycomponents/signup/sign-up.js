import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import PageHeader from "../page-header";
import SignUp from './sign-up-page';

const SingUpPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Ro'yhatdan o'tish"  />
        <SignUp />
        <Footer />
    </div>
}

export default SingUpPage

