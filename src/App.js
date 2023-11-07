import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./views/HomePage";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="services" element={<ContactUs />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
