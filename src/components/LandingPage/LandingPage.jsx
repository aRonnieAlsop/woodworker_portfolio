import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div id="top" className="landing-page">
            {/* Full-screen background image */}
            <img src='./assets/wood_floor_PAWF_2.jpg' className="fullscreen-image" alt="Wood Flooring" />
            <div className="image-overlay"></div>

            {/* Navigation Bar */}
            <nav className="header-nav">
                <a href="#gallery">GALLERY</a>
                <a href="#about">ABOUT</a>
                <a>CONTACT</a>
            </nav>

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
                <div className="company-name">Polly Aesop <div className="business">Wood Floors</div></div>
            </div>

            {/* Gallery Section */}
            <div id="gallery">
                <div className="gallery-container">
                    {/* Thatcher Hotel Showcase Section */}
                    <div className="thatcher-showcase">
                        {/* Left Card - Image & Title */}
                        <div className="thatcher-card left">
                            <img src="./assets/thatcher_from_front.jpg" alt="Thatcher Hotel" className="thatcher-image" />
                            <h2 className="thatcher-title">THATCHER HOTEL</h2>
                        </div>

                        {/* Middle Card - Link to Thatcher Hotel 
                        --I switched right & middle & need to change my classNames around--*/}
                        <div className="thatcher-card right">
                            <p className="thatcher-description">
                                Polly was the sole craftsman responsible for the stunning wood flooring throughout the historic three-story boutique Thatcher Hotel. He meticulously preserved century-old wood flooring in the library, ballroom, and select spaces while seamlessly integrating new flooring in guest rooms and additional areas. His artistry ensures that the newly laid floors will age as gracefully as the preserved originals—lasting for generations and maintaining the integrity of this beautifully restored landmark.
                            </p>
                        </div>

                        {/* Right Card - Description */}
                        <div className="thatcher-card middle">
                            <div className="thatcher-preview">
                                <iframe
                                    src="https://www.thatcherhotel.com/amenities"
                                    title="Thatcher Hotel Preview"
                                    className="website-preview"
                                ></iframe>
                                <p className="thatcher-visit-link">
                                    <a href="https://www.thatcherhotel.com/amenities" target="_blank" rel="noopener noreferrer">Visit Thatcher Hotel</a>
                                </p>
                            </div>

                        </div>

                        {/* Placeholder for Future Image Gallery */}
                        <div className="thatcher-card placeholder">
                            <p>Gallery coming soon...</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer Section >>move to another component one day<< */}
            <footer className="landing-footer">
                <img src='./assets/wood_floor_PAWF_2.jpg' className="footer-image" alt="Wood Flooring Footer" />
                <div className="footer-overlay"></div>
                <p className="back-to-top">
                    <a href="#top">Back to the Top</a>
                </p>
            </footer>
        </div>
    );
}

export default LandingPage;
