import React from 'react';
import './LandingPage.css';


const LandingPage = () => {
    return (
        <div className="landing-page">
               {/* image 👇🏼 for full-span of landing page: */}
            <img src='./assets/wood_floor_PAWF_2.jpg' className="fullscreen-image" />
            <div className="image-overlay"></div>
            <nav className="header-nav"> {/* Nav bar to later be moved to Header */}
            <a href="#gallery">GALLERY</a>
            <a href="#about">ABOUT</a>
            <a href="#contact">CONTACT</a>
        </nav>
            {/* Logo 👇🏼*/}
            <img src='./assets/logo_PAWF.png' alt="Logo" className="logo" />

            <div className="locations-container">
                <div className="image-text">SONOMA</div>
                <div className="image-text">NAPA</div>
                <div className="image-text">MARIN</div>
            </div>
        </div>
    );
}

export default LandingPage;