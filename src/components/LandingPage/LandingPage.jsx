import React, { useRef } from 'react';
import Hero from './../Hero/Hero';
import RelocationPopup from '../../RelocationPopUP/RelocationPopup';
import Gallery from '../Gallery/Gallery';
import GoogleMapComponent from '../Location/GoogleMap';
import Footer from '../Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
    const mapSectionRef = useRef(null);
    return (
        <div id="top" className="landing-page">
            <Hero />
            {/* This will trigger the pop-up on first visit */}
            <RelocationPopup />
            <Gallery />
            <div ref={mapSectionRef} id="map-section" className="map-section">
                <GoogleMapComponent />
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;
