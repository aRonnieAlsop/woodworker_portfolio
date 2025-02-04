import React from 'react';
import './../LandingPage/LandingPage.css';

const Gallery = () => {
    return (
        <div id="gallery">
            <div className="gallery-container">
                {/* Thatcher Hotel Showcase Section */}
                <div className="thatcher-showcase">
                    <div className="thatcher-card left">
                        <img src="./assets/thatcher_from_side.jpg" alt="Thatcher Hotel" className="thatcher-image" />
                        <h2 className="thatcher-title">THATCHER HOTEL</h2>
                    </div>

                    <div className="thatcher-card">
                        <p className="thatcher-description">
                            Polly was the sole craftsman responsible for the stunning wood flooring throughout the historic three-story Thatcher Hotel. He preserved century-old wood flooring in the library, stairs, ballroom, and select spaces while seamlessly integrating new flooring in guest rooms and additional areas. His artistry ensures that the newly laid floors will age as gracefully as the preserved originals—lasting for generations and maintaining the integrity of this beautifully restored landmark.
                        </p>
                    </div>

                    <div className="thatcher-card">
                        <div className="thatcher-preview">
                            <iframe
                                src="https://www.thatcherhotel.com/amenities"
                                title="Thatcher Hotel Preview"
                                className="website-preview"
                            ></iframe>
                            <p className="thatcher-visit-link">
                                <a href="https://www.thatcherhotel.com/amenities" target="_blank" rel="noopener noreferrer">
                                    Visit Thatcher Hotel
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Gallery Image Cards */}
                <div className="thatcher-gallery">
                    <div className="gallery-card">
                        <img src="./assets/thatcher_room_4.jpg" alt="Thatcher Hotel Room" className="gallery-image" />
                    </div>
                    <div className="gallery-card">
                        <img src="./assets/Thatcher_1_bar.jpg" alt="Thatcher Bar" className="gallery-image" />
                    </div>
                    <div className="gallery-card">
                        <img src="./assets/Thatcher_3_Library.jpg" alt="Thatcher Library" className="gallery-image" />
                    </div>
                </div>

                {/* Larger Card for Room Floors Preview */}
                <div className="large-thatcher-card">
                    <div className="large-card-text">
                        <h2>View Wood Floors in the Rooms of the Thatcher Hotel</h2>
                    </div>
                    <div className="large-card-iframe">
                        <iframe
                            src="https://www.thatcherhotel.com/accommodations"
                            title="Thatcher Hotel Accommodations"
                            className="accommodations-iframe"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
