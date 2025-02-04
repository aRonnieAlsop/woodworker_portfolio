import React, { useState, useEffect } from "react";
import "./RelocationPopup.css";

const RelocationPopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if the user has already closed the pop-up before
        const hasSeenPopup = localStorage.getItem("hasSeenPopup");

        if (!hasSeenPopup) {
            // Delay pop-up appearance by 3 seconds
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        localStorage.setItem("hasSeenPopup", "true"); // Store preference to never show again
    };

    if (!isVisible) return null;

    return (
        <div className="relocation-popup-overlay">
            <div className="relocation-popup">
                <span className="relocation-icon">🪒</span><h2> Important Update: Business Relocation</h2>
                <p>
                    <strong>[Contractor's Name]</strong> is relocating to **Plumas County, California**, & will be serving as a **good neighbor to the greater Reno, Nevada area**.
                </p>
                <p>
                    While still available for projects in the **North Bay upon special request**, availability has expanded to select locations, including **Lassen, Nevada, and Plumas Counties in California**, as well as **Washoe County, Nevada**.
                </p>
                <p>
                    Please note that **our schedule is booked far in advance**. Only **exceptional projects** with **serious inquiries** will be considered at this time.
                </p>
                <p>Thank you for your continued support. We look forward to bringing our craftsmanship to these regions.</p>
                <button className="close-button" onClick={handleClose}>X</button> 
            </div>
        </div>
    );
};

export default RelocationPopup;
