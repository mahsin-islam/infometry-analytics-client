import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Footer from '../../Shared/Footer/Footer';
import ContactUs from '../ContactUs/ContactUs';
import DataScientist from '../DataScientist/DataScientist';
import TestMonials from '../TestMonials/TestMonials';


const Home = () => {
    return (
        <main>
            <Header />
            <AboutUs></AboutUs>
            <Services></Services>
            
            <DataScientist></DataScientist>
            <TestMonials></TestMonials>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </main>
    );
};

export default Home;