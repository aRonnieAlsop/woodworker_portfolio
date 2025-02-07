import React, { useEffect, useRef } from 'react';
import './Gallery.css';
import FairUseNotice from '../FairUse/FairUseNotice';
import Player from '@vimeo/player';

const Gallery = () => {
    const iframeRef = useRef(null); // creates a ref to store the iframe

    useEffect(() => {
        // initializes the Vimeo player when the component mounts:
        const player = new Player(iframeRef.current);

        // Event listener for when the video starts
        player.on('play', () => {
            const overlay = document.querySelector(".video-overlay");
            if (overlay) {
                overlay.style.display = "none";
            }
        });

        // cleans up the player when the component unmounts:
        return () => {
            player.off('play');
        };
    }, []);

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
                <FairUseNotice />
                {/* Larger Card for Carriage House video */}
                <div className="brand-video-container">
                <div className="large-thatcher-card-video">
                    <div className="large-card-iframe-video">
                         {/* Use the ref to target the iframe */}
                         <iframe
                        ref={iframeRef}
                        src="https://player.vimeo.com/video/1054591327?h=441a9239b3&badge=0&autopause=0&player_id=0&app_id=58479"
                        width="640"
                        height="564"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                        title="Carriage House || Thatcher Hotel"
                    ></iframe>

                    </div>
                    <div className="video-overlay">
                        <h2>Restored wood flooring from the late 1800s throughout the Keiffer Carriage House</h2>
                    </div></div>
                 <div className="brand-container">
                <div className="brand-card"><img src="https://raw.githubusercontent.com/aRonnieAlsop/readMe_assets/refs/heads/main/public/assets/IMG_0771.jpeg" /></div>
            </div>  
            </div> 
            </div>
        </div>
    );
};

export default Gallery;
