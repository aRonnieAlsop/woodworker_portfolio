import React from 'react';
import Header from './../Header/Header';
import Hero from './../Hero/Hero';
import Gallery from '../Gallery/Gallery';
import FairUseNotice from '../FairUse/FairUseNotice';
import Footer from '../Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div id="top" className="landing-page">
            <Header />
            <Hero />
            <Gallery />
            <FairUseNotice />
            <Footer />
        </div>
    );
}

export default LandingPage;
