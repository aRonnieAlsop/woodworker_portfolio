import React from 'react';
import Header from './../Header/Header';
import Hero from './../Hero/Hero';
import RelocationPopup from '../../RelocationPopUP/RelocationPopup';
import Gallery from '../Gallery/Gallery';
import Footer from '../Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div id="top" className="landing-page">
            <Hero />
            {/* This will trigger the pop-up on first visit */}
            <RelocationPopup />
            <Gallery />
            <Footer />
        </div>
    );
}

export default LandingPage;
