import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
        }

        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #f9f9f9; /* Offwhite navbar */
          padding: 20px 40px;
          color: #006a4d;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .navbar-left img {
          height: 50px;
        }

        .navbar-center {
          display: flex;
          gap: 60px;
        }

        .navbar-center a {
          text-decoration: none;
          color: #006a4d;
          font-size: 18px;
          font-weight: 600;
          transition: color 0.3s;
        }

        .navbar-center a:hover {
          color: #00b8a9;
        }

        .navbar-right {
          position: relative;
        }

        .dropdown-btn {
          background: none;
          border: none;
          color: #006a4d;
          font-size: 18px;
          cursor: pointer;
          font-weight: 600;
        }

        .dropdown-content {
          display: none;
          position: absolute;
          right: 0;
          background-color: white;
          min-width: 180px;
          box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
          border-radius: 6px;
          z-index: 1;
        }

        .dropdown-content a,
        .dropdown-link {
          color: #006a4d;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          font-size: 15px;
          font-weight: 500;
          background: none;
          border: none;
          text-align: left;
          width: 100%;
          cursor: pointer;
        }

        .dropdown-content a:hover,
        .dropdown-link:hover {
          background-color: #f1f1f1;
        }

        .navbar-right:hover .dropdown-content {
          display: block;
        }
      `}</style>

      <nav className="navbar">
        {/* Left: SC Logo */}
        <div className="navbar-left">
          <img
            src="https://www.sc.com/wp-content/uploads/2019/04/standard-chartered-logo.png"
            alt="SC Logo"
          />
        </div>

        {/* Center: Menu */}
        <div className="navbar-center">
          <Link to="/home">Home</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About Us</Link>
        </div>

        {/* Right: Dropdown */}
        <div className="navbar-right">
          <button className="dropdown-btn">Logout ▾</button>
          <div className="dropdown-content">
            <Link to="/tracker">Tracker</Link>
            <button className="dropdown-link" onClick={() => navigate("/home")}>
              Logout
            </button>
            <Link to="/offer">Offer Status</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
    
