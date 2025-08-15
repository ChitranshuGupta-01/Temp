import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import logo from "../assets/logo.png";

// Modal content for each nav item
const navItemContent = {
  "About Us": (
    <div
      style={{
        position: "absolute",
        top: "38px",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "220px",
        maxWidth: "270px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 10px 20px 5px rgba(0, 0, 0, 0.1)",
        padding: "16px 18px",
        zIndex: 10,
        color: "#1b3246",
        fontSize: "1rem",
        pointerEvents: "none",
      }}
    >
      <strong
        style={{
          fontSize: "1.08rem",
          color: "#299989",
          marginBottom: "8px",
          display: "block",
        }}
      >
        About Standard Chartered Bank
      </strong>
      <p style={{ margin: "8px 0", fontSize: "1rem" }}>
        Empowering communities for 160+ years, Standard Chartered serves clients
        in over 50 markets, driven by values of Integrity, Collaboration,
        Respect, and Excellence.
      </p>
      <ul style={{ paddingLeft: "18px", margin: 0 }}>
        <li style={{ fontSize: "0.98rem" }}>Global Presence</li>
        <li style={{ fontSize: "0.98rem" }}>Sustainable Finance</li>
        <li style={{ fontSize: "0.98rem" }}>Responsible Banking</li>
      </ul>
    </div>
  ),
  Invest: (
    <div
      style={{
        position: "absolute",
        top: "38px",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "220px",
        maxWidth: "270px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(80,110,130,0.10)",
        padding: "16px 18px",
        zIndex: 10,
        color: "#1b3246",
        fontSize: "1rem",
        pointerEvents: "none",
      }}
    >
      <strong
        style={{
          fontSize: "1.08rem",
          color: "#299989",
          marginBottom: "8px",
          display: "block",
        }}
      >
        Invest with Confidence
      </strong>
      <p style={{ margin: "8px 0", fontSize: "1rem" }}>
        Unlock your wealth potential with global market access, expert advice,
        and tailored opportunities.
      </p>
      <ul style={{ paddingLeft: "18px", margin: 0 }}>
        <li style={{ fontSize: "0.98rem" }}>Mutual Funds & Equities</li>
        <li style={{ fontSize: "0.98rem" }}>Fixed Income & Bonds</li>
        <li style={{ fontSize: "0.98rem" }}>Wealth Advisory</li>
        <li style={{ fontSize: "0.98rem" }}>ESG Investing</li>
      </ul>
    </div>
  ),
  Offers: (
    <div
      style={{
        position: "absolute",
        top: "38px",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "220px",
        maxWidth: "270px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(80,110,130,0.10)",
        padding: "16px 18px",
        zIndex: 10,
        color: "#1b3246",
        fontSize: "1rem",
        pointerEvents: "none",
      }}
    >
      <strong
        style={{
          fontSize: "1.08rem",
          color: "#299989",
          marginBottom: "8px",
          display: "block",
        }}
      >
        Exclusive Rewards
      </strong>
      <p style={{ margin: "8px 0", fontSize: "1rem" }}>
        Enjoy cashback, travel upgrades, dining specials, and shopping discounts
        as a valued client.
      </p>
      <ul style={{ paddingLeft: "18px", margin: 0 }}>
        <li style={{ fontSize: "0.98rem" }}>Cashback & Miles</li>
        <li style={{ fontSize: "0.98rem" }}>Partner Deals</li>
        <li style={{ fontSize: "0.98rem" }}>Seasonal Travel Promos</li>
        <li style={{ fontSize: "0.98rem" }}>Lifestyle Privileges</li>
      </ul>
    </div>
  ),
  Help: (
    <div
      style={{
        position: "absolute",
        top: "38px",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "220px",
        maxWidth: "270px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(80,110,130,0.10)",
        padding: "16px 18px",
        zIndex: 10,
        color: "#1b3246",
        fontSize: "1rem",
        pointerEvents: "none",
      }}
    >
      <strong
        style={{
          fontSize: "1.08rem",
          color: "#299989",
          marginBottom: "8px",
          display: "block",
        }}
      >
        24/7 Customer Support
      </strong>
      <p style={{ margin: "8px 0", fontSize: "1rem" }}>
        Easy access to FAQs, guides, and live support. Security and satisfaction
        first.
      </p>
      <ul style={{ paddingLeft: "18px", margin: 0 }}>
        <li style={{ fontSize: "0.98rem" }}>Online Assistance</li>
        <li style={{ fontSize: "0.98rem" }}>Fraud Reporting</li>
        <li style={{ fontSize: "0.98rem" }}>Financial Guidance</li>
        <li style={{ fontSize: "0.98rem" }}>Branches</li>
      </ul>
    </div>
  ),
  Services: (
    <div
      style={{
        position: "absolute",
        top: "38px",
        left: "50%",
        transform: "translateX(-50%)",
        minWidth: "220px",
        maxWidth: "270px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 8px 32px rgba(80,110,130,0.10)",
        padding: "16px 18px",
        zIndex: 10,
        color: "#1b3246",
        fontSize: "1rem",
        pointerEvents: "none",
      }}
    >
      <strong
        style={{
          fontSize: "1.08rem",
          color: "#299989",
          marginBottom: "8px",
          display: "block",
        }}
      >
        Comprehensive Banking
      </strong>
      <p style={{ margin: "8px 0", fontSize: "1rem" }}>
        Full suite of digital and personal banking solutions—from accounts to
        global transactions.
      </p>
      <ul style={{ paddingLeft: "18px", margin: 0 }}>
        <li style={{ fontSize: "0.98rem" }}>Digital Account Opening</li>
        <li style={{ fontSize: "0.98rem" }}>Card Services</li>
        <li style={{ fontSize: "0.98rem" }}>Loans & Mortgages</li>
        <li style={{ fontSize: "0.98rem" }}>International Banking</li>
        <li style={{ fontSize: "0.98rem" }}>Fund Transfers</li>
      </ul>
    </div>
  ),
};

// Navbar Component
const Navbar = ({ brandName, navItems, onLogin }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <nav className="navbar navbar-expand-lg sc-navbar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
          {brandName}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="nav-item"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ position: "relative" }}
              >
                <a className="nav-link" href="#">
                  {item}
                </a>
                {hoveredItem === item && navItemContent[item]}
              </li>
            ))}
          </ul>
          <Dropdown>
            <Dropdown.Toggle
              id="login-dropdown"
              style={{
                backgroundColor: "green",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "5px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/customer-login">
                Customer Login
              </Dropdown.Item>
              <Dropdown.Item href="#/sales-login">Sales Login</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
