import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            {/* image 👇🏼 for full-span of landing page: */}
            <img src='./assets/wood_floor_PAWF_2.jpg' className="fullscreen-image" />
            <div className="image-overlay"></div>
            {/* Logo 👇🏼*/}
            <img src='./assets/logo_PAWF.png' alt="Logo" className="logo" />

            <div className="locations-container">
                <div className="image-text">Sonoma</div>
                <div className="image-text">Napa</div>
                <div className="image-text">Marin</div>
            </div>
        </div>
    );
}

export default LandingPage;