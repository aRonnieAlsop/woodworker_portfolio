import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div>
            {/* image 👇🏼 for full-span of landing page: */}
            <img src='./assets/wood_floor_PAWF_2.jpg' className="fullscreen-image" />
            <div className="image-overlay"></div>
        </div>
    );
}

export default LandingPage;