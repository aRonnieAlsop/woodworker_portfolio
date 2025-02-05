import React from 'react';
import Header from './../Header/Header';
import Hero from './../Hero/Hero';
import RelocationPopup from '../../RelocationPopUP/RelocationPopup';
import Gallery from '../Gallery/Gallery';
import FairUseNotice from '../FairUse/FairUseNotice';
import Footer from '../Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div id="top" className="landing-page">
            <Header />
            <Hero />
            {/* This will trigger the pop-up on first visit */}
            <RelocationPopup />
            <Gallery />
            <FairUseNotice />
        </div>
    );
}

export default LandingPage;
