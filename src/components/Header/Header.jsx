import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import smoothScroll from 'smooth-scroll-into-view-if-needed';

const Header = ({ mapSectionRef }) => {
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

    const handleLocationClick = (e) => {
        e.preventDefault();
        if (mapSectionRef && mapSectionRef.current) {
          mapSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      };


    return (
        <header className="header-container">
            {/* Normal Navbar for Larger Screens */}
            {!isMobile ? (
                <nav className={`header-nav ${location.pathname === "/contact" || location.pathname === "/about" ? "contact-page-nav" : ""}`}>
                    <a href="/" onClick={handleGalleryClick}>GALLERY</a>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/contact">CONTACT</Link>
                    <a onClick={handleLocationClick}>LOCATION</a>
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
                    <a onClick={handleLocationClick}>LOCATION</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
