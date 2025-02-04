import React from 'react';
import './../LandingPage/LandingPage.css';

const Footer = () => {
    return (
        <footer className="landing-footer">
            <img src='./assets/wood_floor_PAWF_2.jpg' className="footer-image" alt="Wood Flooring Footer" />
            <div className="footer-overlay"></div>
            <p className="back-to-top">
                <a href="#top">BACK TO TOP</a>
            </p>
        </footer>
    );
};

export default Footer;
