import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css"; // Import CSS file

const defaultApplications = [
  {
    id: "SC101234",
    applicant: "Chitranshu Gupta",
    handler: "Harsha",
    status: "Pending",
  },
  {
    id: "SC101235",
    applicant: "Chitranshu Gupta",
    handler: "Harsha",
    status: "Success",
  },
  {
    id: "SC101236",
    applicant: "Chitranshu Gupta",
    handler: "Harsha",
    status: "Failed",
  },
];

const statusList = [
  { value: "Pending", label: "Pending", badge: "badge-pending" },
  { value: "Success", label: "Success", badge: "badge-success" },
  { value: "Failed", label: "Failed", badge: "badge-failed" },
];

function Onboarding() {
  const [applications, setApplications] = useState(defaultApplications);
  const [editingIdx, setEditingIdx] = useState(-1);
  const [editData, setEditData] = useState({});
  const [creating, setCreating] = useState(false);
  const [createData, setCreateData] = useState({
    id: "",
    applicant: "",
    handler: "",
    status: "Pending",
  });

  const navigate = useNavigate();

  function handleEdit(idx) {
    setEditingIdx(idx);
    setEditData(applications[idx]);
  }
  function handleEditChange(e) {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  }
  function handleEditSave(idx) {
    const newApps = [...applications];
    newApps[idx] = { ...editData, id: editData.id.trim() };
    setApplications(newApps);
    setEditingIdx(-1);
    setEditData({});
  }
  function handleDelete(idx) {
    setApplications(applications.filter((_, i) => i !== idx));
    if (editingIdx === idx) setEditingIdx(-1);
  }
  function handleCreateOpen() {
    setCreating(true);
    setCreateData({ id: "", applicant: "", handler: "", status: "Pending" });
  }
  function handleCreateChange(e) {
    setCreateData({ ...createData, [e.target.name]: e.target.value });
  }
  function handleCreateSave() {
    setApplications([
      { ...createData, id: createData.id.trim() },
      ...applications,
    ]);
    setCreating(false);
    setCreateData({ id: "", applicant: "", handler: "", status: "Pending" });
  }

  return (
    <div className="main-content">
      <div>
        <div className="app-title">Applications</div>
        <div className="app-desc">Manage customer onboarding applications</div>
      </div>

      <div className="create-container">
        <button className="btn btn-create" onClick={handleCreateOpen}>
          + Create New
        </button>
      </div>

      {applications.map((app, idx) => (
        <div
          className="app-card"
          tabIndex={0}
          key={idx}
          style={{
            outline: editingIdx === idx ? "2px solid #5ea9fa" : undefined,
          }}
        >
          {editingIdx === idx ? (
            <div className="edit-form">
              <div className="form-group">
                <label className="form-label">Application ID</label>
                <input
                  className="form-control"
                  name="id"
                  value={editData.id}
                  onChange={handleEditChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={editData.status}
                  onChange={handleEditChange}
                >
                  {statusList.map((st) => (
                    <option value={st.value} key={st.value}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Applicant</label>
                <input
                  className="form-control"
                  name="applicant"
                  value={editData.applicant}
                  onChange={handleEditChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Handled By</label>
                <input
                  className="form-control"
                  name="handler"
                  value={editData.handler}
                  onChange={handleEditChange}
                />
              </div>

              <div className="edit-actions">
                <button
                  className="btn-save"
                  onClick={() => handleEditSave(idx)}
                >
                  ✔ Save
                </button>
                <button
                  className="btn-cancel"
                  onClick={() => setEditingIdx(-1)}
                >
                  ✖ Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="app-header">
                <div className="app-header-left">
                  <span className="app-id">Application ID - {app.id}</span>
                  <span
                    className={`badge badge-status ${
                      app.status === "Pending"
                        ? "badge-pending"
                        : app.status === "Success"
                        ? "badge-success"
                        : "badge-failed"
                    }`}
                  >
                    {app.status}
                  </span>
                </div>
                <div className="app-header-right">
                  <button
                    className="app-action-btn app-action-btn-edit"
                    onClick={() => handleEdit(idx)}
                  >
                    ✎ Edit
                  </button>
                  <button
                    className="app-action-btn app-action-btn-offer"
                    onClick={() => navigate("/home")}
                  >
                    💼 Offer Page
                  </button>
                  <button
                    className="app-action-btn app-action-btn-del"
                    onClick={() => handleDelete(idx)}
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
              <div className="ms-1" style={{ lineHeight: 1.8 }}>
                <span className="info-label">Applicant:</span>
                <span className="info-value">{app.applicant}</span>
                <br />
                <span className="info-label">Handled By:</span>
                <span className="info-value">{app.handler}</span>
              </div>
            </>
          )}
        </div>
      ))}

      {creating && (
        <div className="modal-backdrop-custom">
          <div className="modal-box">
            <span className="modal-close" onClick={() => setCreating(false)}>
              &times;
            </span>
            <div className="modal-title">Create New Application</div>
            <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label className="form-label">Application ID</label>
                <input
                  className="form-control"
                  name="id"
                  value={createData.id}
                  onChange={handleCreateChange}
                  placeholder="Enter Application ID"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Applicant</label>
                <input
                  className="form-control"
                  name="applicant"
                  value={createData.applicant}
                  onChange={handleCreateChange}
                  placeholder="Enter Applicant Name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Handled By</label>
                <input
                  className="form-control"
                  name="handler"
                  value={createData.handler}
                  onChange={handleCreateChange}
                  placeholder="Enter Handler Name"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={createData.status}
                  onChange={handleCreateChange}
                >
                  {statusList.map((st) => (
                    <option key={st.value} value={st.value}>
                      {st.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="modal-actions">
                <button
                  type="submit"
                  className="btn btn-create"
                  onClick={handleCreateSave}
                  disabled={
                    !createData.id.trim() ||
                    !createData.applicant.trim() ||
                    !createData.handler.trim()
                  }
                >
                  Create
                </button>
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setCreating(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Onboarding;
