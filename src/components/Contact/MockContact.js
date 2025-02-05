import React from "react";
import "./MockContact.css"; // Background image styling
import MockContactForm from "./MockContactForm";


const MockContact = () => {
    return (
        <div className="contact-page">
            
            <div className="background-overlay">
                <MockContactForm />
            </div>
        </div>
    );
};

export default MockContact;
