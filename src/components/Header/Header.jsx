import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Detect screen resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 700);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Scroll to gallery when redirected from another page
    useEffect(() => {
        if (location.state?.scrollToGallery) {
            const gallerySection = document.getElementById("gallery");
            if (gallerySection) {
                setTimeout(() => {
                    gallerySection.scrollIntoView({ behavior: "smooth" });
                }, 300); // Short delay to ensure the page loads before scrolling
            }
        }
    }, [location]);

    // Handle Gallery Click (Redirect & Scroll)
    const handleGalleryClick = (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        if (location.pathname !== "/") {
            navigate("/", { state: { scrollToGallery: true } }); // Pass state to trigger scrolling
        } else {
            const gallerySection = document.getElementById("gallery");
            if (gallerySection) {
                gallerySection.scrollIntoView({ behavior: "smooth" });
            }
        }
        setMenuOpen(false); // Close dropdown menu if mobile
    };


    return (
        <header className="header-container">
            {/* Normal Navbar for Larger Screens */}
            {!isMobile ? (
                <nav className={`header-nav ${location.pathname === "/contact" || "/about" ? "contact-page-nav" : ""}`}>
                    <a href="/" onClick={handleGalleryClick}>GALLERY</a>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                </nav>
            ) : (
                // Dropdown Menu Icon for Mobile Screens
                <div className={`menu-icon ${location.pathname === "/about" ? "contact-menu-icon" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>⌯</div>
            )}

            {/* Dropdown Menu for Mobile Screens */}
            {isMobile && menuOpen && (
                <nav className="dropdown-menu">
                    <a href="/" onClick={handleGalleryClick}>GALLERY</a>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>ABOUT</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
