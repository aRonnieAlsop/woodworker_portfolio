import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './../Hero/Hero';
import RelocationPopup from '../../RelocationPopUP/RelocationPopup';
import Gallery from '../Gallery/Gallery';
import GoogleMapComponent from '../Location/GoogleMap';
import Footer from '../Footer/Footer';
import './LandingPage.css';

const LandingPage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollToMap) {
            const mapSection = document.getElementById("map-section");
            if (mapSection) {
                setTimeout(() => {
                    mapSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 300);
            }
        }
    }, [location]);

    return (
        <div id="top" className="landing-page">
            <Hero />
            {/* This will trigger the pop-up on first visit */}
            <RelocationPopup />
            <Gallery />
            <div id="map-section" className="map-section">
                <div className="map-wrapper">
                    <GoogleMapComponent />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;
