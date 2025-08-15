import React, { useState } from "react";

export default function ApplicationCard() {
  const [applications, setApplications] = useState([
    { id: "SC101234", status: "Pending", applicant: "Chitranshu Gupta", handler: "Harsha" },
    { id: "SC101235", status: "Success", applicant: "Aditi Sharma", handler: "Rohan" },
    { id: "SC101236", status: "Failed", applicant: "Vivek Kumar", handler: "Neha" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newApp, setNewApp] = useState({ id: "", status: "Pending", applicant: "", handler: "" });

  const handleCreate = () => {
    setNewApp({ id: "", status: "Pending", applicant: "", handler: "" });
    setShowModal(true);
  };

  const handleSave = () => {
    if (!newApp.id || !newApp.applicant || !newApp.handler) {
      alert("Please fill all fields");
      return;
    }
    setApplications([...applications, newApp]);
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setApplications(applications.filter((app) => app.id !== id));
  };

  const handleEdit = (id, updatedApp) => {
    setApplications(applications.map((app) => (app.id === id ? updatedApp : app)));
  };

  return (
    <div className="container mt-4">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 className="mb-0">Next Gen Onboarding System</h3>
          <p className="mb-0 text-muted">Applications</p>
          <small className="text-secondary">Manage customer onboarding applications</small>
        </div>
        <button className="btn btn-primary" onClick={handleCreate}>
          Create New
        </button>
      </div>

      {/* Cards */}
      {applications.map((app) => (
        <Card key={app.id} app={app} onDelete={handleDelete} onEdit={handleEdit} />
      ))}

      {/* Modal */}
      {showModal && (
        <>
          <div className="modal fade show" style={{ display: "block" }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Create New Application</h5>
                  <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label">Application ID</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newApp.id}
                      onChange={(e) => setNewApp({ ...newApp, id: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Applicant Name</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newApp.applicant}
                      onChange={(e) => setNewApp({ ...newApp, applicant: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Handled By</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newApp.handler}
                      onChange={(e) => setNewApp({ ...newApp, handler: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      value={newApp.status}
                      onChange={(e) => setNewApp({ ...newApp, status: e.target.value })}
                    >
                      <option>Pending</option>
                      <option>Success</option>
                      <option>Failed</option>
                    </select>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                  <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"></div>
        </>
      )}
    </div>
  );
}

// Card component
function Card({ app, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...app });

  const handleSave = () => {
    onEdit(app.id, tempData);
    setIsEditing(false);
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          {isEditing ? (
            <input
              type="text"
              className="form-control me-2"
              value={tempData.id}
              onChange={(e) => setTempData({ ...tempData, id: e.target.value })}
            />
          ) : (
            <h5 className="mb-0">Application ID - {app.id}</h5>
          )}
          <span className={`badge ${app.status === "Pending" ? "bg-warning" : app.status === "Success" ? "bg-success" : "bg-danger"}`}>
            {isEditing ? (
              <select
                className="form-select form-select-sm"
                value={tempData.status}
                onChange={(e) => setTempData({ ...tempData, status: e.target.value })}
              >
                <option>Pending</option>
                <option>Success</option>
                <option>Failed</option>
              </select>
            ) : (
              app.status
            )}
          </span>
        </div>
        <p>
          <strong>Applicant:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              value={tempData.applicant}
              onChange={(e) => setTempData({ ...tempData, applicant: e.target.value })}
            />
          ) : (
            app.applicant
          )}
        </p>
        <p>
          <strong>Handled By:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              className="form-control"
              value={tempData.handler}
              onChange={(e) => setTempData({ ...tempData, handler: e.target.value })}
            />
          ) : (
            app.handler
          )}
        </p>
        <div>
          {isEditing ? (
            <>
              <button className="btn btn-success btn-sm me-2" onClick={handleSave}>Save</button>
              <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-primary btn-sm me-2" onClick={() => setIsEditing(true)}>
                <i className="bi bi-pencil"></i> Edit
              </button>
              <button className="btn btn-outline-danger btn-sm" onClick={() => onDelete(app.id)}>
                <i className="bi bi-trash"></i> Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
