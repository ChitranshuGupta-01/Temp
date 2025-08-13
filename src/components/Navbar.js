import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src="a.png" height="32" className="me-2"/>
          Next Gen Onboarding
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Applications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Reports
              </a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="icon-wrapper position-relative">
              <i className="bi bi-search fs-5"></i>
            </div>
            <div className="icon-wrapper position-relative">
              <i className="bi bi-bell fs-5"></i>
              <span className="badge bg-danger text-white badge-notification">
                3
              </span>
            </div>
            <div className="icon-wrapper dropdown">
              <a
                href="#"
                className="d-flex align-items-center text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <img
                  src="https://api.dicebear.com/6.x/initials/svg?seed=HG"
                  alt="User"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
                <span className="ms-2">Harsha</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
