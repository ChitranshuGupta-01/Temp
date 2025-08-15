import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import Footer from "./components/footer";
import QuickActions from "./components/QuickActions";

// Main App Component
const App = () => {
  // Data for components
  const navItems = ["About Us", "Invest", "Offers", "Help", "Services"];

  // Event handlers
  const handleLogin = () => {
    alert("Login functionality would be implemented here");
  };

  return (
    <>
      <Navbar navItems={navItems} onLogin={handleLogin} />

      <Carousel />

      <QuickActions
        title="Quick Actions"
        subtitle="Everything you need to manage your credit cards and banking services in one place"
      />

      <Footer companyInfo="© 2025 Standard Chartered Bank. All rights reserved." />
    </>
  );
};

export default App;
