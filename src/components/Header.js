import React from "react";

export default function Header({ onCreate }) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-1">
      <div>
        <div className="system-header">Next Gen Onboarding System</div>
        <div className="subtitle">Applications</div>
        <div className="applications-desc">
          Manage customer onboarding applications
        </div>
      </div>
      <button className="btn btn-primary create-btn" onClick={onCreate}>
        Create New
      </button>
    </div>
  );
}
