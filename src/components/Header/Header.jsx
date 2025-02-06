import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../LandingPage/LandingPage.css";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const [menuOpen, setMenuOpen] = useState(false);

    // Detect screen resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className="header-container">
            {/* Normal Navbar for Larger Screens */}
            {!isMobile ? (
                <nav className="header-nav">
                    <a href="#gallery">GALLERY</a>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                </nav>
            ) : (
                // Dropdown Menu Icon for Mobile Screens
                <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                    ⌯
                </div>
            )}

            {/* Dropdown Menu for Mobile Screens */}
            {isMobile && menuOpen && (
                <nav className="dropdown-menu">
                    <a href="#gallery" onClick={() => setMenuOpen(false)}>GALLERY</a>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
