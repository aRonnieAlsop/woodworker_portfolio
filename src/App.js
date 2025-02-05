import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MockContact from "./components/Contact/MockContact";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/contact" element={<MockContact />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
