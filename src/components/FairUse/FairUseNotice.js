import React, { useState } from "react";
import "./FairUseNotice.css"; 

const FairUseNotice = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fair-use-container">
            {/* Clickable Button */}
            <div className="fair-use-card" onClick={() => setIsOpen(true)}>
                <span className="fair-use-icon">🪒</span>  
                <span className="fair-use-text">Fair Use + Image Use Notice</span>
            </div>

            {/* Modal Pop-up */}
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-button" onClick={() => setIsOpen(false)}>✖</button>
                        <h2>Fair Use & Image Use Notice</h2>
                        <p>
                            This site is a <strong>portfolio showcasing the commissioned work</strong> of [Contractor's Name], a flooring specialist.
                            The images displayed contain <strong>photographic documentation</strong> of flooring installations personally completed by the contractor.
                            These images have been sourced from <strong>publicly available materials, direct client access, or the contractor's own documentation.</strong>
                        </p>
                        <p>
                            While this portfolio is <strong>non-commercial</strong>, serving as a <strong>visual resume rather than a sales platform</strong>,
                            the contractor does receive commissions for their work. The images are presented under <strong>Fair Use</strong> for educational and professional portfolio purposes,
                            specifically to illustrate the craftsmanship involved in these projects.
                        </p>
                        <p>
                            <strong>If we have unknowingly used an image under the assumption that we had permission and it was misunderstood, please contact us to clarify or request adjustments.</strong>
                            We are committed to proper attribution and will promptly address any concerns.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FairUseNotice;
