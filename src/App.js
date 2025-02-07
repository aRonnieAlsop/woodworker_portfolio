import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import MockContact from "./components/Contact/MockContact";
import About from "./components/About/About";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<MockContact />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
