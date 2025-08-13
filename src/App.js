import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ApplicationCard from "./components/ApplicationCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles.css";

export default function App() {
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
    <>
      <Navbar />
      <div className="container container-custom">
        <div className="d-flex justify-content-between align-items-center mb-1">
          <div>
            <div className="system-header">Next Gen Onboarding System</div>
            <div className="subtitle">Applications</div>
            <div className="applications-desc">
              Manage customer onboarding applications
            </div>
          </div>
          <button className="btn btn-primary create-btn" onClick={handleCreate}>
            Create New
          </button>
        </div>

        {applications.map((app) => (
          <ApplicationCard
            key={app.id}
            app={app}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {/* Modal for creating new application */}
      {showModal && (
        <div className="modal fade show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New Application</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Application ID</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newApp.id}
                    onChange={(e) =>
                      setNewApp({ ...newApp, id: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Applicant Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newApp.applicant}
                    onChange={(e) =>
                      setNewApp({ ...newApp, applicant: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Handled By</label>
                  <input
                    type="text"
                    className="form-control"
                    value={newApp.handler}
                    onChange={(e) =>
                      setNewApp({ ...newApp, handler: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <select
                    className="form-select"
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
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal backdrop */}
      {showModal && <div className="modal-backdrop fade show"></div>}
    </>
  );
}
