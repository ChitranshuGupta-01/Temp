import React, { useState } from "react";

export default function ApplicationCard({ app, onDelete, onEdit }) {
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
            type="text"
            className="form-control"
            value={tempData.id}
            onChange={(e) => setTempData({ ...tempData, id: e.target.value })}
          />
        ) : (
          <span className="app-id-title">Application ID - {app.id}</span>
        )}
        <span
          className={
            app.status === "Pending"
              ? "badge badge-pending"
              : app.status === "Success"
              ? "badge badge-success"
              : "badge badge-failed"
          }
        >
          {isEditing ? (
            <select
              className="form-select form-select-sm"
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
      <div className="app-details">
        <strong>Applicant:</strong>{" "}
        {isEditing ? (
          <input
            type="text"
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
            type="text"
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
            <button className="btn btn-success btn-sm" onClick={handleSave}>
              Save
            </button>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-edit btn-sm"
              onClick={() => setIsEditing(true)}
            >
              <i className="bi bi-pencil"></i> Edit
            </button>
            <button
              className="btn btn-delete btn-sm"
              onClick={() => onDelete(app.id)}
            >
              <i className="bi bi-trash"></i> Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
