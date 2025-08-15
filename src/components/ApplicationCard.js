import React, { useState } from "react";

export default function ApplicationCard() {
  const [applications, setApplications] = useState([
    {
      id: "SC101234",
      status: "Pending",
      applicant: "Chitranshu Gupta",
      handler: "Harsha",
    },
    {
      id: "SC101235",
      status: "Success",
      applicant: "Aditi Sharma",
      handler: "Rohan",
    },
    {
      id: "SC101236",
      status: "Failed",
      applicant: "Vivek Kumar",
      handler: "Neha",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newApp, setNewApp] = useState({
    id: "",
    status: "Pending",
    applicant: "",
    handler: "",
  });

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
    setApplications(
      applications.map((app) => (app.id === id ? updatedApp : app))
    );
  };

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div>
          <div className="system-header">Next Gen Onboarding System</div>
          <div className="subtitle">Applications</div>
          <div className="applications-desc">
            Manage customer onboarding applications
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleCreate}>
          Create New
        </button>
      </div>

      {/* Cards */}
      {applications.map((app) => (
        <Card
          key={app.id}
          app={app}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}

      {/* Modal */}
      {showModal && (
        <>
          <div className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Create New Application</h3>
                <button
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                >
                  ×
                </button>
              </div>
              <div className="modal-body">
                <label>Application ID</label>
                <input
                  className="form-control"
                  value={newApp.id}
                  onChange={(e) => setNewApp({ ...newApp, id: e.target.value })}
                />
                <label>Applicant Name</label>
                <input
                  className="form-control"
                  value={newApp.applicant}
                  onChange={(e) =>
                    setNewApp({ ...newApp, applicant: e.target.value })
                  }
                />
                <label>Handled By</label>
                <input
                  className="form-control"
                  value={newApp.handler}
                  onChange={(e) =>
                    setNewApp({ ...newApp, handler: e.target.value })
                  }
                />
                <label>Status</label>
                <select
                  className="form-control"
                  value={newApp.status}
                  onChange={(e) =>
                    setNewApp({ ...newApp, status: e.target.value })
                  }
                >
                  <option>Pending</option>
                  <option>Success</option>
                  <option>Failed</option>
                </select>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          </div>
          <div className="backdrop"></div>
        </>
      )}

      {/* Custom Bootstrap-like CSS */}
      <style>{`
        .container { max-width: 800px; margin: auto; padding: 20px; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .system-header { font-size: 22px; font-weight: bold; }
        .subtitle { font-size: 16px; color: gray; }
        .applications-desc { font-size: 14px; color: #666; }

        /* Buttons */
        .btn { padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 14px; }
        .btn-primary { background-color: #0d6efd; color: white; }
        .btn-secondary { background-color: gray; color: white; }
        .btn-edit { background-color: #ffc107; color: black; }
        .btn-delete { background-color: #dc3545; color: white; }
        .btn-close { background: none; border: none; font-size: 20px; cursor: pointer; }

        /* Form controls */
        .form-control { width: 100%; padding: 6px; margin: 4px 0 10px; border: 1px solid #ccc; border-radius: 4px; }

        /* Badges */
        .badge { padding: 4px 8px; border-radius: 4px; font-size: 12px; }
        .badge-pending { background-color: orange; color: white; }
        .badge-success { background-color: green; color: white; }
        .badge-failed { background-color: red; color: white; }

        /* Card */
        .application-card { border: 1px solid #ddd; padding: 12px; margin-bottom: 10px; border-radius: 6px; }
        .app-top-row { display: flex; justify-content: space-between; align-items: center; }
        .action-btns button { margin-right: 5px; }

        /* Modal */
        .modal { position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
                 background: white; border-radius: 6px; z-index: 1001; width: 400px; max-width: 90%; }
        .modal-content { padding: 15px; }
        .modal-header { display: flex; justify-content: space-between; align-items: center; }
        .modal-body { margin-top: 10px; }
        .modal-footer { display: flex; justify-content: flex-end; gap: 8px; margin-top: 10px; }
        .backdrop { position: fixed; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(0,0,0,0.5); z-index: 1000; }
      `}</style>
    </div>
  );
}

// Inner Card Component
function Card({ app, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempData, setTempData] = useState({ ...app });

  const handleSave = () => {
    onEdit(app.id, tempData);
    setIsEditing(false);
  };

  return (
    <div className="application-card">
      <div className="app-top-row">
        {isEditing ? (
          <input
            className="form-control"
            value={tempData.id}
            onChange={(e) => setTempData({ ...tempData, id: e.target.value })}
          />
        ) : (
          <span>Application ID - {app.id}</span>
        )}
        <span
          className={`badge ${
            app.status === "Pending"
              ? "badge-pending"
              : app.status === "Success"
              ? "badge-success"
              : "badge-failed"
          }`}
        >
          {isEditing ? (
            <select
              className="form-control"
              value={tempData.status}
              onChange={(e) =>
                setTempData({ ...tempData, status: e.target.value })
              }
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
      <div>
        <strong>Applicant:</strong>{" "}
        {isEditing ? (
          <input
            className="form-control"
            value={tempData.applicant}
            onChange={(e) =>
              setTempData({ ...tempData, applicant: e.target.value })
            }
          />
        ) : (
          app.applicant
        )}
        <br />
        <strong>Handled By:</strong>{" "}
        {isEditing ? (
          <input
            className="form-control"
            value={tempData.handler}
            onChange={(e) =>
              setTempData({ ...tempData, handler: e.target.value })
            }
          />
        ) : (
          app.handler
        )}
      </div>
      <div className="action-btns">
        {isEditing ? (
          <>
            <button className="btn btn-primary" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-edit" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="btn btn-delete" onClick={() => onDelete(app.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
