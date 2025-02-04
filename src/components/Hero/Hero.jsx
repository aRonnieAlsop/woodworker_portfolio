import React from 'react';
import './../LandingPage/LandingPage.css';

const Hero = () => {
    return (
        <div className="hero">
            {/* Full-screen background image */}
            <img src='./assets/wood_floor_PAWF_2.jpg' className="fullscreen-image" alt="Wood Flooring" />
            <div className="image-overlay"></div>
            <div className="image-bottom-fade"></div>

            {/* Logo */}
            <img src='./assets/logo_PAWF.png' alt="Logo" className="logo" />

            {/* Locations */}
            <div className="locations-container">
                <div className="image-text">SONOMA</div>
                <div className="image-text">NAPA</div>
                <div className="image-text">MARIN</div>
            </div>

            {/* Company Name */}
            <div className="company-name-container">
                <div className="company-name">
                    Polly Aesop <div className="business">Wood Floors</div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
