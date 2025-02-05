import React, { useState } from "react";
import "./MockContactForm.css"; 

const MockContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState(""); // Mock success message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus("This is a mock form. Your message has not been sent.");
    };

    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <p>Reach out for special project requests.</p>

            {status && <p className="form-status">{status}</p>} {/* Mock success message */}

            <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                    />
                </div>

                <div className="form-group">
                    <label>Message</label>
                    <textarea
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write your message..."
                    />
                </div>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default MockContactForm;
