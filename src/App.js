import React, { useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import MockContact from "./components/Contact/MockContact";
import About from "./components/About/About";

const App = () => {
    const mapSectionRef = useRef(null);

    return (
        <Router>
            <Header apSectionRef={mapSectionRef} />
            <Routes>
                <Route path="/" element={<LandingPage mapSectionRef={mapSectionRef} />} />
                <Route path="/contact" element={<MockContact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
